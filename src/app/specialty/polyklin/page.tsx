import type { Metadata } from "next";
import { Snowflake } from "lucide-react";
import SpecialtyProductDetail from "@/components/SpecialtyProductDetail";
import {
  findSpecialtyProduct,
  polyklinEquipment,
  polyklinMethod,
} from "@/data/specialtyProducts";

export const metadata: Metadata = {
  title: "POLYKLIN | AHU & FCU Coil Cleaner | PolyTreat Chemicals",
  description:
    "POLYKLIN, PolyTreat's AHU and FCU coil cleaning compound: the equipment it serves, the method of application, pack sizes and published product data.",
};

export default function PolyklinPage() {
  const product = findSpecialtyProduct("polyklin");

  if (!product) return null;

  return (
    <SpecialtyProductDetail product={product} icon={Snowflake}>
      <section className="specialty-product-equipment" aria-labelledby="polyklin-equipment-title">
        <div className="container">
          <div className="specialty-product-section-heading">
            <div>
              <span className="specialty-product-kicker">The equipment</span>
              <h2 id="polyklin-equipment-title">What a coil is, and why it needs care.</h2>
            </div>
            <p>
              An air conditioner moves heat using coils. Dirt and deposits on a coil
              surface reduce airflow and heat transfer, which is why coil cleaning is
              part of routine HVAC maintenance.
            </p>
          </div>

          <div className="specialty-product-equipment-grid">
            {polyklinEquipment.map((item) => (
              <article className="specialty-product-equipment-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialty-product-method" aria-labelledby="polyklin-method-title">
        <div className="container">
          <div className="specialty-product-method-layout">
            <div>
              <span className="specialty-product-kicker">Method of application</span>
              <h2 id="polyklin-method-title">Spray, let it work, rinse it off.</h2>
              <p>
                Directions as published in our POLYKLIN literature. Confirm the
                current product sheet and the equipment maker&rsquo;s guidance before
                treating a coil.
              </p>
            </div>
            <ol className="specialty-product-method-list">
              {polyklinMethod.map((step, index) => (
                <li key={step}>
                  <span className="specialty-product-step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </SpecialtyProductDetail>
  );
}
