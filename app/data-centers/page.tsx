import type { Metadata } from "next";
import Link from "next/link";
import Callout from "../components/Callout";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "AI data center energy infrastructure",
  description: "Early engagement for onsite hydrogen infrastructure in future AI data center campus energy strategies.",
};

export default function DataCentersPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-data-center">
        <div className="page-hero-copy">
          <p className="eyebrow light">AI data centers · Early engagement</p>
          <h1>Hydrogen infrastructure for high-load campuses.</h1>
          <p>ZephyrFuel is engaging data center developers, operators, utilities, and power-system partners to evaluate where onsite hydrogen supply can support future campus energy strategies.</p>
          <Link className="button button-light" href="/contact?path=data-center">Discuss a data center energy assessment</Link>
        </div>
      </section>

      <section className="intro shell section-pad">
        <div><p className="eyebrow">A deliberately sequenced platform</p><h2>Early enough to shape. Focused enough to be credible.</h2></div>
        <div className="intro-copy">
          <p>AI infrastructure is creating concentrated, long-duration energy requirements. ZephyrFuel is exploring where a demand-led onsite hydrogen model can fit within a broader campus power and resilience plan.</p>
          <p className="quiet">Specifics on configuration, performance, and delivery are shared directly with qualified partners as a project develops.</p>
        </div>
      </section>

      <section className="value-grid shell">
        <article><span className="number">01</span><h3>Campus-scale demand</h3><p>Start with the load profile, operating requirement, phased buildout, and site context.</p></article>
        <article><span className="number">02</span><h3>Integrated planning</h3><p>Evaluate hydrogen supply as one component of a larger utility, power-system, and infrastructure strategy.</p></article>
        <article><span className="number">03</span><h3>Long-horizon development</h3><p>Align early stakeholder engagement with site, utility, permitting, capital, and delivery milestones.</p></article>
      </section>

      <section className="industrial-band section-pad">
        <div className="shell industrial-band-grid">
          <div><p className="eyebrow light">Who we want to hear from</p><h2>Operators and partners with a real campus decision path.</h2></div>
          <div className="fit-list">
            <p>Data center developers and operators planning new high-load campuses</p>
            <p>Utilities and power-system partners evaluating firm infrastructure pathways</p>
            <p>Site owners with credible control, timing, and stakeholder alignment</p>
            <p>Strategic partners prepared for confidential, technically grounded development</p>
          </div>
        </div>
      </section>

      <section className="checklist shell section-pad">
        <div><p className="eyebrow">What helps us assess fit</p><h2>Frame the campus need first.</h2></div>
        <ul>
          <li><span>01</span>Location, campus scale, and development phase</li>
          <li><span>02</span>Operating requirement and target energization date</li>
          <li><span>03</span>Utility, power-system, and site-control context</li>
          <li><span>04</span>Decision team and reason for evaluating hydrogen</li>
        </ul>
      </section>

      <Callout eyebrow="Early data center engagement" title="Bring the campus energy question before the architecture is fixed." body="We are prioritizing technically grounded conversations with decision-makers who can define the site, load, timing, and stakeholder pathway." button="Discuss a data center energy assessment" href="/contact?path=data-center" />
    </PageShell>
  );
}
