"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Droplets,
  Factory,
  FileCheck2,
  FlaskConical,
  Leaf,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type MenuKey = "products" | "industries" | "quality" | "company";
type Division = "industrial" | "vklin";
type MenuLink = { label: string; href: string; detail?: string };
type MenuGroup = { title: string; links: MenuLink[] };

const salesWhatsApp =
  "https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20request%20product%20TDS%20or%20a%20quote.";

const productGroups: MenuGroup[] = [
  {
    title: "Water Treatment",
    links: [
      { label: "Boiler water treatment", href: "#boiler-water", detail: "Oxygen scavengers, sludge and scale control" },
      { label: "Cooling towers & chillers", href: "#cooling-water", detail: "Corrosion, scale and biological control" },
      { label: "RO & effluent treatment", href: "#ro-etp", detail: "Membrane care and wastewater treatment" },
    ],
  },
  {
    title: "Specialty Chemistry",
    links: [
      { label: "POLYDOR-WS", href: "#specialty-chemicals", detail: "Odor neutralization" },
      { label: "COROSIL", href: "#specialty-chemicals", detail: "Rust conversion and protection" },
      { label: "POLYKLIN", href: "#specialty-chemicals", detail: "AHU / FCU coil cleaning" },
      { label: "Construction chemicals", href: "#specialty-chemicals", detail: "Waterproofing and specialty coatings" },
    ],
  },
  {
    title: "V-Klin Hygiene",
    links: [
      { label: "Surface & floor care", href: "#vklin" },
      { label: "Disinfectants & handwash", href: "#vklin" },
      { label: "Kitchen & dishwash care", href: "#vklin" },
      { label: "Herbal mosquito repellent", href: "#vklin" },
    ],
  },
];

const industryGroups: MenuGroup[] = [
  {
    title: "Heavy Process & Energy",
    links: [
      { label: "Power & process plants", href: "#industry-process", detail: "Boiler and cooling water programs" },
      { label: "Sugar & distilleries", href: "#industry-process", detail: "Process water and specialty chemicals" },
    ],
  },
  {
    title: "Pharma & Manufacturing",
    links: [
      { label: "Pharmaceutical manufacturing", href: "#industry-manufacturing", detail: "Utility water treatment" },
      { label: "Textile & chemical processing", href: "#industry-manufacturing", detail: "Boiler, cooling and effluent treatment" },
    ],
  },
  {
    title: "Commercial & Infrastructure",
    links: [
      { label: "Commercial HVAC", href: "#industry-commercial", detail: "Cooling water and coil care" },
      { label: "Hotels, hospitals & institutions", href: "#industry-commercial", detail: "V-Klin facility hygiene" },
      { label: "Construction & waterproofing", href: "#industry-commercial", detail: "Specialty coatings and protection" },
    ],
  },
];

const qualityGroups: MenuGroup[] = [
  {
    title: "Quality & Lab Services",
    links: [
      { label: "ISO 9001:2015 quality system", href: "#quality" },
      { label: "Water sample testing", href: "#quality-service", detail: "Discuss a sample with our technical team" },
      { label: "On-site technical support", href: "#quality-service" },
      { label: "Request TDS / COA", href: salesWhatsApp, detail: "Contact the team for product documents" },
    ],
  },
];

const companyGroups: MenuGroup[] = [
  {
    title: "PolyTreat Chemicals",
    links: [
      { label: "Our heritage", href: "#about", detail: "Established in 1987" },
      { label: "Manufacturing plants", href: "#manufacturing" },
      { label: "PQRS framework", href: "#pqrs" },
      { label: "Contact the team", href: "#contact" },
    ],
  },
];

const menuGroups: Record<MenuKey, MenuGroup[]> = {
  products: productGroups,
  industries: industryGroups,
  quality: qualityGroups,
  company: companyGroups,
};

const menuLabels: Record<MenuKey, string> = {
  products: "Products",
  industries: "Industries",
  quality: "Quality & Lab Services",
  company: "Company",
};

function MenuGroupLinks({ groups, onNavigate }: { groups: MenuGroup[]; onNavigate: () => void }) {
  return (
    <div className="nav-menu-groups">
      {groups.map((group) => (
        <section className="nav-menu-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.links.map((link) => {
              const external = link.href.startsWith("https://");
              return (
                <li key={`${group.title}-${link.label}`}>
                  {external ? (
                    <a href={link.href} target="_blank" rel="noreferrer" onClick={onNavigate}>
                      <span>{link.label}</span>
                      {link.detail && <small>{link.detail}</small>}
                    </a>
                  ) : (
                    <Link href={link.href} onClick={onNavigate}>
                      <span>{link.label}</span>
                      {link.detail && <small>{link.detail}</small>}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [activeDivision, setActiveDivision] = useState<Division>("industrial");
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<MenuKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const mobileToggle = headerRef.current?.querySelector<HTMLButtonElement>(
          '.mobile-menu-btn[aria-expanded="true"]',
        );
        const menuTrigger = headerRef.current?.querySelector<HTMLButtonElement>(
          ".nav-item.is-open .nav-trigger",
        );
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
        setOpenMobileGroup(null);
        (mobileToggle ?? menuTrigger)?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenus() {
    setOpenMenu(null);
    setOpenMobileGroup(null);
    setIsMobileMenuOpen(false);
  }

  function toggleMenu(menu: MenuKey) {
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  function renderDropdown(menu: MenuKey) {
    return (
      <div
        className={`nav-dropdown-panel nav-${menu}-panel`}
        id={`nav-panel-${menu}`}
        aria-label={`${menuLabels[menu]} links`}
      >
        {menu === "products" && (
          <aside className="nav-feature-card">
            <span className="nav-feature-eyebrow"><ShieldCheck size={14} /> Since 1987</span>
            <h2>Specialty chemistry engineered for protection.</h2>
            <p>Industrial water treatment and institutional hygiene solutions from one experienced manufacturer.</p>
            <Link className="nav-feature-link" href="#contact" onClick={closeMenus}>
              Talk to our team <ArrowRight size={16} />
            </Link>
            <span className="nav-feature-years">37<span>+</span></span>
          </aside>
        )}
        <MenuGroupLinks groups={menuGroups[menu]} onNavigate={closeMenus} />
      </div>
    );
  }

  function renderMenuTrigger(menu: MenuKey) {
    const isOpen = openMenu === menu;
    return (
      <div
        className={`nav-item${isOpen ? " is-open" : ""}`}
        key={menu}
      >
        <button
          className="nav-trigger"
          type="button"
          aria-expanded={isOpen}
          aria-controls={`nav-panel-${menu}`}
          onClick={() => toggleMenu(menu)}
        >
          {menuLabels[menu]} <ChevronDown size={15} aria-hidden="true" />
        </button>
        {isOpen && renderDropdown(menu)}
      </div>
    );
  }

  return (
    <header className="site-header" ref={headerRef}>
        <div className="navbar-inner">
          <Link className="navbar-brand" href="/" aria-label="PolyTreat Chemicals home" onClick={closeMenus}>
            <span className="navbar-logo"><Image src="/logo.png" alt="" fill priority sizes="150px" /></span>
            <span className="navbar-brand-copy">
              <strong>PolyTreat Chemicals</strong>
              <small>Water Treatment &amp; Specialty Chemistry</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {(["products", "industries", "quality", "company"] as MenuKey[]).map(renderMenuTrigger)}
          </nav>

          <nav className="division-switcher" aria-label="Choose a division">
            <Link
              className={activeDivision === "industrial" ? "is-active" : ""}
              href="#industrial"
              onClick={() => { setActiveDivision("industrial"); closeMenus(); }}
            >
              <Droplets size={14} /> Industrial
            </Link>
            <Link
              className={activeDivision === "vklin" ? "is-active is-vklin" : ""}
              href="#vklin"
              onClick={() => { setActiveDivision("vklin"); closeMenus(); }}
            >
              <Sparkles size={14} /> V-Klin
            </Link>
          </nav>

          <div className="navbar-actions">
            <a className="btn btn-accent navbar-cta" href={salesWhatsApp} target="_blank" rel="noreferrer">
              <FileCheck2 size={16} /> <span>Request TDS / Quote</span>
            </a>

            <button
              className="mobile-menu-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

      {isMobileMenuOpen && (
        <div className="mobile-navigation" id="mobile-navigation">
          <nav className="mobile-division-switcher" aria-label="Choose a division">
            <Link href="#industrial" className={activeDivision === "industrial" ? "is-active" : ""} onClick={() => { setActiveDivision("industrial"); closeMenus(); }}>
              <Droplets size={15} /> Industrial Water
            </Link>
            <Link href="#vklin" className={activeDivision === "vklin" ? "is-active is-vklin" : ""} onClick={() => { setActiveDivision("vklin"); closeMenus(); }}>
              <Leaf size={15} /> V-Klin
            </Link>
          </nav>

          <nav className="mobile-menu-list" aria-label="Mobile navigation">
            {(["products", "industries", "quality", "company"] as MenuKey[]).map((menu) => {
              const expanded = openMobileGroup === menu;
              return (
                <section className="mobile-nav-group" key={menu}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`mobile-panel-${menu}`}
                    onClick={() => setOpenMobileGroup((current) => current === menu ? null : menu)}
                  >
                    {menuLabels[menu]} <ChevronDown size={17} />
                  </button>
                  {expanded && (
                    <div id={`mobile-panel-${menu}`} className="mobile-nav-panel">
                      {menu === "products" && (
                        <Link className="mobile-feature-link" href="#contact" onClick={closeMenus}>
                          <Factory size={17} /> Talk to our technical team <ArrowRight size={15} />
                        </Link>
                      )}
                      <MenuGroupLinks groups={menuGroups[menu]} onNavigate={closeMenus} />
                    </div>
                  )}
                </section>
              );
            })}
            <a className="btn btn-accent mobile-cta" href={salesWhatsApp} target="_blank" rel="noreferrer">
              <FileCheck2 size={17} /> Request TDS / Quote
            </a>
          </nav>

          <div className="mobile-quick-links">
            <Link href="#pqrs" onClick={closeMenus}><FlaskConical size={16} /> PQRS quality framework</Link>
            <Link href="#manufacturing" onClick={closeMenus}><Building2 size={16} /> Manufacturing plants</Link>
          </div>
        </div>
      )}
    </header>
  );
}

