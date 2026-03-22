/* ============================================================
   FOREVER HOME PLACEMENT — Free Consultation Modal
   Elder-friendly: large inputs, clear labels, simple form
   ============================================================ */

import { useState } from "react";
import { X, CheckCircle, TreeDeciduous, Phone } from "lucide-react";

interface ConsultModalProps {
  open: boolean;
  onClose: () => void;
}

const situations = [
  "Looking for immediate placement",
  "Planning ahead for the future",
  "Need in-home care resources",
  "Exploring all options",
  "Not sure yet — need guidance",
];

const careTypes = [
  "Independent Living",
  "Assisted Living",
  "Memory Care",
  "Skilled Nursing / Rehab",
  "In-Home Care",
  "Not sure — need help deciding",
];

export default function ConsultModal({ open, onClose }: ConsultModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    situation: "",
    careType: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", email: "", situation: "", careType: "", message: "" });
    onClose();
  };

  if (!open) return null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    borderRadius: "0.6rem",
    border: "2px solid oklch(0.88 0.02 80)",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "1rem",
    color: "oklch(0.22 0.01 240)",
    backgroundColor: "oklch(0.99 0.01 80)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "oklch(0.30 0.01 240)",
    marginBottom: "0.4rem",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "white", maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div
          className="px-7 py-6 flex items-start justify-between"
          style={{ backgroundColor: "oklch(0.55 0.08 155)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <TreeDeciduous className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2
                className="text-white"
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  lineHeight: 1.2,
                }}
              >
                Free Consultation
              </h2>
              <p className="text-white/80 text-sm mt-0.5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                We'll call you back within the hour
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1 mt-1"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {submitted ? (
            <div className="text-center py-8">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
              >
                <CheckCircle className="w-10 h-10" style={{ color: "oklch(0.55 0.08 155)" }} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "oklch(0.42 0.09 155)",
                }}
              >
                Thank You, {form.name}!
              </h3>
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.40 0.01 80)",
                  maxWidth: "380px",
                  margin: "0 auto 1.5rem",
                }}
              >
                We've received your request and will call you at{" "}
                <strong style={{ color: "oklch(0.22 0.01 240)" }}>{form.phone}</strong>{" "}
                very soon. We look forward to helping your family.
              </p>
              <p
                className="font-bold mb-4"
                style={{ color: "oklch(0.42 0.09 155)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Need to speak with us right now?
              </p>
              <a
                href="tel:+14809399731"
                className="btn-primary inline-flex"
                style={{ fontSize: "1.1rem" }}
              >
                <Phone className="w-5 h-5" />
                Call (480) 939-9731
              </a>
              <button
                onClick={reset}
                className="block mx-auto mt-5 text-sm"
                style={{ color: "oklch(0.55 0.01 80)", fontFamily: "'Open Sans', sans-serif" }}
              >
                Close this window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  color: "oklch(0.40 0.01 80)",
                }}
              >
                Please fill in a few details below and one of our caring advisors will
                reach out to you personally — at no cost, no obligation.
              </p>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label style={labelStyle} htmlFor="consult-name">
                    Your Name <span style={{ color: "oklch(0.58 0.09 15)" }}>*</span>
                  </label>
                  <input
                    id="consult-name"
                    style={inputStyle}
                    placeholder="e.g. Mary Johnson"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle} htmlFor="consult-phone">
                    Best Phone Number <span style={{ color: "oklch(0.58 0.09 15)" }}>*</span>
                  </label>
                  <input
                    id="consult-phone"
                    style={inputStyle}
                    type="tel"
                    placeholder="(480) 000-0000"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    required
                    autoComplete="tel"
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle} htmlFor="consult-email">
                    Email Address <span style={{ color: "oklch(0.65 0.01 80)", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <input
                    id="consult-email"
                    style={inputStyle}
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    autoComplete="email"
                  />
                </div>

                {/* Situation */}
                <div>
                  <label style={labelStyle} htmlFor="consult-situation">
                    What best describes your situation?
                  </label>
                  <select
                    id="consult-situation"
                    style={{ ...inputStyle, appearance: "auto" }}
                    value={form.situation}
                    onChange={(e) => update("situation", e.target.value)}
                  >
                    <option value="">— Please select —</option>
                    {situations.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Care Type */}
                <div>
                  <label style={labelStyle} htmlFor="consult-care">
                    Type of care you're looking for
                  </label>
                  <select
                    id="consult-care"
                    style={{ ...inputStyle, appearance: "auto" }}
                    value={form.careType}
                    onChange={(e) => update("careType", e.target.value)}
                  >
                    <option value="">— Please select —</option>
                    {careTypes.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle} htmlFor="consult-message">
                    Anything else you'd like us to know?
                  </label>
                  <textarea
                    id="consult-message"
                    style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                    placeholder="Tell us a little about your loved one and what you're looking for..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <button
                  type="submit"
                  className="btn-primary w-full"
                  style={{ fontSize: "1.1rem" }}
                  disabled={!form.name || !form.phone}
                >
                  <TreeDeciduous className="w-5 h-5 text-white" />
                  Request My Free Consultation
                </button>
                <p
                  className="text-center text-sm"
                  style={{ color: "oklch(0.55 0.01 80)", fontFamily: "'Open Sans', sans-serif" }}
                >
                  100% free, no obligation. We respect your privacy.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
