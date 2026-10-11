/* =====================================================================
   DUBAI NIGHTS · LUXURY INVITATION  -  EDIT ONLY THIS FILE FOR EACH COUPLE
   Keep the "quotes" and the commas. Pictures live in the images folder.
   ===================================================================== */
window.WEDDING = {

  /* ---- couple ---- */
  groom: "Aditya",
  bride: "Aisha",
  monogram: "A & A",
  groomParents: "Mr. Rajiv & Mrs. Sunita Malhotra",
  groomLabel: "Son of",
  brideParents: "Mr. Vikram & Mrs. Kavya Oberoi",
  brideLabel: "Daughter of",

  /* ---- opening (3-2-1 countdown, then the Burj lights up) ---- */
  gateEyebrow: "A Dubai wedding celebration",
  gateText: "Tap the crest — and count down with us",
  countFrom: 3,                        /* the countdown starts from this number */
  gateReveal: "Let the celebrations begin",  /* line that glows after the countdown ("" = none) */

  /* ---- words ---- */
  cardFooter: null,                    /* last line of the invitation card; null = auto (date + venue), "" = hide */
  heroEyebrow: "Under the Arabian stars",
  place: "Dubai · United Arab Emirates",
  blessing: "Shri Ganeshaya Namah",
  tagline: "Where the desert meets the sea, two hearts begin forever.",
  inviteLine: "We request the honour of your presence at the wedding of our children.",

  /* ---- pictures (leave "" to hide) ---- */
  heroImage: "images/atlantis-front.jpg", /* full-screen picture at the top after the countdown */
  heroFocus: "50% 45%",
  footerImage: "images/atlantis-sunset.jpg", /* picture at the very bottom ("" = hide) */
  gateImage: "images/burj-tall.jpg",   /* Burj picture on the opening screen (portrait works best) */
  couplePhoto: "",
  venueImage: "images/palm-atlantis.jpg",
  venueFocus: "50% 55%",

  /* postcard collage (3 pictures look best) */
  postcardEyebrow: "Greetings from Dubai",
  postcardTitle: "Skylines, Sands & Forever",
  postcardNote: "Three unforgettable nights in the city of gold",
  postcards: [
    { src: "images/burj-fountain.jpg", cap: "The city that never dims" },
    { src: "images/atlantis-sunset.jpg", cap: "Our home on the Palm" },
    { src: "images/desert.svg",      cap: "Golden dunes at dusk" }
  ],
  gallery: [                           /* replace with the couple's photos (portrait looks best) */
    { src: "images/atlantis-front.jpg", cap: "Where forever begins" },
    { src: "images/ev-pheras.jpg",    cap: "Two hearts, one beautiful beginning" },
    { src: "images/burj-tall.jpg",    cap: "Reaching for the sky, together" },
    { src: "images/ev-sangeet.jpg",   cap: "Dancing into forever" },
    { src: "images/ev-reception.jpg", cap: "Hand in hand" },
    { src: "images/ev-haldi.jpg",     cap: "Laughter & light" }
  ],

  /* ---- date (the three scratch cards reveal this) ---- */
  weddingDateTime: "2027-11-20T19:00:00+04:00",   /* +04:00 = Dubai time */
  dateDay: "20", dateMonth: "NOV", dateYear: "2027",
  sealText: "Scratch each card, one by one, to reveal the date",
  dateNote: "Celebrations begin at 7 in the evening",
  rememberReveal: false,               /* false = scratch cards every visit; true = guests scratch only once */

  /* ---- events (add / remove / reorder freely) ---- */
  eventsEyebrow: "Three nights in the city of gold",
  events: [
    { date: "18 Nov", time: "8:00 PM",  title: "Welcome Dinner",        note: "Dinner by the dancing fountains",       image: "images/burj-fountain.jpg" },
    { date: "19 Nov", time: "11:00 AM", title: "Haldi by the Pool",     note: "Sunshine, marigolds & splashes",          image: "images/ev-haldi.jpg" },
    { date: "19 Nov", time: "6:00 PM",  title: "Desert Sangeet",        note: "Music & dance under the desert stars",    image: "images/desert.svg" },
    { date: "20 Nov", time: "7:00 PM",  title: "The Wedding",           note: "Vows on the beach of the Palm",            image: "images/atlantis-sunset.jpg" },
    { date: "20 Nov", time: "10:30 PM", title: "Reception",             note: "Champagne, fireworks & dinner",            image: "images/ev-reception.jpg" }
  ],
  muhurat: { title: "Auspicious Muhurat", label: "Pheras", time: "8:21 PM", text: "Please be seated by 8:00 PM" },

  /* ---- venue ---- */
  venueNote: "On the crescent of the Palm, where the Arabian Gulf glows gold at sunset. We would be honoured to celebrate with you.",
  venueCity: "Venue · Palm Jumeirah, Dubai",
  venueName: "Atlantis The Palm",
  venueAddress: "Crescent Road, The Palm Jumeirah, Dubai, UAE",
  mapQuery: "Atlantis The Palm Dubai",

  /* ---- wardrobe planner ----
     image = outfit picture on the card (images/look-*.svg); poster = optional full poster instead */
  dressEyebrow: "Dress for the moment",
  dressTitle: "Wardrobe Planner",
  dressCode: [
    { event: "Welcome Dinner",  look: "Midnight blues & silver|Evening chic",          colors: ["#1d1b3d", "#3a3a7a", "#c0c6d8", "#f4f1ea"], image: "images/look-welcome.svg", poster: "" },
    { event: "Haldi by the Pool", look: "Sunshine yellow & ivory|Breezy resort wear",   colors: ["#f6d04d", "#fbe7a1", "#fff8e6", "#f4b25a"], image: "images/look-haldi.svg", poster: "" },
    { event: "Desert Sangeet",  look: "Desert rose, gold & sand|Indo-western glam",      colors: ["#c97b84", "#e8c4a0", "#c9a24e", "#7a3a4a"], image: "images/look-sangeet.svg", poster: "" },
    { event: "The Wedding",     look: "Royal Indian couture|Ivory, gold & pastels",      colors: ["#f8f1e2", "#e9cf8f", "#f2c6c9", "#b8d0c8"], image: "images/look-wedding.svg", poster: "" },
    { event: "Reception",       look: "Black tie & sparkle|Gowns, tuxedos & sarees",     colors: ["#111122", "#c9a24e", "#e9e2d0", "#6a5a8e"], image: "images/look-reception.svg", poster: "" }
  ],

  /* ---- RSVP & closing ---- */
  whatsapp: "910000000000",            /* country code + number, no + sign. e.g. 971501234567 */
  rsvpBy: "15 Oct 2027",
  closing: "Your presence will make our nights in Dubai truly golden.",
  families: "With love — The Malhotra & Oberoi Families",
  hashtag: "",                         /* "" = auto #AdityaWedsAisha */
  music: "music/song 3.mp3",

  /* ---- colours (hex) ---- */
  theme: { ink: "#1d1b3d", blue: "#3a3a7a", sky: "#e6dcc8", mist: "#faf6ee", gold: "#c9a24e" },

  hideSections: []
};
