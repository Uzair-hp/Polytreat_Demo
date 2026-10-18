export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-units">
            <span className="topbar-label">Manufacturing</span>
            <span>
              Tarapur MIDC <span className="topbar-separator" aria-hidden="true">·</span> Goregaon, Mumbai
            </span>
          </span>
        </div>

        <nav className="topbar-right" aria-label="Direct contact desk">
          <a className="topbar-contact-link" href="mailto:polyind2@gmail.com">
            <span className="topbar-label">Email</span>
            <span>polyind2@gmail.com</span>
          </a>
          <a
            className="topbar-contact-link"
            href="tel:+919820235995"
            aria-label="Call PolyTreat at +91 98202 35995"
          >
            <span className="topbar-label">Technical &amp; sales</span>
            <strong>+91 98202 35995</strong>
          </a>
        </nav>
      </div>
    </div>
  );
}
