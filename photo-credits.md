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

Not downloaded yet — run `python3 scripts/fetch-photos.py gr` on a machine with
internet access to populate `photos/gr-*.jpg`. To swap one out, change the
article in the script's `PHOTOS` map, delete that file, and re-run.

| Where | Photo | Source article |
|-------|-------|----------------|
| Cover | Santorini | en.wikipedia.org/wiki/Santorini |
| Oct 4 | Imerovigli | en.wikipedia.org/wiki/Imerovigli |
| Oct 5 | Oia | en.wikipedia.org/wiki/Oia,_Greece |
| Oct 6 | Milos | en.wikipedia.org/wiki/Milos |
| Oct 7 | Sarakiniko | en.wikipedia.org/wiki/Sarakiniko_Beach |
| Oct 8 | Heraklion | en.wikipedia.org/wiki/Heraklion |
| Oct 9 | The Palace of Knossos | en.wikipedia.org/wiki/Knossos |
| Oct 10 | Crete | en.wikipedia.org/wiki/Crete |

Images remain under their original Wikimedia Commons licenses (mostly CC BY-SA /
public domain). See each Commons file page for the specific license and author.
Used here for a personal, non-commercial family trip app.
