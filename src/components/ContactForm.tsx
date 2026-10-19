"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";

const supportEmail = "polyind2@gmail.com";
const supportPhone = "+91 98202 35995";
const whatsappNumber = "919820235995";

const divisions = [
  "Industrial water treatment",
  "Construction & surface protection",
  "V-Klin institutional & home care",
  "Product documents (TDS / SDS)",
  "Something else",
];

type FieldName = "name" | "company" | "email" | "phone" | "division" | "message";
type FieldValues = Record<FieldName, string>;

const emptyValues: FieldValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  division: divisions[0],
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function enquiryText(values: FieldValues) {
  const details = [
    ["Name", values.name],
    ["Company", values.company],
    ["Email", values.email],
    ["Phone", values.phone],
    ["Enquiry type", values.division],
  ]
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value}`);

  return [...details, "", values.message].join("\n");
}

function validate(values: FieldValues) {
  const found: Partial<Record<FieldName, string>> = {};

  if (values.name.trim().length < 2) found.name = "Please enter your name.";
  if (!emailPattern.test(values.email.trim())) found.email = "Please enter a valid email address.";
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 10) {
    found.phone = "Please enter a phone number with at least 10 digits.";
  }
  if (values.message.trim().length < 15) {
    found.message = "Please add a few lines about your system, surface, or requirement.";
  }

  return found;
}

export default function ContactForm() {
  const [values, setValues] = useState<FieldValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [drafted, setDrafted] = useState(false);
  function handleChange(field: FieldName) {
    return (
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value;

      setValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
      setDrafted(false);
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = `${values.division} enquiry - ${values.name}`;
    const body = enquiryText(values);

    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setDrafted(true);
  }

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    enquiryText(values),
  )}`;

  return (
    <form className="contact-form-panel contact-redesign-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-head">
        <span className="eyebrow eyebrow-dark">Your details</span>
        <h3>Share a few details</h3>
        <p>We’ll prepare an email draft for you to review before sending.</p>
      </div>

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            required
          />
          {errors.name && (
            <p className="contact-field-error" id="contact-name-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact-field">
          <label htmlFor="contact-company">
            Company <span>(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange("company")}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            required
          />
          {errors.email && (
            <p className="contact-field-error" id="contact-email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="contact-field">
          <label htmlFor="contact-phone">
            Phone <span>(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone && (
            <p className="contact-field-error" id="contact-phone-error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="contact-field contact-field-full">
          <label htmlFor="contact-division">What is your enquiry about?</label>
          <select
            id="contact-division"
            name="division"
            value={values.division}
            onChange={handleChange("division")}
          >
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-field contact-field-full">
          <label htmlFor="contact-message">Requirement details</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange("message")}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            placeholder="Example: Cooling-water system; request for current product documents."
            required
          />
          {errors.message && (
            <p className="contact-field-error" id="contact-message-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="contact-form-foot">
        <div className="contact-form-actions">
          <button className="btn btn-primary" type="submit">
            <span>Open email draft</span>
            <Send size={16} aria-hidden="true" />
          </button>
          <a className="contact-form-alt" href={whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={16} aria-hidden="true" /> or send it on WhatsApp
          </a>
        </div>

        {drafted && (
          <p className="contact-form-status" role="status">
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>
              Your email app should open with this enquiry addressed to {supportEmail}. Nothing is
              sent until you choose to send it. If no email app opens, use WhatsApp or call {supportPhone}.
            </span>
          </p>
        )}

        <p className="contact-form-note">
          This page does not store or submit your details. Optional fields are left out of the
          prepared message when empty.
        </p>
      </div>
    </form>
  );
}
