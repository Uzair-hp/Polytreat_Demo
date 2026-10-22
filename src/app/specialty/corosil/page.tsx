import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import SpecialtyProductDetail from "@/components/SpecialtyProductDetail";
import {
  corosilFinishingSystems,
  corosilProcessSteps,
  corosilSpecifications,
  findSpecialtyProduct,
} from "@/data/specialtyProducts";

export const metadata: Metadata = {
  title: "COROSIL | Rust Converter Primer | PolyTreat Chemicals",
  description:
    "COROSIL, PolyTreat's water-based rust inhibitor and converter primer: the surface preparation, treatment and topcoat sequence, physical data and finishing-system compatibility.",
};

export default function CorosilPage() {
  const product = findSpecialtyProduct("corosil");

  if (!product) return null;

  return (
    <SpecialtyProductDetail product={product} icon={ShieldCheck}>
      <section className="specialty-product-steps" aria-labelledby="corosil-steps-title">
        <div className="container">
          <div className="specialty-product-section-heading">
            <div>
              <span className="specialty-product-kicker">How it works</span>
              <h2 id="corosil-steps-title">Three steps, in this order.</h2>
            </div>
            <p>
              The product literature presents COROSIL as a step inside a coating
              system rather than a coating on its own.
            </p>
          </div>

          <ol className="specialty-product-step-list">
            {corosilProcessSteps.map((step, index) => (
              <li key={step.title}>
                <span className="specialty-product-step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="specialty-product-specs" aria-labelledby="corosil-specs-title">
        <div className="container">
          <div className="specialty-product-specs-layout">
            <div>
              <span className="specialty-product-kicker">Physical data</span>
              <h2 id="corosil-specs-title">Published product data.</h2>
              <p>
                These figures are as published in our COROSIL product literature.
                Ask us for the current datasheet before you plan a job around them.
              </p>
            </div>
            <dl className="specialty-product-specs-table">
              {corosilSpecifications.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="specialty-product-systems" aria-labelledby="corosil-systems-title">
        <div className="container">
          <div className="specialty-product-section-heading">
            <div>
              <span className="specialty-product-kicker">Finishing systems</span>
              <h2 id="corosil-systems-title">Compatible with most finishing systems.</h2>
            </div>
            <p>
              The literature states that COROSIL is compatible with most finishing
              systems. Confirm compatibility against the specific paint system you
              intend to apply.
            </p>
          </div>

          <ul className="specialty-product-chip-list">
            {corosilFinishingSystems.map((system) => (
              <li key={system}>{system}</li>
            ))}
          </ul>
        </div>
      </section>
    </SpecialtyProductDetail>
  );
}
