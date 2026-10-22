import type { Metadata } from "next";
import { Wind } from "lucide-react";
import SpecialtyProductDetail from "@/components/SpecialtyProductDetail";
import {
  findSpecialtyProduct,
  specialtyApplicationGroups,
} from "@/data/specialtyProducts";

export const metadata: Metadata = {
  title: "POLYDOR-WS | Odour Neutraliser | PolyTreat Chemicals",
  description:
    "POLYDOR-WS, PolyTreat's odour neutraliser: application areas across waste, wastewater, food and animal processing, scrubbers and facility settings.",
};

export default function PolydorWsPage() {
  const product = findSpecialtyProduct("polydor-ws");

  if (!product) return null;

  return (
    <SpecialtyProductDetail product={product} icon={Wind}>
      <section className="specialty-product-areas" aria-labelledby="polydor-areas-title">
        <div className="container">
          <div className="specialty-product-section-heading">
            <div>
              <span className="specialty-product-kicker">Application areas</span>
              <h2 id="polydor-areas-title">Where the odour comes from.</h2>
            </div>
            <p>
              Our application material lists a wide spread of settings. These are the
              main areas we work with; share your specific situation and we will
              confirm the fit.
            </p>
          </div>

          <div className="specialty-product-area-grid">
            {specialtyApplicationGroups.map((group) => (
              <article className="specialty-product-area-card" key={group.id}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specialty-product-distinction" aria-labelledby="polydor-distinction-title">
        <div className="container">
          <div className="specialty-product-distinction-inner">
            <h2 id="polydor-distinction-title">Odour control is not disinfection.</h2>
            <p>
              POLYDOR-WS is an odour-control product. It is not a disinfectant, a
              sanitiser, an insecticide or a food-contact-safe treatment, and this
              page makes no claim that it kills microorganisms.
            </p>
            <p>
              Neutralising an unpleasant smell and inactivating a microorganism are
              different jobs, and the second one needs its own evidence and approved
              directions. If your site needs a disinfection claim, ask us for the
              current documentation for that specific application.
            </p>
          </div>
        </div>
      </section>
    </SpecialtyProductDetail>
  );
}
