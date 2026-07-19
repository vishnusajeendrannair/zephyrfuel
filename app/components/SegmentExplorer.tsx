"use client";

import Link from "next/link";
import { useState } from "react";

const segments = [
  {
    id: "fleet",
    tab: "Mobility",
    eyebrow: "Mobility operations",
    title: "Hydrogen for concentrated operations.",
    body: "A demand-led path for transit, warehouse, seaport, airport, and freight sites.",
    link: "/fleet",
    cta: "Explore mobility applications",
    image: "segment-image-fleet",
  },
  {
    id: "industrial",
    tab: "Industrial",
    eyebrow: "Industrial facilities",
    title: "Hydrogen where the process needs it.",
    body: "A site-specific infrastructure path for existing hydrogen users and hard-to-electrify operations seeking greater supply control.",
    link: "/industrial",
    cta: "Explore industrial solutions",
    image: "segment-image-industrial",
  },
  {
    id: "data-centers",
    tab: "AI data centers",
    eyebrow: "Emerging platform opportunity",
    title: "Energy infrastructure for compute at scale.",
    body: "Early engagement with data center operators, developers, utilities, and power-system partners evaluating onsite hydrogen in future campus energy strategies.",
    link: "/data-centers",
    cta: "Explore data center opportunities",
    image: "segment-image-data-center",
  },
] as const;

export function SegmentExplorer() {
  const [activeId, setActiveId] = useState<(typeof segments)[number]["id"]>("fleet");
  const active = segments.find((segment) => segment.id === activeId) ?? segments[0];

  return (
    <section className="segment-section shell" aria-labelledby="segment-heading">
      <div className="segment-heading-row">
        <div>
          <p className="eyebrow">Where we focus</p>
          <h2 id="segment-heading">Three markets. One demand-led model.</h2>
        </div>
        <div className="segment-tabs" role="tablist" aria-label="Customer markets">
          {segments.map((segment) => (
            <button
              type="button"
              role="tab"
              aria-selected={active.id === segment.id}
              aria-controls={`panel-${segment.id}`}
              id={`tab-${segment.id}`}
              key={segment.id}
              onClick={() => setActiveId(segment.id)}
            >
              {segment.tab}
            </button>
          ))}
        </div>
      </div>

      <div
        className="segment-panel"
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        key={active.id}
      >
        <div className={`segment-image ${active.image}`} role="img" aria-label="Representative infrastructure setting" />
        <div className="segment-copy">
          <p className="eyebrow">{active.eyebrow}</p>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
          <Link className="text-link" href={active.link}>
            {active.cta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
