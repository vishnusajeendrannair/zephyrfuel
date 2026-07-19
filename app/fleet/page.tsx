import type { Metadata } from "next";
import Link from "next/link";
import Callout from "../components/Callout";
import { MobilityExplorer } from "../components/MobilityExplorer";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Mobility hydrogen infrastructure",
  description: "Onsite hydrogen infrastructure for transit, warehouse MHE, seaports, airport GSE, and freight operations.",
};

export default function FleetPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-fleet">
        <div className="page-hero-copy">
          <p className="eyebrow light">Mobility</p>
          <h1>Fuel where operations return.</h1>
          <p>
            ZephyrFuel develops onsite hydrogen supply around concentrated
            equipment demand, site workflow, and long-term operating needs.
          </p>
          <Link className="button button-light" href="/contact?path=fleet">
            Request a mobility fueling assessment
          </Link>
        </div>
      </section>

      <section className="intro shell section-pad">
        <div><p className="eyebrow">The operating challenge</p><h2>Equipment transitions cannot depend on uncertain fuel.</h2></div>
        <div className="intro-copy">
          <p>Vehicle and equipment procurement, operating schedules, site workflow, and fuel availability must move together. ZephyrFuel starts with the operator’s real duty cycle—not a generic equipment sale.</p>
          <p className="quiet">Every project is subject to site feasibility, applicable codes, permitting, utility availability, and commercial agreement.</p>
        </div>
      </section>

      <section className="value-grid shell">
        <article><span className="number">01</span><h3>Demand-led sizing</h3><p>Build the project around a credible fleet deployment and fuel-demand ramp.</p></article>
        <article><span className="number">02</span><h3>Depot integration</h3><p>Evaluate layout, circulation, operating windows, utilities, and delivery constraints.</p></article>
        <article><span className="number">03</span><h3>Long-term accountability</h3><p>Structure one service relationship for infrastructure development and operation.</p></article>
      </section>

      <MobilityExplorer />

      <section className="checklist shell section-pad">
        <div><p className="eyebrow">What helps us assess fit</p><h2>Come prepared with four inputs.</h2></div>
        <ul>
          <li><span>01</span>Vehicle or equipment type and planned count</li>
          <li><span>02</span>Estimated daily hydrogen demand and ramp</li>
          <li><span>03</span>Operating-site address, control, and available area</li>
          <li><span>04</span>Procurement path and target operating date</li>
        </ul>
      </section>

      <Callout eyebrow="Mobility assessment" title="Connect the operating plan to a fuel plan." body="A useful first review considers equipment demand, site constraints, timing, and decision authority." button="Request a mobility fueling assessment" href="/contact?path=fleet" />
    </PageShell>
  );
}
