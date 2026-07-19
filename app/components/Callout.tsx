import Link from "next/link";

type CalloutProps = {
  eyebrow?: string;
  title: string;
  body: string;
  button?: string;
  href?: string;
};

export default function Callout({
  eyebrow = "Start with your site",
  title,
  body,
  button = "Evaluate your site",
  href = "/contact",
}: CalloutProps) {
  return (
    <section className="callout shell">
      <div>
        <p className="eyebrow light">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="callout-copy">
        <p>{body}</p>
        <Link className="button button-light" href={href}>
          {button}<span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
