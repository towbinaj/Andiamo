# Day photo credits

The per-day "highlight" photos are downloaded from Wikipedia / Wikimedia Commons
lead images (resized and optimized for the app). Source articles:

| Day | Photo | Source article |
|-----|-------|----------------|
| Aug 1 | Trevi Fountain | en.wikipedia.org/wiki/Trevi_Fountain |
| Aug 2 | Galleria Borghese | en.wikipedia.org/wiki/Galleria_Borghese |
| Aug 3 | St. Peter's Basilica | en.wikipedia.org/wiki/St._Peter%27s_Basilica |
| Aug 4 | The Colosseum | en.wikipedia.org/wiki/Colosseum |
| Aug 5 | Florence Cathedral (Duomo) | en.wikipedia.org/wiki/Florence_Cathedral |
| Aug 6 | Ponte Vecchio | en.wikipedia.org/wiki/Ponte_Vecchio |
| Aug 7 | Michelangelo's David | en.wikipedia.org/wiki/David_(Michelangelo) |
| Aug 8 | Florence | en.wikipedia.org/wiki/Florence |

## Singapore trip photos

Fetched by `scripts/fetch-photos.py` from the same Wikipedia lead-image source.
Run that script on a machine with internet access to populate the files (the app
references them and hides gracefully until they exist).

| Where | Photo | Source article |
|-------|-------|----------------|
| Cover | Marina Bay | en.wikipedia.org/wiki/Marina_Bay |
| Aug 18 | Gardens by the Bay | en.wikipedia.org/wiki/Gardens_by_the_Bay |
| Aug 19 | Chinatown | en.wikipedia.org/wiki/Chinatown,_Singapore |
| Aug 20 | Sultan Mosque | en.wikipedia.org/wiki/Sultan_Mosque,_Singapore |
| Aug 21 | Singapore Flyer | en.wikipedia.org/wiki/Singapore_Flyer |
| Aug 22 | Marina Bay Sands | en.wikipedia.org/wiki/Marina_Bay_Sands |
| Aug 23 | Jewel Changi Airport | en.wikipedia.org/wiki/Jewel_Changi_Airport |

## Greece trip photos

Fetched by `scripts/fetch-photos.py` (or **Actions → Fetch trip photos**, set
`gr`). Each day lists several candidate articles, tried in order — a specific
landmark first, the island or city as a backstop — and the script throws out
maps, satellite views, infobox montages and portrait-shaped images, which is
what Wikipedia's lead image for a *place* usually is.

| Where | Caption | Candidate articles, in order |
|-------|---------|------------------------------|
| Cover | — | Fira · Santorini caldera · Oia |
| Oct 3 | Santorini | Nea Kameni · Santorini caldera · Akrotiri |
| Oct 4 | Imerovigli | Skaros · Imerovigli |
| Oct 5 | Oia | Oia, Greece |
| Oct 6 | Milos | Klima · Plaka · Milos |
| Oct 7 | Sarakiniko | Sarakiniko Beach |
| Oct 8 | Heraklion | Koules Fortress · Heraklion |
| Oct 9 | Knossos | Palace of Knossos · Bull-Leaping Fresco · Minoan civilization |
| Oct 10 | Crete | Balos · Elafonisi · Samaria Gorge |
| Oct 11 | Heraklion | Morosini Fountain · Koules Fortress |

Captions name the place rather than the exact subject, so they stay accurate
whichever candidate wins. `photos/sources.json` records the article and file
each photo actually came from. To swap one: change its candidates, delete that
file from `photos/`, and run it again.

Images remain under their original Wikimedia Commons licenses (mostly CC BY-SA /
public domain). See each Commons file page for the specific license and author.
Used here for a personal, non-commercial family trip app.
