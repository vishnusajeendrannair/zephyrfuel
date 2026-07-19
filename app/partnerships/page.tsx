import type { Metadata } from "next";
import Link from "next/link";
import Callout from "../components/Callout";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Pilot partnerships",
  description: "Work with ZephyrFuel on demand-led onsite hydrogen infrastructure projects.",
};

export default function PartnershipsPage() {
  return (
    <PageShell>
      <section className="simple-hero shell">
        <p className="eyebrow">Pilot partnerships</p>
        <h1>Build the right first project.</h1>
        <p>ZephyrFuel Inc. is assembling qualified customer sites and aligned delivery partners for early onsite hydrogen projects.</p>
        <Link className="button" href="/contact?path=partner">Discuss a partnership</Link>
      </section>

      <section className="partner-grid shell">
        <article><span>01</span><h2>Site hosts &amp; end users</h2><p>Transit agencies, fleet operators, ports, logistics hubs, airports, campuses, and industrial facilities with defined demand.</p></article>
        <article><span>02</span><h2>Delivery partners</h2><p>Experienced engineering, equipment, construction, operations, and service organizations suited to project execution.</p></article>
        <article><span>03</span><h2>Energy &amp; infrastructure partners</h2><p>Utilities, public agencies, community stakeholders, and capital providers aligned with durable local infrastructure.</p></article>
      </section>

      <section className="partner-principles section-pad">
        <div className="shell">
          <p className="eyebrow light">How we work</p>
          <div className="principle-grid">
            <article><h3>Qualified demand</h3><p>Projects begin with a credible user and a real operating need.</p></article>
            <article><h3>Clear roles</h3><p>Scope, responsibility, and decision rights are defined as development advances.</p></article>
            <article><h3>Confidential development</h3><p>Sensitive technical and commercial work happens with appropriate protections.</p></article>
            <article><h3>Long-term alignment</h3><p>Partners are selected for the full asset lifecycle, not only the announcement.</p></article>
          </div>
        </div>
      </section>

      <Callout eyebrow="Partner with ZephyrFuel Inc." title="Bring a site, a capability, or an infrastructure mandate." body="We prioritize opportunities with a defined owner, credible timeline, and clear contribution to a bankable project." button="Discuss a partnership" href="/contact?path=partner" />
    </PageShell>
  );
}
