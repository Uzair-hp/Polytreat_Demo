"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Factory,
  Layers3,
  Menu,
  X,
} from "lucide-react";

type MenuKey = "products" | "quality" | "company";
type MenuLink = { label: string; href: string; detail?: string };
type MenuGroup = { title: string; links: MenuLink[] };

const salesWhatsApp =
  "https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20request%20product%20TDS%20or%20a%20quote.";

const productGroups: MenuGroup[] = [
  {
    title: "Industrial water",
    links: [
      { label: "Boiler water", href: "/#portfolio-boiler-cooling" },
      { label: "Cooling water", href: "/#portfolio-boiler-cooling" },
      { label: "RO & effluent", href: "/#portfolio-ro-effluent" },
    ],
  },
  {
    title: "Construction & surface protection",
    links: [
      { label: "Waterproofing & coatings", href: "/#portfolio-construction" },
      { label: "Concrete repair", href: "/#portfolio-construction" },
      { label: "Flooring & joint sealing", href: "/#portfolio-construction" },
    ],
  },
  {
    title: "V-Klin cleaning range",
    links: [
      { label: "Floor & surface care", href: "/#portfolio-vklin" },
      { label: "Hand & dish care", href: "/#portfolio-vklin" },
      { label: "Glass & washroom care", href: "/#portfolio-vklin" },
    ],
  },
];

const qualityGroups: MenuGroup[] = [
  {
    title: "Quality & product information",
    links: [
      { label: "PQRS framework", href: "/#pqrs", detail: "Performance · Quality · Reliability · Service" },
      { label: "Product documents", href: salesWhatsApp, detail: "Request product TDS or SDS" },
      { label: "Technical support", href: "/contact", detail: "Talk with us about your application" },
    ],
  },
];

const companyGroups: MenuGroup[] = [
  {
    title: "About PolyTreat",
    links: [
      { label: "Company overview", href: "/about", detail: "Our story since 1987 · Brands · R&D" },
      { label: "Infrastructure & R&D", href: "/about#infrastructure", detail: "Tarapur MIDC · Goregaon · Pilot lab" },
      { label: "Certifications", href: "/certifications", detail: "ISO 9001 · WHO-GMP · FDA · Eco-friendly" },
    ],
  },
];

const menuGroups: Record<MenuKey, MenuGroup[]> = {
  products: productGroups,
  quality: qualityGroups,
  company: companyGroups,
};

const menuLabels: Record<MenuKey, string> = {
  products: "Solutions",
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

  function renderMobileMenuGroup(menu: MenuKey) {
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
              <Link className="mobile-feature-link" href="/contact" onClick={closeMenus}>
                <Factory size={17} aria-hidden="true" /> Talk to our team <ArrowRight size={15} aria-hidden="true" />
              </Link>
            )}
            <MenuGroupLinks groups={menuGroups[menu]} onNavigate={closeMenus} />
          </div>
        )}
      </section>
    );
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
            <span className="nav-feature-eyebrow"><Layers3 size={14} aria-hidden="true" /> Explore by work area</span>
            <h2>Find the right area for your work.</h2>
            <p>Browse industrial water treatment, construction chemistry, and V-Klin home and facility-care products.</p>
            <Link className="nav-feature-link" href="/contact" onClick={closeMenus}>
              Discuss your requirement <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <span className="nav-feature-years" aria-hidden="true">03</span>
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
        onMouseEnter={() => setOpenMenu(menu)}
        onMouseLeave={() => setOpenMenu((current) => current === menu ? null : current)}
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
            <Link className="nav-direct-link" href="/" onClick={closeMenus}>Home</Link>
            {renderMenuTrigger("products")}
            <Link className="nav-direct-link" href="/#markets" onClick={closeMenus}>Industries</Link>
            {renderMenuTrigger("quality")}
            {renderMenuTrigger("company")}
            <Link className="nav-direct-link" href="/contact" onClick={closeMenus}>Contact</Link>
          </nav>

          <nav className="division-switcher" aria-label="Division shortcuts">
            <Link className="division-shortcut division-shortcut-industrial" href="/#solution-water" onClick={closeMenus}>
              Industrial
            </Link>
            <Link className="division-shortcut division-shortcut-vklin" href="/#vklin" onClick={closeMenus}>
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
            <Link href="/#solution-water" onClick={closeMenus}>
              Industrial Water
            </Link>
            <Link href="/#vklin" onClick={closeMenus}>
              V-Klin
            </Link>
          </nav>

          <nav className="mobile-menu-list" aria-label="Mobile navigation">
            <Link className="mobile-direct-link" href="/" onClick={closeMenus}>Home</Link>
            {renderMobileMenuGroup("products")}
            <Link className="mobile-direct-link" href="/#markets" onClick={closeMenus}>Industries</Link>
            {renderMobileMenuGroup("quality")}
            {renderMobileMenuGroup("company")}
            <Link className="mobile-direct-link" href="/contact" onClick={closeMenus}>Contact</Link>
            <a className="btn btn-accent mobile-cta" href={salesWhatsApp} target="_blank" rel="noreferrer">
              Request TDS / Quote
            </a>
          </nav>

        </div>
      )}
    </header>
  );
}

