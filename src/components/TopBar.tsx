import { Factory, Mail, PhoneCall, ShieldCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-certification">
            <ShieldCheck size={14} aria-hidden="true" /> ISO 9001:2015 Certified
          </span>
          <span className="topbar-units">
            <Factory size={14} aria-hidden="true" />
            <span className="topbar-unit-label">
              Manufacturing Units: Tarapur MIDC &amp; Goregaon (Mumbai)
            </span>
          </span>
        </div>

        <nav className="topbar-right" aria-label="Direct contact desk">
          <a href="mailto:polyind2@gmail.com">
            <Mail size={14} aria-hidden="true" /> polyind2@gmail.com
          </a>
          <span className="topbar-divider" aria-hidden="true">|</span>
          <a href="tel:+919820235995" aria-label="Call emergency chemist support at +91 9820235995">
            <PhoneCall size={14} aria-hidden="true" />
            Emergency Chemist Support <strong>+91 9820235995</strong>
          </a>
        </nav>
      </div>
    </div>
  );
}
