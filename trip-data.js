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

   Flexible (fixed:false) stops show in the order they appear below, so each
   day's list is arranged as a natural walking route. Timed events (fixed:true)
   always sort by their start time, wherever they sit in the block.
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
};
