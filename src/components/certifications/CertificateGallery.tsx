"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Maximize2,
  X,
} from "lucide-react";
import styles from "./certifications.module.css";

interface Certificate {
  id: string;
  name: string;
  title: string;
  issuer: string;
  badge: string;
  color: string;
  bgLight: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  standard: string;
  site: string;
  category: string;
  scope: string;
}

const certificatesData: Certificate[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    title: "Quality Management System",
    issuer: "SM Certification Services (SMCS) / DAC Accredited",
    badge: "Accredited QMS",
    color: "#1B5FA8",
    bgLight: "#EBF3FA",
    image: "/certifications/iso-9001-2015-quality-certificate.jpeg",
    width: 1080,
    height: 1427,
    alt: "PolyTreat Chemicals ISO 9001:2015 quality management system certificate",
    standard: "ISO 9001:2015 QMS",
    site: "Goregaon (East), Mumbai & Tarapur MIDC",
    category: "Water Treatment & Cleaning Chemicals",
    scope:
      "Manufacturing of water-treatment chemicals, home-care, hygienic, and industrial cleaning formulations. It certifies the site quality-management system and manufacturing consistency, not an individual product recipe.",
  },
  {
    id: "who-gmp",
    name: "WHO-GMP Reference",
    title: "Certificate of Compliance — WHO-GMP Requirements",
    issuer: "UK Certification & Inspection Ltd. (UKcert)",
    badge: "Compliance Assessment",
    color: "#0E8F5E",
    bgLight: "#E6F7F0",
    image: "/certifications/who-gmp-compliance-certificate.jpeg",
    width: 1200,
    height: 1600,
    alt: "UKcert-issued certificate of compliance referencing WHO-GMP requirements",
    standard: "Good Manufacturing Practice (GMP)",
    site: "Goregaon (East) Manufacturing Unit",
    category: "Non-Medicated Facility & Home-Care",
    scope:
      "Assesses manufacturing procedures for a defined non-medicated, non-therapeutic home-care and institutional care product scope. Issued by UKcert as an independent third-party audit, excluding medicinal or drug claims.",
  },
  {
    id: "fda-ref",
    name: "FDA Reference",
    title: "Private Certificate of Compliance — FDA Requirements",
    issuer: "UK Certification and Assessment Ltd",
    badge: "Facility Assessment",
    color: "#1C5F91",
    bgLight: "#F1F5F9",
    image: "/certifications/fda-compliance-certificate.jpeg",
    width: 1200,
    height: 1600,
    alt: "Certificate of compliance referencing FDA requirements, issued by UK Certification and Assessment Ltd",
    standard: "Private FDA Requirement Audit",
    site: "Goregaon (East), Mumbai Facility",
    category: "Institutional & Home-Care Scope",
    scope:
      "Records a private assessment against requirements referencing FDA standards for a listed non-medicated home-care scope. Issued by a private UK certification body, not by the U.S. Food and Drug Administration.",
  },
  {
    id: "eco-friendly",
    name: "Eco-Friendly",
    title: "UKcert Eco-Friendly Quality Compliance",
    issuer: "UK Certification & Inspection Ltd. (UKcert)",
    badge: "Environmental Reference",
    color: "#10B981",
    bgLight: "#E8F8F2",
    image: "/certifications/eco-friendly-compliance-certificate.jpeg",
    width: 1200,
    height: 1600,
    alt: "PolyTreat Chemicals UKcert eco-friendly quality compliance certificate",
    standard: "Eco-Friendly Scope Compliance",
    site: "Goregaon (East), Mumbai Facility",
    category: "Facility & Household Product Range",
    scope:
      "Applies its 'Eco Friendly' compliance assessment to a defined non-medicated household and facility cleaning product scope. Signifies third-party formulation review without individual biological test claims.",
  },
];

export default function CertificateGallery() {
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalCert(null);
      }
    };

    if (activeModalCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModalCert]);

  return (
    <div className={styles.certGalleryContainer}>
      <div className={styles.certGrid} role="list" aria-label="Official Certificates">
        {certificatesData.map((cert) => (
          <article
            className={styles.certCard}
            key={cert.id}
            role="listitem"
            style={
              {
                "--cert-color": cert.color,
                "--cert-bg-light": cert.bgLight,
              } as React.CSSProperties
            }
          >
            <div className={styles.certAccentBar} aria-hidden="true" />

            <div className={styles.certCardLayout}>
              {/* Thumbnail with Click to Enlarge */}
              <button
                type="button"
                className={styles.certThumbnailWrapper}
                onClick={() => setActiveModalCert(cert)}
                aria-label={`Enlarge ${cert.title}`}
              >
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  width={240}
                  height={320}
                  className={styles.certThumbnailImg}
                  loading="lazy"
                />
                <div className={styles.certThumbnailOverlay} aria-hidden="true">
                  <Maximize2 size={24} strokeWidth={2} />
                  <span className={styles.certOverlayText}>Enlarge Scan</span>
                </div>
              </button>

              {/* Certificate Details */}
              <div className={styles.certBody}>
                <div className={styles.certHeaderTags}>
                  <span className={styles.certStatusTag}>{cert.badge}</span>
                  <span className={styles.certIssuerPill}>{cert.name}</span>
                </div>

                <h3 className={styles.certTitle}>{cert.title}</h3>

                <div className={styles.certMetaList}>
                  <div className={styles.certMetaRow}>
                    <span className={styles.certMetaLabel}>Issuer:</span>
                    <span className={styles.certMetaValue}>{cert.issuer}</span>
                  </div>
                  <div className={styles.certMetaRow}>
                    <span className={styles.certMetaLabel}>Scope:</span>
                    <span className={styles.certMetaValue}>{cert.category}</span>
                  </div>
                  <div className={styles.certMetaRow}>
                    <span className={styles.certMetaLabel}>Facility:</span>
                    <span className={styles.certMetaValue}>{cert.site}</span>
                  </div>
                </div>

                <p className={styles.certScopeDesc}>{cert.scope}</p>

                <div className={styles.certActions}>
                  <button
                    type="button"
                    className={styles.certLink}
                    onClick={() => setActiveModalCert(cert)}
                  >
                    View certified scan <Maximize2 size={13} aria-hidden="true" />
                  </button>
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                  >
                    Open raw image <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalCert && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveModalCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalCert.title}
        >
          <div
            className={styles.modalDialog}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleGroup}>
                <h3 className={styles.modalTitle}>{activeModalCert.title}</h3>
                <span className={styles.modalIssuer}>{activeModalCert.issuer}</span>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setActiveModalCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <Image
                src={activeModalCert.image}
                alt={activeModalCert.alt}
                width={activeModalCert.width}
                height={activeModalCert.height}
                className={styles.modalImg}
                priority
              />
            </div>

            <div className={styles.modalFooter}>
              <span className={styles.certScopeDesc}>
                {activeModalCert.standard} · {activeModalCert.site}
              </span>
              <a
                href={activeModalCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalOpenRaw}
              >
                Open in new tab <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
