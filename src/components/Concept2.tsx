// Concept 02 — Amber Studio
// Full-bleed cinematic hero with massive uppercase wordmark over the video,
// thin uppercase top nav, four-column status footer, vertical-strip film-reel
// gallery for featured works.

import { CLIENTS, SELECTED, STUDIO } from "@/lib/content";
import VideoPlate, { VPStrip } from "@/components/VideoPlate";

const C2 = {
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
        color: C2.ink,
        gap: 12,
      }}
    >
      <span style={{ fontWeight: 600, letterSpacing: 3 }}>OFFBEAT</span>
      <span />
      <span className="hidden md:inline text-center" style={{ color: C2.inkDim }}>
        WORK
      </span>
      <span className="hidden md:inline text-center" style={{ color: C2.inkDim }}>
        STUDIO
      </span>
      <span className="hidden md:inline text-center" style={{ color: C2.inkDim }}>
        JOURNAL
      </span>
      <span style={{ textAlign: "right" }}>LET&apos;S TALK</span>
    </div>
  );
}

export default function Concept2() {
  // Eight projects to fill the strip reel — selected six + 2 from archive
  const reelStrips: { tone: import("@/components/VideoPlate").VideoTone; seed: string | number }[] = [
    { tone: "moss", seed: "c2-strip-2" },
    { tone: "ember", seed: SELECTED[0].seed }, // hero strip — Tides
    { tone: "bone", seed: "c2-strip-4" },
    { tone: "forest", seed: "c2-strip-5" },
    { tone: "sand", seed: "c2-strip-6" },
    { tone: "indigo", seed: "c2-strip-7" },
    { tone: "rose", seed: "c2-strip-8" },
    { tone: "amber", seed: "c2-strip-9" },
  ];

  return (
    <div
      style={{
        background: C2.bg,
        color: C2.ink,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.5,
      }}
    >
      {/* HERO — full-bleed video, massive wordmark over it */}
      <section
        style={{
          position: "relative",
          height: "min(920px, 100vh)",
          minHeight: 600,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <VideoPlate ratio="auto" tone="indigo" seed="c2-hero" vignette={false} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 12%, transparent 80%, rgba(0,0,0,0.6) 100%)",
            pointerEvents: "none",
          }}
        />

        <Nav />

        {/* MASSIVE wordmark, perfectly centered */}
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
              color: C2.ink,
              textAlign: "center",
              textShadow: "0 8px 60px rgba(0,0,0,0.4)",
            }}
          >
            OFFBEAT
            <br />
            STUDIO
          </div>
        </div>

        {/* status footer */}
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
            color: C2.ink,
          }}
        >
          <span>Film &amp; Photography</span>
          <span style={{ textAlign: "center", color: C2.inkDim }}>Costa Mesa, California</span>
          <span style={{ textAlign: "center", color: C2.inkDim, fontVariantNumeric: "tabular-nums" }}>
            01 : 26 : 33 PM
          </span>
          <span style={{ textAlign: "right", color: C2.inkDim }}>© Offbeat 2026</span>
        </div>
      </section>

      {/* SCROLL CUE STRIP */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3"
        style={{
          borderBottom: `1px solid ${C2.rule}`,
          padding: "20px clamp(20px, 4vw, 36px)",
          alignItems: "center",
          fontSize: 11,
          letterSpacing: 2,
          color: C2.inkDim,
          textTransform: "uppercase",
          gap: 8,
        }}
      >
        <span>(SCROLL ↓)</span>
        <span className="text-center hidden sm:block">A FILM &amp; PHOTOGRAPHY PRACTICE — EST. 2019</span>
        <span className="sm:text-right">(06) FEATURED PROJECTS</span>
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
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: C2.inkDim, textTransform: "uppercase" }}>
          (About) — 01
          <br />
          <span style={{ color: C2.ink }}>Approach</span>
        </div>
        <p
          style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 400,
            letterSpacing: -1.2,
            lineHeight: 1.1,
            margin: 0,
            color: C2.ink,
            textWrap: "pretty",
            maxWidth: 720,
          }}
        >
          Offbeat is a small film &amp; photography practice in Orange County, run by {STUDIO.director}. We make patient,
          deliberate work for musicians, fashion houses, and brands that prefer a long take over a fast cut.
        </p>
      </section>

      {/* FEATURED WORKS — vertical strip film-reel */}
      <section style={{ padding: "0 clamp(20px, 4vw, 36px) clamp(80px, 12vw, 160px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 48,
            padding: "0 8px",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, letterSpacing: -0.6, color: C2.ink }}>
            Featured Works
          </span>
          <span style={{ fontSize: 11, letterSpacing: 2, color: C2.inkDim, textTransform: "uppercase" }}>
            (06) PROJECTS — 2024 / 2026
          </span>
        </div>

        {/* Desktop: strip reel — narrow strips with one big hero */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "60px 540px 60px 60px 60px 60px 60px 60px",
            gap: 12,
            alignItems: "stretch",
            height: 580,
          }}
        >
          {reelStrips.map((p, i) => {
            const isHero = i === 1;
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {isHero ? (
                  <>
                    <VideoPlate tone={p.tone} seed={p.seed} ratio="auto" vignette={false} />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        padding: "10px 18px",
                        borderRadius: 999,
                        background: "rgba(0,0,0,0.45)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${C2.inkFaint}`,
                        fontSize: 11,
                        letterSpacing: 1.6,
                        color: C2.ink,
                        textTransform: "uppercase",
                      }}
                    >
                      View Project →
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 16,
                        left: 18,
                        right: 18,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        fontSize: 11,
                        letterSpacing: 1.5,
                        color: C2.ink,
                        textTransform: "uppercase",
                      }}
                    >
                      <span style={{ fontSize: 14, letterSpacing: 0, textTransform: "none", fontWeight: 500 }}>
                        Tides, Ablaze
                      </span>
                      <span style={{ color: C2.inkDim }}>JUNO HALSEY · 2025</span>
                    </div>
                  </>
                ) : (
                  <VPStrip tone={p.tone} seed={p.seed} />
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet/mobile: stacked tile grid */}
        <div className="grid grid-cols-2 lg:hidden" style={{ gap: 12 }}>
          {reelStrips.map((p, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden" }}>
              <VideoPlate tone={p.tone} seed={p.seed} ratio="9/16" />
              {i === 1 && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.65) 100%)",
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            paddingLeft: "clamp(0px, 5vw, 76px)",
            fontSize: 18,
            color: C2.ink,
            fontWeight: 400,
          }}
        >
          Tides, Ablaze — Juno Halsey
        </div>
      </section>

      {/* SECONDARY WORK — paired projects */}
      <section style={{ padding: "0 clamp(20px, 4vw, 36px) clamp(80px, 12vw, 160px)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24, marginBottom: 24 }}>
          {[
            { tone: "bone" as const, seed: SELECTED[1].seed, title: "Interiors, No. 4", client: "MAREN ATELIER · 2025" },
            { tone: "indigo" as const, seed: SELECTED[2].seed, title: "Nightshift", client: "FORM RECORDS · 2024" },
          ].map((p, i) => (
            <div key={i}>
              <VideoPlate tone={p.tone} seed={p.seed} ratio="16/9" />
              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: 14,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span style={{ color: C2.ink }}>{p.title}</span>
                <span style={{ color: C2.inkDim, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" }}>
                  {p.client}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]" style={{ gap: 24 }}>
          {[
            { tone: "sand" as const, seed: SELECTED[3].seed, title: "Soft Machinery", client: "KESTREL DENIM · 2024", ratio: "21/9" },
            { tone: "forest" as const, seed: SELECTED[5].seed, title: "Glasswork", client: "NORDLYS CERAMICS · 2023", ratio: "4/5" },
          ].map((p, i) => (
            <div key={i}>
              <VideoPlate tone={p.tone} seed={p.seed} ratio={p.ratio} />
              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: 14,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span style={{ color: C2.ink }}>{p.title}</span>
                <span style={{ color: C2.inkDim, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" }}>
                  {p.client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
          borderTop: `1px solid ${C2.rule}`,
          borderBottom: `1px solid ${C2.rule}`,
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[300px_1fr]"
          style={{ gap: 80, marginBottom: 64, alignItems: "baseline" }}
        >
          <span style={{ fontSize: 11, letterSpacing: 2.5, color: C2.inkDim, textTransform: "uppercase" }}>
            (Services) — 03
          </span>
          <span
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 500,
              letterSpacing: -0.6,
              color: C2.ink,
              maxWidth: 700,
            }}
          >
            We&apos;re a small in-house team — direction, photography, color &amp; post under one roof.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 56 }}>
          {[
            ["01", "Direction", "Music videos, brand films, narrative shorts. Concept through delivery."],
            ["02", "Photography", "Editorial portraits, lookbooks, product. 35mm + medium format."],
            ["03", "Post & Color", "Edit, conform, color, sound design. We finish what we start."],
          ].map(([n, t, d], i) => (
            <div key={i} style={{ borderTop: `1px solid ${C2.inkFaint}`, paddingTop: 24 }}>
              <span style={{ fontSize: 11, letterSpacing: 2, color: C2.inkDim }}>{n}</span>
              <div
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 500,
                  letterSpacing: -0.6,
                  color: C2.ink,
                  marginTop: 16,
                  marginBottom: 16,
                }}
              >
                {t}
              </div>
              <div style={{ fontSize: 14, color: C2.inkDim, lineHeight: 1.6 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
          borderBottom: `1px solid ${C2.rule}`,
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: C2.inkDim, textTransform: "uppercase", marginBottom: 40 }}>
          (Clients) — 04
        </div>
        <div
          style={{
            fontSize: "clamp(28px, 4.5vw, 56px)",
            fontWeight: 400,
            letterSpacing: -1.4,
            lineHeight: 1.2,
            color: C2.ink,
            textWrap: "balance",
          }}
        >
          {CLIENTS.map((c, i) => (
            <span key={c}>
              {c}
              {i < CLIENTS.length - 1 && <span style={{ color: C2.inkFaint }}> · </span>}
            </span>
          ))}
          .
        </div>
      </section>

      {/* CONTACT — full-bleed video, massive LET'S TALK */}
      <section
        style={{
          position: "relative",
          height: "min(760px, 100vh)",
          minHeight: 560,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <VideoPlate ratio="auto" tone="warm" seed="c2-contact" vignette={false} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, rgba(0,0,0,0.65) 100%)",
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
            color: C2.ink,
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
              color: C2.ink,
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
            borderTop: `1px solid ${C2.inkFaint}`,
            gap: 32,
            fontSize: 12,
            color: C2.ink,
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
              <div style={{ fontSize: 10, letterSpacing: 2, color: C2.inkDim, textTransform: "uppercase", marginBottom: 8 }}>
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
          color: C2.inkDim,
          textTransform: "uppercase",
          borderTop: `1px solid ${C2.rule}`,
          gap: 8,
        }}
      >
        <span style={{ color: C2.ink }}>OFFBEAT</span>
        <span className="text-center hidden md:block">Costa Mesa, CA</span>
        <span className="text-center hidden md:block" style={{ fontVariantNumeric: "tabular-nums" }}>
          01:26:33 PM
        </span>
        <span className="text-right">© 2026</span>
      </footer>
    </div>
  );
}
