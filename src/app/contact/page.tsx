import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HomeMotion from "@/components/home/HomeMotion";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import { locationSites } from "@/data/locations";
import { companyInfo } from "@/data/companyInfo";
import styles from "@/components/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Contact PolyTreat | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Contact PolyTreat about industrial water treatment, construction chemistry, and V-Klin cleaning and facility-care products. Head office in Mumbai, manufacturing at Tarapur MIDC and Goregaon East.",
};

const locations = locationSites.map((site) => ({
  id: site.id,
  title: site.role,
  area: site.area,
  address: site.address,
}));

export default function ContactPage() {
  return (
    <main className={styles.page} id="main-content">
      <HomeMotion />

      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="contact-title">
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Contact PolyTreat</span>
          </nav>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Direct Technical &amp; Sales Support</span>
            <h1 id="contact-title" className={styles.heroTitle}>
              Let&apos;s talk about your{" "}
              <span className={styles.heroHighlight}>chemical requirement</span>.
            </h1>
            <p className={styles.heroSubline}>
              Get in touch directly with our chemical specialists, application engineers, and sales desk
              for industrial water treatment, construction protection, or V-Klin institutional hygiene care.
            </p>

            <div className={styles.heroActions}>
              <Button variant="primary" href="#contact-form">
                Send an enquiry
              </Button>
              <Button
                variant="secondary"
                href={companyInfo.whatsappUrl}
                external
                icon={<MessageCircle size={16} strokeWidth={1.75} />}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Details & Form Grid */}
      <section className={styles.mainSection} aria-label="Contact details and enquiry form">
        <Container>
          <div className={styles.mainGrid}>
            {/* Left Column: Direct Information & Channels */}
            <div className={styles.detailsCol}>
              <div className={styles.colHeadingGroup}>
                <span className={styles.colEyebrow}>Direct channels</span>
                <h2 className={styles.colTitle}>Our information</h2>
              </div>

              {/* Head Office Card */}
              <article className={styles.officeCard}>
                <div className={styles.cardIconChip} aria-hidden="true">
                  <MapPin size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Corporate Head Office</h3>
                  <address className={styles.cardAddress}>{locationSites[0].address}</address>
                </div>
              </article>

              {/* Direct Channels Grid */}
              <div className={styles.channelsGrid}>
                <a
                  className={styles.channelCard}
                  href={`mailto:${companyInfo.email}`}
                  aria-label="Send email to PolyTreat"
                >
                  <div className={styles.channelLeft}>
                    <Mail size={20} className={styles.channelIcon} aria-hidden="true" />
                    <div className={styles.channelCopy}>
                      <span className={styles.channelLabel}>Email enquiries</span>
                      <span className={styles.channelValue}>{companyInfo.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className={styles.channelArrow} aria-hidden="true" />
                </a>

                <a
                  className={styles.channelCard}
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  aria-label="Call PolyTreat sales & technical desk"
                >
                  <div className={styles.channelLeft}>
                    <Phone size={20} className={styles.channelIcon} aria-hidden="true" />
                    <div className={styles.channelCopy}>
                      <span className={styles.channelLabel}>Technical &amp; sales desk</span>
                      <span className={styles.channelValue}>{companyInfo.phone}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className={styles.channelArrow} aria-hidden="true" />
                </a>

                <a
                  className={styles.channelCard}
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat with PolyTreat on WhatsApp"
                >
                  <div className={styles.channelLeft}>
                    <MessageCircle size={20} className={styles.channelIcon} aria-hidden="true" />
                    <div className={styles.channelCopy}>
                      <span className={styles.channelLabel}>Instant WhatsApp Support</span>
                      <span className={styles.channelValue}>{companyInfo.whatsappLabel}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className={styles.channelArrow} aria-hidden="true" />
                </a>
              </div>

              {/* Manufacturing Facilities */}
              <div className={styles.facilitiesGroup}>
                <h3 className={styles.facilitiesHeading}>
                  <Building2 size={18} aria-hidden="true" />
                  <span>Manufacturing Facilities</span>
                </h3>

                <div className={styles.facilitiesGrid}>
                  <article className={styles.facilityCard}>
                    <span className={styles.facilityTag}>{locationSites[1].kind}</span>
                    <h4 className={styles.facilityTitle}>{locationSites[1].title}</h4>
                    <address className={styles.facilityAddress}>{locationSites[1].address}</address>
                  </article>

                  <article className={styles.facilityCard}>
                    <span className={styles.facilityTag}>{locationSites[2].kind}</span>
                    <h4 className={styles.facilityTitle}>{locationSites[2].title}</h4>
                    <address className={styles.facilityAddress}>{locationSites[2].address}</address>
                  </article>
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form Card */}
            <div className={styles.formCard} id="contact-form">
              <div className={styles.formHeader}>
                <span className={styles.colEyebrow}>Send an enquiry</span>
                <h2 className={styles.colTitle}>Leave a message</h2>
                <p className={styles.formLead}>
                  Include your system parameters, water chemistry report, product family, or technical document request.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Interactive Map Section */}
      <section className={styles.mapSection} id="locations" aria-labelledby="locations-title" data-reveal>
        <Container>
          <div className={styles.mapHeadingSplit}>
            <div>
              <span className={styles.colEyebrow}>Facility visits &amp; logistics</span>
              <h2 id="locations-title" className={styles.mapTitle}>PolyTreat locations.</h2>
            </div>
            <p className={styles.mapLead}>
              Select any site below to view location directions and map coordinates for our head office and manufacturing facilities.
            </p>
          </div>

          <LocationMap
            locations={locations.map(({ id, area, address }) => ({ id, title: area, address }))}
          />
        </Container>
      </section>
    </main>
  );
}
