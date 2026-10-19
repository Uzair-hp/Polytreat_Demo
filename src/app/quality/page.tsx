import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
} from "lucide-react";
import QualityPrinciples from "@/components/QualityPrinciples";

export const metadata: Metadata = {
  title: "Quality | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Learn about PolyTreat's PQRS framework, certification documents, and product information requests.",
};

export default function QualityPage() {
  return (
    <main className="quality-page">
      <section className="quality-hero" aria-labelledby="quality-title">
        <div className="container quality-hero-layout">
          <div className="quality-hero-copy">
            <span className="eyebrow eyebrow-dark">Quality at PolyTreat</span>
            <h1 id="quality-title">Clear product information. A considered approach to quality.</h1>
            <p>
              Our PQRS framework brings together performance, quality, reliability, and service
              across industrial water treatment, construction chemistry, and V-Klin care.
            </p>
            <Link className="btn btn-primary" href="#pqrs">
              Explore the PQRS framework <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <aside className="quality-hero-note" aria-label="Product information">
            <span className="quality-note-icon"><FileCheck2 size={20} aria-hidden="true" /></span>
            <span className="quality-note-label">Product information</span>
            <h2>Details for your application.</h2>
            <p>Ask the team about product TDS or SDS documents and the information relevant to your use.</p>
            <Link href="/contact#contact-form">
              Request documents <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section quality-pqrs" id="pqrs" aria-labelledby="pqrs-title">
        <div className="container">
          <div className="section-heading section-heading-split quality-section-heading">
            <div>
              <span className="eyebrow eyebrow-dark">How we think about the work</span>
              <h2 id="pqrs-title">The PQRS framework.</h2>
            </div>
            <p>Four principles that guide how we discuss products, applications, and customer needs.</p>
          </div>

          <QualityPrinciples />
        </div>
      </section>

      <section className="section quality-resources" aria-labelledby="quality-resources-title">
        <div className="container">
          <div className="section-heading quality-resource-heading">
            <span className="eyebrow eyebrow-dark">Useful resources</span>
            <h2 id="quality-resources-title">Find the information you need.</h2>
          </div>

          <div className="quality-resource-grid">
            <article className="quality-resource-card">
              <span className="quality-resource-icon"><BadgeCheck size={19} aria-hidden="true" /></span>
              <div>
                <span className="quality-resource-kicker">Certificates</span>
                <h3>Review documents by issuer and scope.</h3>
                <p>See the supplied certificates and the activities or product categories each one covers.</p>
                <Link href="/certifications">
                  View certifications <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="quality-resource-card quality-resource-card-green">
              <span className="quality-resource-icon"><FileCheck2 size={19} aria-hidden="true" /></span>
              <div>
                <span className="quality-resource-kicker">Product documents</span>
                <h3>Request TDS or SDS information.</h3>
                <p>Share the product or application you are enquiring about so the team can direct your request.</p>
                <Link href="/contact#contact-form">
                  Contact the team <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
