import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import styles from "./SiteFooter.module.css";

const exploreLinks = [
  { label: "Solutions overview", href: "/#ranges" },
  { label: "Industries & applications", href: "/industries" },
  { label: "V-Klin everyday care", href: "/vklin" },
  { label: "V-Klin product catalogue", href: "/vklin/products" },
  { label: "Quality & laboratory", href: "/quality" },
  { label: "Certifications & scope", href: "/certifications" },
  { label: "About PolyTreat", href: "/about" },
  { label: "Contact our team", href: "/contact" },
];

const solutionLinks = [
  { label: "Industrial water treatment", href: "/solutions/industrial-water" },
  { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
  { label: "RO & effluent systems", href: "/solutions/ro-effluent" },
  { label: "Construction chemistry", href: "/solutions/construction-chemistry" },
  { label: "Waterproofing & coatings", href: "/solutions/waterproofing-repair-coatings" },
  { label: "Flooring & joint sealing", href: "/solutions/flooring-joint-sealing" },
  { label: "Specialty products (COROSIL)", href: "/specialty/corosil" },
  { label: "Odour control (POLYDOR-WS)", href: "/specialty/polydor-ws" },
];

const pqrsItems = [
  { letter: "Performance", color: "var(--pt-blue, #1B5FA8)" },
  { letter: "Quality", color: "var(--pt-orange, #E07B1A)" },
  { letter: "Reliability", color: "var(--pt-purple, #5B4BC4)" },
  { letter: "Service", color: "var(--pt-green, #0E8F5E)" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.topBrandLine} aria-hidden="true" />
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* Column 1: Brand & Credibility */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink} aria-label="PolyTreat home">
              <Image
                className={styles.logoImg}
                src="/logo.png"
                width={200}
                height={67}
                alt="PolyTreat Chemicals Pvt. Ltd."
              />
            </Link>
            <p className={styles.brandDesc}>
              Applied chemistry for industrial water, construction and surface protection,
              and everyday facility care. Manufactured in Maharashtra since 1987.
            </p>
            <div className={styles.brandProof}>
              <span className={styles.proofDot} aria-hidden="true" />
              <span>In-house QC Lab · ISO 9001:2015 QMS</span>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <nav className={styles.navCol} aria-label="Footer Explore Navigation">
            <h2 className={styles.colHeading}>Explore</h2>
            <ul className={styles.navLinks}>
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Product Ranges */}
          <nav className={styles.navCol} aria-label="Footer Product Ranges">
            <h2 className={styles.colHeading}>Our Work</h2>
            <ul className={styles.navLinks}>
              {solutionLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Direct Contact */}
          <div className={styles.contactCol}>
            <h2 className={styles.colHeading}>Direct Contact</h2>
            <ul className={styles.contactList}>
              <li>
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className={styles.contactLink}>
                  <Phone size={16} className={styles.contactIcon} aria-hidden="true" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className={styles.contactLink}>
                  <Mail size={16} className={styles.contactIcon} aria-hidden="true" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>{companyInfo.officeAddress}</span>
              </li>
            </ul>

            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.whatsappBadge}
              aria-label="Chat with PolyTreat team on WhatsApp"
            >
              <MessageCircle size={15} aria-hidden="true" />
              <span>{companyInfo.whatsappLabel}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, PQRS & Credits */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © 2026 PolyTreat Chemicals Pvt. Ltd. All rights reserved.
          </span>

          <div className={styles.pqrsTagline} aria-label="PQRS Framework: Performance, Quality, Reliability, Service">
            {pqrsItems.map((item, index) => (
              <span key={item.letter} className={styles.pqrsItem}>
                <span
                  className={styles.pqrsDot}
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <span>{item.letter}</span>
                {index < pqrsItems.length - 1 && <span aria-hidden="true">·</span>}
              </span>
            ))}
          </div>

          <span className={styles.credit}>
            Designed with <span className={styles.creditHeart} aria-hidden="true">♥</span> by{" "}
            <a href="https://brightlant.com" target="_blank" rel="noreferrer">
              Brightlant
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
