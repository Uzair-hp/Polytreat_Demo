import type { Metadata } from "next";
import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import { locationSites } from "@/data/locations";
import { companyInfo } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Contact PolyTreat | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Contact PolyTreat about industrial water treatment, construction chemistry, and V-Klin cleaning and facility-care products.",
};

const locations = locationSites.map((site) => ({
  id: site.id,
  title: site.role,
  area: site.area,
  address: site.address,
}));

export default function ContactPage() {
  return (
    <main className="contact-page contact-reference-layout" id="main-content">
      <section className="contact-reference-hero" aria-labelledby="contact-title">
        <div className="contact-reference-orbit contact-reference-orbit-one" aria-hidden="true" />
        <div className="contact-reference-orbit contact-reference-orbit-two" aria-hidden="true" />
        <div className="container contact-reference-hero-inner">
          <span className="contact-reference-eyebrow">Contact PolyTreat</span>
          <h1 id="contact-title">Let’s talk about your requirement.</h1>
          <p>
            Get in touch about industrial water treatment, construction chemistry, or V-Klin
            cleaning and facility care.
          </p>
          <a href="#contact-form" className="contact-reference-hero-link">
            Send an enquiry <MessageCircle size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="contact-reference-main" aria-label="Contact details and enquiry form">
        <div className="container contact-reference-columns">
          <div className="contact-reference-details">
            <span className="contact-reference-eyebrow">Contact details</span>
            <h2>Our information</h2>

            <article className="contact-reference-card contact-reference-office">
              <span className="contact-reference-icon"><MapPin size={19} aria-hidden="true" /></span>
              <div>
                <h3>Head office</h3>
                <address>{locations[0].address}</address>
              </div>
            </article>

            <div className="contact-reference-channels">
              <a className="contact-reference-card" href={`mailto:${companyInfo.email}`}>
                <span className="contact-reference-icon"><Mail size={18} aria-hidden="true" /></span>
                <span>
                  <strong>Email address</strong>
                  <span>{companyInfo.email}</span>
                </span>
              </a>
              <a className="contact-reference-card" href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}>
                <span className="contact-reference-icon"><Phone size={18} aria-hidden="true" /></span>
                <span>
                  <strong>Technical &amp; sales</strong>
                  <span>{companyInfo.phone}</span>
                </span>
              </a>
              <a
                className="contact-reference-card"
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{ gridColumn: "1 / -1" }}
              >
                <span className="contact-reference-icon"><MessageCircle size={18} aria-hidden="true" /></span>
                <span>
                  <strong>WhatsApp support</strong>
                  <span>{companyInfo.whatsappLabel}</span>
                </span>
              </a>
            </div>

            <div className="contact-reference-branches">
              <div className="contact-reference-branches-heading">
                <Building2 size={17} aria-hidden="true" />
                <h3>Other locations</h3>
              </div>
              <div className="contact-reference-branches-grid">
                {locations.slice(1).map((location) => (
                  <article className="contact-reference-branch" key={location.id}>
                    <span className="contact-reference-branch-icon">
                      <MapPin size={15} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{location.area}</strong>
                      <address>{location.address}</address>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-reference-form-wrap" id="contact-form">
            <div className="contact-reference-form-heading">
              <span className="contact-reference-eyebrow">Send an enquiry</span>
              <h2>Leave a message</h2>
              <p>Include the product area, system, or documents you’re enquiring about.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-reference-map-section" id="locations" aria-labelledby="locations-title">
        <div className="container">
          <div className="contact-reference-map-heading">
            <div>
              <span className="contact-reference-eyebrow">Visit us</span>
              <h2 id="locations-title">PolyTreat locations</h2>
            </div>
            <p>Choose a location to view it on the map.</p>
          </div>
          <LocationMap
            locations={locations.map(({ id, area, address }) => ({ id, title: area, address }))}
          />
        </div>
      </section>
    </main>
  );
}
