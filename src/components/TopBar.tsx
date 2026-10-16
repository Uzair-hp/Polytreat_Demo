import React from "react";
import { ShieldCheck, MapPin, Mail, Award, FileText } from "lucide-react";

export default function TopBar() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-primary-dark)",
        color: "#94A3B8",
        fontSize: "0.82rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "0.45rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.6rem",
        }}
      >
        {/* Left Trust Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span
            className="badge badge-blue"
            style={{
              fontSize: "0.72rem",
              padding: "0.15rem 0.55rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            <ShieldCheck size={13} /> ISO 9001:2015 Certified
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
            <Award size={13} color="var(--color-accent-amber)" /> Est. 1987 &bull; 37+ Years Industrial Legacy
          </span>
          <span
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.35rem",
            }}
            className="desktop-only-meta"
          >
            <MapPin size={13} color="var(--color-water-light)" /> Mumbai &amp; Tarapur MIDC, India
          </span>
        </div>

        {/* Right Direct Channels */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
          <a
            href="mailto:polyind2@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#CBD5E1",
              transition: "color 0.2s",
            }}
          >
            <Mail size={13} color="var(--color-water-light)" /> polyind2@gmail.com
          </a>
          <span style={{ color: "rgba(255, 255, 255, 0.15)" }}>|</span>
          <a
            href="#tds-portal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "var(--color-water-light)",
              fontWeight: 600,
            }}
          >
            <FileText size={13} /> TDS / COA Portal
          </a>
        </div>
      </div>
    </div>
  );
}
