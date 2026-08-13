#!/usr/bin/env python3
"""
Fetch the Singapore trip's hero photos from Wikipedia lead images.

Run this on a machine WITH internet access (Claude's cloud sandbox is
firewalled off from Wikimedia, so it can't do this itself):

    python3 scripts/fetch-sg-photos.py
    git add photos/sg-*.jpg
    git commit -m "Add Singapore trip photos"
    git push

The files land in photos/ with the exact names trip-data.js already
references, so the cover and per-day hero images light up on the next
GitHub Pages deploy. Re-run any time to refresh them.

Images come from Wikipedia/Wikimedia Commons lead images and remain under
their original licenses (mostly CC BY-SA / public domain) — see each
Commons file page. Used here for a personal, non-commercial trip app.
"""

import json
import os
import sys
import urllib.parse
import urllib.request

# filename (in photos/) -> Wikipedia article whose lead image to grab
PHOTOS = {
    "sg-cover":          "Marina Bay",
    "sg-gardens":        "Gardens by the Bay",
    "sg-chinatown":      "Chinatown, Singapore",
    "sg-sultanmosque":   "Sultan Mosque, Singapore",
    "sg-flyer":          "Singapore Flyer",
    "sg-marinabaysands": "Marina Bay Sands",
    "sg-jewel":          "Jewel Changi Airport",
}

API = "https://en.wikipedia.org/w/api.php"
UA = "AndiamoTripApp/1.0 (personal trip app; contact via repo owner)"
WIDTH = 1600

HERE = os.path.dirname(os.path.abspath(__file__))
PHOTOS_DIR = os.path.normpath(os.path.join(HERE, "..", "photos"))


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


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
    ok, fail = 0, 0
    for name, title in PHOTOS.items():
        dest = os.path.join(PHOTOS_DIR, name + ".jpg")
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
    print(f"\nDone — {ok} downloaded, {fail} failed, into {PHOTOS_DIR}")
    if fail:
        sys.exit(1)


if __name__ == "__main__":
    main()
