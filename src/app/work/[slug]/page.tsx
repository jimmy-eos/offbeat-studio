import Link from "next/link";
import { notFound } from "next/navigation";
import { PHOTOS, PROJECT_SLUGS, SELECTED, STUDIO, VIDEOS, getProject } from "@/lib/content";
import ImagePlate from "@/components/ImagePlate";
import VideoPlate from "@/components/VideoPlate";

const C = {
  bg: "#0A0A0B",
  ink: "#FFFFFF",
  inkDim: "rgba(255,255,255,0.55)",
  inkFaint: "rgba(255,255,255,0.18)",
  rule: "rgba(255,255,255,0.10)",
};

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "OFFBEAT" };
  return {
    title: `${project.title} — OFFBEAT`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // For "next project" link — wrap around to the first project
  const idx = SELECTED.findIndex((p) => p.slug === project.slug);
  const next = SELECTED[(idx + 1) % SELECTED.length];

  const heroVideo = project.video ? VIDEOS[project.video] : null;
  const heroPhoto = PHOTOS[project.cover];

  return (
    <main
      style={{
        background: C.bg,
        color: C.ink,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.5,
      }}
    >
      {/* TOP BAR */}
      <div
        className="grid grid-cols-[auto_1fr_auto]"
        style={{
          padding: "20px clamp(20px, 4vw, 36px)",
          alignItems: "center",
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: C.ink,
          borderBottom: `1px solid ${C.rule}`,
          gap: 12,
        }}
      >
        <Link href="/" style={{ color: C.ink, textDecoration: "none", fontWeight: 600, letterSpacing: 3 }}>
          OFFBEAT
        </Link>
        <Link
          href="/#work"
          style={{ color: C.inkDim, textDecoration: "none", textAlign: "center" }}
          className="hidden sm:block"
        >
          ← All Work
        </Link>
        <a href={`mailto:${STUDIO.email}`} style={{ color: C.ink, textDecoration: "none", textAlign: "right" }}>
          LET&apos;S TALK
        </a>
      </div>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "min(80vh, 820px)",
          minHeight: 480,
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {heroVideo ? (
            <VideoPlate video={heroVideo} ratio="auto" tone="ember" vignette={false} eager />
          ) : (
            <ImagePlate photo={heroPhoto} ratio="auto" tone="ember" vignette={false} eager sizes="100vw" />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.6) 100%)",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* META BLOCK */}
      <section
        className="grid grid-cols-1 md:grid-cols-[300px_1fr]"
        style={{
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
          gap: 56,
          alignItems: "baseline",
          borderBottom: `1px solid ${C.rule}`,
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: C.inkDim, textTransform: "uppercase" }}>
          Project — {project.n}
          <br />
          <span style={{ color: C.ink }}>{project.kind}</span>
        </div>
        <div>
          <h1
            style={{
              fontSize: "clamp(56px, 9vw, 144px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              margin: 0,
              color: C.ink,
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              marginTop: 32,
              maxWidth: 640,
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.5,
              color: C.ink,
              textWrap: "pretty",
            }}
          >
            {project.description}
          </p>
          <div
            className="grid grid-cols-2 md:grid-cols-3"
            style={{
              marginTop: 56,
              gap: 24,
              fontSize: 12,
              color: C.ink,
              lineHeight: 1.6,
              maxWidth: 640,
            }}
          >
            {[
              ["Client", project.client],
              ["Year", project.year],
              ["Format", project.meta ?? project.kind],
            ].map(([t, d]) => (
              <div key={t}>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    color: C.inkDim,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {t}
                </div>
                <div>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {project.photos.length > 0 ? (
        <section
          style={{
            padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 4vw, 48px)",
            alignItems: "stretch",
          }}
        >
          {project.photos.map((slug, i) => {
            const photo = PHOTOS[slug];
            // Alternate widths for documentary rhythm: full-bleed first,
            // then narrower offsets, then full-bleed again.
            const wide = i === 0 || i === project.photos.length - 1 || i % 3 === 2;
            const maxWidth = wide ? 1280 : 920;
            return (
              <figure
                key={slug}
                style={{
                  margin: 0,
                  width: "100%",
                  maxWidth,
                  alignSelf: i % 2 === 1 ? "flex-end" : "flex-start",
                }}
              >
                <ImagePlate
                  photo={photo}
                  tone="warm"
                  ratio={photo.orient === "L" ? "3/2" : "4/5"}
                  sizes="(min-width: 1280px) 1280px, 100vw"
                />
              </figure>
            );
          })}
        </section>
      ) : (
        // For video-only projects, second showcase slot at a calmer scale
        heroVideo && (
          <section
            style={{
              padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: 540 }}>
              <VideoPlate video={heroVideo} ratio="9/16" tone="ember" vignette={false} />
            </div>
          </section>
        )
      )}

      {/* NEXT PROJECT */}
      <section
        style={{
          borderTop: `1px solid ${C.rule}`,
          padding: "clamp(60px, 9vw, 120px) clamp(20px, 4vw, 36px)",
        }}
      >
        <Link
          href={`/work/${next.slug}`}
          style={{ display: "block", color: "inherit", textDecoration: "none" }}
        >
          <div
            style={{ fontSize: 11, letterSpacing: 2.5, color: C.inkDim, textTransform: "uppercase", marginBottom: 12 }}
          >
            Next — {next.n}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: C.ink,
              }}
            >
              {next.title}
            </span>
            <span style={{ fontSize: 12, color: C.inkDim, textTransform: "uppercase", letterSpacing: 1.6 }}>
              {next.client} · {next.year} →
            </span>
          </div>
        </Link>
      </section>

      {/* FOOTER */}
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
        <Link href="/" style={{ color: C.ink, textDecoration: "none" }}>
          OFFBEAT
        </Link>
        <span className="text-center hidden md:block">Costa Mesa, CA</span>
        <a
          href={`mailto:${STUDIO.email}`}
          className="text-center hidden md:block"
          style={{ color: C.inkDim, textDecoration: "none" }}
        >
          {STUDIO.email}
        </a>
        <span className="text-right">© 2026</span>
      </footer>
    </main>
  );
}
