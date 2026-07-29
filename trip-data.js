/* ============================================================================
   ANDIAMO — your trip data
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the app.
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
   ============================================================================ */

const TRIP = {
  name: "Andiamo",
  subtitle: "Rome & Florence",
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
    },
    {
      city: "Florence",
      start: "2026-08-05",
      end: "2026-08-08",
      hotelName: "B&B Hotel Firenze Pitti Palace al Ponte Vecchio",
      hotelAddress: "Borgo San Jacopo 3/R, Florence",
    },
  ],

  // A short title for each calendar day.
  days: [
    { date: "2026-08-01", title: "Arrival in Rome" },
    { date: "2026-08-02", title: "Borghese & Historic Rome" },
    { date: "2026-08-03", title: "Vatican" },
    { date: "2026-08-04", title: "Ancient Rome" },
    { date: "2026-08-05", title: "To Florence" },
    { date: "2026-08-06", title: "Renaissance Florence" },
    { date: "2026-08-07", title: "Michelangelo Day" },
    { date: "2026-08-08", title: "Departure" },
  ],

  // Dress-code reminders (shown on the Trip tab and as 👕 badges on events).
  dress: [
    "Vatican Museums, Sistine Chapel & St. Peter's Basilica — shoulders and knees covered.",
    "Florence Cathedral, Baptistery, San Pietro in Vincoli & San Luigi dei Francesi — shoulders and knees covered.",
    "No special dress code for the major museums.",
  ],

  events: [
    /* ---------------------------- Sat, Aug 1 ---------------------------- */
    {
      date: "2026-08-01", start: "11:25", title: "Land in Rome — FCO", type: "flight", fixed: true,
      note: "Cincinnati → Paris → Rome · Delta / Air France",
      booking: { label: "Status", value: "Confirmed", source: "Delta / Air France email" }, codeKey: "flights",
      qty: 4,
    },
    { date: "2026-08-01", start: null, title: "Check in — The Hive Hotel", type: "sight", fixed: false,
      address: "Via Torino 6, Rome" },
    { date: "2026-08-01", start: null, title: "Trevi Fountain", type: "sight", fixed: false, address: "Fontana di Trevi, Rome" },
    { date: "2026-08-01", start: null, title: "Spanish Steps", type: "sight", fixed: false, address: "Piazza di Spagna, Rome" },
    { date: "2026-08-01", start: null, title: "Via Condotti shopping", type: "sight", fixed: false, address: "Via dei Condotti, Rome" },
    { date: "2026-08-01", start: null, title: "Casual dinner", type: "meal", fixed: false, note: "No reservation — play it by ear" },

    /* ---------------------------- Sun, Aug 2 ---------------------------- */
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
    { date: "2026-08-02", start: null, title: "Villa Borghese", type: "sight", fixed: false, address: "Villa Borghese, Rome" },
    { date: "2026-08-02", start: null, title: "Pincio Terrace", type: "sight", fixed: false, address: "Terrazza del Pincio, Rome" },
    { date: "2026-08-02", start: null, title: "Piazza del Popolo", type: "sight", fixed: false, address: "Piazza del Popolo, Rome" },
    { date: "2026-08-02", start: null, title: "Via del Babuino / Via Condotti shopping", type: "sight", fixed: false, address: "Via del Babuino, Rome" },
    { date: "2026-08-02", start: null, title: "Pantheon", type: "sight", fixed: false, address: "Pantheon, Piazza della Rotonda, Rome" },
    { date: "2026-08-02", start: null, title: "San Luigi dei Francesi", type: "sight", fixed: false,
      address: "Piazza di S. Luigi de' Francesi, Rome", headsup: ["👕 Shoulders & knees covered"] },
    {
      date: "2026-08-02", start: "19:00", title: "Il Marchese", type: "meal", fixed: true, qty: 4,
      address: "Via di Ripetta 162, Rome 00186",
      booking: { label: "Status", value: "Confirmed", source: "TheFork app" },
    },

    /* ---------------------------- Mon, Aug 3 ---------------------------- */
    { date: "2026-08-03", start: null, title: "St. Peter's Basilica", type: "sight", fixed: false,
      address: "St. Peter's Basilica, Vatican City",
      note: "Free entry — you can enter Vatican City earlier in the day.",
      headsup: ["👕 Shoulders & knees covered"] },
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
      address: "Castel Sant'Angelo, Rome" },
    { date: "2026-08-03", start: null, title: "Piazza Navona / Campo de' Fiori", type: "sight", fixed: false,
      address: "Piazza Navona, Rome" },
    {
      date: "2026-08-03", start: "21:00", title: "Hosteria Grappolo d'Oro", type: "meal", fixed: true, qty: 4,
      address: "Piazza della Cancelleria 80, Rome",
      booking: { label: "Status", value: "Confirmed", source: "Restaurant email" }, codeKey: "grappolo",
    },

    /* ---------------------------- Tue, Aug 4 ---------------------------- */
    {
      date: "2026-08-04", start: "08:30", title: "Colosseum — Arena Floor, Forum & Palatine", type: "tour", fixed: true, qty: 4,
      note: "Small-group guided tour (Viator) · includes Roman Forum & Palatine Hill.",
      booking: { label: "Status", value: "Confirmed", source: "Viator app" }, codeKey: "colosseum",
      meet: {
        name: "Basilica SS. Cosma e Damiano",
        address: "Via dei Fori Imperiali, Rome",
        look: "Greeters in red “Show Me Italy” shirts by the large red pillar. Ends at Largo della Salara Vecchia.",
      },
      headsup: ["Check in by 8:15 — 15 min early", "Bring passport / ID that matches the booking name", "Arena floor access"],
    },
    { date: "2026-08-04", start: null, title: "San Pietro in Vincoli", type: "sight", fixed: false,
      address: "Piazza di San Pietro in Vincoli 4/a, Rome", headsup: ["👕 Shoulders & knees covered"] },
    { date: "2026-08-04", start: null, title: "Campidoglio", type: "sight", fixed: false, address: "Piazza del Campidoglio, Rome" },
    {
      date: "2026-08-04", start: "20:00", title: "53 Untitled", type: "meal", fixed: true, qty: 4,
      address: "Via del Monte della Farina 53, Rome",
      note: "⚠️ No confirmation on hand yet — check this is actually booked.",
    },

    /* ---------------------------- Wed, Aug 5 ---------------------------- */
    { date: "2026-08-05", start: null, title: "Train to Florence", type: "transit", fixed: false,
      note: "Rome → Florence. Train ticket not added yet." },
    { date: "2026-08-05", start: null, title: "Check in — B&B Firenze Pitti Palace", type: "sight", fixed: false,
      address: "Borgo San Jacopo 3/R, Florence" },
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
    { date: "2026-08-05", start: null, title: "Piazza della Signoria", type: "sight", fixed: false, address: "Piazza della Signoria, Florence" },
    {
      date: "2026-08-05", start: "21:30", title: "Borgo San Jacopo", type: "meal", fixed: true, qty: 4,
      address: "Borgo San Jacopo 62/r, Florence",
      note: "Fixed summer tasting menu — €185 per person.",
      booking: { label: "Status", value: "Confirmed", source: "TheFork app" },
    },

    /* ---------------------------- Thu, Aug 6 ---------------------------- */
    {
      date: "2026-08-06", start: "08:15", title: "Uffizi Gallery", type: "ticket", fixed: true, qty: 4,
      address: "Piazzale degli Uffizi 6, Florence",
      note: "Firenze Card holder reservation — show the booking together with your Firenze Card.",
      booking: { label: "Status", value: "Confirmed", source: "Uffizi / CoopCulture email" }, codeKey: "uffizi", pdf: "uffizi",
      headsup: ["Bring your Firenze Card"],
    },
    { date: "2026-08-06", start: null, title: "Gucci Garden", type: "sight", fixed: false, optional: true, address: "Piazza della Signoria 10, Florence" },
    { date: "2026-08-06", start: null, title: "Via de' Tornabuoni shopping", type: "sight", fixed: false, address: "Via de' Tornabuoni, Florence" },
    { date: "2026-08-06", start: null, title: "Ponte Vecchio", type: "sight", fixed: false, address: "Ponte Vecchio, Florence" },
    { date: "2026-08-06", start: null, title: "Palazzo Pitti", type: "sight", fixed: false, address: "Piazza de' Pitti 1, Florence" },
    { date: "2026-08-06", start: null, title: "Boboli Gardens", type: "sight", fixed: false, address: "Giardino di Boboli, Florence" },
    {
      date: "2026-08-06", start: "19:30", title: "Il Santo Bevitore", type: "meal", fixed: true, qty: 4,
      address: "Via Santo Spirito 64/66R, Florence",
      booking: { label: "Status", value: "Confirmed", source: "ResDiary email" }, codeKey: "santobevitore",
    },

    /* ---------------------------- Fri, Aug 7 ---------------------------- */
    { date: "2026-08-07", start: null, title: "Mercato Centrale", type: "sight", fixed: false, address: "Mercato Centrale, Florence" },
    { date: "2026-08-07", start: null, title: "San Lorenzo", type: "sight", fixed: false, address: "Basilica di San Lorenzo, Florence" },
    {
      date: "2026-08-07", start: "13:15", title: "Galleria dell'Accademia", type: "ticket", fixed: true, qty: 4,
      address: "Via Ricasoli 58/60, Florence",
      note: "Home of Michelangelo's David. (Ticket PDF not added yet — from the itinerary.)",
      booking: { label: "Status", value: "Confirmed", source: "Accademia email" }, codeKey: "accademia",
      headsup: ["Timed entry — arrive ~15 min early"],
    },
    { date: "2026-08-07", start: null, title: "Bargello", type: "sight", fixed: false, address: "Museo Nazionale del Bargello, Florence" },
    { date: "2026-08-07", start: null, title: "Piazza della Signoria", type: "sight", fixed: false, address: "Piazza della Signoria, Florence" },
    {
      date: "2026-08-07", start: "19:30", title: "Osteria Konnubio", type: "meal", fixed: true, qty: 4,
      address: "Via dei Conti 8, Florence 50123",
      note: "Last dinner in Florence — remember the flight home is early (6:55 AM).",
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
};
