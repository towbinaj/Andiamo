# Andiamo — working notes for Claude

A self-contained itinerary PWA. Plain HTML/CSS/JS, **no build step**. Three trips
live in it: Italy (Aug 2026), Singapore (Aug 2026), Greece (Oct 2026).

## Where things are

| File | What it is |
|---|---|
| `trip-data.js` | **The data.** `const TRIPS = [...]`, `const TRIP = TRIPS[0]`. Almost every change goes here. |
| `index.html` | The whole app — markup, styles, logic. Rarely touched. |
| `secrets.enc.js` | Booking references, AES-GCM encrypted. Ciphertext only; safe to publish. |
| `merge-codes.html` | Adds codes to `secrets.enc.js` in the browser. Committed **codeless**. |
| `scripts/fetch-photos.py` | Pulls hero photos from Wikipedia lead images. |
| `photos/sources.json` | Which article and file each photo came from. |
| `docs/` | Published PDFs (conference programme, etc.). |

## The data model

A trip is `{ id, name, subtitle, cover, partySize, startDate, endDate, legs[], days[], dress[], events[] }`.

An event is `{ date, start, title, type, fixed, optional, address, phone, website,
qty, booking{label,value,source}, codeKey, headsup[], meet{}, note }` where `type`
is one of `flight · transit · tour · ticket · sight · meal · treat · cafe`.

**Rendering rules that matter when editing:**

- Events with `fixed: true` **and** a `start` render in a timed block sorted by
  time. Everything else renders in **array order** under a rule. So to reorder a
  flexible day, move the objects; to pin something to the clock, give it both
  `fixed: true` and a `start`.
- Give a time-critical item a `start` even if it is loosely planned — it lifts it
  into the timed block where it will actually be seen.
- A missing photo removes itself via an `error` handler, so referencing a file
  that is not committed yet degrades to a text card rather than breaking.
- `codeFor()` returns null for an absent key, so an unused `codeKey` is harmless.

## Verifying a change — always do this before committing

```bash
node --check trip-data.js
node -e 'const s=require("fs").readFileSync("trip-data.js","utf8");
         const TRIPS=eval(s+"; TRIPS"); /* then assert whatever you changed */'
```

`node --check` alone will **not** catch a stray identifier inside a string-heavy
edit; the `eval` is what catches an undefined reference or a dropped brace. Never
write on a failed assertion — re-read the current text and redo the match.

Prefer a Python edit script with `assert s.count(old) == 1` over blind `sed`.
Markers go stale fast in this file.

## Conventions

- **Push to `main`.** GitHub Pages deploys from it, one minute or so.
- **The repo is public.** No confirmation references, loyalty numbers, personal
  phone numbers or e-mail addresses in commits. Booking references go through
  `codeKey` + `secrets.enc.js`. Grep before pushing.
- Keep `photo-credits.md` in step when photo sources change.

## Environment limits in a Claude cloud session

- The egress proxy blocks a lot: `en.wikipedia.org`, `upload.wikimedia.org`,
  `guide.michelin.com`, most Greek news sites. `WebSearch` works; `WebFetch` is
  subject to the same policy. **Report a block, do not route around it.**
- Because Wikipedia is unreachable, photos are fetched by GitHub Actions:
  **Actions → Fetch trip photos**, input `gr` / `sg`. Runs the same script on a
  runner and commits the result. A `workflow_dispatch` workflow only appears in
  the UI once it is on the default branch.
- A push made with `GITHUB_TOKEN` does not trigger other workflows, which is why
  the photo workflow calls `gh workflow run deploy.yml` explicitly.
- No Outlook/Hotmail connector. Gmail and Drive are connected. Bookings that
  arrive in Hotmail have to be forwarded to Gmail to be readable.

## Facts established the hard way — do not regress these

- **No IDP needed** for a US licence in Greece under six months: Law 4850/2021
  art. 25 §3 (Gazette A 208, in force 5 Nov 2021). Permit-selling sites and
  rental brokers say otherwise and are wrong.
- **Crete is not in the MICHELIN Guide restaurant selection.** Greek coverage is
  Athens, with Santorini and Thessaloniki added for 2026. No star and no Bib
  Gourmand exists anywhere on the island. The Guide's separate *hotel* selection
  does cover Crete. The real domestic credentials are Athinorama's Greek Cuisine
  Awards and the Χρυσοί Σκούφοι (Golden Caps).
- **Akrotiri (Santorini)** is 08:30–15:30 on **Mondays and Thursdays**, last
  admission about 15:00 — not the 08:00–18:30 of other days. Timed entry.
- **Museum of Prehistoric Thera (Fira)** is **closed Tuesdays**; 08:30–15:30,
  timed entry on hh.gr. Booked into Sun 4 for that reason.
- **Catacombs of Milos** are 08:30–15:30, last visit 15:10, closed Tuesdays.
  Timed entry via `hh.gr` is required (user-confirmed; also for the Museum of
  Prehistoric Thera) — travel blogs saying
  "pay at the door" are out of date. hh.gr blocks are one hour; at sites
  opening 08:30 (Akrotiri, Catacombs, Museum of Prehistoric Thera) they start on the half hour.
- **Phylakopi (Milos)** opens **Saturdays and Sundays only**, 08:30–15:30, €5;
  not sold on hh.gr. Closed for the whole Milos stay (Tue 6–Thu 8).
- **Knossos** is timed entry via `hh.gr` only, and the €25 combined
  Knossos-and-museum ticket was **discontinued for 2026** — two €20 tickets.
- **Knossos** is open 08:00–18:30 to 15 Oct (last entry 18:15); confirmed by the user on hh.gr.
- **Heraklion Archaeological Museum** closes 17:00 from October.
- Verify opening hours and awards against a primary source before writing them
  into a note. Several claims in this file replaced earlier wrong ones.

## Greece trip — state as of 3 Oct 2026

Travel is today, so this section goes stale quickly. The app itself is the real
record: every unsettled thing shows in an event's `booking.value`, so
`node -e` over `TRIPS` and grep for what is not confirmed rather than trusting
the list below.

Settled: all six flights, both SeaJets legs, three hotels, both rental cars,
Avocado (Sun 4), the three EuSoMII invitations (VIP dinner, Global Lunch,
Faculty dinner).

Open:
- **Mon 5 dinner** — Parea or Metaxi Mas undecided. Metaxi Mas takes no advance
  bookings; call from the island, Sunday for Monday. The car runs to 22:30
  precisely so the inland option stays possible.
- **Tue 6, Yialos** — requested by e-mail 3 Oct, no reply. Chase by phone.
- **Sat 10, Peskesi** — not booked. The online form will not confirm two at
  20:00; e-mail reservations@peskesicrete.gr or call +30 281 028 8887. Backups
  with real credentials are on the Oct 10 fallback card.
- **Wed 7, O! Hamos!** — takes no reservations ever. One call worth making:
  confirm they are open on the 7th, since Milos tavernas close for the season
  around the end of October and they do not publish the date.
- **hh.gr** — Knossos is **booked** (Fri 9, 08:00–09:00 window, 2 adults; code
  under `codeKey: "knossos"`). Still to buy, all timed hour blocks: Museum of
  Prehistoric Thera (Sun 4, 14:30), Akrotiri (Mon 5, 14:30), Catacombs of Milos
  (Wed 7, 14:30), Heraklion museum (Fri 9, 10:00). The purchase flow has been
  throwing errors for the user.
- **Venetsanos tasting** (Mon 5) — not booked; ask for 16:00 to follow Akrotiri.
- **Knossos photo** — fetched, but it is the bull-leaping fresco replica, the
  same subject as `gr-museum.jpg`. Worth swapping for a view of the palace.

One dietary note that belongs on every restaurant request: **one traveller
cannot eat legumes** — beans, lentils, chickpeas, fava. It matters most at
Peskesi, whose signature is reviving rare Cretan legumes.
