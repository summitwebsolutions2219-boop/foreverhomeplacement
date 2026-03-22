/* ============================================================
   JOSESITO TOWING — Quote Request Modal
   Multi-step form: vehicle info + location + contact
   ============================================================ */

import { useState } from "react";
import { X, CheckCircle, Truck, MapPin, User, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

const services = [
  "Emergency Towing",
  "Flatbed Towing",
  "Long-Distance Towing",
  "Motorcycle Towing",
  "Roadside Assistance",
  "Jump Start",
  "Tire Change",
  "Lockout Service",
  "Fuel Delivery",
  "Winch Out / Recovery",
];

const steps = [
  { id: 1, label: "Vehicle", icon: Truck },
  { id: 2, label: "Location", icon: MapPin },
  { id: 3, label: "Contact", icon: User },
];

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    pickupAddress: "",
    dropoffAddress: "",
    notes: "",
    name: "",
    phone: "",
    email: "",
  });

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const canNext = () => {
    if (step === 1) return form.service && form.vehicleMake && form.vehicleModel;
    if (step === 2) return form.pickupAddress;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1);
    setSubmitted(false);
    setForm({
      service: "",
      vehicleYear: "",
      vehicleMake: "",
      vehicleModel: "",
      pickupAddress: "",
      dropoffAddress: "",
      notes: "",
      name: "",
      phone: "",
      email: "",
    });
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "oklch(1 0 0)" }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ backgroundColor: "oklch(0.12 0.04 240)" }}
        >
          <div>
            <h2
              className="text-white text-2xl"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              GET A FREE QUOTE
            </h2>
            <p className="text-white/60 text-sm mt-0.5" style={{ fontFamily: "'Lato', sans-serif" }}>
              We'll respond within minutes
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {!submitted && (
          <div
            className="flex items-center px-6 py-3 gap-0"
            style={{ backgroundColor: "oklch(0.18 0.04 240)" }}
          >
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = step === s.id;
              const isDone = step > s.id;
              return (
                <div key={s.id} className="flex items-center flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                      style={{
                        backgroundColor: isDone || isActive
                          ? "oklch(0.65 0.21 42)"
                          : "oklch(0.28 0.04 240)",
                        color: "white",
                      }}
                    >
                      {isDone ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-3.5 h-3.5" />}
                    </div>
                    <span
                      className="text-xs font-medium hidden sm:block"
                      style={{
                        color: isActive ? "white" : "oklch(0.6 0.02 240)",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 h-px mx-2"
                      style={{
                        backgroundColor: isDone
                          ? "oklch(0.65 0.21 42)"
                          : "oklch(0.28 0.04 240)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            <div className="text-center py-8 animate-fade-in-up">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "oklch(0.95 0.05 140)" }}
              >
                <CheckCircle className="w-8 h-8" style={{ color: "oklch(0.55 0.18 140)" }} />
              </div>
              <h3
                className="text-2xl mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  color: "oklch(0.18 0.04 240)",
                }}
              >
                QUOTE REQUEST SENT!
              </h3>
              <p
                className="text-gray-600 mb-6 text-sm leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Thank you, <strong>{form.name}</strong>! We've received your request and will call you at{" "}
                <strong>{form.phone}</strong> within minutes.
              </p>
              <p
                className="text-sm font-bold mb-6"
                style={{ color: "oklch(0.65 0.21 42)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
              >
                NEED IMMEDIATE HELP? CALL US NOW:
              </p>
              <a
                href="tel:+15555550100"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-bold text-lg"
                style={{
                  backgroundColor: "oklch(0.65 0.21 42)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                (555) 555-0100
              </a>
              <button
                onClick={reset}
                className="block mx-auto mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Vehicle */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Service Needed <span style={{ color: "oklch(0.65 0.21 42)" }}>*</span>
                    </Label>
                    <Select value={form.service} onValueChange={(v) => update("service", v)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Year
                      </Label>
                      <Input
                        placeholder="2020"
                        value={form.vehicleYear}
                        onChange={(e) => update("vehicleYear", e.target.value)}
                        maxLength={4}
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Make <span style={{ color: "oklch(0.65 0.21 42)" }}>*</span>
                      </Label>
                      <Input
                        placeholder="Toyota"
                        value={form.vehicleMake}
                        onChange={(e) => update("vehicleMake", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Model <span style={{ color: "oklch(0.65 0.21 42)" }}>*</span>
                      </Label>
                      <Input
                        placeholder="Camry"
                        value={form.vehicleModel}
                        onChange={(e) => update("vehicleModel", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Location */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Pickup Location <span style={{ color: "oklch(0.65 0.21 42)" }}>*</span>
                    </Label>
                    <Input
                      placeholder="Street address or intersection..."
                      value={form.pickupAddress}
                      onChange={(e) => update("pickupAddress", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Drop-off Location
                    </Label>
                    <Input
                      placeholder="Destination address (optional)"
                      value={form.dropoffAddress}
                      onChange={(e) => update("dropoffAddress", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Additional Notes
                    </Label>
                    <Textarea
                      placeholder="Describe your situation (e.g., flat tire on I-95, car won't start...)"
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      rows={3}
                      className="resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Your Name <span style={{ color: "oklch(0.65 0.21 42)" }}>*</span>
                    </Label>
                    <Input
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Phone Number <span style={{ color: "oklch(0.65 0.21 42)" }}>*</span>
                    </Label>
                    <Input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-1.5 block" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      placeholder="you@example.com (optional)"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t" style={{ borderColor: "oklch(0.92 0.005 240)" }}>
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={!canNext()}
                    className="flex items-center gap-2 text-white font-semibold px-6"
                    style={{
                      backgroundColor: canNext() ? "oklch(0.65 0.21 42)" : undefined,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      letterSpacing: "0.05em",
                      fontSize: "0.95rem",
                    }}
                  >
                    NEXT STEP
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!form.name || !form.phone}
                    className="flex items-center gap-2 text-white font-semibold px-6"
                    style={{
                      backgroundColor: form.name && form.phone ? "oklch(0.65 0.21 42)" : undefined,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      letterSpacing: "0.05em",
                      fontSize: "0.95rem",
                    }}
                  >
                    SUBMIT QUOTE REQUEST
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
