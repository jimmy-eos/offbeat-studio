// OFFBEAT — Amber Studio
// Full-bleed cinematic hero with massive uppercase wordmark over the photo,
// thin uppercase top nav, four-column status footer, two-column All Works
// grid linking to per-project pages.

import { CLIENTS, STUDIO, VIDEOS } from "@/lib/content";
import VideoPlate from "@/components/VideoPlate";
import AllWorks from "@/components/AllWorks";

const C = {
  bg: "#0A0A0B",
  ink: "#FFFFFF",
  inkDim: "rgba(255,255,255,0.55)",
  inkFaint: "rgba(255,255,255,0.18)",
  rule: "rgba(255,255,255,0.10)",
};

function Nav() {
  return (
    <div
      className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_1fr_1fr_auto]"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        alignItems: "center",
        padding: "24px clamp(20px, 4vw, 36px)",
        fontSize: 11,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: C.ink,
        gap: 12,
      }}
    >
      <span style={{ fontWeight: 600, letterSpacing: 3 }}>OFFBEAT</span>
      <span />
      <span className="hidden md:inline text-center" style={{ color: C.inkDim }}>
        WORK
      </span>
      <span className="hidden md:inline text-center" style={{ color: C.inkDim }}>
        STUDIO
      </span>
      <span className="hidden md:inline text-center" style={{ color: C.inkDim }}>
        JOURNAL
      </span>
      <span style={{ textAlign: "right" }}>LET&apos;S TALK</span>
    </div>
  );
}

export default function Concept2() {
  return (
    <div
      style={{
        background: C.bg,
        color: C.ink,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.5,
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "min(920px, 100vh)",
          minHeight: 600,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <VideoPlate
            video={VIDEOS.ygz}
            ratio="auto"
            tone="ember"
            vignette={false}
            eager
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.7) 100%)",
            pointerEvents: "none",
          }}
        />

        <Nav />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
            padding: "0 clamp(20px, 4vw, 36px)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "clamp(72px, 16vw, 248px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: C.ink,
              textAlign: "center",
              textShadow: "0 8px 60px rgba(0,0,0,0.4)",
            }}
          >
            OFFBEAT
          </div>
        </div>

        <div
          className="hidden sm:grid"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            padding: "0 clamp(20px, 4vw, 36px) 24px",
            fontSize: 11,
            letterSpacing: 1.6,
            color: C.ink,
          }}
        >
          <span>Documentary &amp; Portrait</span>
          <span style={{ textAlign: "center", color: C.inkDim }}>Costa Mesa, California</span>
          <span style={{ textAlign: "center", color: C.inkDim, fontVariantNumeric: "tabular-nums" }}>
            01 : 26 : 33 PM
          </span>
          <span style={{ textAlign: "right", color: C.inkDim }}>© Offbeat 2026</span>
        </div>
      </section>

      {/* SCROLL CUE STRIP */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3"
        style={{
          borderBottom: `1px solid ${C.rule}`,
          padding: "20px clamp(20px, 4vw, 36px)",
          alignItems: "center",
          fontSize: 11,
          letterSpacing: 2,
          color: C.inkDim,
          textTransform: "uppercase",
          gap: 8,
        }}
      >
        <span>(SCROLL ↓)</span>
        <span className="text-center hidden sm:block">
          A FILM &amp; PHOTOGRAPHY PRACTICE — EST. 2019
        </span>
        <span className="sm:text-right">(04) SELECTED PROJECTS</span>
      </div>

      {/* INTRO */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          padding: "clamp(80px, 14vw, 180px) clamp(20px, 5vw, 80px) clamp(80px, 12vw, 160px)",
          gap: 80,
          alignItems: "baseline",
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: C.inkDim, textTransform: "uppercase" }}>
          (About) — 01
          <br />
          <span style={{ color: C.ink }}>Approach</span>
        </div>
        <p
          style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 400,
            letterSpacing: -1.2,
            lineHeight: 1.1,
            margin: 0,
            color: C.ink,
            textWrap: "pretty",
            maxWidth: 720,
          }}
        >
          Offbeat is a small film &amp; photography practice in Orange County, run by {STUDIO.director}.
        </p>
      </section>

      <AllWorks />

      {/* SERVICES */}
      <section
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
          borderTop: `1px solid ${C.rule}`,
          borderBottom: `1px solid ${C.rule}`,
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[300px_1fr]"
          style={{ gap: 80, marginBottom: 64, alignItems: "baseline" }}
        >
          <span style={{ fontSize: 11, letterSpacing: 2.5, color: C.inkDim, textTransform: "uppercase" }}>
            (Services) — 03
          </span>
          <span
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 500,
              letterSpacing: -0.6,
              color: C.ink,
              maxWidth: 700,
            }}
          >
            We&apos;re a small in-house team — direction, photography, color &amp; post under one roof.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 56 }}>
          {[
            ["01", "Direction", "Documentary shorts, brand films, portrait sessions. Concept through delivery."],
            ["02", "Photography", "Editorial portraits, cultural reportage, lookbooks. 35mm + medium format."],
            ["03", "Post & Color", "Edit, conform, color, sound design. We finish what we start."],
          ].map(([n, t, d], i) => (
            <div key={i} style={{ borderTop: `1px solid ${C.inkFaint}`, paddingTop: 24 }}>
              <span style={{ fontSize: 11, letterSpacing: 2, color: C.inkDim }}>{n}</span>
              <div
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 500,
                  letterSpacing: -0.6,
                  color: C.ink,
                  marginTop: 16,
                  marginBottom: 16,
                }}
              >
                {t}
              </div>
              <div style={{ fontSize: 14, color: C.inkDim, lineHeight: 1.6 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
          borderBottom: `1px solid ${C.rule}`,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2.5,
            color: C.inkDim,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          (Clients) — 04
        </div>
        <div
          style={{
            fontSize: "clamp(28px, 4.5vw, 56px)",
            fontWeight: 400,
            letterSpacing: -1.4,
            lineHeight: 1.2,
            color: C.ink,
            textWrap: "balance",
          }}
        >
          {CLIENTS.map((c, i) => (
            <span key={c}>
              {c}
              {i < CLIENTS.length - 1 && <span style={{ color: C.inkFaint }}> · </span>}
            </span>
          ))}
          .
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          position: "relative",
          height: "min(760px, 100vh)",
          minHeight: 560,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <VideoPlate video={VIDEOS.tapa} ratio="auto" tone="ember" vignette={false} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, rgba(0,0,0,0.65) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 32,
            left: "clamp(20px, 4vw, 36px)",
            right: "clamp(20px, 4vw, 36px)",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            letterSpacing: 2,
            color: C.ink,
            textTransform: "uppercase",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>(Contact) — 05</span>
          <span>NOW BOOKING Q3 / Q4 — 2026</span>
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
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "clamp(76px, 16vw, 240px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: C.ink,
              textAlign: "center",
              textDecoration: "none",
              textShadow: "0 6px 40px rgba(0,0,0,0.35)",
            }}
          >
            LET&apos;S
            <br />
            TALK.
          </a>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            position: "absolute",
            bottom: 32,
            left: "clamp(20px, 4vw, 36px)",
            right: "clamp(20px, 4vw, 36px)",
            paddingTop: 24,
            borderTop: `1px solid ${C.inkFaint}`,
            gap: 32,
            fontSize: 12,
            color: C.ink,
            lineHeight: 1.7,
          }}
        >
          {[
            ["Email", STUDIO.email],
            ["Studio", `1149 W. 17th St\nCosta Mesa, CA 92627`],
            ["Direct", `${STUDIO.phone}\nMon–Fri · 10–6 PT`],
            ["Elsewhere", `IG ${STUDIO.igHandle}\nVimeo ${STUDIO.vimeoHandle}`],
          ].map(([t, d]) => (
            <div key={t}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: C.inkDim,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
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
          padding: "20px clamp(20px, 4vw, 36px)",
          fontSize: 10,
          letterSpacing: 2,
          color: C.inkDim,
          textTransform: "uppercase",
          borderTop: `1px solid ${C.rule}`,
          gap: 8,
        }}
      >
        <span style={{ color: C.ink }}>OFFBEAT</span>
        <span className="text-center hidden md:block">Costa Mesa, CA</span>
        <span className="text-center hidden md:block" style={{ fontVariantNumeric: "tabular-nums" }}>
          01:26:33 PM
        </span>
        <span className="text-right">© 2026</span>
      </footer>
    </div>
  );
}
