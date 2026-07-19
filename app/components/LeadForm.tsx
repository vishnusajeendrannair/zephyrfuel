"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const SEGMENTS = [
  { value: "fleet", label: "Mobility — transit, MHE, ports, GSE or freight" },
  { value: "industrial", label: "Industrial facility" },
  { value: "data-center", label: "AI data center" },
  { value: "partner", label: "Project or delivery partner" },
];

function createMailto(form: HTMLFormElement) {
  const data = new FormData(form);
  const lines = [
    `Name: ${data.get("firstname") ?? ""} ${data.get("lastname") ?? ""}`,
    `Email: ${data.get("email") ?? ""}`,
    `Organization: ${data.get("company") ?? ""}`,
    `Opportunity: ${data.get("segment") ?? ""}`,
    `Mobility application: ${data.get("application") ?? ""}`,
    `Site location: ${data.get("site_location") ?? ""}`,
    `Demand / operating need: ${data.get("demand_profile") ?? ""}`,
    `Target timing: ${data.get("target_timing") ?? ""}`,
    `Site status: ${data.get("site_status") ?? ""}`,
    `Additional context: ${data.get("message") ?? ""}`,
  ];
  return `mailto:vishnu@zephyrfuel.energy?subject=${encodeURIComponent("ZephyrFuel site evaluation")}&body=${encodeURIComponent(lines.join("\n"))}`;
}

const MOBILITY_APPLICATIONS = [
  { value: "transit", label: "Transit fleet" },
  { value: "mhe", label: "Warehouse MHE" },
  { value: "ports", label: "Seaport operations" },
  { value: "gse", label: "Airport GSE" },
  { value: "freight", label: "Freight corridor or trucking" },
];

export function LeadForm({ crmEnabled, initialSegment = "fleet", initialApplication = "transit" }: { crmEnabled: boolean; initialSegment?: string; initialApplication?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [segment, setSegment] = useState(
    SEGMENTS.some((item) => item.value === initialSegment) ? initialSegment : "fleet",
  );
  const [application, setApplication] = useState(
    MOBILITY_APPLICATIONS.some((item) => item.value === initialApplication) ? initialApplication : "transit",
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!crmEnabled) {
      window.location.href = createMailto(form);
      return;
    }

    setStatus("sending");
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h2>Evaluation received.</h2>
        <p>ZephyrFuel will review the operating need and respond if the opportunity fits the current development focus.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        <label>First name<input name="firstname" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastname" autoComplete="family-name" required /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Organization<input name="company" autoComplete="organization" required /></label>
        <label className="full">Opportunity type<select name="segment" value={segment} onChange={(event) => setSegment(event.target.value)} required>{SEGMENTS.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select></label>
        {segment === "fleet" && <label className="full form-conditional">Mobility application<select name="application" value={application} onChange={(event) => setApplication(event.target.value)} required>{MOBILITY_APPLICATIONS.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select></label>}
        <label className="full">Site location<input name="site_location" placeholder="City, state or region" required /></label>
        <label className="full">Demand or operating need<textarea name="demand_profile" rows={4} placeholder="What are you trying to fuel or power? Include an estimated demand range if known." required /></label>
        <label>Target timing<select name="target_timing" required><option value="">Select</option><option>0–12 months</option><option>12–24 months</option><option>24–48 months</option><option>Exploratory / 48+ months</option></select></label>
        <label>Site status<select name="site_status" required><option value="">Select</option><option>Site controlled</option><option>Site identified</option><option>Site search underway</option><option>Early market discussion</option></select></label>
        <label className="full">Additional context<textarea name="message" rows={3} placeholder="Decision path, procurement milestone, partners, or constraints." /></label>
        <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="consent"><input type="checkbox" required /> I agree to be contacted about this opportunity. I will not submit proprietary engineering or trade-secret material through this form.</label>
      <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit site evaluation"}</button>
      {status === "error" && <p className="form-error" role="alert">The form could not be submitted. Email <a href="mailto:vishnu@zephyrfuel.energy">vishnu@zephyrfuel.energy</a>.</p>}
    </form>
  );
}
