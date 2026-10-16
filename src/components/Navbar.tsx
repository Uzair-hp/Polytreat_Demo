"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  PhoneCall,
  ChevronDown,
  FileCheck,
} from "lucide-react";

export default function Navbar() {
  const [activeDivision, setActiveDivision] = useState<"industrial" | "altra">("industrial");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--color-border-subtle)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
            gap: "1.5rem",
          }}
        >
          {/* Brand Logo & Tagline */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "150px",
                height: "48px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/logo.png"
                alt="PolyTreat Chemicals Pvt Ltd"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div
              style={{
                display: "none",
                flexDirection: "column",
                borderLeft: "1px solid var(--color-border-subtle)",
                paddingLeft: "0.75rem",
              }}
              className="desktop-brand-text"
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "var(--color-primary-navy)",
                  textTransform: "uppercase",
                }}
              >
                PolyTreat Chemicals
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--color-text-muted)",
                }}
              >
                Est. 1987 &bull; Water &amp; Hygiene
              </span>
            </div>
          </Link>

          {/* Center: Division Switcher Pill (PRD Feature) */}
          <div
            style={{
              display: "none",
              backgroundColor: "#F1F5F9",
              padding: "4px",
              borderRadius: "9999px",
              border: "1px solid #E2E8F0",
            }}
            className="desktop-division-pill"
          >
            <button
              onClick={() => setActiveDivision("industrial")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: activeDivision === "industrial" ? "var(--color-primary-navy)" : "transparent",
                color: activeDivision === "industrial" ? "#FFFFFF" : "var(--color-text-muted)",
                boxShadow: activeDivision === "industrial" ? "0 2px 6px rgba(11, 25, 44, 0.2)" : "none",
              }}
            >
              <Droplets size={14} color={activeDivision === "industrial" ? "var(--color-water-light)" : "#64748B"} />
              Industrial Water Treatment
            </button>
            <button
              onClick={() => setActiveDivision("altra")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: activeDivision === "altra" ? "var(--color-bio-dark)" : "transparent",
                color: activeDivision === "altra" ? "#FFFFFF" : "var(--color-text-muted)",
                boxShadow: activeDivision === "altra" ? "0 2px 6px rgba(5, 150, 105, 0.25)" : "none",
              }}
            >
              <Sparkles size={14} color={activeDivision === "altra" ? "#A7F3D0" : "#64748B"} />
              Altra Care Hygiene
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "1.75rem",
            }}
            className="desktop-nav"
          >
            <Link
              href="#products"
              style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "var(--color-text-main)",
                transition: "color 0.2s",
              }}
            >
              Products &amp; Formulations
            </Link>
            <Link
              href="#industries"
              style={{
                fontSize: "0.92rem",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                transition: "color 0.2s",
              }}
            >
              Industries
            </Link>
            <Link
              href="#pqrs"
              style={{
                fontSize: "0.92rem",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                transition: "color 0.2s",
              }}
            >
              PQRS Quality
            </Link>
            <Link
              href="#about"
              style={{
                fontSize: "0.92rem",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                transition: "color 0.2s",
              }}
            >
              Company
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="#quote"
              className="btn btn-accent"
              style={{
                fontSize: "0.86rem",
                padding: "0.55rem 1.15rem",
                display: "none",
              }}
              id="quote-cta-btn"
            >
              <FileCheck size={16} /> Request Lab Quote
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid var(--color-border-subtle)",
                backgroundColor: "#F8FAFC",
                color: "var(--color-primary-dark)",
                cursor: "pointer",
              }}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid var(--color-border-subtle)",
            padding: "1.25rem 1.5rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Mobile Division Switcher */}
          <div
            style={{
              backgroundColor: "#F1F5F9",
              padding: "4px",
              borderRadius: "8px",
              marginBottom: "1.25rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px",
            }}
          >
            <button
              onClick={() => setActiveDivision("industrial")}
              style={{
                padding: "8px 10px",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                backgroundColor: activeDivision === "industrial" ? "var(--color-primary-navy)" : "transparent",
                color: activeDivision === "industrial" ? "#FFFFFF" : "var(--color-text-muted)",
              }}
            >
              Industrial Water
            </button>
            <button
              onClick={() => setActiveDivision("altra")}
              style={{
                padding: "8px 10px",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                backgroundColor: activeDivision === "altra" ? "var(--color-bio-dark)" : "transparent",
                color: activeDivision === "altra" ? "#FFFFFF" : "var(--color-text-muted)",
              }}
            >
              Altra Care Hygiene
            </button>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-main)" }}
            >
              Products &amp; Formulations
            </Link>
            <Link
              href="#industries"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-muted)" }}
            >
              Industries Served
            </Link>
            <Link
              href="#pqrs"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-muted)" }}
            >
              PQRS Quality Framework
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-muted)" }}
            >
              About PolyTreat (Est. 1987)
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 500, color: "var(--color-text-muted)" }}
            >
              Contact &amp; Plant Locations
            </Link>

            <a
              href="#quote"
              className="btn btn-accent"
              style={{ marginTop: "0.5rem", width: "100%" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileCheck size={16} /> Request Lab Quote &amp; TDS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

