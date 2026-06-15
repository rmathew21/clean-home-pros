"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Star,
  CheckCircle2,
  Sparkles,
  Home,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { ImageWithFallback } from "./ImageWithFallback";
import heroImg from "@/app/assets/vitaly-gariev-2NcTLdFHpH8-unsplash.jpg";

const faqs = [
  {
    q: "How do I get started with Clean Home Pros?",
    a: "Simply fill out our contact form or give us a call or text. We'll schedule a quick consultation, provide a free quote, and book your first cleaning at a time that works for you.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all! Many of your clients provide a key or access code. Our team is fully vetted, insured, and bonded, so you can trust us in your home.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We use professional-grade, eco-friendly cleaning solutions that are safe for your family and pets. Just let us know if you have any specific preferences or sensitivites.",
  },
  {
    q: "Are your cleaners insured and background-checked?",
    a: "Absolutely. All Clean Home Pros team members undergo thorough background checks and we carry full liability insurance and workers' compensation coverage.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "Your satisaction is our priority. If you're not happy with any aspect of our service, contact us within 24 hours and we'll return to re-clean the area at no extra charge.",
  },
];

const reviews = [
  {
    name: "Addie Nisman",
    rating: 5,
    date: "7 months ago",
    text: "Lluvia and her team are truly the best of the best! They have been with us for several years, and we’re so grateful for their consistency and care. They’re always punctual, never miss a visit, and clean our home with incredible attention to detail. We also appreciate that we have the same crew each time. They are all so kind, respectful, and dependable. Communication with Lluvia is excellent, and she always goes above and beyond to accommodate any requests. Highly HIGHLY recommend!",
    initials: "AN",
  },
  {
    name: "Christine B",
    rating: 5,
    date: "7 months ago",
    text: "Excellent Service! Lluvia and her team are punctual, professional, and thorough. The team is very friendly and easy to communicate with. Scheduling is easy and very flexible. Highly recommend to anyone looking for a reliable cleaning service!",
    initials: "CB",
  },
  {
    name: "Laura Castronovo",
    rating: 5,
    date: "8 months ago",
    text: "Lluvia and her team are the best! They have been cleaning our home for 4 years and they always leave the house sparkling! They are always courteous and efficient. I highly recommend.",
    initials: "LC",
  },
  {
    name: "Sandy Bolonesi",
    rating: 5,
    date: "7 months ago",
    text: "I cannot say enough great things about this team. They are efficient, kind, and incredibly professional every single time. Their attention to detail is unmatched, and they always leave my home feeling fresh and cared for. As a busy mom with small kids, they have truly become my helping hand and peace of mind. They are dependable, respectful, and understanding of what our household needs. I appreciate their hard work and positive attitude more than words can say. They have made such a difference in our daily life, and I am so grateful for them. Highly recommend. 💛",
    initials: "SB",
  },
  {
    name: "Anne Tondre",
    rating: 5,
    date: "6 months ago",
    text: "Lluvia and her team have been cleaning my home for 7 years and really are pros! They are conscientious and timely and always do a great job. I highly recommend them!!",
    initials: "AT",
  },
  {
    name: "MIA Williams",
    rating: 5,
    date: "7 months ago",
    text: "They do a very great job and Im impressed with the quality of cleaning. Very reasonably priced as well. They're always on time and complete the cleaning service in a timely manner. I highly recommend this company for your cleaning needs!",
    initials: "MW",
  },
  // {
  //     name: "",
  //     rating: ,
  //     date: " ",
  //     text: "",
  //     initials: "",
  // },
  // {
  //     name: "",
  //     rating: ,
  //     date: " ",
  //     text: "",
  //     initials: "",
  // },
  // {
  //     name: "",
  //     rating: ,
  //     date: " ",
  //     text: "",
  //     initials: "",
  // },
  // {
  //     name: "",
  //     rating: ,
  //     date: " ",
  //     text: "",
  //     initials: "",
  // },
  // {
  //     name: "",
  //     rating: ,
  //     date: " ",
  //     text: "",
  //     initials: "",
  // },
  // {
  //     name: "",
  //     rating: ,
  //     date: " ",
  //     text: "",
  //     initials: "",
  // },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: "1px solid rgba(1,45,99,0.1)" }}
      className="py-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 600,
            color: "#012D63",
          }}
          className="text-base"
        >
          {q}
        </span>
        <ChevronDown
          size={20}
          style={{
            color: "#047A95",
            flexShrink: 0,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {open && (
        <p
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
            color: "#4a6a99",
            lineHeight: 1.7,
          }}
          className="mt-3 text-sm"
        >
          {a}
        </p>
      )}
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? "#047A95" : "none"}
          stroke={i < count ? "#047A95" : "#ccc"}
        />
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "90vh", backgroundColor: "#012D63" }}
      >
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Processional cleaner mopping a bright modern floor"
            fill
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
            placeholder="blur"
            priority
          />
        </div>
        <div
          className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center"
          style={{
            minHeight: "90vh",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={16} style={{ color: "#047A95" }} />
              <span
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  color: "#047A95",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
                className="text-xs uppercase"
              >
                Professional Cleaning Services
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-lora), serif",
                color: "#ffffff",
                lineHeight: 1.2,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              }}
              className="mb-6"
            >
              A Cleaner Home, <br />
              <span style={{ color: "#047A95" }}>A Happier Life.</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.75,
              }}
              className="text-base mb-8 max-w-lg"
            >
              Clean Home Pros LLC delivers exceptional residential cleaning with
              attention to every detail. Trusted by hundreds of families - on
              time, every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                style={{
                  backgroundColor: "#047A95",
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontWeight: 600,
                }}
                className="text-white px-7 py-3 rounded-full text-sm no-underline hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Book a Cleaning <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                style={{
                  border: "2px solid rgba(255,255,255,0.35)",
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.9)",
                }}
                className="px-7 py-3 rounded-full text-sm no-underline hover:border-white transition-colors"
              >
                See Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
                {[['100+', 'Happy Clients'], ['5★', 'Average Rating'], ['100%', 'Satisfaction Guaranteed']].map(([val, label]) => (
                    <div key={label} >
                        <div style={{ fontFamily: "var(--font-lora), serif", color: "#047A95", fontSize: "1.5rem", fontWeight: 600 }}>{val}</div>
                        <div style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>{label}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
