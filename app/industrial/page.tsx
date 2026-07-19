import type { Metadata } from "next";
import Link from "next/link";
import Callout from "../components/Callout";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Industrial hydrogen infrastructure",
  description: "Onsite hydrogen infrastructure for existing users and hard-to-electrify industrial operations.",
};

export default function IndustrialPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-industrial">
        <div className="page-hero-copy">
          <p className="eyebrow light">Industrial facilities</p>
          <h1>Hydrogen where your process needs it.</h1>
          <p>
            ZephyrFuel evaluates onsite infrastructure for industrial users
            seeking a more direct, site-specific path to reliable hydrogen
            supply and long-term operating support.
          </p>
          <Link className="button button-light" href="/contact?path=industrial">
            Request an industrial feasibility review
          </Link>
        </div>
      </section>

      <section className="intro shell section-pad">
        <div><p className="eyebrow">Supply at the point of use</p><h2>Reduce the distance between production and demand.</h2></div>
        <div className="intro-copy">
          <p>Industrial hydrogen requirements are site-specific. We start with the operating need, demand profile, facility constraints, and long-term commercial fit before defining a project.</p>
          <p className="quiet">Technical configurations, cost structures, vendor selections, and performance assumptions are developed confidentially after qualification.</p>
        </div>
      </section>

      <section className="value-grid shell">
        <article><span className="number">01</span><h3>Site-specific development</h3><p>Align infrastructure with the facility’s actual space, utilities, operating pattern, and risk profile.</p></article>
        <article><span className="number">02</span><h3>Commercial alignment</h3><p>Evaluate a long-term service structure anchored by verified demand.</p></article>
        <article><span className="number">03</span><h3>Lifecycle ownership</h3><p>Coordinate development, delivery, and ongoing operation through one accountable platform.</p></article>
      </section>

      <section className="industrial-band section-pad">
        <div className="shell industrial-band-grid">
          <div><p className="eyebrow light">Initial fit</p><h2>Designed for serious, site-based demand.</h2></div>
          <div className="fit-list">
            <p>Existing hydrogen consumption or a defined future requirement</p>
            <p>Controllable site with credible access to utilities</p>
            <p>Long-term operating horizon and an identifiable decision team</p>
            <p>Willingness to share data under confidentiality</p>
          </div>
        </div>
      </section>

      <section className="checklist shell section-pad">
        <div><p className="eyebrow">What helps us assess fit</p><h2>Start with the operating facts.</h2></div>
        <ul>
          <li><span>01</span>Location and facility use case</li>
          <li><span>02</span>Current and forecast hydrogen demand</li>
          <li><span>03</span>Required availability, timing, and operating window</li>
          <li><span>04</span>Site control, utility context, and decision path</li>
        </ul>
      </section>

      <Callout eyebrow="Industrial feasibility" title="Put the operating need at the center of the project." body="Share the site, demand range, use case, and timing. We’ll assess whether deeper confidential development is warranted." button="Request a feasibility review" href="/contact?path=industrial" />
    </PageShell>
  );
}
