"use client";

// All Works — full-width hero with a thumb strip underneath. Clicking a
// thumb swaps it with the hero via shared-layout animation: the clicked
// thumb morphs up into the hero spot while the old hero shrinks down into
// the vacated thumb slot. Powered by framer-motion `layoutId`.

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { PHOTOS, SELECTED, VIDEOS, type Project } from "@/lib/content";
import ImagePlate from "@/components/ImagePlate";
import VideoPlate from "@/components/VideoPlate";

const C = {
  ink: "#FFFFFF",
  inkDim: "rgba(255,255,255,0.55)",
  inkFaint: "rgba(255,255,255,0.18)",
};

const TRANS = { type: "spring" as const, stiffness: 220, damping: 32, mass: 0.9 };

const DEFAULT_SLUG = "rush";

export default function AllWorks() {
  const initial = SELECTED.find((p) => p.slug === DEFAULT_SLUG) ?? SELECTED[0];
  const [active, setActive] = useState<Project>(initial);

  const heroVideo = active.video ? VIDEOS[active.video] : null;
  const heroPhoto = PHOTOS[active.cover];

  return (
    <section
      id="work"
      style={{
        padding: "0 clamp(20px, 4vw, 36px) clamp(80px, 12vw, 160px)",
        scrollMarginTop: 80,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 40,
          padding: "0 8px",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 11,
              letterSpacing: 2.5,
              color: C.inkDim,
              textTransform: "uppercase",
            }}
          >
            (All Works) — 02
          </span>
          <span
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 500,
              letterSpacing: -0.6,
              color: C.ink,
            }}
          >
            All Works
          </span>
        </div>
        <span
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: C.inkDim,
            textTransform: "uppercase",
          }}
        >
          ({SELECTED.length}) PROJECTS — 2025 / 2026
        </span>
      </div>

      {/* Hero — `key` forces a real unmount/remount when `active` changes, so
          framer-motion treats it as a shared-element transition rather than a
          single element mutating its layoutId. */}
      <motion.div
        key={`hero-${active.slug}`}
        layoutId={`cover-${active.slug}`}
        transition={TRANS}
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(420px, 62vh, 720px)",
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <Link
          href={`/work/${active.slug}`}
          aria-label={`Open project: ${active.title}`}
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {/* Cover photo always renders — it's the morph anchor. Video, when
              present, layers on top of the matching first-frame poster, so
              the swap is seamless. */}
          <ImagePlate
            photo={heroPhoto}
            tone="ember"
            ratio="auto"
            vignette={false}
            sizes="100vw"
            eager
          />
          {heroVideo && (
            <div
              key={`v-${active.slug}`}
              style={{ position: "absolute", inset: 0 }}
            >
              <VideoPlate
                video={heroVideo}
                ratio="auto"
                tone="ember"
                vignette={false}
                eager
              />
            </div>
          )}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.65) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              padding: "12px 22px",
              borderRadius: 999,
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${C.inkFaint}`,
              fontSize: 12,
              letterSpacing: 1.6,
              color: C.ink,
              textTransform: "uppercase",
            }}
          >
            View Project →
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              color: C.ink,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: "clamp(22px, 2.8vw, 36px)",
                fontWeight: 500,
                letterSpacing: -0.6,
              }}
            >
              {active.title}
            </span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: 1.6,
                color: C.inkDim,
                textTransform: "uppercase",
              }}
            >
              {active.client} · {active.year}
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Thumb strip — 4 fixed slots, the active one is an empty placeholder */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4"
        style={{
          marginTop: 12,
          gap: 12,
        }}
      >
        {SELECTED.map((p) => {
          const isActive = p.slug === active.slug;
          return (
            <div
              key={`slot-${p.slug}`}
              style={{
                position: "relative",
                height: "clamp(96px, 13vh, 140px)",
              }}
            >
              {!isActive ? (
                <motion.button
                  layoutId={`cover-${p.slug}`}
                  transition={TRANS}
                  type="button"
                  onClick={() => setActive(p)}
                  aria-label={`Show ${p.title}`}
                  style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    color: C.ink,
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                  whileHover={{ filter: "brightness(1.1)" }}
                >
                  <ImagePlate
                    photo={PHOTOS[p.cover]}
                    tone="ember"
                    ratio="auto"
                    vignette={false}
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.75) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: "auto 12px 12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      fontSize: 10,
                      letterSpacing: 1.6,
                      color: C.ink,
                      textTransform: "uppercase",
                    }}
                  >
                    <span>{p.n}</span>
                    <span style={{ color: C.inkDim }}>{p.title}</span>
                  </div>
                </motion.button>
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: `1px dashed ${C.inkFaint}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    letterSpacing: 1.8,
                    color: C.inkDim,
                    textTransform: "uppercase",
                  }}
                >
                  Now Showing
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
