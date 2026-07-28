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

## Handy tricks

- Preview any day as if it were "today": add `?date=2026-08-04` to the URL.
- The **Wallet** tab holds every confirmation; **Directions** links open Google Maps.
- Still to add: the Aug 4 dinner (53 Untitled), the Rome→Florence train ticket,
  and the Accademia ticket PDF. They already show under **Trip → Still to add**.
