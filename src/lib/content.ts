// Shared content used across all four concept layouts.

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

export type Project = {
  n: string;
  title: string;
  client: string;
  kind: string;
  year: string;
  meta?: string;
  seed: string;
};

// Selected work — six pieces from the last ~24 months (per v2 handoff)
export const SELECTED: Project[] = [
  {
    n: "01",
    title: "Tides, Ablaze",
    client: "Juno Halsey · Form Records",
    kind: "Music film",
    year: "2025",
    meta: "San Onofre · S16 + 35mm · 04:11",
    seed: "tides-ablaze",
  },
  {
    n: "02",
    title: "Interiors, No. 4",
    client: "Maren Atelier",
    kind: "Brand film",
    year: "2025",
    meta: "Los Feliz · 35mm · 02:30",
    seed: "interiors-04",
  },
  {
    n: "03",
    title: "Nightshift",
    client: "Form Records · The Halflight",
    kind: "Music video",
    year: "2024",
    meta: "Long Beach · Digital · 03:48",
    seed: "nightshift",
  },
  {
    n: "04",
    title: "Soft Machinery",
    client: "Kestrel Denim",
    kind: "Campaign",
    year: "2024",
    meta: "14 frames + 16mm motion",
    seed: "soft-machinery",
  },
  {
    n: "05",
    title: "Orange County, 4 a.m.",
    client: "Self-initiated",
    kind: "Short film",
    year: "2024",
    meta: "OC · 35mm · 12:08",
    seed: "orange-county-4am",
  },
  {
    n: "06",
    title: "Glasswork",
    client: "Nordlys Ceramics",
    kind: "Product film",
    year: "2023",
    meta: "Studio · 35mm · 01:54",
    seed: "glasswork",
  },
];

export const ARCHIVE: Project[] = [
  { n: "07", title: "Halfway House", client: "A24 (test)", kind: "Narrative", year: "2023", seed: "halfway-house" },
  { n: "08", title: "Topo × Halfway", client: "Topo Designs", kind: "Campaign", year: "2023", seed: "topo-halfway" },
  { n: "09", title: "Slow Garden", client: "Slow Garden Roasters", kind: "Brand Film", year: "2022", seed: "slow-garden" },
  { n: "10", title: "The Quiet Coast", client: "KCRW", kind: "Editorial", year: "2022", seed: "quiet-coast" },
  { n: "11", title: "Letters Home", client: "Postscript", kind: "Brand Film", year: "2021", seed: "letters-home" },
  { n: "12", title: "Foundry, Late", client: "Foundry Bicycle Co.", kind: "Product Film", year: "2021", seed: "foundry-late" },
];

export const CLIENTS = [
  "A24",
  "Form Records",
  "Foundry Bicycle Co.",
  "Halfway House",
  "Juno Halsey",
  "KCRW",
  "Kestrel Denim",
  "Maren Atelier",
  "Nordlys Ceramics",
  "Postscript",
  "Slow Garden Roasters",
  "Topo Designs",
];

// Stock images — Lorem Picsum with deterministic seeds.
export function stockImage(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

// ---------------------------------------------------------------------------
// Stock videos
// All hosted on free CC0 / open-license CDNs (Mixkit + Pexels). Each entry is
// a well-cropped cinematic clip suitable for a moody film-studio aesthetic.
// Verified to serve Range requests (HTTP 206) — required for streaming <video>.
// ---------------------------------------------------------------------------

export type StockVideo = {
  src: string;
  poster: string; // poster image seed for picsum
};

const mixkit = (id: number, posterSeed: string): StockVideo => ({
  src: `https://assets.mixkit.co/videos/${id}/${id}-720.mp4`,
  poster: posterSeed,
});

const pexels = (id: number, quality: string, posterSeed: string): StockVideo => ({
  src: `https://videos.pexels.com/video-files/${id}/${id}-${quality}.mp4`,
  poster: posterSeed,
});

// Curated — 16 verified clips. Mix of Mixkit (smaller, faster) + Pexels (richer
// HD). Adjacent seeds will pull different clips so the page doesn't look
// repetitive.
export const STOCK_VIDEOS: StockVideo[] = [
  mixkit(4837, "v-4837"),
  mixkit(5028, "v-5028"),
  mixkit(5172, "v-5172"),
  mixkit(5187, "v-5187"),
  mixkit(6045, "v-6045"),
  mixkit(6049, "v-6049"),
  mixkit(6147, "v-6147"),
  mixkit(6391, "v-6391"),
  mixkit(7035, "v-7035"),
  mixkit(7036, "v-7036"),
  mixkit(8243, "v-8243"),
  mixkit(9103, "v-9103"),
  mixkit(13127, "v-13127"),
  mixkit(16927, "v-16927"),
  pexels(5752729, "hd_1920_1080_30fps", "v-5752729"),
  pexels(1721294, "hd_1920_1080_25fps", "v-1721294"),
  pexels(2034115, "hd_1920_1080_30fps", "v-2034115"),
  pexels(1739010, "hd_1920_1080_30fps", "v-1739010"),
];

function hashSeed(seed: string | number): number {
  if (typeof seed === "number") return Math.abs(seed);
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function stockVideo(seed: string | number, offset = 0): StockVideo {
  const idx = (hashSeed(seed) + offset) % STOCK_VIDEOS.length;
  return STOCK_VIDEOS[idx];
}

// Hero showreel — the most prominent clip on each concept's hero. Verified
// substantial Pexels HD clip (~14MB).
export const SHOWREEL: StockVideo = pexels(1721294, "hd_1920_1080_25fps", "showreel-poster");
