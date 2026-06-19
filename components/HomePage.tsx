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
import heroImg from "@/app/assets/getty-images-U6hzAypFZMc-unsplash.jpg";

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
  // {
  //   q: "Are your cleaners insured and background-checked?",
  //   a: "Absolutely. All Clean Home Pros team members undergo thorough background checks and we carry full liability insurance and workers' compensation coverage.",
  // },
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
  {
      name: "Rosalyn Maltz",
      rating: 5,
      date: "1 year ago",
      text: "Lluvia has been cleaning my house for so many years I think of her as family. I trust her completely and know my house will be clean when she gets through.",
      initials: "RM",
      source: 'facebook',
  },
  {
      name: "Maryln Appelbaum",
      rating: 5,
      date: "1 year ago",
      text: "Lluvia is great. Everything looks perfect when she is finished and so sparkly clean. Her team has to be excellent too. I highly highly recommend them. You will not be disappointed.",
      initials: "MA",
      source: 'facebook',
  },
  {
      name: "Laura Jane",
      rating: 5,
      date: "1 year ago",
      text: "Lluvia and her team are the best. They have been cleaning our home since 2021. Quick and efficient and leave the house sparkling every time. I could not recommend Clean Home Pros more!",
      initials: "LJ",
      source: 'facebook',
  },
  {
      name: "Lara Spencer Bryant",
      rating: 5,
      date: "1 year ago",
      text: "Clean Home Pros have been cleaning my home since 2016 after having surgery. What I thought was going to be temporary help cleaning my home while recovering has turned into a beautiful bimonthly relationship with an incredibly detailed cleaning crew whom I love and never want to end.",
      initials: "LB",
      source: 'facebook',
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

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#1877F2"
        d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08V12h3.05V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87V12h3.33l-.53 3.47h-2.8v8.38C19.61 22.95 24 17.99 24 12z"
      />
    </svg>
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
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
            placeholder="blur"
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
              A Clean Home, <br />
              <span style={{ color: "#047A95" }}>Is A Happy Home.</span>
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
              {[
                ["100+", "Happy Clients"],
                ["5★", "Average Rating"],
                ["100%", "Satisfaction Guaranteed"],
              ].map(([val, label]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      color: "#047A95",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section style={{ backgroundColor: "#f0f6ff" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#047A95",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
              className="text-xs uppercase mb-2"
            >
              What We Offer
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                color: "#012D63",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Cleaning Solutions for Every Need
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Home size={28} style={{ color: "#047A95" }} />,
                title: "Regular Cleans",
                desc: "Keep your home consistently fresh with weekly, bi-weekly, or monthly scheduled cleanings tailored to your lifestyle.",
                href: "/services",
              },
              {
                icon: <Sparkles size={28} style={{ color: "#047A95" }} />,
                title: "Deep Cleans",
                desc: "A thorough top-to-bottom clean that reaches every corner - perfect for seasonal rereshes or when your space needs extra attention.",
                href: "/services",
              },
              {
                icon: <CheckCircle2 size={28} style={{ color: "#047A95" }} />,
                title: "Move In / Move Out",
                desc: "Leave your old place spotless or get your new home move-in ready. We handle everything so you can focus on the next chapter.",
                href: "/services",
              },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="no-underline group">
                <div
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(1,45,99,0.08)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  className="rounded-2xl p-7 h-full hover:shadow-lg group-hover:-translate-y-1"
                >
                  <div
                    style={{ backgroundColor: "#f0f6ff" }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  >
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      color: "#012D63",
                      fontSize: "1.15rem",
                    }}
                    className="mb-2"
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-jakarta), sans-serif",
                      color: "#4a6a99",
                      lineHeight: 1.7,
                    }}
                    className="text-sm"
                  >
                    {s.desc}
                  </p>
                  <div
                    className="flex items-center gap-1 mt-4"
                    style={{
                      color: "#047A95",
                      fontFamily: "var(--font-jakarta), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                    }}
                  >
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff " }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#047A95",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
              className="text-xs uppercase mb-2"
            >
              What Our Clients Say
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                color: "#012D63",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Google Reviews
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex gap-0 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#047A95" stroke="#047A95" />
                ))}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  color: "#012D63",
                  fontWeight: 600,
                }}
              >
                5.0
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jakarta), sans-serif",
                  color: "#4a6a99",
                }}
                className="text-sm"
              >
                · 10 reviews
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(1,45,99,0.1)",
                  borderRadius: "1rem",
                }}
                className="p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{
                      backgroundColor: "#012D63",
                      color: "#fff",
                      fontFamily: "var(--font-jakarta), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                    }}
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-jakarta), sans-serif",
                        fontWeight: 600,
                        color: "#012D63",
                      }}
                      className="text-sm"
                    >
                      {r.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-jakarta), sans-serif",
                        color: "#4a6a99",
                      }}
                      className="text-xs"
                    >
                      {r.date}
                    </div>
                  </div>
                  <div className="ml-auto" aria-label={`Review from ${r.source === 'facebook' ? 'Facebook' : 'Google'}`}>
                    {r.source === 'facebook' ? <FacebookIcon /> : <GoogleIcon /> }
                    {/* Google icon */}
                    {/* <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg> */}
                  </div>
                </div>
                <StarRating count={r.rating} />
                <p
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    color: "#4a6a99",
                    lineHeight: 1.65,
                  }}
                  className="text-sm mt-3"
                >
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#f0f6ff" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#047A95",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
              className="text-xs uppercase mb-2"
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                color: "#012D63",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1.25rem",
              padding: "0 1.5rem",
              border: "1px solid rgba(1,45,99,0.08)",
            }}
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#047A95" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "var(--font-lora), serif",
              color: "#fff",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
            }}
            className="mb-4"
          >
            Ready for a Sparkling Clean Home?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
            }}
            className="text-sm mb-7"
          >
            Get a free quote in minutes. No commitment, no hassle - just a
            cleaner home waiting for you.
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: "#012D63",
              fontFamily: "var(--font-jakarta), sans-serif",
              fontWeight: 600,
            }}
            className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full text-sm no-underline hover:opacity-90 transition-opacity"
          >
            Request a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
