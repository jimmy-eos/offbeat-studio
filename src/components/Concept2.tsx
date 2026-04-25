// Concept 02 — Cinematic Restraint (VYZN-flavored)
// Near-black, image-first, italic Instrument Serif, brass accent.

import { ARCHIVE, CLIENTS, SELECTED, STUDIO, stockImage } from "@/lib/content";

const C2 = {
  bg: "#0A0A0B",
  panel: "#101012",
  ink: "#EFEDE7",
  inkDim: "rgba(239,237,231,0.55)",
  inkFaint: "rgba(239,237,231,0.18)",
  rule: "rgba(239,237,231,0.10)",
  warm: "#C9A37A",
};

type Tone = "umber" | "slate" | "sand" | "olive" | "bone";

const PALETTES: Record<Tone, { tint: string; warm: string }> = {
  umber: { tint: "rgba(60, 28, 8, 0.45)", warm: "rgba(58, 31, 10, 0.6)" },
  slate: { tint: "rgba(8, 18, 30, 0.45)", warm: "rgba(21, 32, 40, 0.55)" },
  sand: { tint: "rgba(48, 30, 14, 0.4)", warm: "rgba(42, 31, 18, 0.55)" },
  olive: { tint: "rgba(20, 26, 12, 0.4)", warm: "rgba(22, 26, 14, 0.55)" },
  bone: { tint: "rgba(42, 36, 30, 0.4)", warm: "rgba(58, 53, 48, 0.55)" },
};

function C2Plate({
  src,
  ratio = "4/5",
  tone = "umber",
  fill = false,
}: {
  src: string;
  ratio?: string;
  tone?: Tone;
  fill?: boolean;
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
          filter: "saturate(0.8) contrast(1.05) brightness(0.78)",
        }}
      />
      {/* tone wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 80% 100% at 50% 60%, ${p.tint} 0%, rgba(6,4,4,0.55) 60%, rgba(4,4,4,0.7) 100%)`,
          mixBlendMode: "multiply",
        }}
      />
      {/* warm subject suggestion */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 25% 30% at 50% 42%, ${p.warm} 0%, transparent 70%)`,
          mixBlendMode: "screen",
          opacity: 0.6,
        }}
      />
      {/* film grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          mixBlendMode: "overlay",
          background:
            "repeating-radial-gradient(circle at 33% 47%, rgba(255,255,255,0.04) 0 1px, transparent 1px 2px)",
        }}
      />
      {/* edge vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}

export default function Concept2() {
  return (
    <div
      style={{
        background: C2.bg,
        color: C2.ink,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.5,
        position: "relative",
      }}
    >
      {/* NAV */}
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "32px clamp(20px, 4vw, 48px)",
          fontSize: 12,
          letterSpacing: 1.6,
          textTransform: "uppercase",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
        }}
      >
        <div style={{ fontWeight: 600, letterSpacing: 3 }}>
          OFFBEAT
          <sup style={{ fontSize: 8, marginLeft: 6, letterSpacing: 1, color: C2.inkDim }}>©</sup>
        </div>
        <nav className="hidden md:flex" style={{ gap: 28, color: C2.inkDim }}>
          <span style={{ color: C2.ink }}>INDEX</span>
          <span>STUDIO</span>
          <span>JOURNAL</span>
          <span>CONTACT</span>
        </nav>
        <div style={{ textAlign: "right", color: C2.inkDim }}>(MMXXVI · CMA)</div>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "min(920px, 100vh)",
          minHeight: 640,
        }}
      >
        <C2Plate src={stockImage("offbeat-hero-c2", 2000, 1200)} tone="umber" fill />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,11,0.55) 0%, transparent 25%, transparent 60%, rgba(10,10,11,0.85) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 110,
            left: "clamp(20px, 4vw, 48px)",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: C2.inkDim,
            lineHeight: 1.8,
          }}
        >
          <div>FEATURED — 01</div>
          <div>JUNO HALSEY</div>
          <div>&quot;TIDES, ABLAZE&quot; — 2025</div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: "clamp(20px, 4vw, 48px)",
            right: "clamp(20px, 4vw, 48px)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: 32 }}>
            <div style={{ maxWidth: 760 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 2.5,
                  color: C2.inkDim,
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                A film &amp; photography practice — Costa Mesa, California
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(44px, 7.5vw, 92px)",
                  fontWeight: 400,
                  letterSpacing: -1.5,
                  lineHeight: 1.05,
                  fontStyle: "italic",
                }}
              >
                Quiet film,
                <br />
                made with patience.
              </div>
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: C2.inkDim,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                paddingBottom: 12,
              }}
            >
              SCROLL ↓
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        className="grid grid-cols-1 lg:grid-cols-[120px_1fr_360px]"
        style={{
          padding: "clamp(80px, 14vw, 160px) clamp(20px, 4vw, 48px) clamp(80px, 12vw, 140px)",
          gap: 64,
          borderBottom: `1px solid ${C2.rule}`,
        }}
      >
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 32, color: C2.warm, fontStyle: "italic" }}>i.</div>
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2.5,
              color: C2.inkDim,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            About the studio
          </div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 3.4vw, 44px)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: -0.6,
              lineHeight: 1.25,
              margin: 0,
              color: C2.ink,
              maxWidth: 760,
              textWrap: "pretty",
            }}
          >
            Offbeat is a small film and photography practice in Orange County, run by {STUDIO.director}. We make patient
            work for musicians, fashion houses, and brands that prefer a long take over a fast cut.
          </p>
        </div>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: C2.inkDim,
            lineHeight: 1.9,
            textTransform: "uppercase",
            textAlign: "right",
          }}
        >
          DIRECTION
          <br />
          PHOTOGRAPHY
          <br />
          POST &amp; COLOR
          <br />—<br />
          IN-HOUSE CREW
          <br />
          (4) PERMANENT
        </div>
      </section>

      {/* SELECTED WORK */}
      <section style={{ padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 48px) 80px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 80,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: 2.5, color: C2.inkDim, textTransform: "uppercase" }}>
            ii. Selected work — 2024 / 2026
          </div>
          <div style={{ fontSize: 11, letterSpacing: 2, color: C2.inkDim, textTransform: "uppercase" }}>
            (06) PROJECTS
          </div>
        </div>

        {/* item 1 — large left, narrow caption right */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_320px]"
          style={{ gap: 56, alignItems: "flex-end", marginBottom: 140 }}
        >
          <C2Plate src={stockImage(SELECTED[0].seed, 1500, 1000)} ratio="3/2" tone="umber" />
          <div style={{ paddingBottom: 8 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: C2.warm,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              (01) Music film
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.15, fontStyle: "italic", marginBottom: 20 }}>
              Tides, Ablaze
            </div>
            <div style={{ fontSize: 13, color: C2.inkDim, lineHeight: 1.7, marginBottom: 32 }}>
              A four-minute single-take performance shot at golden hour on the cliffs above San Onofre. Super 16 + 35mm,
              hand-developed.
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 1.5,
                color: C2.inkDim,
                textTransform: "uppercase",
                borderTop: `1px solid ${C2.rule}`,
                paddingTop: 16,
                lineHeight: 1.9,
              }}
            >
              <div>JUNO HALSEY · 2025</div>
              <div style={{ color: C2.ink, marginTop: 12 }}>VIEW FILM &nbsp;→</div>
            </div>
          </div>
        </div>

        {/* item 2 — narrow caption left, large right */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[320px_1fr]"
          style={{ gap: 56, alignItems: "flex-end", marginBottom: 140 }}
        >
          <div style={{ paddingBottom: 8, order: 2 }} className="lg:!order-1">
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: C2.warm,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              (02) Brand film
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, lineHeight: 1.15, fontStyle: "italic", marginBottom: 20 }}>
              Interiors, No. 4
            </div>
            <div style={{ fontSize: 13, color: C2.inkDim, lineHeight: 1.7, marginBottom: 32 }}>
              Slow, observational portraits of a Los Feliz atelier. Available light, 35mm, two days of shooting in early
              autumn.
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 1.5,
                color: C2.inkDim,
                textTransform: "uppercase",
                borderTop: `1px solid ${C2.rule}`,
                paddingTop: 16,
                lineHeight: 1.9,
              }}
            >
              <div>MAREN ATELIER · 2025</div>
              <div style={{ color: C2.ink, marginTop: 12 }}>VIEW FILM &nbsp;→</div>
            </div>
          </div>
          <div className="lg:!order-2 order-1">
            <C2Plate src={stockImage(SELECTED[1].seed, 1500, 1000)} ratio="3/2" tone="bone" />
          </div>
        </div>

        {/* split row */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32, marginBottom: 32 }}>
          {[2, 3].map((idx) => {
            const proj = SELECTED[idx];
            const tone: Tone = idx === 2 ? "slate" : "sand";
            return (
              <div key={idx}>
                <C2Plate src={stockImage(proj.seed, 1100, 1375)} ratio="4/5" tone={tone} />
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: 2,
                        color: C2.warm,
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      ({proj.n}) {proj.kind}
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontStyle: "italic" }}>{proj.title}</div>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: 1.5,
                      color: C2.inkDim,
                      textTransform: "uppercase",
                      textAlign: "right",
                    }}
                  >
                    {proj.client.toUpperCase()}
                    <br />
                    {proj.year}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* split row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32, marginTop: 56 }}>
          {[4, 5].map((idx) => {
            const proj = SELECTED[idx];
            const tone: Tone = idx === 4 ? "olive" : "umber";
            return (
              <div key={idx}>
                <C2Plate src={stockImage(proj.seed, 1100, 1375)} ratio="4/5" tone={tone} />
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: 2,
                        color: C2.warm,
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      ({proj.n}) {proj.kind}
                    </div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontStyle: "italic" }}>{proj.title}</div>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: 1.5,
                      color: C2.inkDim,
                      textTransform: "uppercase",
                      textAlign: "right",
                    }}
                  >
                    {proj.client.toUpperCase()}
                    <br />
                    {proj.year}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INDEX / archive */}
      <section
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 48px)",
          borderTop: `1px solid ${C2.rule}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 64,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                color: C2.inkDim,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              iii. Index
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontStyle: "italic",
                letterSpacing: -0.8,
              }}
            >
              The full archive.
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: C2.inkDim,
              textTransform: "uppercase",
              textAlign: "right",
            }}
          >
            (32) ENTRIES
            <br />
            2019 — 2026
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C2.rule}` }}>
          {ARCHIVE.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1.4fr_1fr_1fr_80px]"
              style={{
                padding: "24px 0",
                borderBottom: `1px solid ${C2.rule}`,
                alignItems: "baseline",
                gap: 12,
                fontSize: 13,
                color: C2.ink,
              }}
            >
              <span style={{ fontSize: 11, color: C2.inkDim, letterSpacing: 1.5 }}>{p.n}</span>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(18px, 2.2vw, 22px)" }}>
                {p.title}
              </span>
              <span className="hidden md:inline" style={{ color: C2.inkDim }}>{p.client}</span>
              <span
                className="hidden md:inline"
                style={{
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: C2.inkDim,
                }}
              >
                {p.kind}
              </span>
              <span style={{ fontSize: 11, letterSpacing: 1.5, color: C2.inkDim, textAlign: "right" }}>
                {p.year} ↗
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 48px)",
          borderTop: `1px solid ${C2.rule}`,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2.5,
            color: C2.inkDim,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          iv. Selected clients
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(24px, 3.6vw, 44px)",
            fontStyle: "italic",
            letterSpacing: -0.5,
            lineHeight: 1.4,
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

      {/* CONTACT */}
      <section
        style={{
          position: "relative",
          minHeight: 720,
          borderTop: `1px solid ${C2.rule}`,
        }}
      >
        <C2Plate src={stockImage("offbeat-contact-c2", 2000, 1200)} tone="umber" fill />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,11,0.4) 0%, transparent 30%, rgba(10,10,11,0.92) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 56,
            left: "clamp(20px, 4vw, 48px)",
            right: "clamp(20px, 4vw, 48px)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            fontSize: 11,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            color: C2.inkDim,
          }}
        >
          <div>v. Contact</div>
          <div style={{ textAlign: "right" }}>NOW BOOKING — Q3 / Q4 — 2026</div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 200,
            left: "clamp(20px, 4vw, 48px)",
            right: "clamp(20px, 4vw, 48px)",
            maxWidth: 1100,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 7.6vw, 96px)",
              fontStyle: "italic",
              letterSpacing: -1.4,
              lineHeight: 1.05,
              color: C2.ink,
              textWrap: "pretty",
            }}
          >
            We&apos;d like to hear about your project. Please write us a short note.
          </div>
          <a
            href={`mailto:${STUDIO.email}`}
            style={{
              marginTop: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              paddingBottom: 6,
              borderBottom: `1px solid ${C2.warm}`,
              color: C2.ink,
              fontSize: 14,
              letterSpacing: 0.6,
              textDecoration: "none",
            }}
          >
            {STUDIO.email} &nbsp; →
          </a>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            position: "absolute",
            bottom: 40,
            left: "clamp(20px, 4vw, 48px)",
            right: "clamp(20px, 4vw, 48px)",
            paddingTop: 24,
            borderTop: `1px solid ${C2.inkFaint}`,
            gap: 32,
            fontSize: 12,
            color: C2.inkDim,
            lineHeight: 1.7,
          }}
        >
          {[
            ["Studio", `1149 W. 17th St\nCosta Mesa, CA 92627`],
            ["Hours", `Mon — Fri\n10:00 — 18:00 PT`],
            ["Direct", `+1 (949) 555-0142\n${STUDIO.emailDirect}`],
            ["Elsewhere", `Instagram /offbeat.studio\nVimeo /offbeatstudio`],
          ].map(([t, d]) => (
            <div key={t}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: C2.inkDim,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {t}
              </div>
              <div style={{ color: C2.ink, whiteSpace: "pre-line" }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          padding: "24px clamp(20px, 4vw, 48px)",
          fontSize: 10,
          letterSpacing: 2,
          color: C2.inkDim,
          textTransform: "uppercase",
          gap: 8,
        }}
      >
        <span>© Offbeat Studio MMXXVI</span>
        <span className="md:text-center">Costa Mesa · Orange County · CA</span>
        <span className="md:text-right">Site v.7 · ↑ Top</span>
      </footer>
    </div>
  );
}
