// ─────────────────────────────────────────────────────────────
//  MUNKI — site content
//  This is the only file you need to edit. Fill in each value,
//  save, commit, push — Render redeploys automatically.
//  Leave a value as "" (or a list empty) and that item is hidden.
// ─────────────────────────────────────────────────────────────

window.MUNKI = {
  name: "Munki",
  recordLabel: "Banana Tree Records",   // shows as "Banana Tree Records presents" above your name
  tagline: "Afro-Celtic fusion · Bristol",
  // The quote shown under your name.
  heroQuote: {
    quote: "A heart-warming listen from beginning to end",
    source: "CLASH Magazine",
    url: "https://www.clashmusic.com/news/munki-steps-up-with-latest-single-far-away",
  },

  // The full-width photo across the top — to change it, replace hero.jpg
  // in this folder (landscape works best).
  photo: "hero.jpg",
  photoAlt: "Munki sitting cross-legged in front of a bamboo wall, lowering his sunglasses, with bongos and a ukulele beside him",

  // A second photo near the bottom of the page (above Contact). Set to "" to hide.
  photo2: "photo2.jpg",
  photo2Alt: "Munki holding up a pair of small brass hand cymbals, wearing amber beaded necklaces",

  intro:
    "Bristol-based singer-songwriter and multi-instrumentalist, drawing on folk, funk and afrobeat. Sweet melodies to soothe the brain, strong rhythms to make you dance — live as a solo, duo, four-piece or six-piece.",

  // ── BACKGROUND / WHO MUNKI HAS WORKED WITH ─────────────────
  story: {
    label: "Background",
    heading: "From Bristol’s sound systems to stages worldwide",
    paragraphs: [
      "Munki cut his teeth at the heart of Bristol’s music scene as collaborative co-producer with Bristol heavyweights Hippo Sound System — playing all the instrumentation, co-composing, producing and touring the project. Along the way he’s worked and shared the stage with legends including Laid Blak, Mr Savona, KOG and The Busy Twist, and taken his music around the world.",
      "Now he’s stepped out on his own, with an all-star band whose members have played with the likes of Gentleman’s Dub Club, The Undercover Hippy, The Witch and Cabarets, to name a few.",
    ],
    stats: [
      { figure: "300,000+", label: "streams for his Hippo Sound System collaboration" },
      { figure: "50,000+",  label: "Spotify streams for Munki’s own EP releases" },
    ],
    groups: [
      { title: "Worked & shared the stage with",  names: ["Hippo Sound System", "Laid Blak", "Mr Savona", "KOG", "The Busy Twist", "Da Fuchaman", "Hotsteppas", "Timbali"] },
      { title: "An all-star band — members have played with", names: ["Gentleman’s Dub Club", "The Undercover Hippy", "The Witch", "Cabarets"] },
    ],
  },

  // ── TOUR BOOKING (aimed at promoters) ──────────────────────
  booking: {
    badge: "Now booking · UK tour, Spring & Autumn 2027",
    heading: "Bring Munki to your stage",
    pitch:
      "We’re booking a UK tour for spring and autumn 2027, with plans for Europe in 2028 — and looking for venues, festivals and promoters to fill the dates. Afro-Celtic fusion that gets a room moving, in whatever line-up fits your stage and budget.",
    formats: [
      { name: "Solo",       detail: "Munki and his ukulele, singing his songs." },
      { name: "Duo",        detail: "Munki accompanied by percussion, bass or accordion." },
      { name: "Four-piece", detail: "Munki with drums, accordion and bass." },
      { name: "Six-piece",  detail: "The full band — percussion and violin on top." },
    ],
    // A smaller "also available" line under the line-ups. Set to "" to hide it.
    alsoAvailable: "",
    reasons: [
      { title: "Praised by the press", detail: "Featured in CLASH, EARMILK, Notion and 11 more outlets for “Far Away”." },
      { title: "Festival-proven",      detail: "Six years on some of the biggest stages on the festival circuit, playing to crowds of 3,000–5,000 in various line-ups." },
      { title: "One act, any stage",   detail: "Solo to six-piece — scale the show to your room, slot and budget." },
      { title: "A live show that moves", detail: "Sweet melodies to soothe the brain, strong rhythms to get the room dancing." },
    ],
    emailSubject: "Tour booking enquiry – Munki 2027",
  },

  // ── SHOWREEL ───────────────────────────────────────────────
  // Paste a private/unlisted video link here and the Watch section appears.
  // Works with an Instagram reel (https://www.instagram.com/reel/XXXXXXXXX/),
  // Vimeo (https://vimeo.com/123456789/abcdef1234) or an unlisted YouTube
  // link (https://youtu.be/XXXXXXXXXXX). Leave "" to hide it.
  showreel: "https://youtu.be/kyJsYZi0P4c",
  showreelTitle: "EP launch, live at the Jam Jar",

  // The main "Listen" button — usually your Spotify or Bandcamp link.
  listenLink: "https://open.spotify.com/artist/47gI45FS4GhTU74HWv5X5f",

  // Every streaming platform you're on. Delete lines you don't use.
  streaming: [
    { label: "Spotify",       url: "https://open.spotify.com/artist/47gI45FS4GhTU74HWv5X5f" },
    { label: "Apple Music",   url: "" },
    { label: "Bandcamp",      url: "" },
    { label: "SoundCloud",    url: "" },
    { label: "YouTube Music", url: "" },
    { label: "Tidal",         url: "" },
    { label: "Amazon Music",  url: "" },
    { label: "Deezer",        url: "" },
  ],

  // Press quotes — exact words from the coverage, with the outlet's name.
  press: [
    { quote: "A dash of sun-kissed escapism", source: "CLASH", url: "https://www.clashmusic.com/news/munki-steps-up-with-latest-single-far-away" },
    { quote: "A feel-good anthem and a thoughtful meditation on identity", source: "EARMILK", url: "https://earmilk.com/2026/04/04/munki-explores-growth-and-self-discovery-on-new-track-far-away/" },
    { quote: "Boundary pushing talent", source: "Notion", url: "https://notion.online/far-away-by-munki" },
  ],

  // Outlets shown in the "As featured in" row.
  featured: [
    { label: "CLASH",          url: "https://www.clashmusic.com/news/munki-steps-up-with-latest-single-far-away" },
    { label: "EARMILK",        url: "https://earmilk.com/2026/04/04/munki-explores-growth-and-self-discovery-on-new-track-far-away/" },
    { label: "Notion",         url: "https://notion.online/far-away-by-munki" },
    { label: "Fame Magazine",  url: "" },
    { label: "Mystic Sons",    url: "https://www.mysticsons.com/article/getting-know-munki" },
    { label: "Vents Magazine", url: "https://ventsmagazine.com/2026/04/19/vents-magazines-top-tracks-volume-38" },
    { label: "Music News",     url: "" },
    { label: "The Indie Grid", url: "https://theindiegrid.co.uk/latest-news/five-for-friday-10th-april-2026" },
  ],

  // Link to the full coverage report.
  coverageLink: "https://libertymusicpr.coveragebook.com/b/c22ce3208787b3ff",

  contact: {
    bookingsEmail: "bookings@munkimusic.co.uk",
    pressEmail: "",
    phone: "+44 7494 572013",
    location: "Bristol, UK",
  },

  social: [
    { label: "Instagram", url: "https://www.instagram.com/munki_bongo" },
    { label: "YouTube",   url: "" },   // https://www.youtube.com/@munkibongo
    { label: "TikTok",    url: "" },
    { label: "Facebook",  url: "" },
  ],
};
