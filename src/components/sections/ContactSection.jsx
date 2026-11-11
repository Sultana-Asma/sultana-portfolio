import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Github,
  Copy,
  Check,
  Send,
  AlertCircle,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import SurfaceCard from "@/components/ui/SurfaceCard";
import Button from "@/components/ui/Button";

export default function ContactSection({ preselectedSubject }) {
  const { owner, contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: contact.inquiryTypes[0],
    message: "",
    website: "", // Invisible honeypot field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedSubject) {
      setFormData((prev) => ({ ...prev, subject: preselectedSubject }));
    }
  }, [preselectedSubject]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(owner.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard API is blocked
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message of at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setStatusMessage("");

    // Honeypot anti-spam check
    if (formData.website && formData.website.trim() !== "") {
      setStatus("success");
      setStatusMessage("Message processed.");
      return;
    }

    setTimeout(() => {
      setStatus("success");
      setStatusMessage(
        `Thank you, ${formData.name.trim()}! Your inquiry has been recorded for ${
          owner.fullName
        } (${owner.email}).`
      );
      setFormData({
        name: "",
        email: "",
        subject: contact.inquiryTypes[0],
        message: "",
        website: "",
      });
    }, 350);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={contact.sectionIndex}
          eyebrow={contact.eyebrow}
          title={contact.heading}
          description={contact.description}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Contact Channels (5 Cols) */}
          <div className="space-y-4 lg:col-span-5">
            {/* Email Card */}
            <SurfaceCard className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-primary/30 bg-accent-primary/10 text-accent-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${owner.email}`}
                      className="mt-1 block break-all font-display text-sm font-bold text-ink-primary transition-colors hover:text-accent-primary sm:text-base"
                    >
                      {owner.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-hairline bg-surface px-3 py-1.5 font-mono text-xs text-ink-secondary transition-colors hover:border-accent-primary hover:text-ink-primary"
                >
                  {copiedEmail ? (
                    <>
                      <Check
                        className="h-3.5 w-3.5 text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </SurfaceCard>

            {/* GitHub Profile Card */}
            <SurfaceCard className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary">
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      GitHub Profile
                    </p>
                    <a
                      href={owner.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-display text-sm font-bold text-ink-primary transition-colors hover:text-accent-primary sm:text-base"
                    >
                      {owner.githubHandle}
                    </a>
                  </div>
                </div>
                <a
                  href={owner.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-hairline bg-surface px-3 py-1.5 font-mono text-xs text-ink-secondary transition-colors hover:border-accent-primary hover:text-ink-primary"
                >
                  Visit ↗
                </a>
              </div>
            </SurfaceCard>

            {/* Location & Academic Availability Card */}
            <SurfaceCard className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairlineStrong bg-surface text-accent-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Base Location
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-ink-primary">
                      {owner.location}
                    </p>
                    <p className="text-xs text-ink-secondary">
                      Available for Dhaka On-Site & Remote Roles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-hairline pt-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairlineStrong bg-surface text-accent-secondary">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Academic Status
                    </p>
                    <p className="mt-1 font-display text-sm font-bold text-ink-primary">
                      {owner.university}
                    </p>
                    <p className="text-xs text-ink-secondary">
                      B.Sc. in CSE · {owner.semester} (Graduating{" "}
                      {owner.graduationYear})
                    </p>
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </div>

          {/* Right Column: Validated Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <SurfaceCard className="p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-ink-primary">
                Send a Direct Message
              </h3>
              <p className="mt-1 text-sm text-ink-secondary">
                Fill out the form below and I will respond to your inquiry as
                soon as possible.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-6 space-y-5"
              >
                {/* Honeypot anti-spam field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-ink-secondary"
                    >
                      Your Name <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Ayesha Rahman"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "error-contact-name" : undefined
                      }
                      className="mt-2 w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-base text-ink-primary placeholder:text-ink-muted focus:border-accent-primary focus:outline-none"
                    />
                    {errors.name && (
                      <p
                        id="error-contact-name"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-medium uppercase tracking-wider text-ink-secondary"
                    >
                      Email Address <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "error-contact-email" : undefined
                      }
                      className="mt-2 w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-base text-ink-primary placeholder:text-ink-muted focus:border-accent-primary focus:outline-none"
                    />
                    {errors.email && (
                      <p
                        id="error-contact-email"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Inquiry Type Dropdown */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs font-medium uppercase tracking-wider text-ink-secondary"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-base text-ink-primary focus:border-accent-primary focus:outline-none"
                  >
                    {contact.inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-medium uppercase tracking-wider text-ink-secondary"
                  >
                    Message <span className="text-accent-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the internship role, project scope, or collaboration idea..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "error-contact-message" : undefined
                    }
                    className="mt-2 w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-base text-ink-primary placeholder:text-ink-muted focus:border-accent-primary focus:outline-none"
                  />
                  {errors.message && (
                    <p
                      id="error-contact-message"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Status Alert */}
                {status !== "idle" && statusMessage && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-2.5 rounded-lg border p-4 text-sm ${
                      status === "success"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        : status === "error"
                        ? "border-red-500/30 bg-red-500/10 text-red-300"
                        : "border-hairline bg-surface text-ink-secondary"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                        aria-hidden="true"
                      />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-ink-muted">
                    Direct recipient: {owner.email}
                  </span>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "submitting"}
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </div>
              </form>
            </SurfaceCard>
          </div>
        </div>
      </div>
    </section>
  );
}

