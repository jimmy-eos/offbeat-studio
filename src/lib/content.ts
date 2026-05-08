// Shared content used across the site.

export const STUDIO = {
  name: "OFFBEAT",
  director: "Daniel Lee",
  city: "Costa Mesa",
  region: "Orange County, California",
  address: "1149 W. 17th St, Costa Mesa, CA 92627",
  phone: "+1 (949) 555-0142",
  email: "hello@offbeat.studio",
  emailDirect: "daniel@offbeat.studio",
  hours: "Mon — Fri, 10 a.m. – 6 p.m. PT",
  founded: "2019",
  booking: "Q3 / Q4 2026",
  coords: "33.7°N · 117.8°W",
  igHandle: "@offbeat.studio",
  vimeoHandle: "/offbeatstudio",
};

// ---------------------------------------------------------------------------
// Photo registry
// All photos live in /public/photos. Slugs are stable IDs used by Concept2.
// ---------------------------------------------------------------------------

export type Photo = {
  slug: string;
  src: string;
  alt: string;
  w: number;
  h: number;
  orient: "L" | "P";
};

const photo = (slug: string, w: number, h: number, alt: string): Photo => ({
  slug,
  src: `/photos/${slug}.jpg`,
  alt,
  w,
  h,
  orient: w >= h ? "L" : "P",
});

export const PHOTOS = {
  gymBackUs: photo("gym-back-us", 2400, 1600, "Boxer turned to the U.S. flag inside the gym"),
  gymPortrait: photo("gym-portrait", 2400, 1992, "Boxer in a Muerto Generals tee, ring behind him"),
  gymFront: photo("gym-front", 1389, 2400, "Boxer standing center-frame under flags inside the ring"),
  gymBackMex: photo("gym-back-mex", 1306, 2400, "Boxer facing away, Mexican flag overhead"),
  gymClose: photo("gym-close", 1600, 2400, "Tight portrait of the boxer beside the ropes"),
  gymPair: photo("gym-pair", 1546, 2400, "Two boxers framed inside the gym"),
  lionLeap: photo("lion-leap", 1600, 2400, "Lion dancer mid-leap, costume in full motion"),
  lionTemple: photo("lion-temple", 1600, 2400, "Lion troupe gathered before the temple gate"),
  lionCrowd: photo("lion-crowd", 1600, 2400, "Lion dance under string lights, lantern in foreground"),
  yeeYingTong: photo("yee-ying-tong", 1600, 2400, "Yee Ying Tong association jacket, troupe member backstage"),
  lantern: photo("lantern", 1600, 2400, "Painted festival lantern lit against the night"),
  rushCover: photo("rush-cover", 720, 1280, "Two friends walking home under a streetlight"),
  twentyCover: photo("twenty-cover", 720, 1280, "Engraved twenty-year anniversary plaque"),
} as const;

export type PhotoSlug = keyof typeof PHOTOS;

// ---------------------------------------------------------------------------
// Video registry — clips that loop in hero/feature slots. Posters are JPG
// frames pulled at clip start so the still reads correctly before playback.
// ---------------------------------------------------------------------------

export type Video = {
  slug: string;
  src: string;
  poster: string;
  w: number;
  h: number;
  orient: "L" | "P";
};

const video = (slug: string, w: number, h: number): Video => ({
  slug,
  src: `/videos/${slug}.mp4`,
  poster: `/videos/${slug}-poster.jpg`,
  w,
  h,
  orient: w >= h ? "L" : "P",
});

export const VIDEOS = {
  ygz: video("ygz", 1280, 960), // 4:3 — boxing documentary, "Yung Generalz"
  rushSae: video("rush-sae", 720, 1280), // 9:16 — Rush, SAE short
  tapa: video("tapa", 720, 1280), // 9:16 — Twenty, anniversary film
} as const;

export type VideoSlug = keyof typeof VIDEOS;

// ---------------------------------------------------------------------------
// Selected work — four pieces. Each project has a stable slug for routing,
// a cover (photo or video), the photos shown in its detail page, and an
// optional video for hero playback.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  n: string;
  title: string;
  client: string;
  kind: string;
  year: string;
  meta?: string;
  description: string;
  cover: PhotoSlug;
  video?: VideoSlug;
  photos: PhotoSlug[];
};

export const SELECTED: Project[] = [
  {
    slug: "yung-generalz",
    n: "01",
    title: "Yung Generalz",
    client: "Yung Generalz BC",
    kind: "Documentary",
    year: "2026",
    meta: "Santa Ana · 4K + 35mm",
    description:
      "A documentary on Yung Generalz Boxing Club — the wrap-and-tape rituals, the coaches, the kids who show up because the gym shows up for them.",
    cover: "gymBackUs",
    video: "ygz",
    photos: [
      "gymBackUs",
      "gymPortrait",
      "gymFront",
      "gymBackMex",
      "gymClose",
      "gymPair",
    ],
  },
  {
    slug: "su-rong",
    n: "02",
    title: "Sư Rồng",
    client: "Yee Ying Tong Association",
    kind: "Cultural documentary",
    year: "2025",
    meta: "Little Saigon · digital",
    description:
      "Lunar new year with Yee Ying Tong — the lion troupe at full leap, the troupe members backstage, the lanterns burning past midnight on Bolsa.",
    cover: "lionLeap",
    photos: [
      "lionLeap",
      "lionTemple",
      "lionCrowd",
      "yeeYingTong",
      "lantern",
    ],
  },
  {
    slug: "rush",
    n: "03",
    title: "Rush",
    client: "Sigma Alpha Epsilon",
    kind: "Short film",
    year: "2025",
    meta: "Costa Mesa · 9:16 · 00:47",
    description:
      "A short, vertical-format film cut for the SAE rush week — two friends walking home in the dark, a streetlight, a closing door.",
    cover: "rushCover",
    video: "rushSae",
    photos: [],
  },
  {
    slug: "twenty",
    n: "04",
    title: "Twenty",
    client: "Đoàn Lân Sư Rồng",
    kind: "Anniversary film",
    year: "2025",
    meta: "Garden Grove · 9:16 · 02:10",
    description:
      "Cut for the troupe's twentieth-anniversary banquet — engraved plaques, stitched silk, twenty years of muscle memory in slow motion.",
    cover: "twentyCover",
    video: "tapa",
    photos: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return SELECTED.find((p) => p.slug === slug);
}

export const PROJECT_SLUGS = SELECTED.map((p) => p.slug);

export const CLIENTS = [
  "Yung Generalz BC",
  "Yee Ying Tong Association",
  "Đoàn Lân Sư Rồng",
  "Sigma Alpha Epsilon",
  "Westside Boxing Club",
  "Bolsa Cultural Center",
  "Form Records",
  "KCRW",
  "Slow Garden Roasters",
  "Topo Designs",
];
