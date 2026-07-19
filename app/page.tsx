import Link from "next/link";
import Callout from "./components/Callout";
import PageShell from "./components/PageShell";
import { SegmentExplorer } from "./components/SegmentExplorer";

const proof = [
  "Onsite production",
  "Build–own–operate",
  "Demand-led",
  "Long-term service",
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Onsite hydrogen infrastructure</p>
          <h1>Reliable hydrogen, produced where you use it.</h1>
          <p className="hero-lede">
            Onsite hydrogen infrastructure for fleets, industrial facilities,
            and emerging AI data center demand—developed, financed, owned, and
            operated by ZephyrFuel.
          </p>
          <div className="button-row">
            <Link className="button" href="/contact">
              Evaluate your site
            </Link>
            <Link className="button button-ghost" href="/model">
              See how it works <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Transit depot with buses and enclosed onsite energy infrastructure">
          <div className="image-note">
            <span>Designed around</span>
            verified site demand
          </div>
        </div>
      </section>

      <div className="proof-strip" aria-label="ZephyrFuel delivery principles">
        {proof.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <section className="intro shell section-pad">
        <div>
          <p className="eyebrow">Infrastructure, without the guesswork</p>
          <h2>Hydrogen supply shaped around real operations.</h2>
        </div>
        <div className="intro-copy">
          <p>
            ZephyrFuel works backward from verified demand, site constraints,
            and operating requirements. We develop an onsite supply solution
            and remain accountable for its long-term performance.
          </p>
          <p className="quiet">
            Our public site explains the commercial model and qualification
            path. Project engineering, economics, and partner structures are
            developed confidentially with qualified customers.
          </p>
        </div>
      </section>

      <SegmentExplorer />

      <section className="model-section section-pad">
        <div className="shell model-grid">
          <div>
            <p className="eyebrow light">The ZephyrFuel model</p>
            <h2>One accountable infrastructure partner.</h2>
            <p>
              We coordinate project development from qualification through
              operations, aligning the asset with contracted demand rather
              than speculative capacity.
            </p>
            <Link className="button button-light" href="/model">
              View the delivery model
            </Link>
          </div>
          <ol className="steps compact">
            <li><span>01</span><div><h3>Qualify</h3><p>Demand, site, utilities, timing, and operating fit.</p></div></li>
            <li><span>02</span><div><h3>Develop</h3><p>A project configuration and commercial pathway.</p></div></li>
            <li><span>03</span><div><h3>Deliver</h3><p>Finance, coordinate, build, and commission the asset.</p></div></li>
            <li><span>04</span><div><h3>Operate</h3><p>Manage production and long-term hydrogen service.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="fit-section shell section-pad">
        <div>
          <p className="eyebrow">A focused first conversation</p>
          <h2>Good projects begin with operational fit.</h2>
        </div>
        <div className="fit-grid">
          <article><span>01</span><h3>Demand</h3><p>Current or planned hydrogen use with a credible ramp.</p></article>
          <article><span>02</span><h3>Site</h3><p>Space, access, utilities, safety, and permitting context.</p></article>
          <article><span>03</span><h3>Commitment</h3><p>A decision path and appetite for a long-term service model.</p></article>
        </div>
      </section>

      <Callout
        title="Bring us the operating need. We’ll evaluate the infrastructure path."
        body="Share your location, use case, demand profile, and target timing. We’ll determine whether a structured feasibility conversation makes sense."
      />
    </PageShell>
  );
}
