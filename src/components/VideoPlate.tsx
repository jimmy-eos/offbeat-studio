"use client";

// VideoPlate — companion to ImagePlate. Renders a real <video> element with
// poster fallback, layered with the same tone wash + film grain + edge
// vignette stack so any clip reads on-brand inside the layout.

import type { Video } from "@/lib/content";

export type Tone =
  | "warm"
  | "ember"
  | "amber"
  | "indigo"
  | "steel"
  | "ice"
  | "moss"
  | "forest"
  | "sand"
  | "bone"
  | "rose"
  | "ox"
  | "noir"
  | "none";

const TONE_WASH: Record<Tone, string | null> = {
  warm: "linear-gradient(180deg, rgba(58,29,10,0.22), rgba(8,4,3,0.4))",
  ember: "linear-gradient(180deg, rgba(42,14,8,0.25), rgba(7,3,2,0.45))",
  amber: "linear-gradient(180deg, rgba(42,26,8,0.22), rgba(5,3,2,0.4))",
  indigo: "linear-gradient(180deg, rgba(10,26,46,0.22), rgba(2,4,6,0.4))",
  steel: "linear-gradient(180deg, rgba(12,20,24,0.22), rgba(2,4,4,0.4))",
  ice: "linear-gradient(180deg, rgba(14,30,42,0.20), rgba(2,6,8,0.4))",
  moss: "linear-gradient(180deg, rgba(14,26,16,0.20), rgba(2,4,4,0.4))",
  forest: "linear-gradient(180deg, rgba(10,20,8,0.22), rgba(2,4,2,0.45))",
  sand: "linear-gradient(180deg, rgba(36,24,8,0.20), rgba(6,4,2,0.4))",
  bone: "linear-gradient(180deg, rgba(40,32,26,0.18), rgba(6,4,4,0.35))",
  rose: "linear-gradient(180deg, rgba(42,18,24,0.22), rgba(6,3,4,0.4))",
  ox: "linear-gradient(180deg, rgba(28,6,8,0.25), rgba(4,1,1,0.45))",
  noir: "linear-gradient(180deg, rgba(8,8,12,0.32), rgba(2,2,2,0.5))",
  none: null,
};

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type Props = {
  video: Video;
  tone?: Tone;
  ratio?: string; // e.g. '16/9', '9/16', '4/5', '21/9', 'auto'
  vignette?: boolean;
  grain?: boolean;
  eager?: boolean; // hero / above-the-fold — start loading sooner
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export default function VideoPlate({
  video,
  tone = "warm",
  ratio = "16/9",
  vignette = true,
  grain = true,
  eager = false,
  style = {},
  children,
}: Props) {
  const isFill = ratio === "auto";
  const wash = TONE_WASH[tone];

  return (
    <div
      style={{
        aspectRatio: isFill ? undefined : ratio,
        position: isFill ? "absolute" : "relative",
        inset: isFill ? 0 : undefined,
        width: isFill ? "100%" : undefined,
        height: isFill ? "100%" : undefined,
        overflow: "hidden",
        background: "#000",
        isolation: "isolate",
        ...style,
      }}
    >
      <video
        src={video.src}
        poster={video.poster}
        autoPlay
        muted
        loop
        playsInline
        preload={eager ? "auto" : "metadata"}
        aria-hidden
        // Safety net — some browsers freeze on the final frame instead of
        // looping. Force seek+play on `ended` so the loop is guaranteed.
        onEnded={(e) => {
          const el = e.currentTarget;
          el.currentTime = 0;
          void el.play();
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "saturate(0.92) contrast(1.04) brightness(0.86)",
        }}
      />
      {wash && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: wash,
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
        />
      )}
      {grain && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            background: GRAIN_URL,
            backgroundSize: "200px 200px",
          }}
        />
      )}
      {vignette && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 95% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
