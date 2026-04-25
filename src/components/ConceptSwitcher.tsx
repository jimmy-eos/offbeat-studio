"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const CONCEPTS = [
  { id: "1", label: "Editorial Cinema", sub: "Awwwards · Oversized serif" },
  { id: "2", label: "Cinematic Restraint", sub: "VYZN · Patient, image-first" },
  { id: "3", label: "Oversized Portrait", sub: "Lurais · Type as frame" },
];

export default function ConceptSwitcher({ active }: { active: string }) {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "1" || e.key === "2" || e.key === "3") {
        const target = e.target as HTMLElement | null;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
        const next = e.key;
        const sp = new URLSearchParams(params.toString());
        sp.set("c", next);
        router.replace(`/?${sp.toString()}`, { scroll: false });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [params, router]);

  function go(id: string) {
    const sp = new URLSearchParams(params.toString());
    sp.set("c", id);
    router.replace(`/?${sp.toString()}`, { scroll: false });
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        background: "rgba(8, 8, 10, 0.78)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        padding: 6,
        borderRadius: 999,
        boxShadow: "0 24px 48px -16px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset",
      }}
      className="font-mono"
    >
      <div style={{ display: "flex", alignItems: "stretch", gap: 4 }}>
        {CONCEPTS.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => go(c.id)}
              aria-pressed={isActive}
              style={{
                position: "relative",
                padding: "10px 18px",
                borderRadius: 999,
                background: isActive ? "rgba(255,255,255,0.95)" : "transparent",
                color: isActive ? "#0a0a0b" : "rgba(255,255,255,0.7)",
                border: "none",
                cursor: "pointer",
                transition: "background 220ms ease, color 220ms ease",
                fontFamily: "inherit",
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
              }}
              title={`${c.label} — ${c.sub}`}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  opacity: isActive ? 0.55 : 0.8,
                }}
              >
                /0{c.id}
              </span>
              <span
                style={{
                  fontWeight: isActive ? 600 : 400,
                }}
                className="hidden sm:inline"
              >
                {c.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
