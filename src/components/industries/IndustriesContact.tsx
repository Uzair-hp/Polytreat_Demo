import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import styles from "./industries.module.css";

export default function IndustriesContact() {
  return (
    <section
      className={styles.contactSection}
      id="contact"
      aria-labelledby="industries-contact-title"
      data-reveal
    >
      <Container>
        <div className={styles.contactGrid}>
          <div className={styles.contactCopy}>
            <span className={styles.contactEyebrow}>
              Have a specific site or system in mind?
            </span>
            <h2 id="industries-contact-title" className={styles.contactTitle}>
              Tell us what you work with.
            </h2>
            <p className={styles.contactLead}>
              Share the application area, the system and the operating conditions, and
              the team can direct your enquiry to the right category.
            </p>

            <div className={styles.contactActions}>
              <Button variant="primary" href="/contact#contact-form">
                Discuss your application
              </Button>
              <Button
                variant="secondary"
                onDark
                href={companyInfo.whatsappUrl}
                external
                icon={<MessageCircle size={16} strokeWidth={1.75} />}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className={styles.contactTiles}>
            <ContactTile
              icon={<Mail size={24} strokeWidth={1.75} />}
              label="Email enquiries"
              value={companyInfo.email}
              href={`mailto:${companyInfo.email}`}
            />
            <ContactTile
              icon={<Phone size={24} strokeWidth={1.75} />}
              label="Technical & sales"
              value={companyInfo.phone}
              href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            />
            <ContactTile
              icon={<MessageCircle size={24} strokeWidth={1.75} />}
              label="WhatsApp"
              value={companyInfo.whatsappLabel}
              href={companyInfo.whatsappUrl}
              external
            />
            <ContactTile
              icon={<MapPin size={24} strokeWidth={1.75} />}
              label="Corporate office"
              value={companyInfo.officeAddress}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
