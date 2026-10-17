import Link from "next/link";
import { Droplets, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Factory, FlaskConical, Building2, PhoneCall } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* High-Impact Hero Section */}
      <section
        className="section section-dark"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          background: "radial-gradient(circle at 80% 20%, rgba(23, 105, 166, 0.15) 0%, rgba(11, 25, 44, 1) 60%)",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-copy" style={{ maxWidth: "800px", width: "100%", minWidth: 0 }}>
            <span className="badge badge-blue hero-authority-badge">
              <ShieldCheck size={14} aria-hidden="true" /> ISO 9001:2015 Certified · 37+ Years Heritage
            </span>

            <h1 className="hero-heading" style={{ marginBottom: "1.25rem", color: "#FFFFFF" }}>
              Precision Chemistry for <span style={{ color: "var(--color-water-light)" }}>Zero Downtime</span> &amp; Sustainable Water Efficiency
            </h1>

            <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "2rem", color: "#CBD5E1" }}>
              Custom-formulated chemical treatments for Boilers, Cooling Towers, RO Membrane Antiscalants, Biocides &amp; Institutional Hygiene. Engineered for chemical engineers, plant managers, and facility executives across India.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link href="#products" className="btn btn-accent" style={{ fontSize: "1rem", padding: "0.85rem 1.75rem" }}>
                Explore Products Catalog <ArrowRight size={18} />
              </Link>
              <a href="tel:+919820235995" className="btn btn-outline" style={{ fontSize: "1rem", padding: "0.85rem 1.75rem" }}>
                <PhoneCall size={17} /> Talk to a Chemist
              </a>
            </div>

            {/* Quick Proof Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={18} color="var(--color-water-light)" />
                <span style={{ fontSize: "0.9rem", color: "#E2E8F0" }}>ISO 9001:2015 Formulations</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={18} color="var(--color-bio-green)" />
                <span style={{ fontSize: "0.9rem", color: "#E2E8F0" }}>High TDS &amp; Extreme pH Lab Testing</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={18} color="var(--color-accent-cta)" />
                <span style={{ fontSize: "0.9rem", color: "#E2E8F0" }}>Fast Dispatch from Mumbai &amp; Tarapur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Division Section */}
      <section className="section" id="products" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge badge-blue" style={{ marginBottom: "0.75rem" }}>
              Two Specialized Divisions
            </span>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
              Engineered Solutions for Industry &amp; Institutional Hygiene
            </h2>
            <p>
              PolyTreat bridges heavy industrial process water optimization with modern eco-friendly institutional hygiene.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {/* Division 1: Industrial Water */}
            <div className="card" id="industrial" style={{ borderTop: "4px solid var(--color-water-blue)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem" }}>
                <div style={{ background: "#EAF3F8", padding: "0.85rem", borderRadius: "10px", color: "var(--color-water-blue)" }}>
                  <Droplets size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.35rem" }}>Industrial Water Division</h3>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Heavy Process &amp; Utility Chemicals</span>
                </div>
              </div>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                Advanced antiscalants, oxygen scavengers, sludge conditioners, cooling tower corrosion inhibitors, and descalers built to extend plant asset life.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                <li id="cooling-water" style={{ display: "flex", alignItems: "center", gap: "0.5rem", scrollMarginTop: "7rem" }}>
                  <CheckCircle2 size={15} color="var(--color-water-blue)" /> Cooling Tower &amp; Heat Exchanger Chemicals
                </li>
                <li id="boiler-water" style={{ display: "flex", alignItems: "center", gap: "0.5rem", scrollMarginTop: "7rem" }}>
                  <CheckCircle2 size={15} color="var(--color-water-blue)" /> High-Pressure Boiler Water Conditioning
                </li>
                <li id="ro-etp" style={{ display: "flex", alignItems: "center", gap: "0.5rem", scrollMarginTop: "7rem" }}>
                  <CheckCircle2 size={15} color="var(--color-water-blue)" /> RO Antiscalants, Membrane Cleaners &amp; ETP Treatment
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={15} color="var(--color-water-blue)" /> Non-Oxidizing Biocides &amp; Algaecides
                </li>
                <li id="specialty-chemicals" style={{ display: "flex", alignItems: "center", gap: "0.5rem", scrollMarginTop: "7rem" }}>
                  <CheckCircle2 size={15} color="var(--color-water-blue)" /> Specialty Chemistry &amp; Construction Solutions
                </li>
              </ul>
              <Link href="#industrial" className="btn btn-outline-dark" style={{ width: "100%" }}>
                View Industrial Range &rarr;
              </Link>
            </div>

            {/* Division 2: Altra Care Hygiene */}
            <div className="card" id="altra-care" style={{ borderTop: "4px solid var(--color-bio-dark)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.25rem" }}>
                <div style={{ background: "#D1FAE5", padding: "0.85rem", borderRadius: "10px", color: "var(--color-bio-dark)" }}>
                  <Sparkles size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.35rem" }}>Altra Care Green Division</h3>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Institutional &amp; Consumer Hygiene</span>
                </div>
              </div>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                Safe, highly concentrated institutional cleaners, hospital-grade disinfectants, and eco-friendly home care products.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={15} color="var(--color-bio-dark)" /> Institutional Disinfectants &amp; Hand Sanitizers
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={15} color="var(--color-bio-dark)" /> Heavy Kitchen Degreasers &amp; Dishwash Concentrates
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={15} color="var(--color-bio-dark)" /> Floor, Tile &amp; Sanitary Cleaner Solutions
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={15} color="var(--color-bio-dark)" /> Herbal Mosquito Repellents &amp; Air Fresheners
                </li>
              </ul>
              <Link href="#altra-care" className="btn btn-outline-dark" style={{ width: "100%" }}>
                View Altra Care Range &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="section industries-section" id="industries">
        <div className="container">
          <div className="industries-heading">
            <span className="badge badge-blue">Industries We Serve</span>
            <h2>Process chemistry for the systems that keep business moving.</h2>
            <p>Explore PolyTreat solutions by the kind of operation and facility you manage.</p>
          </div>
          <div className="industries-grid">
            <article className="card industry-card" id="industry-process">
              <div className="industry-icon"><Factory size={23} /></div>
              <span className="industry-kicker">Heavy Process &amp; Energy</span>
              <h3>Power, process plants &amp; sugar</h3>
              <p>Boiler and cooling water treatment for process utilities, thermal systems and sugar operations.</p>
              <Link href="#boiler-water">Explore water treatment <ArrowRight size={15} /></Link>
            </article>
            <article className="card industry-card" id="industry-manufacturing">
              <div className="industry-icon"><FlaskConical size={23} /></div>
              <span className="industry-kicker">Pharma &amp; Manufacturing</span>
              <h3>Pharmaceutical, textile &amp; chemical</h3>
              <p>Utility water, RO and effluent treatment for manufacturing environments.</p>
              <Link href="#ro-etp">Explore treatment systems <ArrowRight size={15} /></Link>
            </article>
            <article className="card industry-card" id="industry-commercial">
              <div className="industry-icon"><Building2 size={23} /></div>
              <span className="industry-kicker">Commercial &amp; Infrastructure</span>
              <h3>HVAC, institutions &amp; construction</h3>
              <p>Cooling and coil care, facility hygiene, waterproofing and specialty protection.</p>
              <Link href="#altra-care">Explore facility solutions <ArrowRight size={15} /></Link>
            </article>
          </div>
        </div>
      </section>

      {/* PQRS Quality Section Preview */}
      <section className="section" id="pqrs" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3rem auto" }}>
            <span className="badge badge-amber" style={{ marginBottom: "0.75rem" }}>
              Our Quality Standard
            </span>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>The PQRS Framework</h2>
            <p>Every drum leaving our Tarapur plant is validated against 4 core parameters.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-water-blue)", marginBottom: "0.5rem" }}>P</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Price</h4>
              <p style={{ fontSize: "0.88rem" }}>Direct-from-manufacturer transparent rates with bulk contract savings.</p>
            </div>
            <div className="card" id="quality" style={{ textAlign: "center", scrollMarginTop: "7rem" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-bio-dark)", marginBottom: "0.5rem" }}>Q</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Quality</h4>
              <p style={{ fontSize: "0.88rem" }}>ISO 9001:2015 certified formulations with batch-specific COA reports.</p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>R</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Regularity</h4>
              <p style={{ fontSize: "0.88rem" }}>Uninterrupted supply guarantee with dedicated safety stock buffer.</p>
            </div>
            <div className="card" id="quality-service" style={{ textAlign: "center", scrollMarginTop: "7rem" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-accent-cta)", marginBottom: "0.5rem" }}>S</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Service</h4>
              <p style={{ fontSize: "0.88rem" }}>On-site chemical water testing and custom dosage calculation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" style={{ backgroundColor: "var(--color-primary-dark)", color: "#94A3B8", padding: "4rem 0 2rem 0", borderTop: "1px solid #1E293B", scrollMarginTop: "7rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
            <div>
              <h4 style={{ color: "#FFFFFF", fontSize: "1.2rem", marginBottom: "1rem" }}>PolyTreat Chemicals Pvt. Ltd.</h4>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                Manufacturer of high-performance water treatment formulations, biocides, and institutional cleaning products since 1987.
              </p>
              <div style={{ fontSize: "0.85rem", color: "var(--color-water-light)" }}>
                ISO 9001:2015 Certified Organization
              </div>
            </div>

            <div id="contact" style={{ scrollMarginTop: "7rem" }}>
              <h5 style={{ color: "#FFFFFF", fontSize: "1rem", marginBottom: "1rem" }}>Corporate Office</h5>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>
                7-A, Topiwala Building, &apos;C&apos; Wing, Opp. Topiwala Center / Cinema, Goregaon (West), Mumbai – 400104, Maharashtra, India.
              </p>
              <p style={{ marginTop: "0.75rem", fontSize: "0.88rem" }}>
                Email: <a href="mailto:polyind2@gmail.com" style={{ color: "var(--color-water-light)" }}>polyind2@gmail.com</a>
              </p>
            </div>

            <div id="manufacturing" style={{ scrollMarginTop: "7rem" }}>
              <h5 style={{ color: "#FFFFFF", fontSize: "1rem", marginBottom: "1rem" }}>Manufacturing Units</h5>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                <strong>Green Products:</strong> 306, Shankhala Ind. Premises, Goregaon (East), Mumbai – 400063.
              </p>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>
                <strong>Heavy Chemicals:</strong> Tarapur MIDC, Palghar, Maharashtra.
              </p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", fontSize: "0.82rem" }}>
            <div>
              &copy; 2026 PolyTreat Chemicals Pvt. Ltd. All rights reserved.
            </div>
            <div>
              Designed &amp; Developed with Next.js &bull; Brightlant Software Solutions
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

