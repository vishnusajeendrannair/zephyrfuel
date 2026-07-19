import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  if (!portalId || !formGuid) {
    return NextResponse.json({ error: "CRM routing is not configured" }, { status: 503 });
  }

  const data = (await request.json()) as Record<string, unknown>;
  if (data.website) return NextResponse.json({ ok: true });

  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const clean = (name: string) => typeof data[name] === "string" ? data[name].trim().slice(0, 5000) : "";
  const structuredMessage = [
    `Opportunity: ${clean("segment")}`,
    `Mobility application: ${clean("application")}`,
    `Site location: ${clean("site_location")}`,
    `Demand / operating need: ${clean("demand_profile")}`,
    `Target timing: ${clean("target_timing")}`,
    `Site status: ${clean("site_status")}`,
    `Additional context: ${clean("message")}`,
  ].join("\n");
  const fields = [
    { objectTypeId: "0-1", name: "firstname", value: clean("firstname") },
    { objectTypeId: "0-1", name: "lastname", value: clean("lastname") },
    { objectTypeId: "0-1", name: "email", value: email },
    { objectTypeId: "0-1", name: "company", value: clean("company") },
    { objectTypeId: "0-1", name: "message", value: structuredMessage },
  ];

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${encodeURIComponent(portalId)}/${encodeURIComponent(formGuid)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: String(Date.now()),
        fields,
        context: { pageName: "ZephyrFuel Site Evaluation", pageUri: "https://zephyrfuel.energy/contact" },
      }),
    },
  );

  if (!response.ok) {
    return NextResponse.json({ error: "CRM submission failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
