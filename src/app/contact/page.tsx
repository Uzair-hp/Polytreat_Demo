import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";

export const metadata: Metadata = {
  title: "Contact PolyTreat | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Contact PolyTreat about industrial water treatment, construction chemistry, and V-Klin cleaning and facility-care products.",
};

const locations = [
  {
    id: "goregaon-west",
    title: "Corporate & sales office",
    area: "Goregaon West, Mumbai",
    address:
      "7-A, Topiwala Building, 'C' Wing, Opp. Topiwala Center / Cinema, Goregaon (West), Mumbai – 400104, Maharashtra, India.",
  },
  {
    id: "goregaon-east",
    title: "Green products facility",
    area: "Goregaon East, Mumbai",
    address:
      "306, Shankhala Industrial Premises Co-op Society Ltd., Near Chudiwadi, Gogatewadi, Goregaon (East), Mumbai – 400063, Maharashtra, India.",
  },
  {
    id: "tarapur",
    title: "Manufacturing unit",
    area: "Tarapur MIDC, Palghar",
    address: "Tarapur MIDC, Palghar district, Maharashtra, India.",
  },
];

const directContacts = [
  {
    label: "Technical & sales",
    value: "+91 98202 35995",
    href: "tel:+919820235995",
    icon: Phone,
  },
  {
    label: "Email",
    value: "polyind2@gmail.com",
    href: "mailto:polyind2@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Message our team",
    href: "https://wa.me/919820235995",
    icon: MessageCircle,
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page contact-redesign">
      <section className="contact-redesign-hero" aria-labelledby="contact-title">
        <div className="container contact-redesign-hero-inner">
          <div className="contact-redesign-intro">
            <span className="contact-redesign-eyebrow">Contact PolyTreat</span>
            <h1 id="contact-title">Talk to us about your requirement.</h1>
            <p>
              Connect with our team about industrial water treatment, construction chemistry, or
              V-Klin cleaning and facility care.
            </p>
            <a className="contact-redesign-primary-link" href="#contact-enquiry">
              Send an enquiry <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <aside className="contact-direct-card" aria-label="Contact PolyTreat directly">
            <div className="contact-direct-heading">
              <span>Get in touch</span>
              <h2>Choose a contact method</h2>
            </div>
            <ul>
              {directContacts.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel="noreferrer">
                    <span className="contact-direct-icon"><Icon size={17} aria-hidden="true" /></span>
                    <span className="contact-direct-copy">
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="contact-redesign-enquiry" id="contact-enquiry" aria-labelledby="enquiry-title">
        <div className="container">
          <div className="contact-redesign-section-heading">
            <div>
              <span className="contact-redesign-eyebrow">Send an enquiry</span>
              <h2 id="enquiry-title">How can we help?</h2>
            </div>
            <p>Share the basics and we’ll help direct your enquiry to the right team.</p>
          </div>

          <div className="contact-redesign-enquiry-grid">
            <ContactForm />
            <aside className="contact-enquiry-guide">
              <span className="contact-guide-count">A useful starting point</span>
              <h3>What should I include?</h3>
              <p>A short note is enough. If helpful, mention:</p>
              <ul>
                <li>The product area or service you’re asking about</li>
                <li>Your site, system, or project location</li>
                <li>Whether you need a quote, product document, or application discussion</li>
              </ul>
              <div className="contact-guide-note">
                Need product literature? Choose “Product documents (TDS / SDS)” in the form.
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-redesign-locations" id="locations" aria-labelledby="locations-title">
        <div className="container">
          <div className="contact-redesign-section-heading">
            <div>
              <span className="contact-redesign-eyebrow">Find us</span>
              <h2 id="locations-title">Our locations</h2>
            </div>
            <p>Mumbai offices and a manufacturing unit in Tarapur MIDC.</p>
          </div>

          <div className="contact-redesign-location-grid">
            <div className="contact-location-list">
              {locations.map((location) => (
                <article className="contact-location-card" key={location.id}>
                  <span className="contact-location-mark"><MapPin size={17} aria-hidden="true" /></span>
                  <div>
                    <h3>{location.title}</h3>
                    <strong>{location.area}</strong>
                    <address>{location.address}</address>
                  </div>
                </article>
              ))}
            </div>
            <LocationMap
              locations={locations.map(({ id, area, address }) => ({ id, title: area, address }))}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
