// VideoPlate — the production version of the handoff's VideoPlate primitive.
// Renders an actual <video> element with poster fallback, layered with optional
// tone wash, film grain, and edge vignette so any clip reads on-brand.
//
// 1:1 prop-compatible with the handoff source: tone, ratio, seed, vignette.

import { stockImage, stockVideo } from "@/lib/content";

export type VideoTone =
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

const TONE_WASH: Record<VideoTone, string | null> = {
  warm: "linear-gradient(180deg, rgba(58,29,10,0.32), rgba(8,4,3,0.55))",
  ember: "linear-gradient(180deg, rgba(42,14,8,0.35), rgba(7,3,2,0.6))",
  amber: "linear-gradient(180deg, rgba(42,26,8,0.32), rgba(5,3,2,0.55))",
  indigo: "linear-gradient(180deg, rgba(10,26,46,0.32), rgba(2,4,6,0.55))",
  steel: "linear-gradient(180deg, rgba(12,20,24,0.32), rgba(2,4,4,0.55))",
  ice: "linear-gradient(180deg, rgba(14,30,42,0.30), rgba(2,6,8,0.55))",
  moss: "linear-gradient(180deg, rgba(14,26,16,0.30), rgba(2,4,4,0.55))",
  forest: "linear-gradient(180deg, rgba(10,20,8,0.32), rgba(2,4,2,0.6))",
  sand: "linear-gradient(180deg, rgba(36,24,8,0.30), rgba(6,4,2,0.55))",
  bone: "linear-gradient(180deg, rgba(40,32,26,0.28), rgba(6,4,4,0.5))",
  rose: "linear-gradient(180deg, rgba(42,18,24,0.32), rgba(6,3,4,0.55))",
  ox: "linear-gradient(180deg, rgba(28,6,8,0.35), rgba(4,1,1,0.6))",
  noir: "linear-gradient(180deg, rgba(8,8,12,0.45), rgba(2,2,2,0.65))",
  none: null,
};

type Props = {
  tone?: VideoTone;
  ratio?: string; // e.g. '16/9', '9/16', '3/4', '4/5', 'auto'
  seed?: number | string;
  vignette?: boolean;
  grain?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export default function VideoPlate({
  tone = "warm",
  ratio = "16/9",
  seed = 0,
  vignette = true,
  grain = true,
  style = {},
  children,
}: Props) {
  const v = stockVideo(seed);
  const wash = TONE_WASH[tone];
  const poster = stockImage(v.poster, 800, 450);

  return (
    <div
      style={{
        aspectRatio: ratio === "auto" ? undefined : ratio,
        position: ratio === "auto" ? "absolute" : "relative",
        inset: ratio === "auto" ? 0 : undefined,
        width: ratio === "auto" ? "100%" : undefined,
        height: ratio === "auto" ? "100%" : undefined,
        overflow: "hidden",
        background: "#000",
        isolation: "isolate",
        ...style,
      }}
    >
      <video
        src={v.src}
        poster={poster}
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
          filter: "saturate(0.9) contrast(1.05) brightness(0.78)",
        }}
      />
      {wash && (
        <div
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
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            background:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />
      )}
      {vignette && (
        <div
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

// Vertical 9:16 strip variant — convenience wrapper that defaults to portrait.
export function VPStrip(props: Omit<Props, "ratio"> & { ratio?: string }) {
  return <VideoPlate ratio="9/16" {...props} />;
}
