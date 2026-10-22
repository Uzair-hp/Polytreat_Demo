import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  constructionRangeNote,
  findConstructionFamilies,
} from "@/data/constructionRange";

/**
 * The product range of the construction profiles: every product the client's
 * construction profile lists, grouped into families, with its type, its
 * applications and the indicative coverage figure from the profile.
 */
export default function ConstructionRange({
  familyIds,
  title,
  intro,
  showCorosil = false,
}: {
  familyIds: string[];
  title: string;
  intro: string;
  showCorosil?: boolean;
}) {
  const families = findConstructionFamilies(familyIds);

  return (
    <section className="construction-range" aria-labelledby="construction-range-title">
      <div className="container">
        <div className="construction-range-heading">
          <div>
            <span className="eyebrow">The product range</span>
            <h2 id="construction-range-title">{title}</h2>
          </div>
          <p>{intro}</p>
        </div>

        <div className="construction-range-list">
          {families.map((family) => (
            <article className="construction-range-family" key={family.id}>
              <div className="construction-range-family-head">
                <h3>{family.title}</h3>
                <p>{family.summary}</p>
              </div>

              <ul className="construction-range-products">
                {family.products.map((product) => (
                  <li className="construction-range-product" key={product.name}>
                    <div className="construction-range-product-head">
                      <strong>{product.name}</strong>
                      <span className="construction-range-product-type">{product.type}</span>
                    </div>
                    <ul className="construction-range-product-uses">
                      {product.uses.map((use) => (
                        <li key={use}>{use}</li>
                      ))}
                    </ul>
                    {product.coverage && (
                      <p className="construction-range-product-coverage">
                        Catalogue coverage: {product.coverage}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {showCorosil && (
            <article className="construction-range-family is-linked">
              <div className="construction-range-family-head">
                <h3>Rust converters</h3>
                <p>
                  Treatment for rusty iron and steel before a paint system is
                  applied. COROSIL has its own page, with the published physical
                  data and the finishing systems it is compatible with.
                </p>
              </div>
              <Link className="construction-range-link" href="/specialty/corosil">
                Open COROSIL <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          )}
        </div>

        <p className="construction-range-note">{constructionRangeNote}</p>
      </div>
    </section>
  );
}
