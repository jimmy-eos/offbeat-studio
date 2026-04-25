// Concept 04 — Atelier Mono
// Off-white field. Magazine spreads. Monospace captions. Oxblood accent.
// The quiet alt — for the editorial portrait side. Confidence through restraint.

import { STUDIO } from "@/lib/content";
import VideoPlate from "@/components/VideoPlate";
import type { VideoTone } from "@/components/VideoPlate";

const C4 = {
  paper: "#F2EEE6",
  ink: "#1A1815",
  inkDim: "#6B655B",
  inkFaint: "#B8B0A2",
  rule: "#D9D2C4",
  accent: "#7A2E1F",
};

function MetaRow({ left, right }: { left: string; right: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: C4.inkDim,
        padding: "8px 0",
        borderBottom: `1px solid ${C4.rule}`,
        gap: 16,
      }}
    >
      <span>{left}</span>
      <span style={{ color: C4.ink }}>{right}</span>
    </div>
  );
}

const SPREADS: {
  n: string;
  tone: VideoTone;
  seed: string;
  ratio: string;
  side: "left" | "right";
  title: string;
  client: string;
  kind: string;
  year: string;
  desc: string;
  credits: string[];
}[] = [
  {
    n: "01",
    tone: "ember",
    seed: "tides-c4",
    ratio: "3/4",
    side: "left",
    title: "Tides, Ablaze",
    client: "Juno Halsey · Form Records",
    kind: "Music film",
    year: "2025",
    desc:
      "A four-minute single take through an empty house at dusk, scored to a song about leaving slowly. Shot on 35mm, finished photochemically.",
    credits: ["Direction · Daniel Lee", "DP · Hana Park", "Color · Foundry"],
  },
  {
    n: "02",
    tone: "sand",
    seed: "interiors-c4",
    ratio: "4/5",
    side: "right",
    title: "Interiors, No. 4",
    client: "Maren Atelier",
    kind: "Brand film",
    year: "2025",
    desc:
      "A meditation on the rooms a designer keeps. Long, slow pushes through Maren's atelier — fabric, plaster, brass — set to ambient cello.",
    credits: ["Direction · Daniel Lee", "Photography · M. Adeyemi", "Sound · The Quiet Library"],
  },
  {
    n: "03",
    tone: "indigo",
    seed: "nightshift-c4",
    ratio: "3/4",
    side: "left",
    title: "Nightshift",
    client: "Form Records · The Halflight",
    kind: "Music video",
    year: "2024",
    desc:
      "Single-take, single-light: a band loading out of a venue at 3 a.m., shot from a chase car driving at five miles an hour.",
    credits: ["Direction · Daniel Lee", "DP · Hana Park"],
  },
  {
    n: "04",
    tone: "rose",
    seed: "soft-machinery-c4",
    ratio: "4/5",
    side: "right",
    title: "Soft Machinery",
    client: "Kestrel Denim",
    kind: "Campaign · 4 films",
    year: "2024",
    desc:
      "Four short films and a stills suite for Kestrel's Spring '24 indigo capsule, built around the idea that a good pair of jeans should look like it knows you.",
    credits: ["Direction · Daniel Lee", "Stills · M. Adeyemi"],
  },
];

function Nav() {
  return (
    <div
      className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-3"
      style={{
        alignItems: "center",
        padding: "32px clamp(20px, 5vw, 56px)",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: 1.8,
        textTransform: "uppercase",
        color: C4.inkDim,
        gap: 12,
      }}
    >
      <span>Costa Mesa, CA · MMXIX</span>
      <span
        style={{
          textAlign: "center",
          fontFamily: "var(--font-serif)",
          fontSize: 28,
          color: C4.ink,
          letterSpacing: 0,
          textTransform: "none",
          fontStyle: "italic",
        }}
      >
        Offbeat
      </span>
      <span style={{ textAlign: "right" }}>
        <span style={{ color: C4.ink, marginRight: 28 }} className="hidden md:inline">
          Work
        </span>
        <span style={{ marginRight: 28 }} className="hidden md:inline">
          Atelier
        </span>
        <span>Contact</span>
      </span>
    </div>
  );
}

export default function Concept4() {
  return (
    <div
      style={{
        background: C4.paper,
        color: C4.ink,
        fontFamily: "var(--font-sans)",
      }}
    >
      <Nav />

      {/* HERO */}
      <section
        className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]"
        style={{
          padding: "48px clamp(20px, 5vw, 56px) clamp(48px, 9vw, 96px)",
          gap: 80,
          alignItems: "flex-start",
        }}
      >
        <div style={{ paddingTop: 64 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: 2,
              color: C4.inkDim,
              textTransform: "uppercase",
              marginBottom: 36,
            }}
          >
            <span style={{ color: C4.accent }}>●</span>&nbsp;&nbsp;Volume Seven · Spring MMXXVI
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(56px, 9vw, 132px)",
              fontWeight: 400,
              letterSpacing: -2,
              lineHeight: 0.92,
              margin: 0,
              color: C4.ink,
              textWrap: "pretty",
            }}
          >
            A photograph,
            <br />
            <em style={{ color: C4.accent }}>patiently made.</em>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: 1.55,
              color: C4.inkDim,
              marginTop: 48,
              maxWidth: 480,
              fontWeight: 400,
              textWrap: "pretty",
            }}
          >
            Offbeat is a small film &amp; photography practice in Costa Mesa, run by {STUDIO.director}. We make slow,
            deliberate work for musicians, fashion houses, and brands that prefer a long take over a fast cut.
          </p>

          <div style={{ marginTop: 56, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href={`mailto:${STUDIO.email}`}
              style={{
                padding: "14px 28px",
                border: `1px solid ${C4.ink}`,
                fontSize: 13,
                letterSpacing: 1,
                color: C4.ink,
                borderRadius: 999,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Begin a project →
            </a>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: 1.5,
                color: C4.inkDim,
                textTransform: "uppercase",
              }}
            >
              or — view the index ↓
            </span>
          </div>
        </div>

        {/* hero plate */}
        <div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <VideoPlate tone="bone" seed="c4-hero" ratio="3/4" />
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: 1.5,
                color: "#FFF",
                textTransform: "uppercase",
                padding: "4px 8px",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              Plate 01 / 24
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: 24,
              padding: "14px 0",
              borderBottom: `1px solid ${C4.rule}`,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: C4.inkDim,
            }}
          >
            <span>FIG. 01</span>
            <span
              style={{
                color: C4.ink,
                textTransform: "none",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 14,
                letterSpacing: 0,
              }}
            >
              Maren, late afternoon — Atelier No. 4 — 35mm film
            </span>
            <span>Costa Mesa · &rsquo;25</span>
          </div>
        </div>
      </section>

      {/* ALMANAC STATS STRIP */}
      <div
        className="grid grid-cols-2 md:grid-cols-5"
        style={{
          borderTop: `1px solid ${C4.ink}`,
          borderBottom: `1px solid ${C4.ink}`,
          padding: "20px clamp(20px, 5vw, 56px)",
          gap: 32,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: C4.inkDim,
        }}
      >
        <div>
          <span style={{ color: C4.ink, fontSize: 13 }}>32</span>&nbsp;&nbsp;Films &amp; series
        </div>
        <div>
          <span style={{ color: C4.ink, fontSize: 13 }}>06</span>&nbsp;&nbsp;Studio members
        </div>
        <div>
          <span style={{ color: C4.ink, fontSize: 13 }}>2019</span>&nbsp;&nbsp;Founded
        </div>
        <div className="hidden md:block">
          <span style={{ color: C4.ink, fontSize: 13 }}>3</span>&nbsp;&nbsp;Resolve suites
        </div>
        <div className="md:text-right col-span-2 md:col-span-1">
          <span style={{ color: C4.accent }}>●</span>&nbsp;&nbsp;Booking Q3 / Q4 &rsquo;26
        </div>
      </div>

      {/* CHAPTER I */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr]"
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 5vw, 56px) 56px",
          gap: 56,
          alignItems: "baseline",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: 2,
              color: C4.inkDim,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Chapter I
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontStyle: "italic",
              lineHeight: 0.95,
              color: C4.ink,
              fontWeight: 400,
            }}
          >
            Selected
            <br />
            work.
          </div>
        </div>
        <div style={{ paddingTop: 16 }}>
          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              lineHeight: 1.6,
              color: C4.inkDim,
              maxWidth: 540,
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Six pieces from the last twenty-four months. We choose work the way a curator does — by what holds a room,
            not what trends. Press and full case studies are available on request.
          </p>
        </div>
      </div>

      {/* WORK — alternating spreads */}
      {SPREADS.map((p, i) => {
        const left = p.side === "left";
        return (
          <div key={i} style={{ padding: "0 clamp(20px, 5vw, 56px) clamp(80px, 12vw, 140px)" }}>
            <div
              className="grid grid-cols-1 lg:grid-cols-2"
              style={{ gap: 56, alignItems: "flex-start" }}
            >
              {/* image side */}
              <div className={left ? "lg:order-1" : "lg:order-2"}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <VideoPlate tone={p.tone} seed={p.seed} ratio={p.ratio} />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 24,
                    padding: "14px 0",
                    borderBottom: `1px solid ${C4.rule}`,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: C4.inkDim,
                  }}
                >
                  <span>FIG. {String(i + 2).padStart(2, "0")}</span>
                  <span
                    style={{
                      color: C4.ink,
                      textTransform: "none",
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: 14,
                      letterSpacing: 0,
                    }}
                  >
                    {p.title} — {p.client.split(" · ")[0]}
                  </span>
                  <span>{p.year}</span>
                </div>
              </div>

              {/* text side */}
              <div
                className={left ? "lg:order-2" : "lg:order-1"}
                style={{ paddingTop: left ? 24 : 0 }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: 2,
                    color: C4.inkDim,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  No. {p.n} · {p.kind}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(40px, 5vw, 64px)",
                    fontWeight: 400,
                    lineHeight: 0.95,
                    color: C4.ink,
                    marginBottom: 24,
                    letterSpacing: -0.8,
                  }}
                >
                  {p.title.split(",")[0]}
                  {p.title.includes(",") && (
                    <span style={{ fontStyle: "italic", color: C4.accent }}>
                      ,{p.title.split(",")[1]}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    color: C4.inkDim,
                    textTransform: "uppercase",
                    marginBottom: 32,
                  }}
                >
                  {p.client}
                </div>
                <p
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 17px)",
                    lineHeight: 1.6,
                    color: C4.ink,
                    margin: 0,
                    marginBottom: 32,
                    maxWidth: 480,
                    textWrap: "pretty",
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    borderTop: `1px solid ${C4.rule}`,
                    paddingTop: 16,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: 1.5,
                    color: C4.inkDim,
                    textTransform: "uppercase",
                  }}
                >
                  {p.credits.map((c, ci) => (
                    <div key={ci} style={{ padding: "4px 0" }}>
                      {c}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 40,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: 1.5,
                    color: C4.ink,
                    textTransform: "uppercase",
                    borderBottom: `1px solid ${C4.ink}`,
                    display: "inline-block",
                    paddingBottom: 4,
                  }}
                >
                  Read the case study →
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* CHAPTER II — atelier */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_2fr]"
        style={{
          borderTop: `1px solid ${C4.ink}`,
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 5vw, 56px) 56px",
          gap: 56,
          alignItems: "baseline",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: 2,
              color: C4.inkDim,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Chapter II
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontStyle: "italic",
              lineHeight: 0.95,
              color: C4.ink,
              fontWeight: 400,
            }}
          >
            The
            <br />
            atelier.
          </div>
        </div>
        <div style={{ paddingTop: 16 }}>
          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              lineHeight: 1.6,
              color: C4.inkDim,
              maxWidth: 540,
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Six people, three rooms, one philosophy. Direction, photography, and post under one roof — so the film you saw
            at brief is the film we deliver at the end.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ padding: "0 clamp(20px, 5vw, 56px) 80px" }}>
        <div style={{ borderTop: `1px solid ${C4.ink}` }} />
        {[
          ["I.", "Direction", "Music videos · brand films · narrative shorts", "→"],
          ["II.", "Photography", "Editorial portraits · lookbooks · products", "→"],
          ["III.", "Post & Color", "Edit · conform · color · sound", "→"],
        ].map(([n, t, d, a], i) => (
          <div
            key={i}
            className="grid grid-cols-[40px_1fr_40px] md:grid-cols-[60px_280px_1fr_60px]"
            style={{
              gap: 32,
              padding: "28px 0",
              alignItems: "baseline",
              borderBottom: `1px solid ${C4.rule}`,
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 2, color: C4.inkDim }}>{n}</span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.4vw, 36px)",
                fontStyle: "italic",
                color: C4.ink,
                lineHeight: 1,
              }}
            >
              {t}
            </span>
            <span className="hidden md:inline" style={{ fontSize: 14, color: C4.inkDim, lineHeight: 1.5 }}>
              {d}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: C4.ink, textAlign: "right" }}>{a}</span>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <section
        style={{
          borderTop: `1px solid ${C4.ink}`,
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 5vw, 56px) 56px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]" style={{ gap: 56 }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: 2,
                color: C4.inkDim,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Chapter III · Colophon
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(48px, 7vw, 88px)",
                fontStyle: "italic",
                lineHeight: 0.95,
                color: C4.ink,
                fontWeight: 400,
              }}
            >
              Begin a
              <br />
              project.
            </div>
          </div>
          <div style={{ paddingTop: 16 }}>
            <p
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: 1.6,
                color: C4.ink,
                maxWidth: 540,
                margin: 0,
                marginBottom: 48,
                textWrap: "pretty",
              }}
            >
              The best briefs come in early — when there&apos;s still room to disagree. Send a sentence, a song, or a
              mood. We&apos;ll write back within two working days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 56 }}>
              <div>
                <MetaRow left="Email" right={STUDIO.email} />
                <MetaRow left="Phone" right={STUDIO.phone} />
                <MetaRow left="Mon — Fri" right="10 a.m. — 6 p.m. PT" />
              </div>
              <div>
                <MetaRow left="Studio" right="1149 W. 17th St" />
                <MetaRow left="" right="Costa Mesa, CA 92627" />
                <MetaRow left="Instagram" right={STUDIO.igHandle} />
              </div>
            </div>

            <div style={{ marginTop: 48 }}>
              <a
                href={`mailto:${STUDIO.email}`}
                style={{
                  padding: "16px 32px",
                  background: C4.ink,
                  color: C4.paper,
                  fontSize: 13,
                  letterSpacing: 1,
                  fontWeight: 500,
                  borderRadius: 999,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Send a brief →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COLOPHON FOOTER */}
      <footer
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          borderTop: `1px solid ${C4.ink}`,
          padding: "24px clamp(20px, 5vw, 56px)",
          gap: 32,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: C4.inkDim,
        }}
      >
        <span style={{ color: C4.ink }}>OFFBEAT — Vol. 7</span>
        <span className="hidden md:inline text-center">Set in Instrument Serif &amp; Inter</span>
        <span className="hidden md:inline text-center" style={{ fontVariantNumeric: "tabular-nums" }}>
          01:26:33 PM PT
        </span>
        <span className="text-right">© Offbeat MMXXVI</span>
      </footer>
    </div>
  );
}
