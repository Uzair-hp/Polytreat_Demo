import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link" aria-label="PolyTreat home">
              <Image
                className="footer-logo"
                src="/logo.png"
                width={2167}
                height={726}
                alt="PolyTreat Chemicals"
              />
            </Link>
            <p>Applied chemistry for industrial water, construction, and everyday facility care.</p>
            <div className="footer-social-block">
              <span className="footer-social-label">Connect with PolyTreat</span>
              <div className="footer-social-links" role="group" aria-label="Social media icons; profile links are pending">
                <span className="footer-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="footer-social-dot" cx="17.6" cy="6.7" r="0.8" /></svg>
                </span>
                <span className="footer-social-icon footer-social-linkedin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.8H2.5v12h2.7v-12ZM3.85 2.7a1.58 1.58 0 1 0 0 3.16 1.58 1.58 0 0 0 0-3.16ZM21.5 13.9c0-3.6-1.92-5.28-4.48-5.28a3.87 3.87 0 0 0-3.48 1.92V8.8h-2.7v12h2.7v-6.2c0-1.64.31-3.23 2.35-3.23 2.01 0 2.04 1.88 2.04 3.34v6.09h2.7l.87-6.9Z" /></svg>
                </span>
                <span className="footer-social-icon footer-social-facebook" aria-hidden="true">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.6V13h2.7v8h3.2Z" /></svg>
                </span>
              </div>
              <span className="footer-social-note">Profile links to be added</span>
            </div>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <Link href="/#solutions">Solutions</Link>
            <Link href="/#markets">Applications</Link>
            <Link href="/#vklin">V-Klin</Link>
            <Link href="/about">About us</Link>
          </div>
          <div className="footer-column">
            <h2>Our work</h2>
            <Link href="/#solution-water">Water treatment</Link>
            <Link href="/#solution-construction">Construction chemistry</Link>
            <Link href="/#solution-vklin">Institutional &amp; home care</Link>
          </div>
          <div className="footer-column footer-contact-column">
            <h2>Contact</h2>
            <a href="mailto:polyind2@gmail.com"><Mail size={15} aria-hidden="true" /> polyind2@gmail.com</a>
            <a href="tel:+919820235995"><Phone size={15} aria-hidden="true" /> +91 98202 35995</a>
            <span><MapPin size={15} aria-hidden="true" /> Tarapur MIDC · Goregaon, Mumbai</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© 2026 PolyTreat Chemicals Pvt. Ltd.</span>
          <span className="footer-principles">Performance · Quality · Reliability · Service</span>
          <span className="footer-credit">
            Designed with <span className="footer-credit-heart" aria-hidden="true">♥</span> by{" "}
            <a href="https://brightlant.com" target="_blank" rel="noreferrer">Brightlant</a>
          </span>
        </div>
      </div>
    </footer>
  );
}