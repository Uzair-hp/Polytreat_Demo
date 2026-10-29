"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/companyInfo";
import {
  groupRange,
  menuGroups,
  menuLabels,
  menuPromos,
  menuRange,
  type MenuKey,
} from "@/data/navigation";
import styles from "./navbar/Navbar.module.css";

const DESKTOP_BREAKPOINT = 1024;

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function groupSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<MenuKey | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingFocus = useRef<MenuKey | null>(null);
  const wasDesktop = useRef(true);

  const telHref = `tel:${companyInfo.phone.replace(/\s+/g, "")}`;

  const clearHoverClose = useCallback(() => {
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    hoverCloseTimer.current = null;
  }, []);

  const closeMenus = useCallback(() => {
    clearHoverClose();
    setOpenMenu(null);
    setOpenMobileGroup(null);
    setIsMobileOpen(false);
  }, [clearHoverClose]);

  /** Keep the open panel fully on screen when it is wider than the space under its trigger. */
  const clampPanel = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return;

    panel.style.marginLeft = "0px";
    const rect = panel.getBoundingClientRect();
    const gutter = 16;
    let shift = 0;

    if (rect.left < gutter) {
      shift = gutter - rect.left;
    } else if (rect.right > window.innerWidth - gutter) {
      shift = window.innerWidth - gutter - rect.right;
    }

    if (shift !== 0) panel.style.marginLeft = `${shift}px`;
  }, []);

  const activeMenus = useMemo(() => {
    const active = new Set<MenuKey>();
    if (!pathname) return active;

    (Object.keys(menuGroups) as MenuKey[]).forEach((key) => {
      const matches = menuGroups[key].some((group) =>
        group.links.some((link) => {
          const base = link.href.split("#")[0];
          if (base === "" || base === "/") return false;
          return pathname === base || pathname.startsWith(`${base}/`);
        }),
      );
      if (matches) active.add(key);
    });

    return active;
  }, [pathname]);

  function openMenuFromHover(menu: MenuKey) {
    clearHoverClose();
    setOpenMenu(menu);
  }

  function toggleMenu(menu: MenuKey) {
    clearHoverClose();
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  function scheduleMenuClose(menu: MenuKey) {
    clearHoverClose();
    hoverCloseTimer.current = setTimeout(() => {
      setOpenMenu((current) => (current === menu ? null : current));
      hoverCloseTimer.current = null;
    }, 180);
  }

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, menu: MenuKey) {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    clearHoverClose();
    pendingFocus.current = menu;
    setOpenMenu(menu);
  }

  function handleSkip(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target =
      document.querySelector<HTMLElement>("main") ?? document.querySelector<HTMLElement>("h1");
    if (!target) return;
    target.setAttribute("tabindex", "-1");
    target.focus();
  }

  // Scroll progress bar (RAF-throttled, written straight to the DOM so it never triggers
  // a React render) plus the scrolled state that shrinks the header.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`;
        }
        setScrolled(window.scrollY > 8);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close on a click outside the header or the mobile panel.
  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (headerRef.current?.contains(target)) return;
      if (mobilePanelRef.current?.contains(target)) return;
      closeMenus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [closeMenus]);

  // Escape closes the panel (desktop) or the menu (mobile) and restores focus.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      clearHoverClose();

      if (isMobileOpen) {
        setIsMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (openMenu) {
        const trigger = headerRef.current?.querySelector<HTMLButtonElement>(
          `[data-nav-trigger="${openMenu}"]`,
        );
        setOpenMenu(null);
        trigger?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen, openMenu, clearHoverClose]);

  // Close everything when the viewport crosses the desktop breakpoint.
  useEffect(() => {
    function handleResize() {
      const desktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      if (desktop !== wasDesktop.current) {
        wasDesktop.current = desktop;
        closeMenus();
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenus]);

  // Close on route change.
  useEffect(() => {
    const timer = window.setTimeout(closeMenus, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, closeMenus]);

  useEffect(() => {
    window.addEventListener("hashchange", closeMenus);
    return () => window.removeEventListener("hashchange", closeMenus);
  }, [closeMenus]);

  // Mobile menu: lock body scroll and trap focus inside the panel.
  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") return;
      const panel = mobilePanelRef.current;
      if (!panel) return;

      const items: HTMLElement[] = [];
      if (menuButtonRef.current) items.push(menuButtonRef.current);
      panel
        .querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
        .forEach((element) => items.push(element));
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!active || !items.includes(active)) {
        event.preventDefault();
        first.focus();
        return;
      }
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileOpen]);

  // Clamp the open panel, and move focus into it after an ArrowDown.
  useIsomorphicLayoutEffect(() => {
    if (!openMenu) return;
    clampPanel();
    if (pendingFocus.current === openMenu) {
      pendingFocus.current = null;
      panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    }
  }, [openMenu, clampPanel]);

  function renderGroups(menu: MenuKey) {
    return menuGroups[menu].map((group) => {
      const range = groupRange[group.title];
      const headingId = `nav-group-${menu}-${groupSlug(group.title)}`;

      return (
        <div
          className={styles.group}
          key={group.title}
          data-range={range && range !== "brand" ? range : undefined}
        >
          <p className={styles.groupHeading} id={headingId}>
            <span className={styles.dot} aria-hidden="true" />
            {group.title}
          </p>
          <ul className={styles.groupList} aria-labelledby={headingId}>
            {group.links.map((link) => {
              const external = link.href.startsWith("https://");
              const current =
                pathname !== null && !link.href.includes("#") && link.href === pathname;
              const className = `${styles.groupLink}${link.detail ? ` ${styles.groupLinkDetail}` : ""}`;
              const content = (
                <>
                  <span className={styles.groupLinkHead}>
                    <span>{link.label}</span>
                    <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {link.detail && <span className={styles.groupDetail}>{link.detail}</span>}
                </>
              );

              return (
                <li key={`${group.title}-${link.label}`}>
                  {external ? (
                    <a
                      className={className}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-current={current ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      className={className}
                      href={link.href}
                      aria-current={current ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  function renderPromo(menu: MenuKey) {
    const promo = menuPromos[menu];
    const range = menuRange[menu];

    return (
      <aside className={styles.promo} data-range={range !== "brand" ? range : undefined}>
        <p className={styles.promoEyebrow}>{promo.eyebrow}</p>
        <p className={styles.promoText}>{promo.text}</p>
        <Link className={styles.promoLink} href={promo.href} onClick={closeMenus}>
          {promo.cta}
          <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </aside>
    );
  }

  function renderTrigger(menu: MenuKey) {
    const isOpen = openMenu === menu;
    const isActive = activeMenus.has(menu);

    return (
      <div
        className={`${styles.item}${menu === "vklin" ? ` ${styles.itemVklin}` : ""}`}
        key={menu}
        data-active={isActive ? "true" : undefined}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") openMenuFromHover(menu);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") scheduleMenuClose(menu);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setOpenMenu((current) => (current === menu ? null : current));
          }
        }}
      >
        <button
          className={styles.trigger}
          type="button"
          data-nav-trigger={menu}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={`nav-panel-${menu}`}
          onClick={() => toggleMenu(menu)}
          onKeyDown={(event) => handleTriggerKeyDown(event, menu)}
          onFocus={(event) => {
            if (event.currentTarget.matches(":focus-visible")) openMenuFromHover(menu);
          }}
        >
          {menuLabels[menu]}
          <ChevronDown size={14} strokeWidth={1.8} aria-hidden="true" />
        </button>

        {isOpen && (
          <div
            className={`${styles.panel}${menu === "company" ? ` ${styles.panelCompany}` : ""}`}
            id={`nav-panel-${menu}`}
            ref={panelRef}
          >
            <div className={styles.panelGroups}>{renderGroups(menu)}</div>
            {renderPromo(menu)}
          </div>
        )}
      </div>
    );
  }

  function renderAccordion(menu: MenuKey) {
    const expanded = openMobileGroup === menu;

    return (
      <div className={styles.accordion}>
        <button
          type="button"
          className={`${styles.accordionRow}${expanded ? ` ${styles.accordionRowOpen}` : ""}`}
          aria-expanded={expanded}
          aria-current={activeMenus.has(menu) ? "true" : undefined}
          aria-controls={`mobile-panel-${menu}`}
          onClick={() => setOpenMobileGroup((current) => (current === menu ? null : menu))}
        >
          <span>{menuLabels[menu]}</span>
          <ChevronDown className={styles.chevron} size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>

        {expanded && (
          <div className={styles.accordionPanel} id={`mobile-panel-${menu}`}>
            <div className={styles.accordionGroups}>{renderGroups(menu)}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className={styles.scrollProgress}
        ref={progressRef}
        aria-hidden="true"
      />

      <a className={styles.skipLink} href="#main-content" onClick={handleSkip}>
        Skip to content
      </a>

      <header
        className={`${styles.header}${scrolled ? ` ${styles.headerScrolled}` : ""}`}
        ref={headerRef}
      >
        <Container className={styles.inner}>
          <Link className={styles.brand} href="/" aria-label="PolyTreat home" onClick={closeMenus}>
            <Image
              className={styles.logo}
              src="/logo.png"
              alt=""
              width={2167}
              height={726}
              priority
            />
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <Link
              className={styles.link}
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              onClick={closeMenus}
            >
              Home
            </Link>
            {renderTrigger("products")}
            <Link
              className={styles.link}
              href="/industries"
              aria-current={pathname === "/industries" ? "page" : undefined}
              onClick={closeMenus}
            >
              Industries
            </Link>
            {renderTrigger("vklin")}
            {renderTrigger("quality")}
            {renderTrigger("company")}
            <Link
              className={styles.link}
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              onClick={closeMenus}
            >
              Contact
            </Link>
          </nav>

          <div className={styles.actions}>
            <a className={styles.phone} href={telHref}>
              <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
              <span>{companyInfo.phone}</span>
            </a>

            <Button className={styles.cta} variant="primary" href="/contact#contact-form">
              Request a Quote
            </Button>

            <button
              className={`${styles.menuButton}${isMobileOpen ? ` ${styles.menuButtonOpen}` : ""}`}
              type="button"
              ref={menuButtonRef}
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMobileOpen((open) => !open)}
            >
              <span className={styles.menuBar} aria-hidden="true" />
              <span className={styles.menuBar} aria-hidden="true" />
              <span className={styles.menuBar} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {isMobileOpen && (
        <div className={styles.mobilePanel} id="mobile-nav" ref={mobilePanelRef}>
          <div className={styles.mobileScroll}>
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              <ul className={styles.mobileList}>
                <li>
                  <Link
                    className={styles.mobileRow}
                    href="/"
                    aria-current={pathname === "/" ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    Home
                  </Link>
                </li>
                <li>{renderAccordion("products")}</li>
                <li>
                  <Link
                    className={styles.mobileRow}
                    href="/industries"
                    aria-current={pathname === "/industries" ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    Industries
                  </Link>
                </li>
                <li>{renderAccordion("vklin")}</li>
                <li>{renderAccordion("quality")}</li>
                <li>{renderAccordion("company")}</li>
                <li>
                  <Link
                    className={styles.mobileRow}
                    href="/contact"
                    aria-current={pathname === "/contact" ? "page" : undefined}
                    onClick={closeMenus}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.mobileSticky}>
            <Button variant="primary" href="/contact#contact-form">
              Request a Quote
            </Button>
            <div className={styles.mobileContacts}>
              <a className={styles.mobileContact} href={telHref}>
                <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
                Call
              </a>
              <a
                className={styles.mobileContact}
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}