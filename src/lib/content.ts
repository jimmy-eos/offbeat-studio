// Shared content used across all three concept layouts.

export const STUDIO = {
  name: "OFFBEAT",
  director: "Daniel Lee",
  city: "Costa Mesa",
  region: "Orange County, California",
  address: "1149 W. 17th St, Costa Mesa, CA 92627",
  phone: "+1 (949) 555-0142",
  email: "hello@offbeat.studio",
  emailDirect: "daniel@offbeat.studio",
  hours: "Mon — Fri, 10:00 — 18:00 PT",
  founded: "2019 (MMXIX)",
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
  // photo seed used to deterministically pick a stock still
  seed: string;
};

export const SELECTED: Project[] = [
  {
    n: "01",
    title: "Tides, Ablaze",
    client: "Juno Halsey",
    kind: "Music Video",
    year: "2025",
    meta: "San Onofre · S16 + 35mm · 04:11",
    seed: "tides-ablaze",
  },
  {
    n: "02",
    title: "Interiors, No. 4",
    client: "Maren Atelier",
    kind: "Brand Film",
    year: "2025",
    meta: "Los Feliz · 35mm · 02:30",
    seed: "interiors-04",
  },
  {
    n: "03",
    title: "Nightshift",
    client: "Form Records",
    kind: "Music Video",
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
    seed: "soft-machinery-2",
  },
  {
    n: "05",
    title: "Orange County, 4 a.m.",
    client: "Self-initiated",
    kind: "Short Film",
    year: "2024",
    meta: "OC · 35mm · 12:08",
    seed: "orange-county-4am",
  },
  {
    n: "06",
    title: "Glasswork",
    client: "Nordlys Ceramics",
    kind: "Product Film",
    year: "2023",
    meta: "Studio · 35mm · 01:54",
    seed: "glasswork",
  },
];

export const ARCHIVE: Project[] = [
  { n: "07", title: "Halfway House", client: "A24 (test reel)", kind: "Narrative", year: "2023", seed: "halfway-house" },
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

// Stock image source — Lorem Picsum with deterministic seeds.
// We layer dark cinematic overlays on top to keep the on-brand mood.
export function stockImage(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

// A short open-domain mp4 used for the showreel — Google's Big Buck Bunny CDN
// (placeholder, swap with real reel before launch).
export const SHOWREEL_MP4 =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
