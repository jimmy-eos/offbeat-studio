// Concept 03 — Oversized Portrait (Lurais-flavored)
// Pure black, MASSIVE white display sans overlapping a giant cinematic portrait.

import { ARCHIVE, CLIENTS, SELECTED, STUDIO, stockImage } from "@/lib/content";

const C3 = {
  black: "#070708",
  black2: "#0E0E10",
  white: "#FFFFFF",
  whiteDim: "rgba(255,255,255,0.55)",
  whiteFaint: "rgba(255,255,255,0.15)",
  rule: "rgba(255,255,255,0.12)",
  amber: "#FF7A1A",
  amberSoft: "#FFB347",
};

type Tone = "amber" | "cool" | "crimson" | "moss";

const PALETTES: Record<Tone, { glow: string; glow2: string; tint: string }> = {
  amber: { glow: "#FF7A1A", glow2: "#FFB347", tint: "rgba(42,20,5,0.45)" },
  cool: { glow: "#88C8FF", glow2: "#3FA8FF", tint: "rgba(12,26,42,0.45)" },
  crimson: { glow: "#FF3366", glow2: "#E840A6", tint: "rgba(44,8,16,0.45)" },
  moss: { glow: "#88FFB0", glow2: "#3FA88F", tint: "rgba(10,26,16,0.45)" },
};

function C3Portrait({
  src,
  ratio = "4/5",
  tone = "amber",
  fill = false,
  withTrace = true,
}: {
  src: string;
  ratio?: string;
  tone?: Tone;
  fill?: boolean;
  withTrace?: boolean;
}) {
  const p = PALETTES[tone];
  return (
    <div
      style={{
        aspectRatio: fill ? undefined : ratio,
        position: fill ? "absolute" : "relative",
        inset: fill ? 0 : undefined,
        width: fill ? "100%" : undefined,
        height: fill ? "100%" : undefined,
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "saturate(0.9) contrast(1.05) brightness(0.7)",
        }}
      />
      {/* tone wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 70% 90% at 55% 45%, ${p.tint} 0%, rgba(4,4,5,0.6) 60%, rgba(3,3,5,0.85) 100%)`,
          mixBlendMode: "multiply",
        }}
      />
      {/* warm glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 22% 30% at 55% 40%, ${p.glow}66 0%, transparent 70%), radial-gradient(ellipse 14% 22% at 56% 38%, ${p.glow2}aa 0%, transparent 80%)`,
          mixBlendMode: "screen",
        }}
      />
      {/* neon trace — Lurais flourish */}
      {withTrace && (
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: "screen" }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M 8 28 Q 30 18, 52 36 T 92 50" stroke={p.glow} strokeWidth="0.4" fill="none" opacity="0.85" />
          <path
            d="M 8 28 Q 30 18, 52 36 T 92 50"
            stroke={p.glow2}
            strokeWidth="1.2"
            fill="none"
            opacity="0.4"
            filter="blur(2px)"
          />
        </svg>
      )}
      {/* grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          background:
            "repeating-radial-gradient(circle at 31% 47%, transparent 0 1px, rgba(255,255,255,0.025) 1px 2px)",
        }}
      />
      {/* vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}

export default function Concept3() {
  const works = SELECTED.slice(0, 4).map((p, i) => ({
    ...p,
    n: `/${p.n}`,
    tone: (["amber", "crimson", "cool", "moss"] as Tone[])[i],
  }));

  const archive = SELECTED.slice(4).concat(ARCHIVE.slice(0, 3)).map((p) => ({ ...p, n: `/${p.n}` }));

  return (
    <div
      style={{
        background: C3.black,
        color: C3.white,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.4,
        position: "relative",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "min(1080px, 100vh)",
          minHeight: 680,
          overflow: "hidden",
        }}
      >
        <C3Portrait src={stockImage("offbeat-hero-c3", 2000, 1500)} tone="amber" fill />

        {/* TOP CHROME */}
        <div
          className="grid grid-cols-3"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: "40px clamp(20px, 5vw, 56px)",
            alignItems: "start",
            zIndex: 3,
            fontSize: 12,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            lineHeight: 1.7,
          }}
        >
          <div>
            <div style={{ fontWeight: 600, marginBottom: 16, letterSpacing: 2 }}>OFFBEAT</div>
            <div style={{ color: C3.whiteDim }}>Director</div>
            <div style={{ color: C3.whiteDim }}>Photographer</div>
            <div style={{ color: C3.whiteDim }}>{STUDIO.director}</div>
          </div>
          <div style={{ textAlign: "center" }} className="hidden md:block">
            <span style={{ color: C3.whiteDim }}>{STUDIO.email.toUpperCase()}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: C3.whiteDim }}>Costa Mesa /</div>
            <div>16 : 42 PT</div>
          </div>
        </div>

        {/* MASSIVE DISPLAY */}
        <div
          style={{
            position: "absolute",
            left: "clamp(20px, 5vw, 56px)",
            right: "clamp(20px, 5vw, 56px)",
            bottom: 56,
            zIndex: 2,
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[160px_1fr]"
            style={{ gap: 24, alignItems: "flex-end" }}
          >
            <div>
              <div style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: -2, lineHeight: 1 }}>/26</div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: C3.whiteDim,
                  marginTop: 8,
                }}
              >
                Selected Projects
              </div>
            </div>
            <div
              style={{
                fontSize: "clamp(72px, 16vw, 220px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.86,
                color: C3.white,
                textAlign: "left",
              }}
            >
              MOTION
              <br />
              PORTFOLIO
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginTop: 24,
              fontSize: 11,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: C3.whiteDim,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span>PORTFOLIO &nbsp;/&nbsp; ISSUE 07 &nbsp;/&nbsp; SS·MMXXVI</span>
            <span>↓</span>
            <span>EST. MMXIX &nbsp;/&nbsp; ORANGE COUNTY, CA</span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div
        style={{
          borderTop: `1px solid ${C3.rule}`,
          borderBottom: `1px solid ${C3.rule}`,
          padding: "14px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: 12,
          letterSpacing: 2,
          color: C3.whiteDim,
          textTransform: "uppercase",
        }}
      >
        <div className="marquee-track" style={{ display: "inline-flex", gap: 0 }}>
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} style={{ paddingRight: 32 }}>
              ✦ CURRENTLY BOOKING Q3 — Q4 / 2026 ✦ TWO SLOTS REMAIN ✦ NEW: TIDES, ABLAZE — JUNO HALSEY ✦ NEW: INTERIORS,
              NO. 4 — MAREN ATELIER ✦ CURRENTLY BOOKING Q3 — Q4 / 2026 &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section style={{ padding: "clamp(80px, 12vw, 160px) clamp(20px, 5vw, 56px) clamp(60px, 9vw, 120px)" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
          style={{ gap: 56, alignItems: "baseline", marginBottom: 0 }}
        >
          <h2
            style={{
              fontSize: "clamp(34px, 6vw, 84px)",
              fontWeight: 500,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              margin: 0,
              textWrap: "pretty",
              maxWidth: 1100,
            }}
          >
            We make{" "}
            <em style={{ fontWeight: 400, color: C3.amber, fontStyle: "normal" }}>moving image</em> for the people building
            things worth pointing a camera at — musicians, fashion houses, and the brands that don&apos;t waste your time.
          </h2>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C3.whiteDim,
              textAlign: "right",
              minWidth: 200,
            }}
          >
            ABOUT /<br />
            (01)
          </div>
        </div>
      </section>

      {/* WORK */}
      <div style={{ borderTop: `1px solid ${C3.rule}` }}>
        {works.map((p, i) => (
          <article
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              padding: "64px clamp(20px, 5vw, 56px)",
              borderBottom: `1px solid ${C3.rule}`,
              gap: 40,
              alignItems: "center",
              background: i % 2 === 0 ? C3.black : C3.black2,
            }}
          >
            {/* portrait */}
            <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
              <C3Portrait src={stockImage(p.seed, 1100, 1375)} ratio="4/5" tone={p.tone} />
            </div>
            {/* type side */}
            <div
              className={i % 2 === 0 ? "lg:order-2" : "lg:order-1"}
              style={{ padding: i % 2 === 0 ? "0 0 0 0" : "0" }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
                <span style={{ fontSize: 36, fontWeight: 500, letterSpacing: -1, color: C3.amber }}>{p.n}</span>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: C3.whiteDim,
                  }}
                >
                  {p.kind} — {p.year}
                </span>
              </div>
              <div
                style={{
                  fontSize: "clamp(44px, 8vw, 110px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.92,
                  color: C3.white,
                  textTransform: "uppercase",
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: `1px solid ${C3.rule}`,
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: C3.whiteDim }}>For</div>
                  <div style={{ fontSize: 22, fontWeight: 500, marginTop: 4 }}>{p.client}</div>
                </div>
                <div style={{ fontSize: 12, letterSpacing: 1.5, color: C3.whiteDim, textAlign: "right" }}>
                  {p.meta}
                  <br />
                  <span style={{ color: C3.white, marginTop: 8, display: "inline-block" }}>VIEW PROJECT &nbsp;→</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ARCHIVE */}
      <section style={{ padding: "clamp(60px, 9vw, 120px) clamp(20px, 5vw, 56px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 800,
              letterSpacing: -3,
              margin: 0,
              lineHeight: 1,
            }}
          >
            ARCHIVE
          </h2>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C3.whiteDim,
              textAlign: "right",
            }}
          >
            (32) PROJECTS
            <br />
            2019 — 2026
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C3.rule}` }}>
          {archive.slice(0, 5).map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_240px_160px_80px]"
              style={{
                padding: "28px 0",
                borderBottom: `1px solid ${C3.rule}`,
                alignItems: "baseline",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 500, color: C3.amber, letterSpacing: -0.3 }}>{p.n}</span>
              <span
                style={{
                  fontSize: "clamp(24px, 3.6vw, 40px)",
                  fontWeight: 700,
                  letterSpacing: -1.2,
                  textTransform: "uppercase",
                }}
              >
                {p.title}
              </span>
              <span className="hidden md:inline" style={{ fontSize: 14, color: C3.whiteDim }}>
                {p.client}
              </span>
              <span
                className="hidden md:inline"
                style={{
                  fontSize: 11,
                  letterSpacing: 2,
                  color: C3.whiteDim,
                  textTransform: "uppercase",
                }}
              >
                {p.kind}
              </span>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: 2,
                  color: C3.whiteDim,
                  textAlign: "right",
                }}
              >
                {p.year} ↗
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section
        style={{
          padding: "80px clamp(20px, 5vw, 56px)",
          borderTop: `1px solid ${C3.rule}`,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: C3.whiteDim,
            marginBottom: 32,
          }}
        >
          (12) IN GOOD COMPANY
        </div>
        <div
          style={{
            fontSize: "clamp(28px, 5vw, 64px)",
            fontWeight: 500,
            letterSpacing: -1.8,
            lineHeight: 1.15,
            color: C3.white,
            textWrap: "balance",
          }}
        >
          {CLIENTS.map((c, i) => (
            <span key={c}>
              {c}
              {i < CLIENTS.length - 1 && <span style={{ color: C3.whiteFaint }}> · </span>}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          position: "relative",
          minHeight: 800,
          overflow: "hidden",
          borderTop: `1px solid ${C3.rule}`,
        }}
      >
        <C3Portrait src={stockImage("offbeat-contact-c3", 2000, 1400)} tone="amber" fill withTrace={false} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(7,7,8,0.5) 0%, transparent 30%, rgba(7,7,8,0.85) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 56,
            left: "clamp(20px, 5vw, 56px)",
            right: "clamp(20px, 5vw, 56px)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ color: C3.whiteDim }}>(04) CONTACT</div>
          <div style={{ textAlign: "center", color: C3.whiteDim }} className="hidden md:block">
            NOW BOOKING
          </div>
          <div style={{ textAlign: "right" }}>Q3 / Q4 — 2026</div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 200,
            left: "clamp(20px, 5vw, 56px)",
            right: "clamp(20px, 5vw, 56px)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C3.whiteDim,
              marginBottom: 16,
            }}
          >
            START A PROJECT →
          </div>
          <div
            style={{
              fontSize: "clamp(56px, 13vw, 168px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: C3.white,
            }}
          >
            LET&apos;S
            <br />
            MAKE
            <br />
            SOMETHING<span style={{ color: C3.amber }}>.</span>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            position: "absolute",
            bottom: 40,
            left: "clamp(20px, 5vw, 56px)",
            right: "clamp(20px, 5vw, 56px)",
            paddingTop: 24,
            borderTop: `1px solid ${C3.whiteFaint}`,
            gap: 32,
          }}
        >
          {[
            ["EMAIL", STUDIO.email],
            ["STUDIO", "1149 W. 17th St\nCosta Mesa, CA 92627"],
            ["PHONE", `${STUDIO.phone}\nMon–Fri 10–6 PT`],
            ["ELSEWHERE", `IG ${STUDIO.igHandle}\nVimeo ${STUDIO.vimeoHandle}`],
          ].map(([t, d], i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: C3.whiteDim,
                  textTransform: "uppercase",
                }}
              >
                {t}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6, marginTop: 8, whiteSpace: "pre-line" }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          padding: "20px clamp(20px, 5vw, 56px)",
          fontSize: 10,
          letterSpacing: 2,
          color: C3.whiteDim,
          textTransform: "uppercase",
          gap: 8,
        }}
      >
        <span>© OFFBEAT MMXXVI</span>
        <span className="md:text-center">COSTA MESA, CALIFORNIA</span>
        <span className="md:text-right">↑ TOP &nbsp;·&nbsp; INDEX V.7</span>
      </footer>
    </div>
  );
}
