"use client";

import Link from "next/link";
import { useState } from "react";

const applications = [
  {
    id: "transit",
    short: "Transit",
    eyebrow: "Public and private transit",
    title: "Depot-based fueling for scheduled fleet operations.",
    body: "Fuel-cell bus programs require vehicle deployment, route planning, depot operations, and hydrogen availability to advance together.",
    qualifiers: ["Fleet rollout and daily demand", "Depot circulation and operating windows", "Procurement path and target service date"],
    image: "mobility-image-transit",
    alt: "Transit buses operating at a modern depot",
  },
  {
    id: "mhe",
    short: "MHE / Warehouses",
    eyebrow: "Material-handling equipment",
    title: "Hydrogen supply for high-throughput warehouse operations.",
    body: "MHE includes forklifts and related material-handling equipment used in warehouses and distribution centers where uptime, refueling cadence, and space utilization matter.",
    qualifiers: ["Equipment count and shift pattern", "Existing fuel and maintenance workflow", "Controlled site and concentrated demand"],
    image: "mobility-image-mhe",
    alt: "Material-handling equipment inside a distribution warehouse",
  },
  {
    id: "ports",
    short: "Seaports",
    eyebrow: "Seaport operations",
    title: "Fueling pathways for terminal equipment and drayage.",
    body: "Seaport opportunities can combine terminal tractors, yard equipment, cargo-handling operations, and return-to-base drayage demand at concentrated logistics sites.",
    qualifiers: ["Terminal and fleet operating profiles", "Port, tenant, and community stakeholders", "Site access, safety, and phased demand"],
    image: "mobility-image-port",
    alt: "Container terminal equipment and trucks at a seaport",
  },
  {
    id: "gse",
    short: "Airport GSE",
    eyebrow: "Ground-support equipment",
    title: "Hydrogen infrastructure for airside ground operations.",
    body: "GSE includes baggage tractors, tugs, belt loaders, and service vehicles used around airports—an operating environment with concentrated equipment and controlled access.",
    qualifiers: ["Equipment mix and duty cycle", "Airside safety and access requirements", "Airport, airline, and service-provider roles"],
    image: "mobility-image-gse",
    alt: "Ground-support equipment operating on an airport apron",
  },
  {
    id: "freight",
    short: "Freight corridors",
    eyebrow: "Freight and regional logistics",
    title: "Aggregate return-to-base demand into regional infrastructure.",
    body: "Freight-corridor opportunities begin with anchor demand from trucking and logistics operators, then evaluate whether a shared regional supply model is warranted.",
    qualifiers: ["Anchor fleets and recurring routes", "Credible site-control pathway", "Partner alignment before public positioning"],
    image: "mobility-image-freight",
    alt: "Freight trucks at a regional logistics facility",
  },
] as const;

export function MobilityExplorer() {
  const [activeId, setActiveId] = useState<(typeof applications)[number]["id"]>("transit");
  const active = applications.find((item) => item.id === activeId) ?? applications[0];

  return (
    <section className="mobility-explorer section-pad" aria-labelledby="mobility-use-cases">
      <div className="shell">
        <div className="mobility-title-row">
          <div>
            <p className="eyebrow light">Where mobility demand concentrates</p>
            <h2 id="mobility-use-cases">Five operating environments.</h2>
          </div>
          <p>Select an application to see the operating need and the inputs that shape a useful first assessment.</p>
        </div>

        <div className="mobility-tabs" role="tablist" aria-label="Mobility applications">
          {applications.map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={active.id === item.id}
              aria-controls={`mobility-panel-${item.id}`}
              id={`mobility-tab-${item.id}`}
              onClick={() => setActiveId(item.id)}
              key={item.id}
            >
              {item.short}
            </button>
          ))}
        </div>

        <div className="mobility-panel" id={`mobility-panel-${active.id}`} role="tabpanel" aria-labelledby={`mobility-tab-${active.id}`} key={active.id}>
          <div className={`mobility-image ${active.image}`} role="img" aria-label={active.alt} />
          <div className="mobility-copy">
            <p className="eyebrow light">{active.eyebrow}</p>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
            <ul>{active.qualifiers.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="button button-light" href={`/contact?path=fleet&application=${active.id}`}>Request a mobility fueling assessment</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
