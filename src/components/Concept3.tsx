// Concept 03 — Reel Grid (Vyzn-flavored)
// Eight vertical film-strips as the hero. Marquees of project names. Dense,
// kinetic, video-as-architecture.

import { ARCHIVE, SELECTED, STUDIO } from "@/lib/content";
import VideoPlate from "@/components/VideoPlate";
import type { VideoTone } from "@/components/VideoPlate";

const C3 = {
  bg: "#000000",
  ink: "#FFFFFF",
  inkDim: "rgba(255,255,255,0.55)",
  inkFaint: "rgba(255,255,255,0.18)",
  rule: "rgba(255,255,255,0.10)",
};

const HERO_STRIPS: { tone: VideoTone; seed: string | number }[] = [
  { tone: "ember", seed: "c3-hero-1" },
  { tone: "bone", seed: "c3-hero-2" },
  { tone: "indigo", seed: "c3-hero-3" },
  { tone: "forest", seed: "c3-hero-4" },
  { tone: "sand", seed: "c3-hero-5" },
  { tone: "rose", seed: "c3-hero-6" },
  { tone: "ice", seed: "c3-hero-7" },
  { tone: "amber", seed: "c3-hero-8" },
];

const CONTACT_STRIPS: { tone: VideoTone; seed: string | number }[] = [
  { tone: "ember", seed: "c3-contact-1" },
  { tone: "bone", seed: "c3-contact-2" },
  { tone: "indigo", seed: "c3-contact-3" },
  { tone: "forest", seed: "c3-contact-4" },
  { tone: "sand", seed: "c3-contact-5" },
  { tone: "rose", seed: "c3-contact-6" },
  { tone: "ice", seed: "c3-contact-7" },
  { tone: "amber", seed: "c3-contact-8" },
];

const SELECTED_PAIRS: {
  tone: VideoTone;
  seed: string;
  n: string;
  title: string;
  client: string;
  kind: string;
}[] = [
  { tone: "ember", seed: SELECTED[0].seed, n: "01", title: "Tides, Ablaze", client: "Juno Halsey", kind: "Music film · 2025" },
  { tone: "bone", seed: SELECTED[1].seed, n: "02", title: "Interiors, No. 4", client: "Maren Atelier", kind: "Brand film · 2025" },
  { tone: "indigo", seed: SELECTED[2].seed, n: "03", title: "Nightshift", client: "Form Records", kind: "Music video · 2024" },
  { tone: "sand", seed: SELECTED[3].seed, n: "04", title: "Soft Machinery", client: "Kestrel Denim", kind: "Campaign · 2024" },
  { tone: "forest", seed: SELECTED[4].seed, n: "05", title: "Orange County, 4 a.m.", client: "Self-initiated", kind: "Short film · 2024" },
  { tone: "amber", seed: SELECTED[5].seed, n: "06", title: "Glasswork", client: "Nordlys Ceramics", kind: "Product film · 2023" },
];

const MARQUEE_ITEMS = [
  "Tides, Ablaze",
  "Interiors, No. 4",
  "Nightshift",
  "Soft Machinery",
  "Glasswork",
  "Orange County, 4 a.m.",
  "Halfway House",
  "Slow Garden",
];

function Nav() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px clamp(20px, 4vw, 32px)",
        fontSize: 11,
        letterSpacing: 2,
        color: C3.ink,
        textTransform: "uppercase",
      }}
    >
      <span style={{ fontWeight: 600, letterSpacing: 3 }}>
        OFFBEAT
        <sup style={{ fontSize: 8, marginLeft: 4, color: C3.inkDim }}>©</sup>
      </span>
      <div className="hidden md:flex" style={{ gap: 36, color: C3.inkDim }}>
        <span style={{ color: C3.ink }}>WORK</span>
        <span>STUDIO</span>
        <span>JOURNAL</span>
        <span>CONTACT</span>
      </div>
      <span>EN / ES</span>
    </div>
  );
}

export default function Concept3() {
  return (
    <div style={{ background: C3.bg, color: C3.ink, fontFamily: "var(--font-sans)" }}>
      {/* HERO — eight vertical strips */}
      <section
        style={{
          position: "relative",
          height: "min(980px, 100vh)",
          minHeight: 640,
          overflow: "hidden",
        }}
      >
        <Nav />

        {/* Eight strips — last 4 hidden below lg breakpoint */}
        <div
          className="grid grid-cols-4 lg:grid-cols-8"
          style={{
            position: "absolute",
            inset: 0,
            gap: 3,
          }}
        >
          {HERO_STRIPS.map((p, i) => (
            <div
              key={i}
              className={i >= 4 ? "hidden lg:block" : ""}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <VideoPlate tone={p.tone} seed={p.seed} ratio="auto" vignette={false} />
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.7) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Hero type */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
          style={{
            position: "absolute",
            left: "clamp(20px, 4vw, 32px)",
            right: "clamp(20px, 4vw, 32px)",
            bottom: 56,
            gap: 32,
            alignItems: "flex-end",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                color: C3.inkDim,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              [01] Now showing — A reel of 24 films
            </div>
            <div
              style={{
                fontSize: "clamp(48px, 9vw, 132px)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 0.92,
                color: C3.ink,
                textWrap: "pretty",
              }}
            >
              Cinematic stories
              <br />
              <span style={{ color: C3.inkDim, fontStyle: "italic", fontWeight: 400 }}>worth slowing down for.</span>
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: C3.inkDim,
              textTransform: "uppercase",
              textAlign: "right",
              lineHeight: 1.8,
              paddingBottom: 12,
            }}
          >
            COSTA MESA, CA
            <br />
            EST. MMXIX
            <br />
            <span style={{ color: C3.ink, marginTop: 6, display: "inline-block" }}>SCROLL ↓</span>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div
        style={{
          borderTop: `1px solid ${C3.rule}`,
          borderBottom: `1px solid ${C3.rule}`,
          padding: "28px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "inline-flex",
            gap: 56,
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            color: C3.ink,
            lineHeight: 1.05,
          }}
        >
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} style={{ display: "inline-flex", alignItems: "center", gap: 56, paddingRight: 56 }}>
              {MARQUEE_ITEMS.map((it, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
                  {it}
                  <span style={{ color: C3.inkFaint, fontSize: "0.6em" }}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section
        className="grid grid-cols-1 lg:grid-cols-[200px_1fr_280px]"
        style={{
          padding: "clamp(80px, 12vw, 160px) clamp(20px, 4vw, 32px) clamp(80px, 11vw, 140px)",
          gap: 64,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: 2.5, color: C3.inkDim, textTransform: "uppercase" }}>
          [02] About
          <br />
          <span style={{ color: C3.ink }}>The studio</span>
        </span>
        <p
          style={{
            fontSize: "clamp(24px, 3.5vw, 44px)",
            fontWeight: 400,
            letterSpacing: -0.8,
            lineHeight: 1.15,
            margin: 0,
            color: C3.ink,
            textWrap: "pretty",
            maxWidth: 720,
          }}
        >
          Offbeat is a six-person film &amp; photography practice in Costa Mesa, run by {STUDIO.director}. We make
          patient, deliberate work for musicians, fashion houses, and brands that prefer a long take over a fast cut.
        </p>
        <div style={{ borderTop: `1px solid ${C3.inkFaint}`, paddingTop: 16, fontSize: 12, color: C3.inkDim, lineHeight: 1.9 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>FOUNDED</span>
            <span style={{ color: C3.ink }}>2019</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>PROJECTS</span>
            <span style={{ color: C3.ink }}>32</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>CREW</span>
            <span style={{ color: C3.ink }}>6</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>BASED</span>
            <span style={{ color: C3.ink }}>Costa Mesa</span>
          </div>
        </div>
      </section>

      {/* SELECTED REEL */}
      <section style={{ padding: "0 clamp(20px, 4vw, 32px) 80px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: 2.5, color: C3.inkDim, textTransform: "uppercase" }}>
            [03] Selected work
          </span>
          <span style={{ fontSize: 11, letterSpacing: 2, color: C3.inkDim, textTransform: "uppercase" }}>
            (06) — 2024 / 2026
          </span>
        </div>

        {[0, 2, 4].map((rowStart) => {
          const row = SELECTED_PAIRS.slice(rowStart, rowStart + 2);
          return (
            <div
              key={rowStart}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: 24, marginBottom: 80 }}
            >
              {row.map((p, ci) => (
                <div key={p.n}>
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <VideoPlate tone={p.tone} seed={p.seed} ratio="16/9" />
                    {rowStart === 0 && ci === 0 && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: 16,
                          left: 18,
                          padding: "8px 14px",
                          borderRadius: 999,
                          background: "rgba(0,0,0,0.5)",
                          backdropFilter: "blur(6px)",
                          border: `1px solid ${C3.inkFaint}`,
                          fontSize: 11,
                          letterSpacing: 1.4,
                          color: C3.ink,
                          textTransform: "uppercase",
                        }}
                      >
                        VIEW PROJECT →
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "grid",
                      gridTemplateColumns: "40px 1fr auto",
                      gap: 16,
                      alignItems: "baseline",
                    }}
                  >
                    <span style={{ fontSize: 11, color: C3.inkDim }}>{p.n}/</span>
                    <div>
                      <div
                        style={{
                          fontSize: "clamp(18px, 2vw, 22px)",
                          fontWeight: 500,
                          color: C3.ink,
                          letterSpacing: -0.4,
                        }}
                      >
                        {p.title}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: C3.inkDim,
                          letterSpacing: 1.4,
                          textTransform: "uppercase",
                          marginTop: 4,
                        }}
                      >
                        {p.kind}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        color: C3.inkDim,
                        letterSpacing: 1.4,
                        textTransform: "uppercase",
                        textAlign: "right",
                      }}
                    >
                      {p.client}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </section>

      {/* SECOND MARQUEE — italic, opposite direction */}
      <div
        style={{
          borderTop: `1px solid ${C3.rule}`,
          padding: "24px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          className="marquee-track-rev"
          style={{
            display: "inline-flex",
            gap: 56,
            fontSize: "clamp(22px, 3vw, 36px)",
            color: C3.inkDim,
            fontStyle: "italic",
          }}
        >
          {Array.from({ length: 3 }).map((_, dup) => (
            <span key={dup} style={{ display: "inline-flex", alignItems: "center", gap: 56, paddingRight: 56 }}>
              A film &amp; photography practice — Costa Mesa, California — Now booking Q3 / Q4 2026
              <span style={{ color: C3.inkFaint }}>—</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES — over faint video band */}
      <section style={{ position: "relative", padding: "clamp(80px, 12vw, 160px) clamp(20px, 4vw, 32px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
          <VideoPlate tone="noir" seed="c3-services" ratio="auto" vignette={false} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.85))",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]" style={{ gap: 64, marginBottom: 56 }}>
            <span style={{ fontSize: 11, letterSpacing: 2.5, color: C3.inkDim, textTransform: "uppercase" }}>
              [04] Services
            </span>
            <span
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 400,
                color: C3.ink,
                maxWidth: 700,
                lineHeight: 1.4,
              }}
            >
              Six people, three rooms, one philosophy. Direction, photography, post — under one roof.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 48 }}>
            {[
              ["I", "Direction", "Music videos, brand films, narrative shorts."],
              ["II", "Photography", "Editorial portraits, lookbooks, products."],
              ["III", "Post & Color", "Edit, conform, color, sound."],
            ].map(([n, t, d], i) => (
              <div key={i} style={{ borderTop: `1px solid ${C3.inkFaint}`, paddingTop: 20 }}>
                <span style={{ fontSize: 13, color: C3.inkDim, fontStyle: "italic" }}>{n}</span>
                <div
                  style={{
                    fontSize: "clamp(22px, 2.6vw, 28px)",
                    fontWeight: 500,
                    color: C3.ink,
                    marginTop: 16,
                    marginBottom: 12,
                    letterSpacing: -0.5,
                  }}
                >
                  {t}
                </div>
                <div style={{ fontSize: 14, color: C3.inkDim, lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDEX TABLE */}
      <section
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 32px)",
          borderTop: `1px solid ${C3.rule}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: 2.5, color: C3.inkDim, textTransform: "uppercase" }}>
            [05] Archive
          </span>
          <span style={{ fontSize: 11, letterSpacing: 2, color: C3.inkDim, textTransform: "uppercase" }}>
            (32) entries · 2019 — 2026
          </span>
        </div>
        <div style={{ borderTop: `1px solid ${C3.rule}` }}>
          {ARCHIVE.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[40px_1fr_60px] md:grid-cols-[60px_1.4fr_1fr_1fr_60px]"
              style={{
                padding: "24px 0",
                borderBottom: `1px solid ${C3.rule}`,
                fontSize: 13,
                alignItems: "baseline",
                gap: 12,
              }}
            >
              <span style={{ color: C3.inkDim, fontSize: 11 }}>{p.n}/</span>
              <span
                style={{
                  fontSize: "clamp(18px, 2vw, 22px)",
                  fontWeight: 500,
                  color: C3.ink,
                  letterSpacing: -0.4,
                }}
              >
                {p.title}
              </span>
              <span className="hidden md:inline" style={{ color: C3.inkDim }}>
                {p.client}
              </span>
              <span
                className="hidden md:inline"
                style={{
                  fontSize: 11,
                  color: C3.inkDim,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                }}
              >
                {p.kind}
              </span>
              <span style={{ fontSize: 11, color: C3.inkDim, letterSpacing: 1.4, textAlign: "right" }}>
                {p.year} ↗
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT — 8-strip echo, "Tell us a story." */}
      <section
        style={{
          position: "relative",
          height: "min(760px, 100vh)",
          minHeight: 560,
          overflow: "hidden",
          borderTop: `1px solid ${C3.rule}`,
        }}
      >
        <div
          className="grid grid-cols-4 lg:grid-cols-8"
          style={{
            position: "absolute",
            inset: 0,
            gap: 3,
          }}
        >
          {CONTACT_STRIPS.map((p, i) => (
            <div
              key={i}
              className={i >= 4 ? "hidden lg:block" : ""}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <VideoPlate tone={p.tone} seed={p.seed} ratio="auto" vignette={false} />
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.85))",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 32,
            left: "clamp(20px, 4vw, 32px)",
            right: "clamp(20px, 4vw, 32px)",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            letterSpacing: 2,
            color: C3.ink,
            textTransform: "uppercase",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>[06] Contact</span>
          <span>NOW BOOKING — Q3 / Q4 2026</span>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <a
            href={`mailto:${STUDIO.email}`}
            style={{
              fontSize: "clamp(56px, 13vw, 188px)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 0.9,
              color: C3.ink,
              textAlign: "center",
              textDecoration: "none",
              textShadow: "0 6px 40px rgba(0,0,0,0.4)",
            }}
          >
            Tell us a story.
          </a>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            position: "absolute",
            bottom: 32,
            left: "clamp(20px, 4vw, 32px)",
            right: "clamp(20px, 4vw, 32px)",
            paddingTop: 24,
            borderTop: `1px solid ${C3.inkFaint}`,
            gap: 32,
            fontSize: 12,
            color: C3.ink,
            lineHeight: 1.7,
          }}
        >
          {[
            ["Email", STUDIO.email],
            ["Studio", "1149 W. 17th St\nCosta Mesa, CA"],
            ["Direct", `${STUDIO.phone}\nMon–Fri · 10–6 PT`],
            ["Elsewhere", `IG ${STUDIO.igHandle}\nVimeo ${STUDIO.vimeoHandle}`],
          ].map(([t, d]) => (
            <div key={t}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: C3.inkDim, textTransform: "uppercase", marginBottom: 8 }}>
                {t}
              </div>
              <div style={{ whiteSpace: "pre-line" }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          padding: "20px clamp(20px, 4vw, 32px)",
          fontSize: 10,
          letterSpacing: 2,
          color: C3.inkDim,
          textTransform: "uppercase",
          gap: 8,
        }}
      >
        <span style={{ color: C3.ink }}>OFFBEAT</span>
        <span className="hidden md:inline text-center">Costa Mesa, CA</span>
        <span className="hidden md:inline text-center" style={{ fontVariantNumeric: "tabular-nums" }}>
          01:26:33 PM
        </span>
        <span className="text-right">© 2026 — V. 7</span>
      </footer>
    </div>
  );
}
