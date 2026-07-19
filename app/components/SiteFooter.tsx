import Link from "next/link";
import { Brand } from "./Brand";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p className="footer-statement">
            Onsite hydrogen infrastructure shaped around real demand.
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Solutions</p>
          <Link href="/fleet">Mobility applications</Link>
          <Link href="/industrial">Industrial facilities</Link>
          <Link href="/data-centers">AI data centers</Link>
          <Link href="/model">Delivery model</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Company</p>
          <Link href="/about">About ZephyrFuel Inc.</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/partnerships">Pilot partnerships</Link>
          <Link href="/contact">Evaluate your site</Link>
          <a href="mailto:careers@zephyrfuel.energy">careers@zephyrfuel.energy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ZephyrFuel Inc.</span>
        <span>Project development subject to site, demand, and commercial review.</span>
      </div>
    </footer>
  );
}
