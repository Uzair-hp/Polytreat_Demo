"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Factory,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

type MenuKey = "products" | "industries" | "quality" | "company";
type MenuLink = { label: string; href: string; detail?: string };
type MenuGroup = { title: string; links: MenuLink[] };

const salesWhatsApp =
  "https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20request%20product%20TDS%20or%20a%20quote.";

const productGroups: MenuGroup[] = [
  {
    title: "Industrial water",
    links: [
      { label: "Boiler systems", href: "#portfolio-boiler-cooling", detail: "Water-treatment product categories" },
      { label: "Cooling-water systems", href: "#portfolio-boiler-cooling", detail: "Cooling tower and chiller applications" },
      { label: "RO & effluent", href: "#portfolio-ro-effluent", detail: "Membrane and wastewater applications" },
    ],
  },
  {
    title: "Construction & specialty",
    links: [
      { label: "Waterproofing & coatings", href: "#portfolio-construction" },
      { label: "Concrete repair & flooring", href: "#portfolio-construction" },
      { label: "Rust treatment", href: "#portfolio-construction", detail: "Ask about current product documentation" },
    ],
  },
  {
    title: "V-Klin care",
    links: [
      { label: "Floor & surface care", href: "#portfolio-vklin" },
      { label: "Handwash & liquid soap", href: "#portfolio-vklin" },
      { label: "Dishwashing products", href: "#portfolio-vklin" },
      { label: "Glass, kitchen & toilet care", href: "#portfolio-vklin" },
    ],
  },
];

const industryGroups: MenuGroup[] = [
  {
    title: "Process & manufacturing",
    links: [
      { label: "Industrial process operations", href: "#markets", detail: "Boilers, cooling systems, RO and process operations" },
    ],
  },
  {
    title: "Utilities & infrastructure",
    links: [
      { label: "Water & building utilities", href: "#markets", detail: "Cooling water, effluent and building services" },
    ],
  },
  {
    title: "Facilities & institutions",
    links: [
      { label: "Institutional facility care", href: "#markets", detail: "Cleaning and maintenance for shared spaces" },
    ],
  },
];

const qualityGroups: MenuGroup[] = [
  {
    title: "Quality & product information",
    links: [
      { label: "PQRS framework", href: "#pqrs", detail: "Performance · Quality · Reliability · Service" },
      { label: "Product documents", href: salesWhatsApp, detail: "Ask for current product information" },
      { label: "Discuss a system", href: "#contact", detail: "Share your application with the team" },
    ],
  },
];

const companyGroups: MenuGroup[] = [
  {
    title: "About PolyTreat",
    links: [
      { label: "Company overview", href: "#about" },
      { label: "Tarapur & Mumbai locations", href: "#manufacturing" },
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
  products: "Solutions",
  industries: "Industries",
  quality: "Quality",
  company: "About Us",
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
            <span className="nav-feature-eyebrow"><ShieldCheck size={14} /> Three areas of work</span>
            <h2>Find chemistry for your system and site.</h2>
            <p>Explore industrial water treatment, construction chemistry, and V-Klin care.</p>
            <Link className="nav-feature-link" href="#contact" onClick={closeMenus}>
              Talk to our team <ArrowRight size={16} />
            </Link>
            <span className="nav-feature-years">PT<span>.</span></span>
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
          {menuLabels[menu]} <ChevronDown size={14} strokeWidth={1.8} aria-hidden="true" />
        </button>
        {isOpen && renderDropdown(menu)}
      </div>
    );
  }

  return (
    <header className="site-header" ref={headerRef}>
        <div className="navbar-inner">
          <Link className="navbar-brand" href="/" aria-label="PolyTreat Chemicals home" onClick={closeMenus}>
            <span className="navbar-logo"><Image src="/logo.png" alt="" fill priority sizes="(max-width: 430px) 132px, (max-width: 1023px) 126px, 118px" /></span>
            <span className="navbar-brand-copy">
              <strong>PolyTreat Chemicals</strong>
              <small>Water Treatment &amp; Specialty Chemistry</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {renderMenuTrigger("products")}
            {renderMenuTrigger("industries")}
            {renderMenuTrigger("quality")}
            {renderMenuTrigger("company")}
            <Link className="nav-direct-link" href="#contact" onClick={closeMenus}>Contact</Link>
          </nav>

          <nav className="division-switcher" aria-label="Division shortcuts">
            <Link className="division-shortcut division-shortcut-industrial" href="#solution-water" onClick={closeMenus}>
              Industrial
            </Link>
            <Link className="division-shortcut division-shortcut-vklin" href="#vklin" onClick={closeMenus}>
              V-Klin
            </Link>
          </nav>

          <div className="navbar-actions">
            <a className="btn btn-accent navbar-cta" href={salesWhatsApp} target="_blank" rel="noreferrer">
              <span>Request TDS / Quote</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="none">
                <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
          <nav className="mobile-division-switcher" aria-label="Division shortcuts">
            <Link href="#solution-water" onClick={closeMenus}>
              Industrial Water
            </Link>
            <Link href="#vklin" onClick={closeMenus}>
              V-Klin
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
            <Link className="mobile-direct-link" href="#contact" onClick={closeMenus}>Contact</Link>
            <a className="btn btn-accent mobile-cta" href={salesWhatsApp} target="_blank" rel="noreferrer">
              Request TDS / Quote
            </a>
          </nav>

        </div>
      )}
    </header>
  );
}

