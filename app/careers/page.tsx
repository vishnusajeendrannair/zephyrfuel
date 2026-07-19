import type { Metadata } from "next";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Careers at ZephyrFuel Inc.",
  description:
    "Join ZephyrFuel Inc. to help develop and deliver demand-led onsite hydrogen infrastructure.",
};

const roles = [
  {
    priority: "Immediate priority",
    number: "01",
    title: "Process / Site Engineer",
    subtitle: "Technical execution lead — Phase 1",
    summary:
      "Lead the technical execution of ZephyrFuel’s first project phase, with responsibility for ZF-500 deployment planning and site integration.",
    responsibilities: [
      "Translate project requirements into a practical site-integration plan",
      "Coordinate process, balance-of-plant, utilities, safety, and permitting inputs",
      "Work across equipment partners, site stakeholders, and project development",
    ],
    fit: "A hands-on engineer who can move between process detail, site realities, and cross-functional execution.",
  },
  {
    priority: "Priority search",
    number: "02",
    title: "Business Development Professional",
    subtitle: "Strategic customer development",
    summary:
      "Open and develop high-quality commercial relationships while the founding team remains focused across technology, capital, and strategy.",
    responsibilities: [
      "Activate trusted relationships in refinery, utility, food-industry, or transit markets",
      "Qualify operating need, decision structure, site context, and commercial readiness",
      "Build disciplined pathways from first conversation to project evaluation",
    ],
    fit: "A relationship-led operator with relevant sector access, sound judgment, and experience developing complex infrastructure opportunities.",
  },
  {
    priority: "Flexible engagement",
    number: "03",
    title: "Finance Lead / Advisor",
    subtitle: "Full-time or part-time",
    summary:
      "Strengthen the financial capability behind Hydrogen-as-a-Service contract development and the Phase 1 capital raise.",
    responsibilities: [
      "Support HaaS commercial and contract-structure analysis",
      "Develop project and company financial models for decision-making",
      "Prepare capital materials and support investor and financing workstreams",
    ],
    fit: "A finance professional comfortable with project infrastructure, contracted services, early-stage capital, and incomplete information.",
  },
];

export default function CareersPage() {
  return (
    <PageShell>
      <section className="simple-hero shell careers-hero">
        <p className="eyebrow">Careers at ZephyrFuel Inc.</p>
        <h1>Build the team behind the first projects.</h1>
        <p>
          We are assembling a small, high-accountability team to turn qualified
          customer demand into operating onsite hydrogen infrastructure.
        </p>
        <a
          className="button"
          href="mailto:careers@zephyrfuel.energy?subject=ZephyrFuel%20career%20interest"
        >
          Introduce yourself
        </a>
      </section>

      <section className="careers-intro shell section-pad">
        <div>
          <p className="eyebrow">Why now</p>
          <h2>Early roles with direct operating impact.</h2>
        </div>
        <div>
          <p>
            These are foundational roles, not narrow handoffs. Each person will
            work close to customers, partners, technical decisions, and company
            priorities as ZephyrFuel advances Phase 1.
          </p>
          <p className="quiet">
            We value practical judgment, ownership, clear communication, and a
            willingness to build the systems an early-stage company needs.
          </p>
        </div>
      </section>

      <section className="roles-section shell" aria-labelledby="open-roles">
        <div className="roles-heading">
          <p className="eyebrow">Open priorities</p>
          <h2 id="open-roles">Where we need capability now.</h2>
        </div>
        <div className="role-list">
          {roles.map((role) => (
            <article className="role-card" key={role.number}>
              <div className="role-meta">
                <span>{role.number}</span>
                <strong>{role.priority}</strong>
              </div>
              <div className="role-main">
                <p className="role-subtitle">{role.subtitle}</p>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
              </div>
              <div className="role-detail">
                <p className="role-label">What you would own</p>
                <ul>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="role-fit"><strong>Strong fit:</strong> {role.fit}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hiring-process section-pad">
        <div className="shell hiring-grid">
          <div>
            <p className="eyebrow light">Priority onboarding</p>
            <h2>A focused path from introduction to contribution.</h2>
            <p>
              Applications are reviewed on a rolling basis. For immediate and
              priority needs, we aim to move quickly when capability and timing
              align.
            </p>
          </div>
          <ol className="steps compact hiring-steps">
            <li><span>01</span><div><h3>Introduce</h3><p>Send a concise note, résumé or LinkedIn profile, the role that fits, and—if useful—an optional video introduction.</p></div></li>
            <li><span>02</span><div><h3>Working conversation</h3><p>Discuss relevant experience, motivation, availability, and the problems ahead.</p></div></li>
            <li><span>03</span><div><h3>Capability review</h3><p>Explore a practical work example or operating scenario relevant to the role.</p></div></li>
            <li><span>04</span><div><h3>Align and onboard</h3><p>Confirm scope, engagement structure, priorities, and a focused first 30 days.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="career-callout shell">
        <div>
          <p className="eyebrow light">Start a conversation</p>
          <h2>See a strong match?</h2>
        </div>
        <div>
          <p>
            Email careers@zephyrfuel.energy with the role in the subject line.
            Include a short note on the capability and relationships you would
            bring, plus your résumé or LinkedIn profile.
          </p>
          <div className="video-option">
            <strong>Optional video introduction</strong>
            <p>
              You may include a view-only link to a 60–90 second video covering
              why this role interests you, the most relevant capability you
              bring, and what you would prioritize in your first 30 days. A
              simple phone recording is welcome; production quality is not
              evaluated. Candidates who do not submit a video receive equal
              consideration.
            </p>
          </div>
          <a
            className="button button-light"
            href="mailto:careers@zephyrfuel.energy?subject=Application%20%E2%80%94%20%5BRole%20title%5D"
          >
            Email careers@zephyrfuel.energy
          </a>
        </div>
      </section>

      <section className="shell careers-note">
        <p>
          ZephyrFuel Inc. considers qualified applicants without regard to race,
          color, religion, sex, national origin, age, disability, veteran status,
          or any other status protected by applicable law. Role scope and
          engagement structure may evolve with company and project needs.
        </p>
      </section>
    </PageShell>
  );
}
