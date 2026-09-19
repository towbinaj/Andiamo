#!/usr/bin/env python3
"""
Fetch the trips' hero photos from Wikipedia lead images.

Run this on a machine WITH internet access (Claude's cloud sandbox is
firewalled off from Wikimedia, so it can't do this itself), or trigger
**Actions -> Fetch trip photos** on GitHub, which runs it for you:

    python3 scripts/fetch-photos.py            # everything still missing
    python3 scripts/fetch-photos.py gr         # just the Greece set
    git add photos/
    git commit -m "Add Greece trip photos"
    git push

The files land in photos/ with the exact names trip-data.js already
references, so the cover and per-day hero images light up on the next
GitHub Pages deploy. Until then the app hides them rather than showing a
broken image, so it is safe to push the data first and the photos later.

It is polite to Wikipedia: it waits between requests, retries on rate
limits (HTTP 429), and skips any photo you've already downloaded — so if
a run half-finishes, just run it again and it picks up where it left off.
Pass --force to re-download everything.

CHOOSING A GOOD PHOTO
Wikipedia's lead image for a *place* is usually a map, a satellite view,
or a four-photo infobox montage — accurate, but dull as a hero image. Two
things guard against that:

  * Each entry below can list several articles. They're tried in order and
    the first one that yields a real photograph wins, so an article about
    a specific landmark can lead, with the broader place as a backstop.
  * REJECT and MIN_ASPECT throw out anything that looks like a map,
    diagram, flag, montage, or a portrait-shaped image that would crop
    badly into a wide hero.

Every run writes photos/sources.json recording which article and which
file each photo actually came from, so you can see what you got without
opening the images. To swap one out: reorder or change the candidates,
delete that file from photos/, and run it again. Keep photo-credits.md
in step.

Images come from Wikipedia/Wikimedia Commons lead images and remain under
their original licenses (mostly CC BY-SA / public domain) — see each
Commons file page. Used here for a personal, non-commercial trip app.
"""

import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

# filename (in photos/) -> the Wikipedia article whose lead image to grab,
# or a list of articles to try in order. The key's prefix is also its set
# name: "sg" for Singapore, "gr" for Greece.
PHOTOS = {
    # ---- Singapore, Aug 2026 ----
    "sg-cover":          "Merlion",
    "sg-gardens":        "Gardens by the Bay",
    "sg-chinatown":      "Chinatown, Singapore",
    "sg-sultanmosque":   "Sultan Mosque, Singapore",
    "sg-flyer":          "Singapore Flyer",
    "sg-marinabaysands": "Marina Bay Sands",
    "sg-jewel":          "Jewel Changi Airport",

    # ---- Greece, Oct 2026 ----
    # Landmarks first, the island or city last as a backstop.
    "gr-cover":          ["Fira", "Santorini caldera", "Oia, Greece"],
    "gr-flight":         ["Nea Kameni", "Santorini caldera", "Akrotiri (prehistoric city)"],
    "gr-imerovigli":     ["Skaros", "Imerovigli"],
    "gr-oia":            "Oia, Greece",
    "gr-milos":          ["Klima, Milos", "Plaka, Milos", "Milos"],
    "gr-sarakiniko":     "Sarakiniko Beach",
    "gr-heraklion":      ["Koules Fortress", "Heraklion"],
    "gr-knossos":        ["Palace of Knossos", "Bull-Leaping Fresco", "Minoan civilization"],
    "gr-crete":          ["Balos", "Elafonisi", "Samaria Gorge"],
    "gr-departure":      ["Morosini Fountain", "Koules Fortress"],
}

API = "https://en.wikipedia.org/w/api.php"
UA = "AndiamoTripApp/1.0 (personal trip app; contact via repo owner)"
WIDTH = 1600
PAUSE = 2.0          # seconds between requests — polite to the API
RETRIES = 5          # attempts per request on 429 / transient errors

# Files whose name gives them away as something other than a photograph.
REJECT = re.compile(
    r"(map|locator|location|topograph|relief|satellite|landsat|sentinel|"
    r"from[_ ]space|montage|collage|flag|coat[_ ]of[_ ]arms|seal|logo|"
    r"floor[_ ]?plan|diagram|schematic|\.svg)", re.I)
MIN_ASPECT = 1.15    # a hero is wide; portrait images crop badly

HERE = os.path.dirname(os.path.abspath(__file__))
PHOTOS_DIR = os.path.normpath(os.path.join(HERE, "..", "photos"))
SOURCES = os.path.join(PHOTOS_DIR, "sources.json")
FORCE = "--force" in sys.argv[1:]
# Bare arguments (e.g. "gr") limit the run to one set; no argument means all.
SETS = [a for a in sys.argv[1:] if not a.startswith("-")]


def get(url):
    """GET with retry + exponential backoff on rate limits / transient errors."""
    last = None
    for attempt in range(RETRIES):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            last = e
            if e.code in (429, 503):
                wait = 5 * (2 ** attempt)          # 5, 10, 20, 40, 80s
                print(f"      rate-limited ({e.code}); waiting {wait}s…")
                time.sleep(wait)
                continue
            raise
        except Exception as e:                     # network blip — back off and retry
            last = e
            time.sleep(3 * (attempt + 1))
    raise last


def lead_image(title):
    """(url, width, height) of an article's lead image, or None if it has none."""
    q = urllib.parse.urlencode({
        "action": "query", "format": "json", "redirects": "1",
        "prop": "pageimages", "piprop": "thumbnail", "pithumbsize": str(WIDTH),
        "titles": title,
    })
    data = json.loads(get(API + "?" + q))
    for _, page in data.get("query", {}).get("pages", {}).items():
        thumb = page.get("thumbnail") or {}
        if thumb.get("source"):
            return thumb["source"], thumb.get("width", 0), thumb.get("height", 0)
    return None


def unusable(url, w, h):
    """Why this image is a poor hero, or None if it looks like a real photo."""
    if REJECT.search(urllib.parse.unquote(url)):
        return "looks like a map, diagram, or montage"
    if w and h and w / h < MIN_ASPECT:
        return f"too tall for a wide hero ({w}×{h})"
    return None


def choose(candidates):
    """First candidate article that yields a usable photo: (title, url)."""
    for i, title in enumerate(candidates):
        if i:
            time.sleep(PAUSE)
        found = lead_image(title)
        if not found:
            print(f"      '{title}' — no lead image; trying the next one")
            continue
        url, w, h = found
        why = unusable(url, w, h)
        if why:
            print(f"      '{title}' — {why}; trying the next one")
            continue
        return title, url
    return None, None


def main():
    os.makedirs(PHOTOS_DIR, exist_ok=True)
    wanted = {n: t for n, t in PHOTOS.items()
              if not SETS or n.split("-")[0] in SETS}
    if not wanted:
        print(f"No photos match {SETS} — known sets: "
              + ", ".join(sorted({n.split("-")[0] for n in PHOTOS})))
        sys.exit(1)

    try:
        with open(SOURCES) as f:
            sources = json.load(f)
    except Exception:
        sources = {}

    ok = skipped = fail = 0
    first = True
    for name, titles in wanted.items():
        dest = os.path.join(PHOTOS_DIR, name + ".jpg")
        if not FORCE and os.path.exists(dest) and os.path.getsize(dest) > 0:
            print(f"  • {name}.jpg already present — skipping")
            skipped += 1
            continue
        if not first:
            time.sleep(PAUSE)
        first = False
        candidates = [titles] if isinstance(titles, str) else list(titles)
        try:
            title, url = choose(candidates)
            if not url:
                print(f"  ✗ {name}: no usable photo in {candidates}")
                fail += 1
                continue
            data = get(url)
            with open(dest, "wb") as f:
                f.write(data)
            sources[name] = {"article": title, "image": url}
            print(f"  ✓ {name}.jpg  ({len(data)//1024} KB)  ← {title}")
        except Exception as e:
            print(f"  ✗ {name}: {e}")
            fail += 1
            continue
        ok += 1

    if ok:
        with open(SOURCES, "w") as f:
            json.dump(dict(sorted(sources.items())), f, indent=2)
            f.write("\n")

    print(f"\nDone — {ok} downloaded, {skipped} already present, {fail} failed, into {PHOTOS_DIR}")
    if fail:
        print("Re-run to retry just the failed ones (finished files are skipped).")
        print("If a photo keeps failing, widen its candidate list in PHOTOS.")
        sys.exit(1)


if __name__ == "__main__":
    main()
