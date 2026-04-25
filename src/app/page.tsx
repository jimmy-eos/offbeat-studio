import { Suspense } from "react";
import Concept1 from "@/components/Concept1";
import Concept2 from "@/components/Concept2";
import Concept3 from "@/components/Concept3";
import ConceptSwitcher from "@/components/ConceptSwitcher";

type SearchParams = Promise<{ c?: string }>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const raw = params.c ?? "1";
  const active = ["1", "2", "3"].includes(raw) ? raw : "1";

  return (
    <main style={{ paddingBottom: 96 }}>
      {active === "1" && <Concept1 />}
      {active === "2" && <Concept2 />}
      {active === "3" && <Concept3 />}
      <Suspense fallback={null}>
        <ConceptSwitcher active={active} />
      </Suspense>
    </main>
  );
}
