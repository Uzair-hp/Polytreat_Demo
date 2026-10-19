import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "PolyTreat Chemicals holds ISO 9001:2015, WHO-GMP, US FDA compliance, and UKcert eco-friendly certifications, covering the manufacture of water-treatment and hygiene chemicals at its Tarapur MIDC and Goregaon units.",
  keywords:
    "PolyTreat certifications, ISO 9001:2015 certificate, WHO-GMP certificate, US FDA compliance, UKcert eco-friendly certificate, chemical manufacturing certifications",
};

const certificates = [
  {
    name: "ISO 9001:2015",
    title: "Quality Management System",
    issuer: "SMCS · accredited by AIAO-BAR USA",
    certificateNumber: "QMS2500904",
    validity: "Valid through September 2028",
    image: "/certifications/iso-9001-2015-quality-certificate.jpeg",
    alt: "PolyTreat Chemicals ISO 9001:2015 quality management certificate",
    scope:
      "Manufacture of water treatment chemicals and homecare, hygienic & industrial cleaning chemicals — covering both divisions.",
    tone: "blue",
  },
  {
    name: "WHO-GMP",
    title: "Good Manufacturing Practice",
    issuer: "UKcert",
    certificateNumber: "UQ-2026010927",
    validity: null,
    image: "/certifications/who-gmp-compliance-certificate.jpeg",
    alt: "PolyTreat Chemicals WHO-GMP certificate of compliance",
    scope:
      "Manufacturing practices assessed against World Health Organization Good Manufacturing Practice guidelines.",
    tone: "slate",
  },
  {
    name: "US FDA",
    title: "FDA Compliance Certificate",
    issuer: "UK Certification and Assessment Ltd",
    certificateNumber: "Q-582609012026",
    validity: null,
    image: "/certifications/fda-compliance-certificate.jpeg",
    alt: "PolyTreat Chemicals US FDA compliance certificate",
    scope:
      "Compliance documentation supporting products supplied for US-market applications.",
    tone: "slate",
  },
  {
    name: "Eco-Friendly",
    title: "UKcert Eco-Friendly Quality Compliance",
    issuer: "UKcert",
    certificateNumber: "2026010928",
    validity: null,
    image: "/certifications/eco-friendly-compliance-certificate.jpeg",
    alt: "PolyTreat Chemicals UKcert eco-friendly quality compliance certificate",
    scope:
      "Non-toxic, safe cleaning formulations across the V-Klin institutional and home-care range.",
    tone: "green",
  },
];

const facts = [
  { icon: BadgeCheck, label: "ISO 9001:2015" },
  { icon: ShieldCheck, label: "WHO-GMP" },
  { icon: FileCheck2, label: "US FDA compliance" },
  { icon: Leaf, label: "Eco-friendly certified" },
];

export default function CertificationsPage() {
  return (
    <main className="certs-page">
      <section className="certs-hero" aria-labelledby="certs-title">
        <div className="container certs-hero-inner">
          <div>
            <span className="eyebrow eyebrow-dark">Quality &amp; compliance</span>
            <h1 id="certs-title">Certifications that back every batch.</h1>
            <p className="certs-hero-lead">
              PolyTreat&apos;s quality management system and manufacturing practices are certified
              by independent bodies. Select any certificate to view it in full resolution.
            </p>
            <ul className="about-facts">
              {facts.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={15} aria-hidden="true" /> {label}</li>
              ))}
            </ul>
          </div>

          <aside className="certs-request-card" aria-label="Document requests">
            <span className="certs-request-mark"><FileCheck2 size={19} aria-hidden="true" /></span>
            <h2>Need a document for your tender or audit?</h2>
            <p>
              Certified copies of these certificates, along with product TDS and SDS sheets, are
              available on request.
            </p>
            <Link className="btn btn-primary" href="/contact">
              Request documents <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section" id="certificate-library" aria-labelledby="library-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow eyebrow-dark">Certificate library</span>
              <h2 id="library-title">Four certifications, one quality system.</h2>
            </div>
            <p>
              All certificates cover the manufacture of PolyTreat&apos;s water-treatment,
              construction, and V-Klin cleaning chemicals at its Maharashtra units.
            </p>
          </div>

          <div className="certs-grid">
            {certificates.map(({ name, title, issuer, certificateNumber, validity, image, alt, scope, tone }) => (
              <article className={`cert-card cert-card-${tone}`} key={name}>
                <a className="cert-card-figure" href={image} target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={alt} loading="lazy" />
                  <span className="cert-card-view">View full <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
                <div className="cert-card-body">
                  <span className="cert-card-eyebrow">{issuer}</span>
                  <h3>{title}</h3>
                  <p>{scope}</p>
                  <dl className="cert-card-meta">
                    <div>
                      <dt>Certificate no.</dt>
                      <dd>{certificateNumber}</dd>
                    </div>
                    {validity && (
                      <div>
                        <dt>Validity</dt>
                        <dd>{validity}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-band" aria-labelledby="certs-standard-title">
        <div className="container about-rd-layout">
          <div className="company-copy">
            <span className="eyebrow eyebrow-dark">Standards in practice</span>
            <h2 id="certs-standard-title">What the certifications mean for buyers.</h2>
            <p>
              The ISO 9001:2015 certification sets the framework: documented processes, raw-material
              inspection, and batch testing before dispatch. WHO-GMP and FDA compliance confirm the
              same manufacturing discipline against international guidelines, and the UKcert
              eco-friendly certification covers the safety of V-Klin cleaning formulations.
            </p>
            <p>
              Together they let procurement, QA, and audit teams verify PolyTreat&apos;s claims from
              a single source before placing an order.
            </p>
            <Link className="text-link" href="/about#quality">
              Read how quality is maintained <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="about-rd-panel">
            <div className="vklin-panel-heading">
              <span className="about-rd-mark"><ShieldCheck size={19} aria-hidden="true" /></span>
              <div>
                <span>Covered scope</span>
                <h3>What each certificate covers</h3>
              </div>
            </div>
            <ul className="about-rd-list">
              <li><BadgeCheck size={16} aria-hidden="true" /> ISO 9001:2015 — quality management, both divisions</li>
              <li><ShieldCheck size={16} aria-hidden="true" /> WHO-GMP — manufacturing practice</li>
              <li><FileCheck2 size={16} aria-hidden="true" /> US FDA — compliance for export applications</li>
              <li><Leaf size={16} aria-hidden="true" /> UKcert Eco-Friendly — V-Klin cleaning range</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}