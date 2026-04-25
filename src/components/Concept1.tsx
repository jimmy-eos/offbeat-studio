// Concept 01 — Editorial Cinema
// Dark, oversized serif. Awwwards-style. Music-video / album-cover energy.

import { ARCHIVE, CLIENTS, SELECTED, SHOWREEL, STUDIO } from "@/lib/content";
import VideoPlate from "@/components/VideoPlate";

const C1 = {
  ink: "#0A0908",
  ink2: "#13110F",
  bone: "#EDE6DB",
  boneDim: "rgba(237,230,219,0.55)",
  boneFaint: "rgba(237,230,219,0.18)",
  ember: "#C9542B",
};

export default function Concept1() {
  return (
    <div
      style={{
        background: C1.ink,
        color: C1.bone,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.4,
        minHeight: "100vh",
      }}
    >
      {/* NAV */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px clamp(20px, 5vw, 56px)",
          borderBottom: `1px solid ${C1.boneFaint}`,
          position: "sticky",
          top: 0,
          background: `${C1.ink}ee`,
          backdropFilter: "blur(8px)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 9, height: 9, borderRadius: 9, background: C1.ember }} />
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, letterSpacing: 0.2, fontStyle: "italic" }}>
            Offbeat
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: C1.boneDim,
              letterSpacing: 1,
              marginLeft: 6,
            }}
            className="hidden sm:inline"
          >
            EST. ORANGE COUNTY · 2019
          </span>
        </div>
        <nav
          className="hidden md:flex"
          style={{
            gap: 36,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          <span>Index</span>
          <span>Studio</span>
          <span>Process</span>
          <span>Journal</span>
          <span>Inquire</span>
        </nav>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: C1.boneDim,
            letterSpacing: 1,
          }}
          className="hidden sm:block"
        >
          {STUDIO.coords}
        </div>
      </header>

      {/* HERO — full-bleed video, oversized italic serif overlay */}
      <section style={{ position: "relative", minHeight: "min(900px, 100vh)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <VideoPlate ratio="auto" tone="ember" seed={101} vignette={false} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.25) 22%, rgba(10,9,8,0.5) 70%, rgba(10,9,8,0.85) 100%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", padding: "80px clamp(20px, 5vw, 56px) 60px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 56,
              gap: 24,
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 1.5, color: C1.boneDim }}>
              <div>(01) — INDEX, VOL. VII</div>
              <div style={{ marginTop: 6 }}>SPRING / SUMMER 2026</div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: 1.5,
                color: C1.boneDim,
                textAlign: "right",
              }}
            >
              <div>A PHOTOGRAPHY &amp;</div>
              <div>MOVING IMAGE PRACTICE</div>
              <div style={{ marginTop: 6, color: C1.ember }}>↘ NOW BOOKING Q3</div>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(76px, 16vw, 220px)",
              lineHeight: 0.92,
              fontWeight: 400,
              letterSpacing: "-0.04em",
              margin: 0,
              color: C1.bone,
            }}
          >
            Pictures that
            <br />
            <span style={{ fontStyle: "italic", color: C1.bone }}>linger</span>
            <span style={{ color: C1.ember }}>.</span>
          </h1>

          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            style={{ marginTop: 64 }}
          >
            <p
              style={{
                maxWidth: 460,
                fontSize: "clamp(13px, 1.2vw, 16px)",
                color: C1.bone,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Offbeat is the production studio of <span style={{ color: C1.bone, fontWeight: 500 }}>{STUDIO.director}</span>{" "}
              — a director and photographer working with musicians, brands, and the occasional stranger. We make the kind
              of work people watch twice.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <a
                href="#showreel"
                style={{
                  padding: "14px 22px",
                  border: `1px solid ${C1.bone}`,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: C1.bone,
                  textDecoration: "none",
                  background: "rgba(10,9,8,0.4)",
                  backdropFilter: "blur(6px)",
                }}
              >
                Showreel · 2:14
              </a>
              <a
                href={`mailto:${STUDIO.email}`}
                style={{
                  padding: "14px 22px",
                  background: C1.ember,
                  color: C1.ink,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Inquire ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BAND — credit ticker */}
      <div
        style={{
          borderBottom: `1px solid ${C1.boneFaint}`,
          padding: "16px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: 2,
          color: C1.boneDim,
          textTransform: "uppercase",
        }}
      >
        <div className="marquee-track" style={{ display: "inline-flex" }}>
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} style={{ paddingRight: 0 }}>
              ✦ TIDES, ABLAZE — JUNO HALSEY ✦ INTERIORS, NO. 4 — MAREN ATELIER ✦ NIGHTSHIFT — FORM RECORDS ✦ NOW BOOKING
              Q3 / Q4 2026 ✦ TIDES, ABLAZE — JUNO HALSEY ✦ INTERIORS, NO. 4 — MAREN ATELIER ✦ NIGHTSHIFT — FORM RECORDS
              ✦ NOW BOOKING Q3 / Q4 2026 &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* SHOWREEL */}
      <section id="showreel" style={{ padding: "80px clamp(20px, 5vw, 56px) 100px" }}>
        <div
          style={{
            aspectRatio: "21/9",
            position: "relative",
            overflow: "hidden",
            border: `1px solid ${C1.boneFaint}`,
          }}
        >
          <video
            src={SHOWREEL.src}
            poster={`https://picsum.photos/seed/${encodeURIComponent(SHOWREEL.poster)}/2100/900`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.85) contrast(1.05) brightness(0.7)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `repeating-linear-gradient(135deg, ${C1.ember}1f 0 6px, ${C1.ember}0a 6px 12px), linear-gradient(180deg, rgba(20,16,12,0.25), rgba(8,6,4,0.4))`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: C1.bone,
              letterSpacing: 1,
            }}
          >
            ● REC
          </div>
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: C1.bone,
              letterSpacing: 1,
            }}
          >
            FRAME 00284 / 04020
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 16,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: C1.bone,
              letterSpacing: 1,
            }}
          >
            SHOWREEL.MOV · 02:14 · 4K · DIRECT
          </div>
        </div>
      </section>

      {/* INDEX */}
      <section style={{ padding: "0 clamp(20px, 5vw, 56px) 80px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 36,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 400,
              fontStyle: "italic",
              margin: 0,
              letterSpacing: -1,
            }}
          >
            Selected work,
          </h2>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: C1.boneDim,
              letterSpacing: 1.5,
            }}
          >
            (06) PROJECTS · 2023—2026
          </span>
        </div>

        {SELECTED.map((w, i) => (
          <div
            key={i}
            className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_240px_160px_80px]"
            style={{
              gap: 20,
              padding: "22px 0",
              borderTop: `1px solid ${C1.boneFaint}`,
              alignItems: "center",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C1.boneDim }}>{w.n}</span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(24px, 3.4vw, 38px)",
                fontStyle: "italic",
                letterSpacing: -0.5,
                textTransform: "uppercase",
              }}
            >
              {w.title}
            </span>
            <span
              className="hidden md:inline"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C1.bone }}
            >
              {w.client.toUpperCase()}
            </span>
            <span
              className="hidden md:inline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: C1.boneDim,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {w.kind}
            </span>
            <span
              className="hidden md:inline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: C1.boneDim,
                textAlign: "right",
              }}
            >
              {w.year} ↗
            </span>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${C1.boneFaint}` }} />
      </section>

      {/* FEATURED FILM */}
      <section style={{ padding: "40px clamp(20px, 5vw, 56px) 100px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[5fr_3fr]"
          style={{ gap: 24, alignItems: "end" }}
        >
          <VideoPlate tone="ember" seed={SELECTED[0].seed} ratio="4/3" />
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: C1.ember,
                letterSpacing: 1.5,
                marginBottom: 16,
              }}
            >
              ↳ NOW SHOWING
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontStyle: "italic",
                margin: 0,
                lineHeight: 0.95,
                letterSpacing: -1,
              }}
            >
              Tides,
              <br />
              Ablaze.
            </h3>
            <p
              style={{
                color: C1.boneDim,
                fontSize: 15,
                lineHeight: 1.6,
                marginTop: 24,
                maxWidth: 360,
              }}
            >
              Shot over three nights along the San Onofre coast for Juno Halsey&apos;s debut LP. 35mm, no permits, one
              Polaroid for the album sleeve.
            </p>
            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: 32,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: 1.5,
                color: C1.boneDim,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div>DIRECTED BY</div>
                <div style={{ color: C1.bone, marginTop: 4 }}>D. LEE</div>
              </div>
              <div>
                <div>FORMAT</div>
                <div style={{ color: C1.bone, marginTop: 4 }}>S16 + 35MM</div>
              </div>
              <div>
                <div>RUNTIME</div>
                <div style={{ color: C1.bone, marginTop: 4 }}>04:11</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        style={{
          padding: "120px clamp(20px, 5vw, 56px)",
          borderTop: `1px solid ${C1.boneFaint}`,
          borderBottom: `1px solid ${C1.boneFaint}`,
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[160px_1fr]"
          style={{ gap: 80 }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: C1.boneDim,
              letterSpacing: 1.5,
            }}
          >
            (02)
            <br />
            STUDIO
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 56px)",
                lineHeight: 1.15,
                fontStyle: "italic",
                margin: 0,
                letterSpacing: -0.5,
                color: C1.bone,
                textWrap: "pretty",
              }}
            >
              We&apos;re a small crew. We don&apos;t chase trends, we chase{" "}
              <span style={{ color: C1.ember }}>good light</span> and the people who deserve it. Half the work is knowing
              when to put the camera down.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 32, marginTop: 80 }}>
              {[
                ["(01)", "DIRECTING", "Music videos, brand films, narrative shorts."],
                ["(02)", "PHOTOGRAPHY", "Editorial, portraits, product, album art."],
                ["(03)", "PRODUCTION", "In-house from concept to color."],
                ["(04)", "COLOR", "Resolve suite. Photochemical references on file."],
              ].map(([n, t, d], i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: C1.ember,
                      letterSpacing: 1.5,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      fontWeight: 500,
                      marginTop: 6,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {t}
                  </div>
                  <div style={{ fontSize: 13, color: C1.boneDim, lineHeight: 1.5, marginTop: 8 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS / MARQUEE */}
      <section style={{ padding: "60px 0", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: 56,
            padding: "0 clamp(20px, 5vw, 56px)",
            flexWrap: "wrap",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(22px, 2.6vw, 32px)",
            fontStyle: "italic",
            color: C1.boneDim,
          }}
        >
          {CLIENTS.map((c, i) => (
            <span key={i}>
              {c}
              <span style={{ color: C1.ember, marginLeft: 56 }}>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ARCHIVE */}
      <section
        style={{
          padding: "60px clamp(20px, 5vw, 56px) 80px",
          borderTop: `1px solid ${C1.boneFaint}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 36,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontStyle: "italic",
              margin: 0,
              letterSpacing: -0.5,
            }}
          >
            Archive,
          </h2>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: C1.boneDim,
              letterSpacing: 1.5,
            }}
          >
            (32) ENTRIES
          </span>
        </div>
        {ARCHIVE.map((w, i) => (
          <div
            key={i}
            className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1fr_240px_160px_80px]"
            style={{
              gap: 16,
              padding: "20px 0",
              borderTop: `1px solid ${C1.boneFaint}`,
              alignItems: "baseline",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: C1.boneDim, letterSpacing: 1.5 }}>
              {w.n}
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.2vw, 24px)",
                fontStyle: "italic",
              }}
            >
              {w.title}
            </span>
            <span className="hidden md:inline" style={{ color: C1.boneDim, fontSize: 13 }}>
              {w.client}
            </span>
            <span
              className="hidden md:inline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: C1.boneDim,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {w.kind}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: C1.boneDim,
                letterSpacing: 1,
                textAlign: "right",
              }}
            >
              {w.year} ↗
            </span>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${C1.boneFaint}` }} />
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "120px clamp(20px, 5vw, 56px) 80px",
          borderTop: `1px solid ${C1.boneFaint}`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80 }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: C1.boneDim,
                letterSpacing: 1.5,
                marginBottom: 24,
              }}
            >
              (03) — INQUIRE
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(64px, 11vw, 144px)",
                fontWeight: 400,
                lineHeight: 0.9,
                margin: 0,
                letterSpacing: -3,
                fontStyle: "italic",
              }}
            >
              Let&apos;s
              <br />
              make
              <br />
              something
              <span style={{ color: C1.ember }}>.</span>
            </h2>
          </div>
          <div style={{ alignSelf: "end" }}>
            <a
              href={`mailto:${STUDIO.email}`}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4.5vw, 56px)",
                color: C1.bone,
                fontStyle: "italic",
                letterSpacing: -1,
                textDecoration: "underline",
                textUnderlineOffset: 8,
                textDecorationThickness: 1,
                wordBreak: "break-word",
              }}
            >
              {STUDIO.email}
            </a>
            <div
              className="grid grid-cols-2"
              style={{
                gap: 40,
                marginTop: 56,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: 1.5,
              }}
            >
              <div>
                <div style={{ color: C1.boneDim }}>STUDIO</div>
                <div style={{ marginTop: 8, lineHeight: 1.7 }}>
                  1149 W. 17th St
                  <br />
                  Costa Mesa, CA 92627
                </div>
              </div>
              <div>
                <div style={{ color: C1.boneDim }}>HOURS</div>
                <div style={{ marginTop: 8, lineHeight: 1.7 }}>
                  Mon–Fri, 10–6 PT
                  <br />
                  By appointment
                </div>
              </div>
              <div>
                <div style={{ color: C1.boneDim }}>FOLLOW</div>
                <div style={{ marginTop: 8, lineHeight: 1.7 }}>
                  IG · {STUDIO.igHandle}
                  <br />
                  Vimeo · {STUDIO.vimeoHandle}
                </div>
              </div>
              <div>
                <div style={{ color: C1.boneDim }}>RIGHTS</div>
                <div style={{ marginTop: 8, lineHeight: 1.7 }}>
                  © Offbeat Studio 2026
                  <br />
                  All frames reserved
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 80,
            paddingTop: 24,
            borderTop: `1px solid ${C1.boneFaint}`,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: C1.boneDim,
            letterSpacing: 1,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>OFFBEAT — A DANIEL LEE COMPANY</span>
          <span>v.7.0 — UPDATED 04.25.26</span>
          <span>↑ BACK TO TOP</span>
        </div>
      </section>
    </div>
  );
}
