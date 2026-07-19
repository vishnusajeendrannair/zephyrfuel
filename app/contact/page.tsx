import type { Metadata } from "next";
import { LeadForm } from "../components/LeadForm";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Evaluate your site",
  description: "Start a site evaluation with ZephyrFuel.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ path?: string; application?: string }> }) {
  const crmEnabled = Boolean(process.env.HUBSPOT_PORTAL_ID && process.env.HUBSPOT_FORM_GUID);
  const { path, application } = await searchParams;

  return (
    <PageShell>
      <section className="contact-intro shell">
        <div>
          <p className="eyebrow">Evaluate your site</p>
          <h1>Start with the operating need.</h1>
          <p>Send the facts we need for a focused first review. Confidential project detail can follow under the right protections.</p>
        </div>
        <p className="contact-side-note"><span>For mobility operators</span> Request a Mobility Fueling Assessment.<br /><span>For industrial sites</span> Request an Industrial Feasibility Review.<br /><span>For data centers</span> Discuss a Data Center Energy Assessment.</p>
      </section>

      <section className="contact-form-section shell">
        <LeadForm crmEnabled={crmEnabled} initialSegment={path} initialApplication={application} />
      </section>

      <section className="privacy-note shell">
        <p>Do not submit proprietary engineering, pricing, or trade-secret material in the first inquiry. We can establish a confidential channel after initial qualification. Direct contact: <a href="mailto:vishnu@zephyrfuel.energy">vishnu@zephyrfuel.energy</a>.</p>
      </section>
    </PageShell>
  );
}
