import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Building2,
  Check,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Headset,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Waves,
} from "lucide-react";

const solutions = [
  {
    id: "solution-water",
    number: "01",
    icon: Droplets,
    eyebrow: "Industrial water",
    title: "Treatment for the systems that keep your plant running.",
    description:
      "Water-treatment chemistry for boiler, cooling-water, reverse-osmosis, and effluent systems.",
    tags: ["Boilers", "Cooling towers", "RO", "Effluent"],
    link: "#markets",
    linkText: "Explore applications",
    tone: "blue",
  },
  {
    id: "solution-construction",
    number: "02",
    icon: Layers3,
    eyebrow: "Construction & protection",
    title: "Surface protection built around the material and the problem.",
    description:
      "Waterproofing, coatings, concrete repair, flooring, and specialty surface-treatment products.",
    tags: ["Waterproofing", "Coatings", "Flooring", "Rust treatment"],
    link: "#markets",
    linkText: "Explore applications",
    tone: "slate",
  },
  {
    id: "solution-vklin",
    number: "03",
    icon: Leaf,
    eyebrow: "V-Klin care",
    title: "Everyday cleaning for homes, institutions, and facilities.",
    description:
      "The V-Klin range brings PolyTreat's cleaning-product line under its current brand.",
    tags: ["Floor & surface", "Handwash", "Dishwash", "Glass & toilet"],
    link: "#vklin",
    linkText: "Explore V-Klin",
    tone: "green",
  },
];

const markets = [
  {
    icon: Factory,
    title: "Process & manufacturing",
    description:
      "Water and specialty-chemical needs around boilers, cooling systems, RO, and process operations.",
  },
  {
    icon: Waves,
    title: "Utilities & infrastructure",
    description:
      "Treatment categories for cooling water, effluent, sewage, and building-service systems.",
  },
  {
    icon: Building2,
    title: "Facilities & institutions",
    description:
      "Cleaning and maintenance categories for shared spaces, workplaces, and managed facilities.",
  },
];

const pqrs = [
  {
    letter: "P",
    icon: Gauge,
    title: "Performance",
    description: "Formulations considered in the context of the task and operating system.",
  },
  {
    letter: "Q",
    icon: BadgeCheck,
    title: "Quality",
    description: "A focus on product quality and clear technical documentation.",
  },
  {
    letter: "R",
    icon: ShieldCheck,
    title: "Reliability",
    description: "A dependable working relationship from product enquiry through supply.",
  },
  {
    letter: "S",
    icon: Headset,
    title: "Service",
    description: "A direct conversation with the team about the product and its intended use.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero-glow home-hero-glow-one" aria-hidden="true" />
        <div className="home-hero-glow home-hero-glow-two" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" aria-hidden="true" />
              PolyTreat Chemicals · Industrial & institutional
            </span>
            <h1 id="hero-title">
              Chemistry for the systems{" "}
              <span className="hero-highlight">behind your operation.</span>
            </h1>
            <p className="home-hero-description">
              Industrial water treatment, construction and protective chemistry, and
              V-Klin facility care—organized around the work your site needs to do.
            </p>
            <div className="home-hero-actions">
              <Link className="btn btn-accent" href="#solutions">
                Explore solutions <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                className="btn btn-outline"
                href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
                target="_blank"
                rel="noreferrer"
              >
                Talk to team <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-contact-note">
              <Phone size={15} aria-hidden="true" />
              <span>Prefer a direct call?</span>
              <a href="tel:+919820235995">+91 98202 35995</a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit hero-orbit-outer" />
            <div className="hero-orbit hero-orbit-middle" />
            <div className="hero-orbit hero-orbit-inner" />
            <div className="hero-molecule-orbit">
              <span className="hero-molecule-particle hero-molecule-particle-blue" />
              <span className="hero-molecule-particle hero-molecule-particle-green" />
              <span className="hero-molecule-particle hero-molecule-particle-cyan" />
            </div>
            <div className="hero-art-core">
              <div className="hero-core-mark"><Waves size={39} strokeWidth={1.5} /></div>
              <span>Applied chemistry</span>
              <strong>Made for real systems</strong>
            </div>
            <div className="hero-float-card hero-float-card-top">
              <Droplets size={17} />
              <span>Water systems</span>
            </div>
            <div className="hero-float-card hero-float-card-bottom">
              <Leaf size={17} />
              <span>Facility care</span>
            </div>
            <span className="hero-icon-node hero-icon-node-lab"><FlaskConical size={18} /></span>
            <span className="hero-icon-node hero-icon-node-process"><Factory size={18} /></span>
            <span className="hero-icon-node hero-icon-node-protection"><ShieldCheck size={18} /></span>
            <span className="hero-icon-node hero-icon-node-molecule"><Atom size={18} /></span>
          </div>
        </div>
        <div className="hero-bottom-line" aria-hidden="true" />
      </section>

      <section className="discipline-strip" aria-label="PolyTreat's areas of work">
        <div className="container discipline-strip-inner">
          <p>Three connected areas of work</p>
          <div><Droplets size={17} aria-hidden="true" /><span>Water treatment</span></div>
          <div><Layers3 size={17} aria-hidden="true" /><span>Construction chemistry</span></div>
          <div><Leaf size={17} aria-hidden="true" /><span>V-Klin facility care</span></div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions" aria-labelledby="solutions-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow eyebrow-dark">What we work on</span>
              <h2 id="solutions-title">Find the right starting point.</h2>
            </div>
            <p>
              PolyTreat's product areas serve different needs. Start with your system or
              facility, then ask the team about the current product and its documentation.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map(({ id, number, icon: Icon, eyebrow, title, description, tags, link, linkText, tone }) => (
              <article className={`solution-card solution-card-${tone}`} id={id} key={id}>
                <div className="solution-card-top">
                  <span className="solution-icon"><Icon size={21} aria-hidden="true" /></span>
                  <span className="solution-number">{number}</span>
                </div>
                <span className="solution-eyebrow">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="solution-tags" aria-label={`${eyebrow} categories`}>
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <Link className="text-link" href={link}>
                  {linkText} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="markets-section" id="markets" aria-labelledby="markets-title">
        <div className="container markets-layout">
          <div className="markets-intro">
            <span className="eyebrow eyebrow-light">Applications</span>
            <h2 id="markets-title">Different sites. Different chemistry needs.</h2>
            <p>
              The original product literature spans industrial utilities, manufacturing,
              construction, and facility cleaning. The right product depends on the system
              and the job.
            </p>
            <Link className="market-link" href="#contact">
              Describe your requirement <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="market-list">
            {markets.map(({ icon: Icon, title, description }, index) => (
              <article className="market-item" key={title}>
                <span className="market-index">0{index + 1}</span>
                <span className="market-icon"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ArrowUpRight className="market-arrow" size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section vklin-section" id="vklin" aria-labelledby="vklin-title">
        <div className="container vklin-layout">
          <div className="vklin-copy">
            <span className="eyebrow eyebrow-green"><Leaf size={15} aria-hidden="true" /> A PolyTreat brand</span>
            <h2 id="vklin-title">Meet <span>V-Klin</span>, care for everyday spaces.</h2>
            <p>
              V-Klin is PolyTreat's institutional and home-care cleaning range. It brings
              the former Altra Care products under the V-Klin brand.
            </p>
            <Link className="btn btn-vklin" href="#contact">
              Ask about V-Klin products <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="vklin-category-panel">
            <div className="vklin-panel-heading">
              <span className="vklin-leaf-mark"><Leaf size={19} aria-hidden="true" /></span>
              <div>
                <span>Institutional & home care</span>
                <h3>Cleaning categories</h3>
              </div>
            </div>
            <ul className="vklin-category-list">
              <li><Check size={16} aria-hidden="true" /> Floor & surface care</li>
              <li><Check size={16} aria-hidden="true" /> Handwash & liquid soap</li>
              <li><Check size={16} aria-hidden="true" /> Dishwashing products</li>
              <li><Check size={16} aria-hidden="true" /> Glass, kitchen & toilet care</li>
            </ul>
            <p className="vklin-panel-note">
              Ask the team for current product names, labels, and technical information.
            </p>
          </div>
        </div>
      </section>

      <section className="section pqrs-section" id="pqrs" aria-labelledby="pqrs-title">
        <div className="container">
          <div className="section-heading section-heading-center">
            <span className="eyebrow eyebrow-dark">How we think about the work</span>
            <h2 id="pqrs-title">The PQRS framework.</h2>
            <p>Performance. Quality. Reliability. Service.</p>
          </div>
          <div className="pqrs-grid">
            {pqrs.map(({ letter, icon: Icon, title, description }, index) => (
              <article className={`pqrs-card pqrs-card-${letter.toLowerCase()}`} key={letter}>
                <div className="pqrs-card-topline">
                  <div className="pqrs-card-identity">
                    <span className={`pqrs-letter pqrs-letter-${letter.toLowerCase()}`}>{letter}</span>
                    <span className="pqrs-step">Principle 0{index + 1}</span>
                  </div>
                  <span className={`pqrs-card-icon pqrs-card-icon-${letter.toLowerCase()}`}>
                    <Icon size={16} aria-hidden="true" />
                  </span>
                </div>
                <div className="pqrs-card-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="pqrs-card-watermark" aria-hidden="true">{letter}</span>
              </article>
            ))}
          </div>
          <div className="documentation-note">
            <FlaskConical size={18} aria-hidden="true" />
            <p>
              Need product details? Ask the team for the current technical or safety
              documents relevant to your application.
            </p>
            <Link href="#contact">Request documents <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="eyebrow eyebrow-light">Start a conversation</span>
            <h2 id="contact-title">Tell us what your system or site needs.</h2>
            <p>Share the application and product category. The team can help direct your enquiry.</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-light" href="mailto:polyind2@gmail.com">
              <Mail size={17} aria-hidden="true" /> Email PolyTreat
            </a>
            <a className="contact-phone" href="tel:+919820235995">
              <Phone size={16} aria-hidden="true" /> +91 98202 35995
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="about">
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
              <Link href="#solutions">Solutions</Link>
              <Link href="#markets">Applications</Link>
              <Link href="#vklin">V-Klin</Link>
              <Link href="#pqrs">Our approach</Link>
            </div>
            <div className="footer-column">
              <h2>Our work</h2>
              <Link href="#solution-water">Water treatment</Link>
              <Link href="#solution-construction">Construction chemistry</Link>
              <Link href="#solution-vklin">Institutional &amp; home care</Link>
            </div>
            <div className="footer-column footer-contact-column" id="manufacturing">
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
    </main>
  );
}
