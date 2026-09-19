/* ============================================================================
   ANDIAMO — your trips
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the app.

   Trips are a COLLECTION: `TRIPS` is an array, one { ... } block per trip.
   The Trips tab lists them all — tap one to relive its days. To remember a
   new trip, copy an entire trip block (from `id:` down to its closing `}`),
   paste it as another element of the array, and change the values. Give each
   trip a unique `id`. The most recent / current trip can go first.

   A trip needs:
     id        "unique-slug"          (required, no spaces)
     name      short name shown        (required)
     subtitle  "City & City"           (optional)
     cover     "photos/…​.jpg"          card image on the Trips tab; optional
                                       (falls back to the first day's photo)
     partySize, startDate, endDate, legs, days, dress, events  (as below)

   To add a booking or activity, copy one { ... } block inside `events`,
   paste it, and change the values. Keep the commas between blocks.

   Field guide for an event:
     date      "YYYY-MM-DD"           (required)
     start     "HH:MM" 24-hour        (a fixed time) or null (flexible)
     title     name shown             (required)
     type      "flight" | "transit" | "tour" | "ticket" | "sight" | "meal"
     fixed     true  = locked time (tours, tickets, dinners, flights)
               false = do it any time that day
     optional  true if it's a "maybe"
     address   street address (also used for the map link); optional
     qty       number of people this booking covers; optional
     booking   { label, value, source }  -> makes it appear in the Wallet
               NOTE: real confirmation codes were deliberately left OUT of this
               public file. They live in CONFIRMATIONS-private.md (git-ignored,
               on your computer only). The Wallet shows "Confirmed" + which app
               or email to open for the actual number.
     headsup   [ "short note", ... ]  -> the fine-print reminders
     meet      { name, address, look } -> meeting point for guided tours
     note      one line of extra context; optional

   Flexible (fixed:false) stops show in the order they appear below, so each
   day's list is arranged as a natural walking route. Timed events (fixed:true)
   always sort by their start time, wherever they sit in the block.
   ============================================================================ */

const TRIPS = [

{
  id: "greece-2026",
  name: "Greece",
  subtitle: "Santorini · Milos · Crete",
  cover: "photos/gr-cover.jpg",
  partySize: 2,
  startDate: "2026-10-03",
  endDate: "2026-10-11",

  // Home base for each stretch of the trip.
  legs: [
    {
      city: "Santorini",
      start: "2026-10-03",
      end: "2026-10-06",
      hotelName: "Kapari Natural Resort",
      hotelAddress: "Imerovigli, Santorini 84700",
      hotelWebsite: "https://kaparisantorini.gr/",
      hotelPhone: "+30 22860 21120",
    },
    {
      city: "Milos",
      start: "2026-10-06",
      end: "2026-10-08",
      hotelName: "Phos Milos",
      hotelAddress: "Pollonia, Milos 84800",
      hotelWebsite: "https://phos-milos.com/",
    },
    {
      city: "Heraklion",
      start: "2026-10-08",
      end: "2026-10-11",
      hotelName: "Aquila Atlantis Hotel",
      hotelAddress: "2 Ygias Street, Heraklion 71202, Crete",
      hotelWebsite: "https://hotelatlantis.com/",
      hotelPhone: "+30 2818 100100",
    },
  ],

  // A short title for each calendar day.
  days: [
    { date: "2026-10-03", title: "Fly to Greece",                  photo: "photos/gr-flight.jpg",     highlight: "Santorini" },
    { date: "2026-10-04", title: "Arrive Santorini · Imerovigli", photo: "photos/gr-imerovigli.jpg", highlight: "Imerovigli" },
    { date: "2026-10-05", title: "Full day on Santorini",         photo: "photos/gr-oia.jpg",        highlight: "Oia" },
    { date: "2026-10-06", title: "Santorini → Milos",              photo: "photos/gr-milos.jpg",      highlight: "Milos" },
    { date: "2026-10-07", title: "Milos by car",                   photo: "photos/gr-sarakiniko.jpg", highlight: "Sarakiniko" },
    { date: "2026-10-08", title: "Milos → Santorini → Heraklion",  photo: "photos/gr-heraklion.jpg",  highlight: "Heraklion" },
    { date: "2026-10-09", title: "EuSoMII — Day 1",                 photo: "photos/gr-knossos.jpg",    highlight: "Knossos" },
    { date: "2026-10-10", title: "EuSoMII — Day 2 · your lecture",  photo: "photos/gr-crete.jpg",      highlight: "Crete" },
    { date: "2026-10-11", title: "Departure",                      photo: "photos/gr-departure.jpg",  highlight: "Heraklion" },
  ],

  // Practical reminders (shown on the Trip tab).
  dress: [
    "Greek churches and monasteries — shoulders and knees covered.",
    "Sturdy shoes: Santorini is all steps, and Milos's best beaches are bare rock.",
    "October on the caldera is breezy after sunset — bring a light jacket.",
    "EuSoMII, Oct 9–10 — whatever the meeting calls for. The venue is the hotel, so changing between sessions is easy.",
  ],

  events: [
    /* ---------------------------- Sat, Oct 3 — outbound ---------------------------- */
    { date: "2026-10-03", start: "11:40", title: "Cincinnati → New York — CVG ► JFK", type: "flight", fixed: true,
      note: "Delta 5096, operated by Endeavor Air · Delta Comfort · fare class SU · arrives JFK 1:45 PM. From the Delta itinerary.",
      booking: { label: "Status", value: "Ticketed · seats open", source: "Delta app" }, codeKey: "greeceflights",
      headsup: ["1 hr 25 min to connect at JFK"] },
    { date: "2026-10-03", start: "15:10", title: "New York → Athens — JFK ► ATH", type: "flight", fixed: true,
      note: "Delta 202 · Delta Comfort · fare class SU · about 9 hr 40 min · arrives Athens 7:50 AM on Sun, Oct 4. From the Delta itinerary.",
      booking: { label: "Status", value: "Ticketed · seats open", source: "Delta app" }, codeKey: "greeceflights",
      headsup: ["Overnight — arrives Oct 4"] },

    /* ---------------------------- Sun, Oct 4 — arrive Santorini ---------------------------- */
    { date: "2026-10-04", start: "07:50", title: "Land in Athens — ATH", type: "flight", fixed: true,
      address: "Athens International Airport, Spata 19019",
      note: "Delta 202 lands at 7:50 AM and the Santorini flight leaves at 10:00 — 2 hr 10 min, and this is your Schengen entry point, so passport control happens here. Enough time, but not a lot of it: head for immigration rather than breakfast, and check whether the bags are tagged through to Santorini.",
      headsup: ["Passport control here, not Santorini", "2 hr 10 min to connect"] },
    { date: "2026-10-04", start: "10:00", title: "Athens → Santorini — ATH ► JTR", type: "flight", fixed: true,
      note: "Sky Express GQ 342 · fare class E · about 55 minutes, arriving Santorini 10:55 AM. From the Delta itinerary.",
      booking: { label: "Status", value: "Ticketed · airport-controlled seats", source: "Delta app" }, codeKey: "greeceflights",
      headsup: ["Sky Express — seats at check-in"] },
    { date: "2026-10-04", start: null, title: "Transfer to Kapari Natural Resort", type: "transit", fixed: false,
      address: "Imerovigli, Santorini 84700",
      note: "Included with the room rate — the hotel meets you and drives up to Imerovigli (~20 min). Landing at 10:55 AM puts you at Kapari before noon." },
    { date: "2026-10-04", start: null, title: "Check in — Kapari Natural Resort", type: "sight", fixed: false,
      address: "Imerovigli, Santorini 84700",
      website: "https://kaparisantorini.gr/", phone: "+30 22860 21120",
      note: "Premium Loft with Balcony & Caldera View. Breakfast and the airport transfer are included; the rate is nonrefundable. Rooms are ready at 3:00 PM and you arrive before noon, so the luggage hold matters — keep what you need for three hours out of the stored bags.",
      booking: { label: "Booking", value: "Confirmed", source: "hotel confirmation email" },
      headsup: ["Arrive ~11:45, room at 3:00 PM", "Nonrefundable rate"] },
    { date: "2026-10-04", start: null, title: "Imerovigli", type: "sight", fixed: false,
      address: "Imerovigli, Santorini",
      note: "The quietest of the caldera-rim villages, and the highest — an easy afternoon on foot." },
    { date: "2026-10-04", start: null, title: "Sunset from the caldera", type: "sight", fixed: false,
      address: "Imerovigli, Santorini",
      note: "Imerovigli faces the caldera head-on, so you don't have to go to Oia for the sunset." },
    { date: "2026-10-04", start: null, title: "Dinner in Imerovigli", type: "meal", fixed: false,
      note: "No reservation yet — worth booking a caldera-view table once the day firms up." },

    /* ---------------------------- Mon, Oct 5 — Santorini ---------------------------- */
    { date: "2026-10-05", start: null, title: "Day not planned yet — Santorini", type: "sight", fixed: false,
      note: "Ideas on the table: the Fira → Imerovigli → Oia caldera walk, a morning in Oia, ancient Akrotiri, a winery, and sunset back on the rim." },
    { date: "2026-10-05", start: null, title: "Dinner", type: "meal", fixed: false,
      note: "No reservation yet." },

    /* ---------------------------- Tue, Oct 6 — Santorini → Milos ---------------------------- */
    { date: "2026-10-06", start: null, title: "Breakfast at Kapari", type: "meal", fixed: false,
      note: "Included in the rate." },
    { date: "2026-10-06", start: "11:00", title: "Check out — Kapari Natural Resort", type: "sight", fixed: true,
      address: "Imerovigli, Santorini 84700",
      note: "Check-out is by 11:00 AM, and the boat isn't until 3:05 PM — ask the hotel to hold the bags and keep the morning.",
      headsup: ["Check out by 11:00 AM", "Bags held until the transfer"] },
    { date: "2026-10-06", start: null, title: "Last hours on the caldera", type: "sight", fixed: false,
      address: "Imerovigli, Santorini",
      note: "Roughly 11:00 to 1:30 with the bags stored: the Imerovigli rim path, lunch with a view, or a taxi down to Fira. Whatever's left from Monday fits here." },
    { date: "2026-10-06", start: "13:45", title: "Transfer to Athinios ferry port", type: "transit", fixed: true,
      address: "Athinios Port, Santorini",
      note: "~25 min down the switchbacks from Imerovigli, which puts you at the port about an hour before the boat. Arrange the car with the hotel the night before — the port road backs up ahead of a sailing.",
      headsup: ["Athinios, not the old port"] },
    { date: "2026-10-06", start: "15:05", title: "Ferry Santorini → Milos — SUPER JET 2", type: "transit", fixed: true,
      address: "Athinios Port, Santorini",
      website: "https://www.seajets.com/",
      note: "SeaJets SUPER JET 2 · 2 hr 05 min · arrives Adamantas 5:10 PM. Club seats (the €103.70 fare), €207.40 for the two of you. Online check-in opens 48 hours before and closes 2 hours out — do it and carry the mobile boarding pass; otherwise tickets are collected from the port agency at least an hour before departure.",
      booking: { label: "Ferry", value: "Confirmed · Club seats", source: "SeaJets email" }, codeKey: "seajetsmilos",
      headsup: ["Check in online 48 h before", "Passport or ID needed to board"] },
    { date: "2026-10-06", start: "17:30", title: "Pick up the rental car — Adamantas", type: "transit", fixed: true,
      address: "Adamantas, Milos 84801",
      note: "Book it for 5:30 PM — the boat docks at 5:10 and that leaves room to get off with the bags. Give the agency the vessel and arrival time so they wait if the ferry runs late, and check the desk is staffed that late. Returning at 10:30 on Thursday makes it about 41 hours, which bills as two days; booking a little either side of these times costs nothing, so pad rather than cut it fine. Island-based agencies worth emailing direct: Giourgas Rent a Car (family firm by Adamas port, free port pick-up, open year-round), Milos Rent a Car / Matha, rentacar-milos.gr and milosrentcar.gr.",
      booking: { label: "Rental car", value: "Not booked yet", source: "to arrange" },
      headsup: ["The one thing left to book", "Tell them the ferry you're on"] },
    { date: "2026-10-06", start: null, title: "Drive Adamantas → Pollonia", type: "transit", fixed: false,
      address: "Pollonia, Milos 84800",
      note: "~15–20 minutes across the island." },
    { date: "2026-10-06", start: null, title: "Check in — Phos Milos", type: "sight", fixed: false,
      address: "Pollonia, Milos 84800",
      website: "https://phos-milos.com/",
      note: "Superior Room. Booked through Chase Travel with Ultimate Rewards — 39,516 points for $498.55 of value. Nonrefundable.",
      booking: { label: "Booking", value: "Confirmed", source: "Chase Travel" },
      headsup: ["Nonrefundable"] },
    { date: "2026-10-06", start: null, title: "Dinner in Pollonia", type: "meal", fixed: false,
      note: "The waterfront in Pollonia is a short walk from the hotel. You'll be checked in around 6:00 PM, so an early table is easy. No reservation yet." },

    /* ---------------------------- Wed, Oct 7 — Milos ---------------------------- */
    { date: "2026-10-07", start: null, title: "Day not planned yet — Milos by car", type: "sight", fixed: false,
      note: "Likely priorities: Sarakiniko, Firopotamos, Plaka, Klima, and whatever beaches and coastal stops fit around them." },
    { date: "2026-10-07", start: null, title: "Dinner in Pollonia", type: "meal", fixed: false,
      note: "No reservation yet." },

    /* ---------------------------- Thu, Oct 8 — Milos → Santorini → Heraklion ---------------------------- */
    { date: "2026-10-08", start: null, title: "Breakfast at Phos, then check out", type: "meal", fixed: false,
      note: "Aim to leave Pollonia by about 10:00 AM." },
    { date: "2026-10-08", start: "09:45", title: "Drive Pollonia → Adamantas & return the car", type: "transit", fixed: true,
      address: "Adamantas, Milos 84801",
      note: "Leave Pollonia about 9:45 for a 10:30 drop-off, which is 50 minutes before the boat. Fill the tank on the way — the stations are around Adamantas, and there's nothing near the port to fix it at the last minute.",
      headsup: ["Drop the car at 10:30", "Fuel up before you hand it back"] },
    { date: "2026-10-08", start: "11:20", title: "Ferry Adamantas → Santorini — SUPERJET", type: "transit", fixed: true,
      address: "Adamantas Port, Milos 84801",
      website: "https://www.seajets.com/",
      note: "SeaJets SUPERJET · 1 hr 55 min · arrives Santorini 1:15 PM. Club seats. First leg of the 6 hr 5 min run to Heraklion, booked with the second as one connected itinerary — which is what carries the guaranteed connection. €243.40 for the two of you across both legs.",
      booking: { label: "Ferry", value: "Confirmed · Club seats", source: "SeaJets email" }, codeKey: "seajetscrete",
      headsup: ["Check in online 48 h before", "Passport or ID needed to board"] },
    { date: "2026-10-08", start: null, title: "Connection at Athinios — 2 hr 30 min", type: "transit", fixed: false,
      address: "Athinios Port, Santorini",
      note: "1:15–3:45 PM at the port. SeaJets guarantees the connection, so a late first leg is their problem, not yours. There's little at Athinios beyond a few cafés — plan to wait there rather than heading up the hill." },
    { date: "2026-10-08", start: "15:45", title: "Ferry Santorini → Heraklion — CHAMPIONS LEAGUE JET 2", type: "transit", fixed: true,
      address: "Athinios Port, Santorini",
      website: "https://www.seajets.com/",
      note: "SeaJets CHAMPIONS LEAGUE JET 2 · 1 hr 40 min across open sea · arrives Heraklion 5:25 PM. Platinum seats — the quietest room on the ship, which is worth having by this point in the day. It's usually the top deck, so if the sea is up, moving lower and mid-ship rides better.",
      booking: { label: "Ferry", value: "Confirmed · Platinum seats", source: "SeaJets email" }, codeKey: "seajetscrete",
      headsup: ["Connection guaranteed by SeaJets"] },
    { date: "2026-10-08", start: null, title: "Transfer to Aquila Atlantis", type: "transit", fixed: false,
      address: "2 Ygias Street, Heraklion 71202, Crete",
      note: "The hotel is a few minutes from the ferry port — taxis wait at the terminal." },
    { date: "2026-10-08", start: null, title: "Check in — Aquila Atlantis Hotel", type: "sight", fixed: false,
      address: "2 Ygias Street, Heraklion 71202, Crete",
      website: "https://hotelatlantis.com/", phone: "+30 2818 100100",
      note: "Double Business Room with breakfast, Oct 8–11. This hotel is also the EuSoMII venue — the meeting happens downstairs, so there's no commute on Oct 9 or 10.",
      booking: { label: "Booking", value: "Confirmed", source: "hotel confirmation email" } },
    { date: "2026-10-08", start: null, title: "EuSoMII/BRACCO AI Contest", type: "tour", fixed: false, optional: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete", website: "https://www.eusomii-annualmeeting2026.com/",
      note: "The free pre-meeting event, same venue, today. The ferry doesn't dock until 5:25 PM, so you'd catch the very end at best — worth a look if it's still running when you check in." },
    { date: "2026-10-08", start: null, title: "Dinner in Heraklion", type: "meal", fixed: false,
      note: "No reservation yet — the old town around Lion Square is a short walk up from the hotel." },

    /* ---------------------------- Fri, Oct 9 — Heraklion & Knossos ---------------------------- */
    { date: "2026-10-09", start: null, title: "EuSoMII — full programme", type: "tour", fixed: false,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete", website: "docs/eusomii-2026-program.pdf",
      note: "Day 1 of the EuSoMII Annual Meeting, downstairs in the hotel. The sessions below are the day's blocks — take the ones you want and step out for the rest. Tap the globe for the full programme, speakers and abstracts.",
      headsup: ["Venue is the hotel — no commute"] },
    { date: "2026-10-09", start: "08:00", title: "Registration", type: "ticket", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "Registration desk opens, 8:00–8:40." },
    { date: "2026-10-09", start: "08:40", title: "Welcome note", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "Daniel Pinto dos Santos, Michalis Klontzas and local authorities. 20 minutes." },
    { date: "2026-10-09", start: "09:00", title: "Educational I — Post-Market Surveillance", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "Level I, to 10:00. Renato Cuocolo on AI medical device post-market surveillance regulations, then Charlotte Brouwer on implementation and QA of AI in radiotherapy. Chairs: Peter van Ooijen, Alessia Guarnera." },
    { date: "2026-10-09", start: "10:20", title: "Educational II — Agentic AI", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "Level I, to 11:20. “Coming soon to a radiology department near you” — Keno Bressem from LLMs to agentic AI, then Michalis Klontzas on applications in radiology. Chairs: Elmar Kotter, Tugba Akinci D'Antonoli." },
    { date: "2026-10-09", start: "11:40", title: "Scientific Session 1", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "To 13:00. EIBIR funding update, the COMFORT platform, and short papers on lung cancer detection, pancreatic tumour visibility and more. Chairs: Matthias Dietzel, Konstantina Giouroukou." },
    { date: "2026-10-09", start: "13:00", title: "Lunch — conference", type: "meal", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "An hour, to 14:00." },
    { date: "2026-10-09", start: "14:00", title: "Keynote I — Florence Doo", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "To 15:30. “Sustainable Intelligence: Can Radiology AI be Green, Global, and Generational?”, then a 45-minute roundtable with Merel Huisman, Florence Doo, Susan Shelmerdine, Kevin Groot Lipman and Ali Tejani." },
    { date: "2026-10-09", start: "15:50", title: "Joint Session 1 — EuSoMII meets ESNR", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "To 17:00, closing the day. Myriam Edjlali on brain–computer interfaces, Dennis Hedderich on normative brain volume reports." },
    { date: "2026-10-09", start: null, title: "Knossos & the Archaeological Museum", type: "sight", fixed: false,
      address: "Heraklion Archaeological Museum, Xanthoudidou 1, Heraklion 71202",
      note: "Your two Crete priorities, and they hold the same story between them — the museum has the frescoes and the finds, the site has the rooms they came from. Knossos is ~20 minutes by taxi, the museum a 10-minute walk. With the programme now known, the realistic windows are the 11:40–13:00 scientific session or the 14:00–15:30 keynote block today, or the same stretch tomorrow morning before your noon lecture. Knossos needs about half a day to be worth it; the museum can be done in an hour." },
    { date: "2026-10-09", start: null, title: "Dinner", type: "meal", fixed: false,
      note: "No reservation yet." },

    /* ---------------------------- Sat, Oct 10 — Crete ---------------------------- */
    { date: "2026-10-10", start: null, title: "EuSoMII — full programme", type: "tour", fixed: false,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete", website: "docs/eusomii-2026-program.pdf",
      note: "Day 2, same venue. Tap the globe for the full programme, speakers and abstracts." },
    { date: "2026-10-10", start: "09:00", title: "Educational III — Economics of AI", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "Level II, to 10:00. “Economics of AI: Global Perspectives” — Steven Wong on Asia–Oceania, Tugba Akinci D'Antonoli on the economic value of AI, Mansoor Fatehi on AI development in economically deprived settings. Chairs: Lisa Adams, Alessia Guarnera." },
    { date: "2026-10-10", start: "10:20", title: "Scientific Session 2", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "To 11:40 — eleven short papers and a Q&A. Sergey Morozov's on temporal misalignment between AI output and radiologist workflow sits closest to your own talk. Chairs: Claudio Fanni, Pinar Yilmaz." },
    { date: "2026-10-10", start: "12:00", title: "Your lecture — Joint Lecture 2-1", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete", website: "docs/eusomii-2026-program.pdf",
      note: "Joint Session 2: EuSoMII meets SIIM, 12:00–13:00, introduced by Erik Ranschaert and Merel Huisman. The introduction runs 5 minutes, so you're on at about 12:05 with 25 minutes for “PACS 3.0 and the Emergence of Workflow Intelligence”. Ali Tejani follows with “Autopilot or Co-pilot? Evolving Paradigms Shaping Human-AI Interactions”, then 5 minutes of discussion.",
      headsup: ["You're on at ~12:05 · 25 min"] },
    { date: "2026-10-10", start: "13:00", title: "Lunch — conference", type: "meal", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "An hour, to 14:00 — straight after your session." },
    { date: "2026-10-10", start: "14:00", title: "Keynote II — Henrique Martins", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "To 15:00. “i2XiA: two projects getting us ready for the European Health Data Space: and you?”, introduced by Daniel Pinto dos Santos, with 15 minutes of discussion." },
    { date: "2026-10-10", start: "15:20", title: "Joint Session 3 — EuSoMII meets EFRS", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "To 16:10. Mark McEntee on the radiographer's role in imaging informatics across Europe, Duncan Munro on a Delphi-based curriculum." },
    { date: "2026-10-10", start: "16:30", title: "Joint Session 4 — EuSoMII meets MICCAI", type: "tour", fixed: true,
      address: "Aquila Atlantis Hotel, 2 Ygias Street, Heraklion 71202, Crete",
      note: "To 17:30, the last session of the meeting. Camila Gonzalez on safe integration of radiology AI, Daniel Truhn on LLMs and agentic AI, Marius Linguraru on AI for every child." },
    { date: "2026-10-10", start: null, title: "Slip out for the old town", type: "sight", fixed: false, optional: true,
      note: "The programme runs to 17:30, so a big Crete afternoon isn't on unless you skip the back half. If you'd rather see something, the old town and the Venetian harbour are minutes away and fit between sessions." },
    { date: "2026-10-10", start: null, title: "Dinner", type: "meal", fixed: false,
      note: "No reservation yet." },

    /* ---------------------------- Sun, Oct 11 — departure ---------------------------- */
    { date: "2026-10-11", start: null, title: "Breakfast, then check out", type: "meal", fixed: false,
      address: "2 Ygias Street, Heraklion 71202, Crete",
      note: "No rush — the flight isn't until 11:00 AM, so the included breakfast is an unhurried one. Leave the hotel around 9:15." },
    { date: "2026-10-11", start: null, title: "Taxi to Heraklion airport — HER", type: "transit", fixed: false,
      address: "Heraklion International Airport, Heraklion 71601, Crete",
      note: "About 15 minutes from the hotel — leaving at 9:15 puts you there an hour and a half ahead. Ask the front desk to book it the night before." },
    { date: "2026-10-11", start: "11:00", title: "Heraklion → Athens — HER ► ATH", type: "flight", fixed: true,
      note: "Sky Express GQ 219 · fare class E · lands in Athens 11:50 AM. From the Delta itinerary.",
      booking: { label: "Status", value: "Ticketed · airport-controlled seats", source: "Delta app" }, codeKey: "greeceflights",
      headsup: ["Sky Express — seats at check-in", "1 hr 20 min to connect in Athens"] },
    { date: "2026-10-11", start: "13:10", title: "Athens → Boston — ATH ► BOS", type: "flight", fixed: true,
      note: "Delta 241 · Delta Comfort · fare class SU · arrives Boston 4:46 PM. The Athens connection is a tight one — 1 hr 20 min from the Heraklion flight landing, though it stays inside the same terminal. From the Delta itinerary.",
      booking: { label: "Status", value: "Ticketed · seats open", source: "Delta app" }, codeKey: "greeceflights",
      headsup: ["Tight connection in Athens"] },
    { date: "2026-10-11", start: "21:00", title: "Boston → Cincinnati — BOS ► CVG", type: "flight", fixed: true,
      note: "Delta 5801, operated by Republic Airways · Delta Comfort · fare class SU · home at 11:30 PM. From the Delta itinerary.",
      booking: { label: "Status", value: "Ticketed · seats open", source: "Delta app" }, codeKey: "greeceflights",
      headsup: ["4 hr in Boston — clear customs there"] },
  ],
},

{
  id: "singapore-2026",
  name: "Singapore",
  subtitle: "AOCR · SGCR-WIRES 2026",
  cover: "photos/sg-cover.jpg",
  partySize: 1,
  startDate: "2026-08-16",
  endDate: "2026-08-24",

  legs: [
    {
      city: "Singapore",
      start: "2026-08-16",
      end: "2026-08-24",
      hotelName: "JEN Singapore Orchardgateway by Shangri-La",
      hotelAddress: "277 Orchard Road, Singapore 238858",
      hotelWebsite: "https://www.shangri-la.com/en/singapore/jen-orchardgateway/",
      hotelPhone: "+65 6708 8888",
    },
  ],

  days: [
    { date: "2026-08-16", title: "Fly to Singapore" },
    { date: "2026-08-17", title: "Detroit · Seoul · arrive Singapore" },
    { date: "2026-08-18", title: "Marina Bay & Gardens by the Bay", photo: "photos/sg-gardens.jpg",       highlight: "Gardens by the Bay" },
    { date: "2026-08-19", title: "Chinatown & historic Singapore",  photo: "photos/sg-chinatown.jpg",     highlight: "Chinatown" },
    { date: "2026-08-20", title: "Botanic Gardens & neighborhoods", photo: "photos/sg-sultanmosque.jpg",  highlight: "Sultan Mosque" },
    { date: "2026-08-21", title: "Congress Day 1 · Faculty Dinner", photo: "photos/sg-flyer.jpg",         highlight: "Singapore Flyer" },
    { date: "2026-08-22", title: "Congress Day 2 · Gala Dinner",    photo: "photos/sg-marinabaysands.jpg", highlight: "Marina Bay Sands" },
    { date: "2026-08-23", title: "Congress finale · Jewel · fly home", photo: "photos/sg-jewel.jpg",      highlight: "Jewel Changi Airport" },
    { date: "2026-08-24", title: "Home to Cincinnati" },
  ],

  dress: [
    "Thu, Aug 20 (pre-conference) — Business casual.",
    "Fri, Aug 21 — Business formal.",
    "Sat, Aug 22 — Business formal.",
    "Sun, Aug 23 — Business casual.",
  ],

  events: [
    /* ---------------------------- Sun, Aug 16 — outbound ---------------------------- */
    { date: "2026-08-16", start: "08:10", title: "Depart Cincinnati — CVG → Detroit", type: "flight", fixed: true,
      note: "Cincinnati → Detroit · Endeavor Air / Delta Connection · DL 5479 · arrives 9:26 AM.",
      booking: { label: "Status", value: "Confirmed", source: "Delta app" } },
    { date: "2026-08-16", start: "12:40", title: "Detroit → Seoul — DTW", type: "flight", fixed: true,
      note: "Detroit → Seoul-Incheon (ICN) · Delta · DL 159 · arrives 4:25 PM on Aug 17.",
      booking: { label: "Status", value: "Confirmed", source: "Delta app" } },

    /* ---------------------------- Mon, Aug 17 — arrive Singapore ---------------------------- */
    { date: "2026-08-17", start: "18:40", title: "Seoul → Singapore — ICN", type: "flight", fixed: true,
      note: "Seoul-Incheon (ICN) → Singapore (SIN) · Korean Air · DL 7821 · arrives 11:55 PM.",
      booking: { label: "Status", value: "Confirmed", source: "Delta app" } },
    { date: "2026-08-17", start: null, title: "Changi Airport → hotel", type: "transit", fixed: false,
      note: "Late arrival — a taxi or Grab from Changi to Orchard Road runs ~20 min. The MRT may have stopped for the night." },
    { date: "2026-08-17", start: null, title: "Check in — JEN Orchardgateway", type: "sight", fixed: false,
      address: "277 Orchard Road, Singapore 238858",
      note: "Late arrival — the hotel is right on Orchard Road, above the Orchardgateway mall." },

    /* ---------------------------- Tue, Aug 18 — Marina Bay & Gardens by the Bay ---------------------------- */
    { date: "2026-08-18", start: null, title: "Red Dot Design Museum", type: "sight", fixed: false, address: "11 Marina Boulevard, Singapore 018940", note: "Contemporary design museum on the bayfront — an easy first stop." },
    { date: "2026-08-18", start: null, title: "Marina Bay waterfront walk", type: "sight", fixed: false, address: "Marina Bay, Singapore", note: "The waterfront promenade with the classic skyline view across the bay." },
    { date: "2026-08-18", start: null, title: "Marina Bay Sands", type: "sight", fixed: false, address: "10 Bayfront Avenue, Singapore 018956", note: "The landmark hotel — shops, the SkyPark, and the bayfront." },
    { date: "2026-08-18", start: null, title: "Helix Bridge", type: "sight", fixed: false, address: "Helix Bridge, Singapore", note: "The DNA-shaped pedestrian bridge over to the bayfront." },
    { date: "2026-08-18", start: null, title: "ArtScience Museum", type: "sight", fixed: false, optional: true, address: "6 Bayfront Avenue, Singapore 018974", note: "The lotus-shaped museum — home to the Future World digital exhibition." },
    { date: "2026-08-18", start: null, title: "Cloud Forest — Gardens by the Bay", type: "sight", fixed: false, address: "18 Marina Gardens Drive, Singapore 018953", note: "Misty mountain conservatory with the towering indoor waterfall." },
    { date: "2026-08-18", start: null, title: "Flower Dome — Gardens by the Bay", type: "sight", fixed: false, address: "18 Marina Gardens Drive, Singapore 018953", note: "The world's largest glass greenhouse, under one cooled dome." },
    { date: "2026-08-18", start: null, title: "Supertree Grove — Gardens by the Bay", type: "sight", fixed: false, address: "18 Marina Gardens Drive, Singapore 018953", note: "The iconic vertical gardens; the OCBC Skyway walks between them." },
    { date: "2026-08-18", start: null, title: "Garden Rhapsody light show", type: "sight", fixed: false, address: "Supertree Grove, Gardens by the Bay, Singapore", note: "Free light & sound show at Supertree Grove — nightly, usually 7:45 & 8:45 PM." },
    { date: "2026-08-18", start: null, title: "Dinner", type: "meal", fixed: false, note: "No reservation yet — pick a spot around Marina Bay." },

    /* ---------------------------- Wed, Aug 19 — Chinatown & historic Singapore ---------------------------- */
    { date: "2026-08-19", start: null, title: "Chinatown", type: "sight", fixed: false, address: "Chinatown, Singapore", note: "Historic streets, temples, and restored shophouses." },
    { date: "2026-08-19", start: null, title: "Buddha Tooth Relic Temple", type: "sight", fixed: false, address: "288 South Bridge Road, Singapore 058840", note: "Ornate Tang-style temple and museum in the heart of Chinatown.", headsup: ["👔 Shoulders & knees covered"] },
    { date: "2026-08-19", start: null, title: "Hawker-centre lunch", type: "meal", fixed: false, note: "Maxwell Food Centre or Chinatown Complex for classic hawker fare." },
    { date: "2026-08-19", start: null, title: "Civic District", type: "sight", fixed: false, address: "Civic District, Singapore", note: "Colonial-era landmarks around the Padang and City Hall." },
    { date: "2026-08-19", start: null, title: "Asian Civilisations Museum", type: "sight", fixed: false, address: "1 Empress Place, Singapore 179555", note: "Pan-Asian art and history, right on the river." },
    { date: "2026-08-19", start: null, title: "Singapore River & Boat Quay", type: "sight", fixed: false, address: "Boat Quay, Singapore", note: "The riverside quay lined with restaurants and old shophouses." },
    { date: "2026-08-19", start: null, title: "Clarke Quay", type: "sight", fixed: false, address: "Clarke Quay, Singapore", note: "Riverfront dining and nightlife just upstream." },
    { date: "2026-08-19", start: null, title: "Dinner", type: "meal", fixed: false, note: "No reservation yet — plenty of options along the river." },

    /* ---------------------------- Thu, Aug 20 — Botanic Gardens & neighborhoods ---------------------------- */
    { date: "2026-08-20", start: null, title: "Singapore Botanic Gardens", type: "sight", fixed: false, address: "1 Cluny Road, Singapore 259569", note: "UNESCO-listed tropical gardens, a short hop from Orchard Road." },
    { date: "2026-08-20", start: null, title: "National Orchid Garden", type: "sight", fixed: false, address: "Singapore Botanic Gardens, 1 Cluny Road, Singapore 259569", note: "3,000+ orchids within the Botanic Gardens — the star attraction." },
    { date: "2026-08-20", start: null, title: "Lunch", type: "meal", fixed: false, note: "Grab lunch around the gardens or on the way to Kampong Glam." },
    { date: "2026-08-20", start: null, title: "Kampong Glam", type: "sight", fixed: false, address: "Kampong Glam, Singapore", note: "The historic Malay-Arab quarter of shophouses and cafés." },
    { date: "2026-08-20", start: null, title: "Sultan Mosque", type: "sight", fixed: false, address: "3 Muscat Street, Singapore 198833", note: "Singapore's grand golden-domed mosque, at the heart of Kampong Glam.", headsup: ["👔 Shoulders & knees covered"] },
    { date: "2026-08-20", start: null, title: "Arab Street", type: "sight", fixed: false, address: "Arab Street, Singapore", note: "Textiles, rugs, and Middle-Eastern eateries." },
    { date: "2026-08-20", start: null, title: "Haji Lane", type: "sight", fixed: false, address: "Haji Lane, Singapore", note: "A narrow lane of indie boutiques and street art." },
    { date: "2026-08-20", start: null, title: "Little India", type: "sight", fixed: false, optional: true, address: "Little India, Singapore", note: "If time permits — temples, shops, and terrific food." },
    { date: "2026-08-20", start: null, title: "Back to JEN to change", type: "sight", fixed: false, note: "~4:30–5:00 PM — head back to the hotel to freshen up before dinner." },
    { date: "2026-08-20", start: null, title: "Exhibitor registration & badge pickup", type: "ticket", fixed: false, optional: true,
      address: "Secretariat / Speaker Ready Room, Citrine 211, Level 2, Singapore EXPO, 1 Expo Drive, Singapore 486150",
      note: "Exhibitors' registration 2:00–6:00 PM at the Secretariat (Level 2). Exhibitor badges are collected at the Speaker Ready Room (Citrine 211) — sealed in one package to a single designated rep, with sign-off required.",
      headsup: ["Exhibitor registration 2:00–6:00 PM", "One rep collects all SIIM badges"] },
    { date: "2026-08-20", start: null, title: "SIIM booth setup — H14", type: "tour", fixed: false, optional: true,
      address: "Booth H14, International Societies Pavilion, Peridot Exhibition Area, Singapore EXPO, 1 Expo Drive, Singapore 486150",
      website: "https://siim.org", email: "info@siim.org",
      note: "Stands ready & dressing 4:00–8:00 PM; all construction complete by 8:00 PM (compliance & fire check at 7:00 PM). SIIM is booth H14 in the International Societies Pavilion.",
      headsup: ["High-vis vest & covered shoes for setup", "Stands ready 4:00–8:00 PM"] },
    { date: "2026-08-20", start: null, title: "Exhibitor Wi-Fi — “Expo Exhibitor”", type: "sight", fixed: false, optional: true,
      note: "Wi-Fi network name: “Expo Exhibitor”. The password is locked — unlock confirmation codes to reveal it.",
      booking: { label: "Wi-Fi password", value: "Locked", source: "exhibitor brief" }, codeKey: "sgwifi" },
    { date: "2026-08-20", start: null, title: "Show organiser contacts (Conectere)", type: "sight", fixed: false, optional: true,
      note: "On-site organiser team (Conectere Events). Mobile numbers are locked — unlock confirmation codes to reveal.",
      booking: { label: "Organiser mobiles", value: "Locked", source: "exhibitor brief" }, codeKey: "sgorganisers" },
    { date: "2026-08-20", start: "18:30", title: "Dinner with a friend", type: "meal", fixed: true,
      note: "Evening dinner with a friend." },

    /* ---------------------------- Fri, Aug 21 — Congress Day 1 ---------------------------- */
    { date: "2026-08-21", start: null, title: "Shuttle to Singapore EXPO", type: "transit", fixed: false,
      note: "Complimentary shuttle from the JEN Orchardgateway lobby to Singapore EXPO at 7:30 & 8:00 AM. Return to the hotel departs EXPO at 1:00 PM." },
    { date: "2026-08-21", start: null, title: "SIIM booth — H14 (open 8 AM–5 PM)", type: "tour", fixed: false, optional: true,
      address: "Booth H14, International Societies Pavilion, Peridot Exhibition Area, Singapore EXPO, 1 Expo Drive, Singapore 486150",
      website: "https://siim.org", email: "info@siim.org",
      note: "Exhibition open 8:00 AM–5:00 PM. SIIM is booth H14 in the International Societies Pavilion." },
    { date: "2026-08-21", start: null, title: "Exhibitor guided tour", type: "tour", fixed: false, optional: true,
      note: "Organiser-led guided tour for exhibitors, 2:30–4:00 PM — certificate of appreciation & group photo. Overlaps your 2:45 PM talk, so send a SIIM rep if you can't step away." },
    { date: "2026-08-21", start: null, title: "Collect speaker badge — Speakers' Room", type: "ticket", fixed: false,
      address: "Citrine 211, Level 2, Singapore EXPO Meeting Rooms, 1 Expo Drive, Singapore 486150",
      note: "Speakers' Room open 7:30 AM–6:00 PM. Badges are collected here, not at the registration counter. Speaker Lounge with refreshments: Tourmaline 207.",
      headsup: ["👔 Business formal", "Speakers' Room from 7:30 AM"] },
    { date: "2026-08-21", start: "10:30", title: "Opening Ceremony", type: "tour", fixed: true,
      address: "Garnet 218 & 219, Singapore EXPO Meeting Rooms, 1 Expo Drive, Singapore 486150",
      note: "Opening Ceremony · 10:30 AM–12:00 PM · AOCR-SGCR 1 Track.",
      headsup: ["👔 Business formal"] },
    { date: "2026-08-21", start: "14:45", title: "Present — The Evolution of PACS in the Age of AI", type: "tour", fixed: true,
      address: "Garnet 214 & 215, Singapore EXPO Meeting Rooms, 1 Expo Drive, Singapore 486150",
      note: "Your talk 2:45–3:00 PM (15 min) in the session “Imaging Informatics — (More Than) 101: RIS-PACS, Enterprise Imaging, Standards and More” (2:00–3:30 PM) · Track AOCR-SGCR 3.",
      headsup: ["Arrive 20 min early to prep", "👔 Business formal", "Slides load on the event laptop — no personal laptops"] },
    { date: "2026-08-21", start: "18:30", title: "Faculty Dinner — Singapore Flyer", type: "meal", fixed: true,
      address: "Flyer Event Hall, Level 2, Singapore Flyer, 30 Raffles Avenue, Singapore 039803",
      note: "A ride on the Singapore Flyer followed by dinner · 6:30 PM–10:00 PM. Entry by invitation/ticket only.",
      fromHotel: "Shuttle from the JEN Orchardgateway lobby at 6:30 PM (last bus 6:45 PM); returns 9:30 PM (last 10:00 PM).",
      headsup: ["👔 Business formal", "Bring your invitation / ticket", "Hotel shuttle 6:30 PM"] },

    /* ---------------------------- Sat, Aug 22 — Congress Day 2 ---------------------------- */
    { date: "2026-08-22", start: null, title: "Shuttle to Singapore EXPO", type: "transit", fixed: false,
      note: "Complimentary shuttle from the JEN Orchardgateway lobby at 7:30 & 8:00 AM. Return to the hotel departs EXPO at 1:00 PM." },
    { date: "2026-08-22", start: null, title: "SIIM booth — H14 (open 8 AM–5 PM)", type: "tour", fixed: false, optional: true,
      address: "Booth H14, International Societies Pavilion, Peridot Exhibition Area, Singapore EXPO, 1 Expo Drive, Singapore 486150",
      website: "https://siim.org", email: "info@siim.org",
      note: "Exhibition open 8:00 AM–5:00 PM. SIIM is booth H14 in the International Societies Pavilion." },
    { date: "2026-08-22", start: "10:50", title: "Present — After AI: The Workflow Integration", type: "tour", fixed: true,
      address: "Garnet 214 & 215, Singapore EXPO Meeting Rooms, 1 Expo Drive, Singapore 486150",
      note: "Your talk 10:50–11:00 AM (10 min) in “Beyond Imaging AI — The Shifting Sands”, the AOSR–SIIM–EUSOMII Friendship Session (10:30 AM–12:00 PM) · Track AOCR-SGCR 3.",
      headsup: ["Arrive 20 min early to prep", "👔 Business formal", "Upload slides to the event laptop beforehand"] },
    { date: "2026-08-22", start: "15:45", title: "Present — The Cybersecurity Incident", type: "tour", fixed: true,
      address: "Garnet 214 & 215, Singapore EXPO Meeting Rooms, 1 Expo Drive, Singapore 486150",
      note: "Your talk 3:45–4:15 PM (30 min) in “CyberSecurity for Your Radiology Dept and Hospital” (3:45–5:15 PM) · Track AOCR-SGCR 3.",
      headsup: ["Arrive 20 min early to prep", "👔 Business formal"] },
    { date: "2026-08-22", start: "19:00", title: "Gala Dinner — Pan Pacific Singapore", type: "meal", fixed: true,
      address: "Pacific Ball Room, Level 1, Pan Pacific Singapore, 7 Raffles Boulevard, Singapore 039595",
      note: "Gala Dinner · 7:00 PM–10:00 PM · cocktail reception from 6:30 PM. Entry by invitation/ticket only.",
      fromHotel: "Shuttle from the JEN Orchardgateway lobby at 6:30 PM (last bus 6:45 PM); returns 9:45 PM (last 10:00 PM).",
      headsup: ["👔 Business formal", "Bring your invitation / ticket", "Hotel shuttle 6:30 PM"] },

    /* ---------------------------- Sun, Aug 23 — Congress Day 3 · fly home ---------------------------- */
    { date: "2026-08-23", start: "13:00", title: "Present — Planning for Disaster", type: "tour", fixed: true,
      address: "Garnet 214 & 215, Singapore EXPO Meeting Rooms, 1 Expo Drive, Singapore 486150",
      note: "Your talk 1:00–1:15 PM (15 min) in “Thriving with AI or The Opposite? From LLMs and VLMs to Agentic AI” (11:45 AM–1:15 PM) · Track AOCR-SGCR 3.",
      headsup: ["Arrive 20 min early to prep", "👔 Business casual", "Upload slides to the event laptop beforehand"] },
    { date: "2026-08-23", start: "13:15", title: "Closing Ceremony", type: "tour", fixed: true,
      address: "Garnet 218 & 219, Singapore EXPO Meeting Rooms, 1 Expo Drive, Singapore 486150",
      note: "Closing Ceremony · 1:15–1:45 PM · AOCR-SGCR 1 Track.",
      headsup: ["👔 Business casual"] },
    { date: "2026-08-23", start: null, title: "Check out — JEN Orchardgateway", type: "sight", fixed: false,
      note: "Check out in the morning and leave your bags with the hotel — the flight tonight is late." },
    { date: "2026-08-23", start: null, title: "Shuttle to Singapore EXPO", type: "transit", fixed: false,
      note: "Morning shuttle from the JEN Orchardgateway lobby at 7:30 & 8:00 AM. The 2:30 PM EXPO→hotel shuttle gets you back to collect your bags before the airport." },
    { date: "2026-08-23", start: null, title: "SIIM booth — H14 (open 8 AM–2 PM)", type: "tour", fixed: false, optional: true,
      address: "Booth H14, International Societies Pavilion, Peridot Exhibition Area, Singapore EXPO, 1 Expo Drive, Singapore 486150",
      website: "https://siim.org", email: "info@siim.org",
      note: "Exhibition open 8:00 AM–2:00 PM (last day). Teardown 2:30–3:30 PM — all exhibits packed & removed by 3:00 PM; exhibitors out by 5:00 PM." },
    { date: "2026-08-23", start: null, title: "Retrieve luggage & head to Changi", type: "transit", fixed: false,
      note: "After the closing ceremony, collect your stored bags from JEN and travel to Changi Airport." },
    { date: "2026-08-23", start: null, title: "Jewel Changi Airport", type: "sight", fixed: false, address: "78 Airport Boulevard, Singapore 819666", note: "Explore Jewel before the flight — the glass-domed complex with gardens and shops." },
    { date: "2026-08-23", start: null, title: "Rain Vortex — Jewel Changi", type: "sight", fixed: false, address: "78 Airport Boulevard, Singapore 819666", note: "The world's tallest indoor waterfall, at the centre of Jewel." },
    { date: "2026-08-23", start: null, title: "Early dinner — Jewel Changi", type: "meal", fixed: false, note: "Dinner at Jewel before checking in for the flight home." },
    { date: "2026-08-23", start: "22:00", title: "Depart Singapore — SIN → Seoul", type: "flight", fixed: true,
      note: "Singapore (SIN) → Seoul-Incheon (ICN) · Korean Air · DL 7820 · arrives 5:35 AM on Aug 24.",
      booking: { label: "Status", value: "Confirmed", source: "Delta app" } },

    /* ---------------------------- Mon, Aug 24 — home ---------------------------- */
    { date: "2026-08-24", start: "10:15", title: "Seoul → Detroit — ICN", type: "flight", fixed: true,
      note: "Seoul-Incheon (ICN) → Detroit (DTW) · Delta · DL 158 · arrives 10:30 AM.",
      booking: { label: "Status", value: "Confirmed", source: "Delta app" } },
    { date: "2026-08-24", start: "12:27", title: "Detroit → Cincinnati — home", type: "flight", fixed: true,
      note: "Detroit (DTW) → Cincinnati (CVG) · Endeavor Air / Delta Connection · DL 5257 · arrives 1:42 PM.",
      booking: { label: "Status", value: "Confirmed", source: "Delta app" } },
  ],
},

{
  id: "rome-florence-2026",
  name: "Italy",
  subtitle: "Rome/Florence",
  cover: "photos/day5.jpg",
  partySize: 4,
  startDate: "2026-08-01",
  endDate: "2026-08-08",

  // Home base for each stretch of the trip.
  legs: [
    {
      city: "Rome",
      start: "2026-08-01",
      end: "2026-08-05",
      hotelName: "The Hive Hotel",
      hotelAddress: "Via Torino 6, Rome",
      hotelWebsite: "https://www.thehiverome.com/",
      hotelPhone: "+39 06 4041 2000",
    },
    {
      city: "Florence",
      start: "2026-08-05",
      end: "2026-08-08",
      hotelName: "B&B Hotel Firenze Pitti Palace al Ponte Vecchio",
      hotelAddress: "Borgo San Jacopo 3/R, Florence",
      hotelWebsite: "https://www.hotel-bb.com/en/hotel/firenze-pitti-palace-al-ponte-vecchio",
      hotelPhone: "+39 055 2398711",
    },
  ],

  // A short title for each calendar day. Add `occasion: "..."` to mark a special
  // day — it shows a banner + a hearts backdrop on that day only.
  days: [
    { date: "2026-08-01", title: "Arrival in Rome",        photo: "photos/day1.jpg", highlight: "Trevi Fountain" },
    { date: "2026-08-02", title: "Borghese & Historic Rome", photo: "photos/day2.jpg", highlight: "Galleria Borghese" },
    { date: "2026-08-03", title: "Vatican",                 photo: "photos/day3.jpg", highlight: "St. Peter's Basilica" },
    { date: "2026-08-04", title: "Ancient Rome",            photo: "photos/day4.jpg", highlight: "The Colosseum" },
    { date: "2026-08-05", title: "To Florence",             photo: "photos/day5.jpg", highlight: "The Duomo", occasion: "Happy Anniversary", gift: "https://youtu.be/Be99sM1AzFk?is=s7JOZI9w8LhB7hY5" },
    { date: "2026-08-06", title: "Renaissance Florence",    photo: "photos/day6.jpg", highlight: "Ponte Vecchio" },
    { date: "2026-08-07", title: "Michelangelo Day",        photo: "photos/day7.jpg", highlight: "Michelangelo's David" },
    { date: "2026-08-08", title: "Departure",               photo: "photos/day8.jpg", highlight: "Arrivederci, Firenze" },
  ],

  // Dress-code reminders (shown on the Trip tab and as 👕 badges on events).
  dress: [
    "Vatican Museums, Sistine Chapel & St. Peter's Basilica — shoulders and knees covered.",
    "Florence Cathedral, Baptistery, San Pietro in Vincoli & San Luigi dei Francesi — shoulders and knees covered.",
    "No special dress code for the major museums.",
  ],

  events: [
    /* ---------------------------- Sat, Aug 1 ---------------------------- */
    // Land, drop bags, then walk from the hotel into the center and loop back.
    {
      date: "2026-08-01", start: "11:25", title: "Land in Rome — FCO", type: "flight", fixed: true,
      note: "Cincinnati → Paris → Rome · Delta / Air France",
      booking: { label: "Status", value: "Confirmed", source: "Delta / Air France email" }, codeKey: "flights",
      qty: 4,
    },
    { date: "2026-08-01", start: null, title: "Check in — The Hive Hotel", type: "sight", fixed: false,
      address: "Via Torino 6, Rome", note: "Drop the bags — a modern hotel a short walk from Termini and Via Nazionale." },
    { date: "2026-08-01", start: null, title: "Santa Maria Maggiore", type: "sight", fixed: false, address: "Piazza di Santa Maria Maggiore, Rome", note: "One of Rome's four great papal basilicas — glittering 5th-century mosaics, a short walk from the hotel.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-01", start: null, title: "Palazzo Barberini", type: "sight", fixed: false, address: "Via delle Quattro Fontane 13, Rome", note: "National old-master gallery — Caravaggio's Judith and Raphael's La Fornarina — near Piazza Barberini." },
    { date: "2026-08-01", start: null, title: "Quirinale Palace", type: "sight", fixed: false, address: "Piazza del Quirinale, Rome", note: "The presidential palace on Rome's highest hill — grand piazza, the Dioscuri statues and a sweeping view." },
    { date: "2026-08-01", start: null, title: "Trevi Fountain", type: "sight", fixed: false, address: "Fontana di Trevi, Rome", note: "Rome's grandest Baroque fountain — toss a coin to guarantee your return." },
    { date: "2026-08-01", start: null, title: "Il Gelato di San Crispino", type: "treat", fixed: false, address: "Via della Panetteria 42, Rome", note: "Classic gelato steps from the Trevi Fountain." },
    { date: "2026-08-01", start: null, title: "Spanish Steps", type: "sight", fixed: false, address: "Piazza di Spagna, Rome", note: "The monumental staircase sweeping up to the church of Trinità dei Monti." },
    { date: "2026-08-01", start: null, title: "Via Condotti shopping", type: "sight", fixed: false, address: "Via dei Condotti, Rome", note: "Rome's most elegant shopping street — the big fashion houses at the foot of the Steps." },
    { date: "2026-08-01", start: null, title: "Casual dinner", type: "meal", fixed: false, note: "No reservation — find a neighborhood trattoria and play it by ear." },

    /* ---------------------------- Sun, Aug 2 ---------------------------- */
    // Borghese in the morning, then downhill from Popolo through the Corso to the Pantheon/Navona cluster and the river.
    {
      date: "2026-08-02", start: "09:00", title: "Borghese Gallery", type: "tour", fixed: true, qty: 4,
      note: "Small-group guided tour (Viator)",
      booking: { label: "Status", value: "Confirmed", source: "Viator app" }, codeKey: "borghese",
      meet: {
        name: "Galleria Borghese",
        address: "Piazzale Scipione Borghese 5, Rome",
        look: "Staff out front with a “City Walkers” sign — the guide holds the group tickets.",
      },
      headsup: ["Guided — arrive a few minutes early"],
    },
    { date: "2026-08-02", start: null, title: "Villa Borghese", type: "sight", fixed: false, address: "Villa Borghese, Rome", note: "Rome's great landscaped park, right above the gallery — shady paths and a lake." },
    { date: "2026-08-02", start: null, title: "Pincio Terrace", type: "sight", fixed: false, address: "Terrazza del Pincio, Rome", note: "A classic panoramic terrace looking out over Piazza del Popolo and the rooftops." },
    { date: "2026-08-02", start: null, title: "Piazza del Popolo", type: "sight", fixed: false, address: "Piazza del Popolo, Rome", note: "A grand neoclassical square framed by twin churches and an Egyptian obelisk." },
    { date: "2026-08-02", start: null, title: "Santa Maria del Popolo", type: "sight", fixed: false, address: "Piazza del Popolo 12, Rome", note: "On the piazza — two Caravaggios + a Raphael chapel.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-02", start: null, title: "Via del Babuino / Via Condotti shopping", type: "sight", fixed: false, address: "Via del Babuino, Rome", note: "Boutique-lined streets running down from the piazza toward the Spanish Steps." },
    { date: "2026-08-02", start: null, title: "Church of St. Ignatius", type: "sight", fixed: false, address: "Via del Caravita 8a, Rome", note: "The famous painted 'fake dome' ceiling.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-02", start: null, title: "Galleria Doria Pamphilj", type: "sight", fixed: false, address: "Via del Corso 305, Rome", note: "Opulent private collection in a family palace — Velázquez's Innocent X and Caravaggios, right on Via del Corso." },
    { date: "2026-08-02", start: null, title: "Pantheon", type: "sight", fixed: false, address: "Pantheon, Piazza della Rotonda, Rome", note: "Ancient Rome's best-preserved building, crowned by its open oculus." },
    { date: "2026-08-02", start: null, title: "Santa Maria sopra Minerva", type: "sight", fixed: false, address: "Piazza della Minerva 42, Rome", note: "Just behind the Pantheon — Bernini's elephant obelisk out front.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-02", start: null, title: "San Luigi dei Francesi", type: "sight", fixed: false,
      address: "Piazza di S. Luigi de' Francesi, Rome", note: "The French national church — three Caravaggios in the Contarelli Chapel.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-02", start: null, title: "Frigidarium", type: "treat", fixed: false, address: "Via del Governo Vecchio 112, Rome", note: "Popular gelato by Piazza Navona." },
    { date: "2026-08-02", start: null, title: "Gelateria del Teatro", type: "treat", fixed: false, address: "Via dei Coronari 65/66, Rome", note: "Excellent gelato near Piazza Navona." },
    { date: "2026-08-02", start: null, title: "Ara Pacis", type: "sight", fixed: false, address: "Lungotevere in Augusta, Rome", note: "Augustus's altar — right by the Il Marchese dinner." },
    {
      date: "2026-08-02", start: "19:00", title: "Il Marchese", type: "meal", fixed: true, qty: 4,
      address: "Via di Ripetta 162, Rome 00186",
      note: "Roman classics and a famous amaro bar, near the Ara Pacis.",
      fromHotel: "~30 min walk from the hotel (or a 10-min taxi).",
      website: "https://www.ilmarcheseroma.it/", phone: "+39 06 9021 8872",
      booking: { label: "Status", value: "Confirmed", source: "TheFork app" },
    },

    /* ---------------------------- Mon, Aug 3 ---------------------------- */
    // St. Peter's + Vatican gelato in the morning, museums at 3, then back over the river to Navona for dinner.
    { date: "2026-08-03", start: null, title: "St. Peter's Basilica", type: "sight", fixed: false,
      address: "St. Peter's Basilica, Vatican City",
      note: "Free entry — you can enter Vatican City earlier in the day.",
      headsup: ["👕 Shoulders & knees covered"] },
    {
      date: "2026-08-03", start: "10:00", title: "St. Peter's Dome — tickets & audioguide", type: "tour", fixed: true, qty: 4,
      note: "Dome (cupola) tickets + audioguide with Feel the City Tours. €350 for 4.",
      meet: {
        name: "Bar “Al San Michele”",
        address: "Borgo di Santo Spirito 17, 00193 Roma",
        look: "Meet the staff at the bar — they hand over your tickets & audioguides. Arrive ~10 min early.",
      },
      phone: "+34 664 64 29 04", whatsapp: "+34 600 124 206",
      booking: { label: "Status", value: "Confirmed", source: "Feel the City Tours email" }, codeKey: "stpetersdome",
      headsup: ["Valid photo ID for everyone", "Arrive 10 min early", "👕 Shoulders & knees covered", "Entry time can shift ±90 min — check the tickets"],
    },
    { date: "2026-08-03", start: null, title: "Gelateria dei Gracchi", type: "treat", fixed: false, address: "Via dei Gracchi 272, Rome", note: "Top-tier gelato a short walk from the Vatican Museums." },
    { date: "2026-08-03", start: null, title: "Gelateria Old Bridge", type: "treat", fixed: false, address: "Viale dei Bastioni di Michelangelo 5, Rome", note: "Famous, right by the Vatican walls." },
    {
      date: "2026-08-03", start: "15:00", title: "Vatican Museums", type: "ticket", fixed: true, qty: 4,
      address: "Viale Vaticano, Vatican City",
      note: "Entrance: Corridoio 1 / Passageway 1, from Viale Vaticano.",
      booking: { label: "Status", value: "Confirmed", source: "Vatican Museums email" }, codeKey: "vatican", pdf: "vatican",
      headsup: ["Photo ID required", "Validate ticket at the turnstile", "👕 Shoulders & knees covered"],
    },
    { date: "2026-08-03", start: null, title: "Sistine Chapel", type: "sight", fixed: false,
      note: "Reached through the Vatican Museums.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-03", start: null, title: "Castel Sant'Angelo", type: "sight", fixed: false, optional: true,
      address: "Castel Sant'Angelo, Rome", note: "Hadrian's cylindrical mausoleum turned papal fortress on the Tiber." },
    { date: "2026-08-03", start: null, title: "Piazza Navona / Campo de' Fiori", type: "sight", fixed: false,
      address: "Piazza Navona, Rome", note: "Baroque square with Bernini's Fountain of the Four Rivers, plus the lively market square nearby." },
    {
      date: "2026-08-03", start: "21:00", title: "Hosteria Grappolo d'Oro", type: "meal", fixed: true, qty: 4,
      address: "Piazza della Cancelleria 80, Rome",
      note: "Long-loved trattoria for Roman classics near Campo de' Fiori.",
      fromHotel: "~30 min walk from the hotel (or a 12-min taxi).",
      website: "https://hosteriagrappolodoro.it/", phone: "+39 06 689 7080",
      booking: { label: "Status", value: "Confirmed", source: "Restaurant email" }, codeKey: "grappolo",
    },

    /* ---------------------------- Tue, Aug 4 ---------------------------- */
    // Colosseum tour, then a loop up the Oppian and back along the Imperial Forums to the Campidoglio.
    {
      date: "2026-08-04", start: "08:45", title: "Colosseum — Arena Floor, Forum & Palatine", type: "tour", fixed: true, qty: 4,
      note: "Small-group guided tour · Arena floor, Roman Forum & Palatine Hill. Ends around 11:15.",
      phone: "+39 06 4543 0994",
      booking: { label: "Status", value: "Confirmed", source: "FareHarbor email" }, codeKey: "colosseum",
      meet: {
        name: "Basilica SS. Cosma e Damiano",
        address: "Via dei Fori Imperiali, Rome",
        look: "Greeters in red “Show Me Italy” shirts by the large red pillar. Ends at Largo della Salara Vecchia.",
      },
      headsup: ["Check in by 8:30 — arrive 15 min early", "Bring passport / ID that matches the booking name", "Arena floor access"],
    },
    { date: "2026-08-04", start: null, title: "Basilica di San Clemente", type: "sight", fixed: false, address: "Via Labicana 95, Rome", note: "Descend through the centuries — a 12th-century basilica over a 1st-century Mithraic temple, near the Colosseum.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-04", start: null, title: "Domus Aurea", type: "sight", fixed: false, optional: true, address: "Via della Domus Aurea 1, Rome", note: "Nero's buried Golden House on the Oppian hill above the Colosseum — guided visits only." },
    { date: "2026-08-04", start: null, title: "San Pietro in Vincoli", type: "sight", fixed: false,
      address: "Piazza di San Pietro in Vincoli 4/a, Rome", note: "Home to Michelangelo's mighty Moses.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-04", start: null, title: "Trajan's Market", type: "sight", fixed: false, address: "Via Quattro Novembre 94, Rome", note: "The ancient world's 'shopping mall' — brick halls beside Trajan's Column, now the Museo dei Fori Imperiali." },
    { date: "2026-08-04", start: null, title: "Trajan's Column", type: "sight", fixed: false, address: "Via dei Fori Imperiali, Rome", note: "You walk right past it." },
    { date: "2026-08-04", start: null, title: "Vittoriano (Altare della Patria)", type: "sight", fixed: false, address: "Piazza Venezia, Rome", note: "Rooftop lift for a top-down view over the Forum." },
    { date: "2026-08-04", start: null, title: "Campidoglio", type: "sight", fixed: false, address: "Piazza del Campidoglio, Rome", note: "Michelangelo's elegant hilltop piazza above the Roman Forum." },
    { date: "2026-08-04", start: null, title: "Capitoline Museums", type: "sight", fixed: false, address: "Piazza del Campidoglio 1, Rome", note: "On the Campidoglio — the original she-wolf & Marcus Aurelius." },
    {
      date: "2026-08-04", start: "20:00", title: "53 Untitled", type: "meal", fixed: true, qty: 4,
      address: "Via del Monte della Farina 53, Rome",
      note: "Contemporary Italian cooking a few steps from Campo de' Fiori.",
      fromHotel: "~30 min walk from the hotel (or a 12-min taxi).",
      website: "https://www.untitledrestaurant.com/", phone: "+39 375 715 0155",
      booking: { label: "Status", value: "Confirmed", source: "Restaurant email" },
    },

    /* ---------------------------- Wed, Aug 5 ---------------------------- */
    // Train in, check in, then the Duomo cluster and down Via dei Calzaiuoli to Piazza della Signoria.
    { date: "2026-08-05", start: null, title: "Train to Florence", type: "transit", fixed: false,
      note: "Rome → Florence — buy tickets at the station." },
    { date: "2026-08-05", start: null, title: "Check in — B&B Firenze Pitti Palace", type: "sight", fixed: false,
      address: "Borgo San Jacopo 3/R, Florence", note: "Drop the bags — you're steps from the Ponte Vecchio in the Oltrarno." },
    {
      date: "2026-08-05", start: "14:15", title: "Giotto's Bell Tower", type: "ticket", fixed: true, qty: 4,
      address: "Piazza del Duomo, Florence",
      note: "Giotto Pass — valid Aug 5–7. Also covers the Baptistery, Opera del Duomo Museum & Santa Reparata.",
      booking: { label: "Status", value: "Confirmed", source: "Giotto Pass email" }, codeKey: "giotto", pdf: "giotto",
      headsup: ["Climb time 2:15 PM sharp — not modifiable", "414 steps · no lift", "No backpacks — storage at Piazza Duomo 38/r"],
    },
    { date: "2026-08-05", start: null, title: "Duomo (Cathedral)", type: "sight", fixed: false,
      address: "Cattedrale di Santa Maria del Fiore, Florence",
      note: "Free entry Mon–Sat 10:15–15:45, via Porta Campanile.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-05", start: null, title: "Baptistery", type: "sight", fixed: false,
      address: "Battistero di San Giovanni, Florence",
      note: "Giotto Pass. Vault mosaics under restoration.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-05", start: null, title: "Opera del Duomo Museum", type: "sight", fixed: false,
      address: "Piazza del Duomo 9, Florence", note: "Giotto Pass. Closed the 1st Tuesday of the month." },
    { date: "2026-08-05", start: null, title: "Edoardo il Gelato Biologico", type: "treat", fixed: false, address: "Piazza del Duomo 45r, Florence", note: "Organic gelato right by the Duomo." },
    { date: "2026-08-05", start: null, title: "Orsanmichele", type: "sight", fixed: false, address: "Via dell'Arte della Lana 1, Florence", note: "Church-guildhall with famous sculpture niches.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-05", start: null, title: "Perché No!", type: "treat", fixed: false, address: "Via dei Tavolini 19r, Florence", note: "Historic gelateria between the Duomo and Signoria." },
    { date: "2026-08-05", start: null, title: "Piazza della Signoria", type: "sight", fixed: false, address: "Piazza della Signoria, Florence", note: "Florence's open-air sculpture gallery and civic heart, in front of Palazzo Vecchio." },
    { date: "2026-08-05", start: null, title: "Loggia dei Lanzi", type: "sight", fixed: false, address: "Piazza della Signoria, Florence", note: "Free open-air sculpture gallery (Cellini's Perseus)." },
    { date: "2026-08-05", start: null, title: "Palazzo Vecchio", type: "sight", fixed: false, address: "Piazza della Signoria, Florence", note: "Climb the Arnolfo Tower for the best view of the Duomo." },
    {
      date: "2026-08-05", start: "21:30", title: "Borgo San Jacopo", type: "meal", fixed: true, qty: 4,
      address: "Borgo San Jacopo 62/r, Florence",
      website: "https://www.lungarnocollection.com/borgo-san-jacopo/", phone: "+39 055 281661", whatsapp: "+39 342 1234710",
      note: "Riverside fine dining with Arno views — fixed summer tasting menu, €185 per person.",
      fromHotel: "~2 min walk — the hotel is on the same street.",
      booking: { label: "Status", value: "Confirmed", source: "TheFork app" },
    },

    /* ---------------------------- Thu, Aug 6 ---------------------------- */
    // Uffizi at opening, cross the Ponte Vecchio into the Oltrarno, then up to Piazzale Michelangelo for sunset.
    {
      date: "2026-08-06", start: "08:15", title: "Uffizi Gallery", type: "ticket", fixed: true, qty: 4,
      address: "Piazzale degli Uffizi 6, Florence",
      note: "Firenze Card holder reservation — show the booking together with your Firenze Card.",
      booking: { label: "Status", value: "Confirmed", source: "Uffizi / CoopCulture email" }, codeKey: "uffizi", pdf: "uffizi",
      headsup: ["Bring your Firenze Card"],
    },
    { date: "2026-08-06", start: null, title: "Gucci Garden", type: "sight", fixed: false, optional: true, address: "Piazza della Signoria 10, Florence", note: "Gucci's museum-boutique and café on Piazza della Signoria." },
    { date: "2026-08-06", start: null, title: "Via de' Tornabuoni shopping", type: "sight", fixed: false, address: "Via de' Tornabuoni, Florence", note: "Florence's luxury shopping street — Ferragamo, Gucci and the big houses." },
    { date: "2026-08-06", start: null, title: "Ponte Vecchio", type: "sight", fixed: false, address: "Ponte Vecchio, Florence", note: "The medieval bridge lined with goldsmiths' and jewelers' shops." },
    { date: "2026-08-06", start: null, title: "Palazzo Pitti", type: "sight", fixed: false, address: "Piazza de' Pitti 1, Florence", note: "The vast Medici palace across the Arno, full of grand galleries." },
    { date: "2026-08-06", start: null, title: "Boboli Gardens", type: "sight", fixed: false, address: "Giardino di Boboli, Florence", note: "Sculpted Renaissance gardens climbing the hill behind the Pitti Palace." },
    { date: "2026-08-06", start: null, title: "Gelateria della Passera", type: "treat", fixed: false, address: "Via Toscanella 15r, Florence", note: "Beloved little Oltrarno spot near Pitti." },
    { date: "2026-08-06", start: null, title: "Santo Spirito", type: "sight", fixed: false, address: "Piazza Santo Spirito 30, Florence", note: "Brunelleschi's serene Oltrarno basilica, with a young Michelangelo's wooden crucifix — steps from tonight's dinner.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-06", start: null, title: "Brancacci Chapel", type: "sight", fixed: false, address: "Piazza del Carmine 14, Florence", note: "Masaccio's revolutionary frescoes in Santa Maria del Carmine — a cornerstone of the early Renaissance.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-06", start: null, title: "Gelateria La Carraia", type: "treat", fixed: false, address: "Piazza Nazario Sauro 25/r, Florence", note: "Great gelato by Ponte alla Carraia, in the Oltrarno." },
    {
      date: "2026-08-06", start: "19:30", title: "Il Santo Bevitore", type: "meal", fixed: true, qty: 4,
      address: "Via Santo Spirito 64/66R, Florence",
      note: "Well-loved Oltrarno spot for seasonal Tuscan cooking.",
      fromHotel: "~7 min walk from the hotel.",
      website: "https://www.ilsantobevitore.com/", phone: "+39 055 211264",
      booking: { label: "Status", value: "Confirmed", source: "ResDiary email" }, codeKey: "santobevitore",
    },
    { date: "2026-08-06", start: null, title: "Piazzale Michelangelo", type: "sight", fixed: false, address: "Piazzale Michelangelo, Florence", note: "THE Florence panorama — best at sunset." },
    { date: "2026-08-06", start: null, title: "San Miniato al Monte", type: "sight", fixed: false, address: "Via delle Porte Sante 34, Florence", note: "Romanesque gem above Piazzale Michelangelo; evening chant.", headsup: ["👕 Shoulders & knees covered"] },

    /* ---------------------------- Fri, Aug 7 ---------------------------- */
    // Start at San Lorenzo/San Marco (by the Accademia), then head south to the Bargello, Signoria and Santa Croce.
    { date: "2026-08-07", start: null, title: "Mercato Centrale", type: "sight", fixed: false, address: "Mercato Centrale, Florence", note: "Florence's grand food market — produce stalls below, a buzzing food hall above." },
    { date: "2026-08-07", start: null, title: "San Lorenzo", type: "sight", fixed: false, address: "Basilica di San Lorenzo, Florence", note: "The Medici parish church, with Brunelleschi's serene interior." },
    { date: "2026-08-07", start: null, title: "Medici Chapels", type: "sight", fixed: false, address: "Piazza di Madonna degli Aldobrandini 6, Florence", note: "Michelangelo's New Sacristy tombs — attached to San Lorenzo. (Ticketed.)" },
    { date: "2026-08-07", start: null, title: "Museo di San Marco", type: "sight", fixed: false, address: "Piazza San Marco 3, Florence", note: "Fra Angelico's luminous frescoes in the monks' cells of San Marco — a short walk from the Accademia." },
    {
      date: "2026-08-07", start: "13:15", title: "Galleria dell'Accademia", type: "ticket", fixed: true, qty: 4,
      address: "Via Ricasoli 58/60, Florence",
      note: "Home of Michelangelo's David. Timed-entry reservation — booking confirmed.",
      booking: { label: "Status", value: "Confirmed", source: "Accademia email" }, codeKey: "accademia",
      headsup: ["Timed entry — arrive ~15 min early"],
    },
    { date: "2026-08-07", start: null, title: "Bargello", type: "sight", fixed: false, address: "Museo Nazionale del Bargello, Florence", note: "Italy's great sculpture museum — Donatello's David and early Michelangelo." },
    { date: "2026-08-07", start: null, title: "Piazza della Signoria", type: "sight", fixed: false, address: "Piazza della Signoria, Florence", note: "Florence's open-air sculpture gallery and civic heart, in front of Palazzo Vecchio." },
    { date: "2026-08-07", start: null, title: "Basilica di Santa Croce", type: "sight", fixed: false, address: "Piazza di Santa Croce 16, Florence", note: "Tombs of Michelangelo, Galileo & Machiavelli.", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-07", start: null, title: "Vivoli", type: "treat", fixed: false, address: "Via dell'Isola delle Stinche 7r, Florence", note: "Florence's oldest gelateria, by Santa Croce." },
    {
      date: "2026-08-07", start: "19:30", title: "Osteria Konnubio", type: "meal", fixed: true, qty: 4,
      address: "Via dei Conti 8, Florence 50123",
      website: "https://www.konnubio.com/", phone: "+39 055 238 1189",
      note: "Last dinner in Florence — remember the flight home is early (6:55 AM).",
      fromHotel: "~13 min walk from the hotel, across the Ponte Vecchio.",
      booking: { label: "Booking", value: "TheFork · confirmed", source: "TheFork" },
    },

    /* ---------------------------- Sat, Aug 8 ---------------------------- */
    { date: "2026-08-08", start: null, title: "Depart hotel", type: "sight", fixed: false, note: "Early start — pre-book a taxi the night before." },
    {
      date: "2026-08-08", start: "06:55", title: "Depart Florence — FLR", type: "flight", fixed: true, qty: 4,
      note: "Florence → Paris → Cincinnati · Air France / Delta",
      booking: { label: "Status", value: "Confirmed", source: "Air France / Delta email" }, codeKey: "flights",
      headsup: ["Early start — pre-book a taxi the night before"],
    },
  ],
},

// ── Add the next trip to remember here: copy the block above and edit it. ──

];

// The app opens on whichever trip you pick in the Trips tab; this is just the
// default before you've chosen one.
const TRIP = TRIPS[0];
