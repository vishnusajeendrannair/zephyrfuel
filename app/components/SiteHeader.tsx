import Link from "next/link";
import { Brand } from "./Brand";

const nav = [
  { href: "/fleet", label: "Mobility" },
  { href: "/industrial", label: "Industrial" },
  { href: "/data-centers", label: "Data centers" },
  { href: "/model", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href="/contact">
          Evaluate your site
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="button" href="/contact">
              Evaluate your site
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
