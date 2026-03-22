/* ============================================================
   FOREVER HOME PLACEMENT — Home Page
   Philosophy: Warm Humanist — Soft Comfort & Trust
   Sage Green + Warm Cream + Dusty Rose
   Merriweather (headings) + Open Sans (body, 18px+)
   Elder-friendly: large text, high contrast, generous spacing
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  CheckCircle,
  MapPin,
  Clock,
  Star,
  Users,
  Home as HomeIcon,
  Stethoscope,
  Brain,
  Building2,
  HandHeart,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  Mail,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ConsultModal from "@/components/ConsultModal";
import TreeIcon from "@/components/TreeIcon";

// ── Image CDN URLs ──────────────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663464629690/4HCQMmjg38bd8fHAUUBRN9/fhp-hero-azGt6U3nFmwztwvZ5wiUZQ.webp";
const CONSULT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663464629690/4HCQMmjg38bd8fHAUUBRN9/fhp-consultation-EjdCro9wkrZGqWSBJrrW7q.webp";
const COMMUNITY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663464629690/4HCQMmjg38bd8fHAUUBRN9/fhp-community-5baCZtUTc83khewhCe4FVN.webp";
const FAMILY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663464629690/4HCQMmjg38bd8fHAUUBRN9/fhp-family-gW5BpsYWqihAM4tQeuXPkB.webp";

// ── Services ────────────────────────────────────────────────
const services = [
  {
    icon: HomeIcon,
    title: "Independent Living",
    desc: "Active seniors who want a maintenance-free lifestyle with amenities, social activities, and community.",
  },
  {
    icon: HandHeart,
    title: "Assisted Living",
    desc: "Personalized daily support with meals, medication management, and 24-hour staff — in a home-like setting.",
  },
  {
    icon: Brain,
    title: "Memory Care",
    desc: "Specialized, secure environments designed for those living with Alzheimer's or other forms of dementia.",
  },
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    desc: "Short-term rehabilitation or long-term medical care provided by licensed nurses and therapists.",
  },
  {
    icon: Building2,
    title: "Residential Homes",
    desc: "Small, family-style group homes offering personalized care in a cozy, intimate neighborhood setting.",
  },
  {
    icon: Users,
    title: "In-Home Care",
    desc: "Compassionate caregivers who come to your loved one's home to assist with daily living activities.",
  },
];

// ── How We Help Steps ───────────────────────────────────────
const steps = [
  {
    num: "1",
    title: "Free Consultation",
    desc: "We start with a caring conversation — by phone or in person — to understand your loved one's needs, preferences, and budget.",
  },
  {
    num: "2",
    title: "Personalized Recommendations",
    desc: "We research and identify the best-matched communities and care options from our trusted network of partners.",
  },
  {
    num: "3",
    title: "Guided Tours",
    desc: "We personally accompany you on tours of selected communities, so you never feel alone in this process.",
  },
  {
    num: "4",
    title: "Ongoing Support",
    desc: "Even after placement, we remain a resource for your family — helping with future planning and any questions that arise.",
  },
];

// ── Testimonials ────────────────────────────────────────────
const testimonials = [
  {
    name: "Barbara T.",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "When my mother needed memory care, I didn't know where to start. Forever Home Placement guided us every step of the way. They found a beautiful home that felt just right for her. I can't thank them enough.",
  },
  {
    name: "Robert & Linda M.",
    location: "Mesa, AZ",
    rating: 5,
    text: "We were overwhelmed trying to find the right assisted living for my father-in-law. The team was so patient, kind, and knowledgeable. They made a stressful time much easier for our whole family.",
  },
  {
    name: "Carol S.",
    location: "Chandler, AZ",
    rating: 5,
    text: "I called them on a Friday afternoon in a panic after my mom's hospital discharge. By Monday, she was settled into a wonderful place. Their speed and compassion were incredible.",
  },
];

// ── useInView hook ──────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Main Component ──────────────────────────────────────────
export default function Home() {
  const [consultOpen, setConsultOpen] = useState(false);

  const heroRef = useInView(0.05);
  const servicesRef = useInView(0.08);
  const howRef = useInView(0.08);
  const aboutRef = useInView(0.08);
  const testimonialsRef = useInView(0.08);
  const contactRef = useInView(0.08);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "18px" }}
    >
      <Navbar onConsult={() => setConsultOpen(true)} />
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Caring advisor with elderly woman in a warm Arizona home"
            className="w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, oklch(0.96 0.02 155) 50%, oklch(0.96 0.02 155 / 0.6) 100%)",
            }}
          />
        </div>

        <div
          ref={heroRef.ref}
          className="container relative z-10 pt-28 pb-20"
        >
          <div className="max-w-3xl">
            {/* Location badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-7 transition-all duration-700 ${
                heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                backgroundColor: "oklch(0.55 0.08 155 / 0.12)",
                border: "1.5px solid oklch(0.55 0.08 155 / 0.4)",
                color: "oklch(0.42 0.09 155)",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              <MapPin className="w-4 h-4" />
              Serving Scottsdale &amp; the Greater Phoenix Area
            </div>

            {/* Headline */}
            <h1
              className={`mb-6 transition-all duration-700 delay-100 ${
                heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontFamily: "'Merriweather', serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 1.2,
                color: "oklch(0.22 0.01 240)",
              }}
            >
              Finding the Right Home
              <br />
              <span style={{ color: "oklch(0.42 0.09 155)" }}>
                for Your Loved One
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontSize: "1.2rem",
                color: "oklch(0.35 0.01 240)",
                maxWidth: "600px",
                lineHeight: 1.8,
              }}
            >
              As trusted Eldercare Advisors, we help families navigate senior living
              options with compassion, knowledge, and a personal touch.
              Our guidance is always <strong>free of charge</strong> to families.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-300 ${
                heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => setConsultOpen(true)}
                className="btn-primary"
                style={{ fontSize: "1.1rem" }}
              >
                <TreeIcon className="w-5 h-5" color="white" />
                Get a Free Consultation
              </button>
              <a
                href="tel:+14809399731"
                className="btn-secondary"
                style={{ fontSize: "1.1rem" }}
              >
                <Phone className="w-5 h-5" />
                Call (480) 939-9731
              </a>
            </div>

            {/* Trust badges */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-700 delay-400 ${
                heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                "Free to Families",
                "No Obligation",
                "Always Available",
                "Locally Trusted",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2"
                  style={{ color: "oklch(0.42 0.09 155)", fontSize: "0.95rem", fontWeight: 600 }}
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
          style={{ color: "oklch(0.55 0.08 155 / 0.5)" }}
        >
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ── INTRO BANNER ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "oklch(0.55 0.08 155)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {[
              { treeIcon: true, label: "Our Service is Always Free", sub: "No cost to families, ever" },
              { icon: Clock, label: "Available 7 Days a Week", sub: "We're here when you need us" },
              { icon: ShieldCheck, label: "Trusted Local Advisors", sub: "Serving the Phoenix area" },
            ].map((item) => {
              const Icon = (item as any).icon;
              const isTree = (item as any).treeIcon;
              return (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                    style={{ backgroundColor: "white/20", background: "rgba(255,255,255,0.2)" }}
                  >
                    {isTree ? (
                      <TreeIcon className="w-6 h-6" color="white" />
                    ) : (
                      <Icon className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Merriweather', serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.9rem", opacity: 0.85 }}>{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" style={{ backgroundColor: "white" }} className="py-20">
        <div ref={servicesRef.ref} className="container">
          <div
            className={`mb-14 transition-all duration-700 ${
              servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="section-heading"
              style={{
                fontFamily: "'Merriweather', serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "oklch(0.22 0.01 240)",
              }}
            >
              Senior Living Options We Help With
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "oklch(0.40 0.01 80)",
                maxWidth: "620px",
                lineHeight: 1.8,
              }}
            >
              Every person is unique. We take the time to understand your loved one's
              needs and match them with the right type of care and community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className={`warm-card p-7 transition-all duration-600 ${
                    servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "oklch(0.55 0.08 155)" }} />
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Merriweather', serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "oklch(0.22 0.01 240)",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "oklch(0.42 0.01 80)",
                      lineHeight: 1.75,
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 delay-500 ${
              servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={() => setConsultOpen(true)}
              className="btn-primary"
              style={{ fontSize: "1.1rem" }}
            >
              <CalendarCheck className="w-5 h-5" />
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ──────────────────────────────────────── */}
      <section
        id="how-we-help"
        className="py-20"
        style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
      >
        <div ref={howRef.ref} className="container">
          <div
            className={`mb-14 transition-all duration-700 ${
              howRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="section-heading"
              style={{
                fontFamily: "'Merriweather', serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "oklch(0.22 0.01 240)",
              }}
            >
              How We Help Your Family
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "oklch(0.40 0.01 80)",
                maxWidth: "600px",
                lineHeight: 1.8,
              }}
            >
              We walk alongside you through every step — from the first conversation
              to moving day and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-5 transition-all duration-600 ${
                  howRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl"
                  style={{
                    backgroundColor: "oklch(0.55 0.08 155)",
                    fontFamily: "'Merriweather', serif",
                    fontSize: "1.3rem",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Merriweather', serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "oklch(0.22 0.01 240)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "oklch(0.40 0.01 80)",
                      lineHeight: 1.8,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image + callout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div
              className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ${
                howRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <img
                src={CONSULT_IMG}
                alt="Eldercare advisor meeting with an elderly couple"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <div
              className={`transition-all duration-700 delay-200 ${
                howRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "white", border: "1px solid oklch(0.88 0.04 155)" }}
              >
                <div
                  className="text-5xl mb-4"
                  style={{ color: "oklch(0.55 0.08 155)", fontFamily: "'Merriweather', serif" }}
                >
                  "
                </div>
                <p
                  className="mb-6 leading-relaxed italic"
                  style={{
                    fontSize: "1.1rem",
                    color: "oklch(0.30 0.01 240)",
                    fontFamily: "'Merriweather', serif",
                    fontWeight: 400,
                  }}
                >
                  Don't wait until an untimely fall or a hospital visit before you start
                  exploring senior living options. Having a plan in place takes the stress
                  off you and your family — it's always easier to plan ahead.
                </p>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 700,
                    color: "oklch(0.42 0.09 155)",
                    fontSize: "1rem",
                  }}
                >
                  — Forever Home Placement Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="py-20" style={{ backgroundColor: "white" }}>
        <div ref={aboutRef.ref} className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div
              className={`transition-all duration-700 ${
                aboutRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2
                className="section-heading"
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  color: "oklch(0.22 0.01 240)",
                }}
              >
                About Forever Home Placement
              </h2>
              <p
                className="mb-5 leading-relaxed"
                style={{ fontSize: "1rem", color: "oklch(0.35 0.01 240)", lineHeight: 1.85 }}
              >
                We are trusted Eldercare Advisors based in the Scottsdale, Arizona area.
                Our mission is simple: help families find the right care and community for
                their loved ones — with compassion, honesty, and no pressure.
              </p>
              <p
                className="mb-5 leading-relaxed"
                style={{ fontSize: "1rem", color: "oklch(0.35 0.01 240)", lineHeight: 1.85 }}
              >
                We understand that this is one of the most important decisions a family
                can make. That's why we take the time to listen, learn, and guide — not
                just hand you a list of options.
              </p>
              <p
                className="mb-8 leading-relaxed"
                style={{ fontSize: "1rem", color: "oklch(0.35 0.01 240)", lineHeight: 1.85 }}
              >
                Our service is <strong>completely free to families</strong>. We are
                compensated by our network of trusted community partners, so there is
                never any cost or obligation to you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Free to Families",
                  "No Obligation, Ever",
                  "Trusted Partner Network",
                  "Immediate & Future Planning",
                  "Personalized Guidance",
                  "Serving Phoenix Metro Area",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                    style={{ fontSize: "0.95rem", color: "oklch(0.30 0.01 240)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "oklch(0.55 0.08 155)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setConsultOpen(true)}
                className="btn-primary"
                style={{ fontSize: "1.05rem" }}
              >
                <Phone className="w-5 h-5" />
                Talk to an Advisor Today
              </button>
            </div>

            {/* Images */}
            <div
              className={`transition-all duration-700 delay-200 ${
                aboutRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="grid grid-cols-1 gap-5">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={FAMILY_IMG}
                    alt="Happy family with elderly grandmother in Arizona garden"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={COMMUNITY_IMG}
                    alt="Beautiful assisted living community in Scottsdale Arizona"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "240px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-20"
        style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
      >
        <div ref={testimonialsRef.ref} className="container">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              testimonialsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="section-heading section-heading-center inline-block"
              style={{
                fontFamily: "'Merriweather', serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "oklch(0.22 0.01 240)",
              }}
            >
              What Families Are Saying
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: "1.05rem",
                color: "oklch(0.40 0.01 80)",
                maxWidth: "560px",
                margin: "1rem auto 0",
                lineHeight: 1.8,
              }}
            >
              Real families, real stories. We're honored to have helped so many
              loved ones find their forever home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`warm-card p-7 transition-all duration-600 ${
                  testimonialsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-current"
                      style={{ color: "oklch(0.65 0.09 15)" }}
                    />
                  ))}
                </div>

                <p
                  className="mb-6 italic leading-relaxed"
                  style={{
                    fontSize: "0.95rem",
                    color: "oklch(0.30 0.01 240)",
                    fontFamily: "'Merriweather', serif",
                    fontWeight: 400,
                    lineHeight: 1.85,
                  }}
                >
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.55 0.08 155)",
                      fontFamily: "'Merriweather', serif",
                      fontSize: "1rem",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "oklch(0.22 0.01 240)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="flex items-center gap-1"
                      style={{ fontSize: "0.8rem", color: "oklch(0.55 0.01 80)" }}
                    >
                      <MapPin className="w-3 h-3" />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ backgroundColor: "white" }}>
        <div ref={contactRef.ref} className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: Info */}
            <div
              className={`transition-all duration-700 ${
                contactRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2
                className="section-heading"
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  color: "oklch(0.22 0.01 240)",
                }}
              >
                Get in Touch
              </h2>
              <p
                className="mb-8 leading-relaxed"
                style={{ fontSize: "1.05rem", color: "oklch(0.35 0.01 240)", lineHeight: 1.85 }}
              >
                We're here to help — whether you have a question, need immediate guidance,
                or just want to talk through your options. Reach out anytime.
              </p>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href="tel:+14809399731"
                  className="flex items-center gap-5 p-5 rounded-2xl border group transition-all hover:shadow-md"
                  style={{
                    borderColor: "oklch(0.88 0.04 155)",
                    backgroundColor: "oklch(0.98 0.015 80)",
                    textDecoration: "none",
                  }}
                  aria-label="Call us at (480) 939-9731"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
                  >
                    <Phone className="w-7 h-7" style={{ color: "oklch(0.55 0.08 155)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "oklch(0.55 0.01 80)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      Call Us
                    </div>
                    <div
                      style={{
                        fontFamily: "'Merriweather', serif",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        color: "oklch(0.42 0.09 155)",
                      }}
                    >
                      (480) 939-9731
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "oklch(0.50 0.01 80)" }}>
                      Available 7 days a week
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:Foreverhomeplacement@gmail.com"
                  className="flex items-center gap-5 p-5 rounded-2xl border transition-all hover:shadow-md"
                  style={{
                    borderColor: "oklch(0.88 0.04 155)",
                    backgroundColor: "oklch(0.98 0.015 80)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
                  >
                    <Mail className="w-7 h-7" style={{ color: "oklch(0.55 0.08 155)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "oklch(0.55 0.01 80)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      Email Us
                    </div>
                    <div
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "oklch(0.42 0.09 155)",
                        wordBreak: "break-all",
                      }}
                    >
                      Foreverhomeplacement@gmail.com
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "oklch(0.50 0.01 80)" }}>
                      We respond promptly
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div
                  className="flex items-center gap-5 p-5 rounded-2xl border"
                  style={{
                    borderColor: "oklch(0.88 0.04 155)",
                    backgroundColor: "oklch(0.98 0.015 80)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.96 0.02 155)" }}
                  >
                    <MapPin className="w-7 h-7" style={{ color: "oklch(0.55 0.08 155)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "oklch(0.55 0.01 80)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      Service Area
                    </div>
                    <div
                      style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "oklch(0.22 0.01 240)",
                      }}
                    >
                      Scottsdale, AZ &amp; Greater Phoenix
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "oklch(0.50 0.01 80)" }}>
                      Mesa, Chandler, Tempe, Gilbert &amp; surrounding areas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Contact Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                contactRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: "oklch(0.96 0.02 155)",
                  border: "1px solid oklch(0.88 0.04 155)",
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "oklch(0.22 0.01 240)",
                  }}
                >
                  Send Us a Message
                </h3>
                <p
                  className="mb-6"
                  style={{ fontSize: "0.95rem", color: "oklch(0.40 0.01 80)", lineHeight: 1.7 }}
                >
                  Fill in your details and we'll get back to you as soon as possible.
                </p>
                <QuickContactForm onFullConsult={() => setConsultOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "oklch(0.42 0.09 155)" }} className="py-16">
        <div className="container text-center">
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Merriweather', serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            }}
          >
            Ready to Find the Right Home for Your Loved One?
          </h2>
          <p
            className="text-white/80 mb-8 mx-auto"
            style={{ fontSize: "1.05rem", maxWidth: "560px", lineHeight: 1.8 }}
          >
            Our caring advisors are ready to help — at no cost to you. Call us today
            or request a free consultation online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setConsultOpen(true)}
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: "white",
                color: "oklch(0.42 0.09 155)",
                fontFamily: "'Open Sans', sans-serif",
                minHeight: "56px",
              }}
            >
              <TreeIcon className="w-5 h-5" color="oklch(0.42 0.09 155)" />
              Free Consultation
            </button>
            <a
              href="tel:+14809399731"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-lg border-2 border-white text-white transition-all hover:bg-white/10"
              style={{ fontFamily: "'Open Sans', sans-serif", minHeight: "56px" }}
            >
              <Phone className="w-5 h-5" />
              (480) 939-9731
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "oklch(0.22 0.01 240)" }}>
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "oklch(0.55 0.08 155)" }}
                  >
                    <TreeIcon className="w-5 h-5" color="white" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Merriweather', serif",
                      fontWeight: 900,
                      fontSize: "1rem",
                      color: "white",
                    }}
                  >
                    Forever Home Placement
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "oklch(0.65 0.01 80)", lineHeight: 1.75 }}>
                Trusted Eldercare Advisors helping families in Scottsdale and the
                Greater Phoenix area find the right senior living options.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div
                className="mb-4 font-bold"
                style={{ color: "white", fontFamily: "'Open Sans', sans-serif", fontSize: "1rem" }}
              >
                Quick Links
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Our Services", id: "services" },
                  { label: "How We Help", id: "how-we-help" },
                  { label: "About Us", id: "about" },
                  { label: "Contact", id: "contact" },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() =>
                      document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-left transition-colors hover:text-white"
                    style={{
                      color: "oklch(0.65 0.01 80)",
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.95rem",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div
                className="mb-4 font-bold"
                style={{ color: "white", fontFamily: "'Open Sans', sans-serif", fontSize: "1rem" }}
              >
                Contact Us
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+14809399731"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  style={{ color: "oklch(0.65 0.01 80)", fontSize: "0.95rem" }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.08 155)" }} />
                  (480) 939-9731
                </a>
                <a
                  href="mailto:Foreverhomeplacement@gmail.com"
                  className="flex items-start gap-2 transition-colors hover:text-white"
                  style={{ color: "oklch(0.65 0.01 80)", fontSize: "0.95rem", wordBreak: "break-all" }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.08 155)" }} />
                  Foreverhomeplacement@gmail.com
                </a>
                <div
                  className="flex items-start gap-2"
                  style={{ color: "oklch(0.65 0.01 80)", fontSize: "0.95rem" }}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.08 155)" }} />
                  Scottsdale, AZ &amp; Greater Phoenix Area
                </div>
              </div>
            </div>
          </div>

          <div
            className="pt-6 border-t text-center"
            style={{
              borderColor: "oklch(0.32 0.01 240)",
              color: "oklch(0.50 0.01 80)",
              fontSize: "0.85rem",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            © {new Date().getFullYear()} Forever Home Placement. All rights reserved.
            Serving Scottsdale, AZ and the Greater Phoenix Metro Area.
          </div>
        </div>
      </footer>

      {/* Floating CTA for mobile */}
      <div className="fixed bottom-5 right-5 z-40 lg:hidden">
        <button
          onClick={() => setConsultOpen(true)}
          className="btn-primary shadow-2xl"
          style={{ fontSize: "0.95rem", padding: "0.75rem 1.25rem" }}
          aria-label="Get a free consultation"
        >
       <TreeIcon className="w-5 h-5" color="white" />
              Free Consult        </button>
      </div>
    </div>
  );
}

// ── Quick Contact Form ──────────────────────────────────────
function QuickContactForm({ onFullConsult }: { onFullConsult: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    borderRadius: "0.6rem",
    border: "2px solid oklch(0.88 0.02 80)",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "1rem",
    color: "oklch(0.22 0.01 240)",
    backgroundColor: "white",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "oklch(0.30 0.01 240)",
    marginBottom: "0.4rem",
  };

  if (sent) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="w-12 h-12 mx-auto mb-3" style={{ color: "oklch(0.55 0.08 155)" }} />
        <h4
          className="mb-2"
          style={{ fontFamily: "'Merriweather', serif", fontWeight: 700, fontSize: "1.2rem", color: "oklch(0.22 0.01 240)" }}
        >
          Message Sent!
        </h4>
        <p style={{ fontSize: "0.95rem", color: "oklch(0.40 0.01 80)", lineHeight: 1.7 }}>
          Thank you, <strong>{form.name}</strong>. We'll be in touch at{" "}
          <strong>{form.phone}</strong> very soon.
        </p>
        <a
          href="tel:+14809399731"
          className="btn-primary inline-flex mt-5"
          style={{ fontSize: "1rem" }}
        >
          <Phone className="w-4 h-4" />
          Call Now: (480) 939-9731
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!form.name || !form.phone) return;
        setSent(true);
      }}
      className="space-y-4"
    >
      <div>
        <label style={labelStyle} htmlFor="quick-name">Your Name *</label>
        <input
          id="quick-name"
          style={inputStyle}
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          required
        />
      </div>
      <div>
        <label style={labelStyle} htmlFor="quick-phone">Phone Number *</label>
        <input
          id="quick-phone"
          style={inputStyle}
          type="tel"
          placeholder="(480) 000-0000"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          required
        />
      </div>
      <div>
        <label style={labelStyle} htmlFor="quick-message">How Can We Help?</label>
        <textarea
          id="quick-message"
          style={{ ...inputStyle, resize: "vertical", minHeight: "90px" }}
          placeholder="Tell us a little about what you're looking for..."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full"
        style={{ fontSize: "1.05rem" }}
        disabled={!form.name || !form.phone}
      >
        <ArrowRight className="w-5 h-5" />
        Send Message
      </button>
      <button
        type="button"
        onClick={onFullConsult}
        className="w-full text-center text-sm transition-colors hover:underline"
        style={{ color: "oklch(0.55 0.08 155)", fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
      >
        Or use our full consultation form →
      </button>
    </form>
  );
}
