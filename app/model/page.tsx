import type { Metadata } from "next";
import Callout from "../components/Callout";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "How the model works",
  description: "A demand-led, build-own-operate approach to onsite hydrogen infrastructure.",
};

const phases = [
  { n: "01", title: "Qualify", text: "Confirm the use case, demand profile, site control, timing, utilities, and decision path." },
  { n: "02", title: "Develop", text: "Advance the site, permitting, technical configuration, partners, and commercial structure." },
  { n: "03", title: "Deliver", text: "Coordinate financing, procurement, construction, commissioning, and readiness." },
  { n: "04", title: "Operate", text: "Manage onsite production and long-term service against agreed project requirements." },
];

export default function ModelPage() {
  return (
    <PageShell>
      <section className="simple-hero shell">
        <p className="eyebrow">The ZephyrFuel delivery model</p>
        <h1>Demand first. Infrastructure second.</h1>
        <p>ZephyrFuel develops onsite hydrogen projects around qualified customer demand, then remains accountable through delivery and operation.</p>
      </section>

      <section className="phase-section shell">
        <ol className="phase-list">
          {phases.map((phase) => (
            <li key={phase.n}>
              <span>{phase.n}</span>
              <h2>{phase.title}</h2>
              <p>{phase.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="responsibility section-pad">
        <div className="shell responsibility-grid">
          <div><p className="eyebrow light">Clear accountability</p><h2>A service model, not a public equipment catalog.</h2></div>
          <div>
            <p>Customers need to understand the outcome, responsibilities, and commercial path. They do not need ZephyrFuel’s internal architecture or playbook.</p>
            <div className="responsibility-cards">
              <article><h3>Publicly clear</h3><p>Who we serve, the problem we solve, how qualification works, and the high-level delivery model.</p></article>
              <article><h3>Project confidential</h3><p>Engineering, vendors, economics, controls, financing terms, partner structures, and deployment strategy.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-pad decision-gate">
        <div><p className="eyebrow">A disciplined development gate</p><h2>Not every site becomes a project.</h2></div>
        <p>We advance opportunities where demand, site feasibility, stakeholder readiness, and commercial alignment support a durable infrastructure investment. Early qualification protects everyone’s time.</p>
      </section>

      <Callout title="See whether your site fits the model." body="A first evaluation focuses on the location, demand profile, operating need, target date, and decision process." />
    </PageShell>
  );
}
