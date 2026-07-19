import type { Metadata } from "next";
import Link from "next/link";
import Callout from "../components/Callout";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "About ZephyrFuel Inc.",
  description: "ZephyrFuel Inc. is developing demand-led onsite hydrogen infrastructure for mobility, industrial, and emerging data center applications.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="simple-hero shell about-hero">
        <p className="eyebrow">About ZephyrFuel Inc.</p>
        <h1>Infrastructure starts with disciplined discovery.</h1>
        <p>ZephyrFuel Inc. is developing demand-led onsite hydrogen infrastructure for mobility operators, industrial facilities, and emerging high-load campus applications.</p>
      </section>

      <section className="about-intro shell section-pad">
        <div><p className="eyebrow">Current positioning</p><h2>Early-stage, commercially focused, and selective by design.</h2></div>
        <div>
          <p>ZephyrFuel begins with a real operating need, a credible site, and stakeholders prepared to evaluate a long-term infrastructure relationship. Projects advance through confidential technical and commercial development after qualification.</p>
          <p>We do not present exploratory opportunities as deployments. Public claims remain distinct from project-specific engineering, economics, partner structures, and execution strategy.</p>
        </div>
      </section>

      <section className="credential-band section-pad">
        <div className="shell credential-grid">
          <div>
            <p className="eyebrow light">Founder development</p>
            <h2>Evidence-based customer discovery.</h2>
            <p>ZephyrFuel Inc. was founded by Vishnu Sajeendran Nair, who completed the GAME Change I-Corps Accelerator through the NSF Mid-South I-Corps Hub, applying evidence-based idea evaluation and customer discovery to circular-economy innovation.</p>
          </div>
          <article className="credential-card">
            <span className="credential-kicker">Certificate of completion</span>
            <h3>GAME Change I-Corps Accelerator</h3>
            <p>Issued to Vishnu Sajeendran Nair by the GAME Change I-Corps Accelerator and NSF Mid-South I-Corps Hub.</p>
            <a className="text-link light-link" href="/credentials/zephyrfuel-game-change-certificate.pdf" target="_blank" rel="noreferrer">View completion certificate <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="principles shell section-pad">
        <div><p className="eyebrow">Operating principles</p><h2>What guides project development.</h2></div>
        <div className="principle-list">
          <article><span>01</span><div><h3>Demand before equipment</h3><p>Start with the customer’s operating profile, not a public product catalog.</p></div></article>
          <article><span>02</span><div><h3>Claims before promotion</h3><p>Describe only what can be supported at the company and project stage.</p></div></article>
          <article><span>03</span><div><h3>Accountability across the lifecycle</h3><p>Develop infrastructure with long-term delivery and operations in view.</p></div></article>
        </div>
      </section>

      <section className="about-links shell">
        <Link href="/model">See how the model works <span aria-hidden="true">→</span></Link>
        <Link href="/partnerships">Explore project partnerships <span aria-hidden="true">→</span></Link>
      </section>

      <Callout title="Bring us a defined operating need." body="ZephyrFuel evaluates opportunities where demand, site readiness, timing, and stakeholder alignment support disciplined project development." />
    </PageShell>
  );
}
