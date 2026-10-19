"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Layers3,
  Menu,
  X,
} from "lucide-react";

type MenuKey = "products" | "vklin" | "quality" | "company";
type MenuLink = { label: string; href: string; detail?: string };
type MenuGroup = { title: string; links: MenuLink[] };

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
];

const vklinGroups: MenuGroup[] = [
  {
    title: "V-Klin range",
    links: [
      { label: "V-Klin overview", href: "/#vklin" },
      { label: "Cleaning product range", href: "/#portfolio-vklin" },
    ],
  },
  {
    title: "Cleaning categories",
    links: [
      { label: "Floor & surface care", href: "/#vklin-floor-surface" },
      { label: "Handwash & liquid soap", href: "/#vklin-handwash" },
      { label: "Dishwashing products", href: "/#vklin-dishwashing" },
      { label: "Glass, kitchen & toilet care", href: "/#vklin-glass-kitchen-toilet" },
    ],
  },
];

const qualityGroups: MenuGroup[] = [
  {
    title: "Quality & product information",
    links: [
      { label: "Quality overview", href: "/quality", detail: "How PolyTreat approaches quality and product information" },
      { label: "PQRS framework", href: "/quality#pqrs", detail: "Performance · Quality · Reliability · Service" },
      { label: "Certifications", href: "/certifications", detail: "Review each certificate's stated scope" },
      { label: "Product documents", href: "/contact#contact-form", detail: "Request product TDS or SDS" },
    ],
  },
];

const companyGroups: MenuGroup[] = [
  {
    title: "About PolyTreat",
    links: [
      { label: "Company overview", href: "/about", detail: "Company · product ranges · locations" },
      { label: "Locations & facilities", href: "/about#infrastructure", detail: "Goregaon · Tarapur MIDC" },
    ],
  },
];

const menuGroups: Record<MenuKey, MenuGroup[]> = {
  products: productGroups,
  vklin: vklinGroups,
  quality: qualityGroups,
  company: companyGroups,
};

const menuLabels: Record<MenuKey, string> = {
  products: "Solutions",
  vklin: "V-Klin",
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
      <section className={`mobile-nav-group mobile-nav-group-${menu}`} key={menu}>
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
            <p>Browse industrial water treatment and construction chemistry by application.</p>
            <Link className="nav-feature-link" href="/#solutions" onClick={closeMenus}>
              View all solutions <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <span className="nav-feature-years" aria-hidden="true">02</span>
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
        className={`nav-item nav-item-${menu}${isOpen ? " is-open" : ""}`}
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
            {renderMenuTrigger("vklin")}
            {renderMenuTrigger("quality")}
            {renderMenuTrigger("company")}
            <Link className="nav-direct-link" href="/contact" onClick={closeMenus}>Contact</Link>
          </nav>

          <div className="navbar-actions">
            <Link className="btn btn-accent navbar-cta" href="/contact#contact-form" onClick={closeMenus}>
              <span>Request a Quote</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

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
          <nav className="mobile-menu-list" aria-label="Mobile navigation">
            <Link className="mobile-direct-link" href="/" onClick={closeMenus}>Home</Link>
            {renderMobileMenuGroup("products")}
            <Link className="mobile-direct-link" href="/#markets" onClick={closeMenus}>Industries</Link>
            {renderMobileMenuGroup("vklin")}
            {renderMobileMenuGroup("quality")}
            {renderMobileMenuGroup("company")}
            <Link className="mobile-direct-link" href="/contact" onClick={closeMenus}>Contact</Link>
            <Link className="btn btn-accent mobile-cta" href="/contact#contact-form" onClick={closeMenus}>
              Request a Quote
            </Link>
          </nav>

        </div>
      )}
    </header>
  );
}

