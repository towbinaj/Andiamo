# Andiamo — Italy trip app

A small, self-contained itinerary app for the Rome & Florence trip (Aug 1–8, 2026).
Plain HTML/CSS/JS — no build step, no server needed. Works on phone and desktop,
in light and dark mode, and offline once loaded.

## Files

| File | What it is |
|------|------------|
| `index.html` | The app (all the code + styling). You rarely touch this. |
| `trip-data.js` | **Your data** — travelers, days, bookings. Edit this to change anything. |
| `sw.js` | Service worker for offline support. |
| `manifest.webmanifest` | Lets you "Add to Home Screen" as an app. |

## Editing the trip

Open `trip-data.js`. To add a booking or activity, copy one `{ ... }` block inside
`events`, paste it, and change the values. The field guide is at the top of that file.
The app re-reads the data every time it loads — no rebuild needed.

## Publishing to GitHub Pages

1. Create a repo (e.g. `italy-trip`) and upload these files to it.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick `main` / `/root`, save.
3. After a minute it's live at `https://<your-username>.github.io/italy-trip/`.
4. Open that link on your phone and **Add to Home Screen** for an app-like icon.

## Showing the real confirmation codes (optional, encrypted)

By default the app shows "Confirmed" + which app/email to check. If you want the
actual codes *in* the app — safely — they can be encrypted behind a family
passphrase. What gets published is only ciphertext; the passphrase never leaves
your device, and nobody can read the codes without it.

1. Open **`encrypt.html`** on your computer (double-click it). It's pre-filled with
   your codes and is **git-ignored**, so it never gets published.
2. Type a **strong passphrase** (a few words, e.g. `rome-gelato-medici-2026` —
   not a 4-digit PIN, because the encrypted file is public and a weak passphrase
   could be brute-forced).
3. Click **Encrypt → Download secrets.enc.js**, put that file in this folder, and push it.
4. In the app's **Trip** tab, tap **Unlock**, enter the same passphrase — the real
   codes then appear on each booking in **Today** and **Days** (just for that
   session). **Lock** hides them again.

To change the passphrase later, re-run `encrypt.html` and replace `secrets.enc.js`.
Your plaintext codes always stay in `CONFIRMATIONS-private.md` (git-ignored) as a backup.

## Handy tricks

- Preview any day as if it were "today": add `?date=2026-08-04` to the URL.
- Each day holds its own bookings and confirmations; **Directions** links open Google Maps.
- Still to add: the Aug 4 dinner (53 Untitled), the Rome→Florence train ticket,
  and the Accademia ticket PDF. They already show under **Trip → Still to add**.
