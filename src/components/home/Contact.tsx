import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ContactTile from "@/components/ui/ContactTile";
import TextLink from "@/components/ui/TextLink";
import styles from "./home.module.css";

export default function Contact() {
  return (
    <Section tone="dark" id="contact" labelledBy="contact-title">
      <Container>
        <div className={styles.contactGrid}>
          <div className={styles.contactCopy}>
            <span className={styles.contactEyebrow}>Start a conversation</span>
            <h2 id="contact-title" className={styles.contactTitle}>
              Let&apos;s talk about your application.
            </h2>
            <p className={styles.contactLead}>
              Tell us the system, surface, or facility behind the requirement, and we&apos;ll
              direct it to the right team — including current product documents.
            </p>

            <div className={styles.contactActions}>
              <Button
                variant="inverse"
                href={companyInfo.whatsappUrl}
                external
                icon={<MessageCircle size={16} strokeWidth={1.75} />}
              >
                Talk to our team
              </Button>
              <Button variant="secondary" onDark href={`mailto:${companyInfo.email}`} icon={<Mail size={16} strokeWidth={1.75} />}>
                Email enquiries
              </Button>
            </div>

            <TextLink href="/contact#contact-form" onDark>
              Or send a detailed enquiry form
            </TextLink>
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
    </Section>
  );
}
