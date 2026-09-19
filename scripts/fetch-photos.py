#!/usr/bin/env python3
"""
Fetch the trips' hero photos from Wikipedia lead images.

Run this on a machine WITH internet access (Claude's cloud sandbox is
firewalled off from Wikimedia, so it can't do this itself):

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

To swap a photo you don't like: change the article name in PHOTOS below,
delete that file from photos/, and re-run. Keep photo-credits.md in step.

Images come from Wikipedia/Wikimedia Commons lead images and remain under
their original licenses (mostly CC BY-SA / public domain) — see each
Commons file page. Used here for a personal, non-commercial trip app.
"""

import json
import os
import sys
import time
import urllib.parse
import urllib.request

# filename (in photos/) -> Wikipedia article whose lead image to grab.
# The key's prefix is also its set name: "sg" for Singapore, "gr" for Greece.
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
    "gr-cover":          "Santorini",
    "gr-imerovigli":     "Imerovigli",
    "gr-oia":            "Oia, Greece",
    "gr-milos":          "Milos",
    "gr-sarakiniko":     "Sarakiniko Beach",
    "gr-heraklion":      "Heraklion",
    "gr-knossos":        "Knossos",
    "gr-crete":          "Crete",
}

API = "https://en.wikipedia.org/w/api.php"
UA = "AndiamoTripApp/1.0 (personal trip app; contact via repo owner)"
WIDTH = 1600
PAUSE = 2.0          # seconds between subjects — polite to the API
RETRIES = 5          # attempts per request on 429 / transient errors

HERE = os.path.dirname(os.path.abspath(__file__))
PHOTOS_DIR = os.path.normpath(os.path.join(HERE, "..", "photos"))
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


def lead_image_url(title):
    q = urllib.parse.urlencode({
        "action": "query", "format": "json", "redirects": "1",
        "prop": "pageimages", "piprop": "thumbnail", "pithumbsize": str(WIDTH),
        "titles": title,
    })
    data = json.loads(get(API + "?" + q))
    pages = data.get("query", {}).get("pages", {})
    for _, page in pages.items():
        thumb = page.get("thumbnail", {}).get("source")
        if thumb:
            return thumb
    return None


def main():
    os.makedirs(PHOTOS_DIR, exist_ok=True)
    ok = skipped = fail = 0
    first = True
    wanted = {n: t for n, t in PHOTOS.items()
              if not SETS or n.split("-")[0] in SETS}
    if not wanted:
        print(f"No photos match {SETS} — known sets: "
              + ", ".join(sorted({n.split("-")[0] for n in PHOTOS})))
        sys.exit(1)
    for name, title in wanted.items():
        dest = os.path.join(PHOTOS_DIR, name + ".jpg")
        if not FORCE and os.path.exists(dest) and os.path.getsize(dest) > 0:
            print(f"  • {name}.jpg already present — skipping")
            skipped += 1
            continue
        if not first:
            time.sleep(PAUSE)
        first = False
        try:
            url = lead_image_url(title)
            if not url:
                print(f"  ✗ {name}: no lead image found for '{title}'")
                fail += 1
                continue
            data = get(url)
            with open(dest, "wb") as f:
                f.write(data)
            print(f"  ✓ {name}.jpg  ({len(data)//1024} KB)  ← {title}")
            ok += 1
        except Exception as e:
            print(f"  ✗ {name}: {e}")
            fail += 1
    print(f"\nDone — {ok} downloaded, {skipped} already present, {fail} failed, into {PHOTOS_DIR}")
    if fail:
        print("Re-run the script to retry just the failed ones (finished files are skipped).")
        sys.exit(1)


if __name__ == "__main__":
    main()
