import Link from "next/link";
import { Heart, Shield, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import aboutHeroImg from "@/app/assets/bailey-alexander-PE4pFgcYzoQ-unsplash.jpg";

const team = [
  {
    name: "Lluvia Ayala",
    role: "Owner",
    bio: "With over 12 years in the cleaning industry, Lluvia founded Clean Home Pros with a vision of combining professional standards with genuine care. She oversees daily operations and ensures every client gets a five-star experience.",
  },
];

const values = [
  {
    icon: <Shield size={24} style={{ color: "#047A95" }} />,
    title: "Trust & Integrity",
    desc: "Every team member is background-checked, insured, and held to the highest professional standards.",
  },
  {
    icon: <Heart size={24} style={{ color: "#047A95" }} />,
    title: "Care in Every Detail",
    desc: "We treat your home as if it were our home - with respect, thoroughness, and genuine pride in our work.",
  },
  {
    icon: <Clock size={24} style={{ color: "#047A95" }} />,
    title: "Reliability You Can Count On",
    desc: "We show up on time, every time. Your schedule matters to us, and we honor every commitment.",
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{ backgroundColor: "#012D63" }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              color: "#047A95",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
            className="text-xs uppercase mb-3"
          >
            Our Story
          </p>
          <h1
            style={{
              fontFamily: "var(--font-lora), serif",
              color: "#ffffff",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.25,
            }}
            className="mb-5"
          >
            People You Can Trust <br />
            In Your Home
          </h1>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
            }}
            className="text-base"
          >
            Clean Home Pros was founded on a simple belief: everyone deserves to
            come home to a clean, comfortable space - without the stress of
            doing it themselves.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#047A95",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
              className="text-xs uppercase mb-3"
            >
              About Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                color: "#012D63",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
              className="mb-5"
            >
              Started with Family, <br />
              Built on Community
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#4a6a99",
                lineHeight: 1.8,
              }}
              className="text-sm mb-4"
            >
              Clean Home Pros LLC was founded in 2018 by Lluvia Ayala, who
              believed that professional cleaning shouldn't be a luxury - it
              should be accessible, reliable, and personal.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
                color: "#4a6a99",
                lineHeight: 1.8,
              }}
              className="text-sm mb-6"
            >
              What started as a one person operation has grown into a trusted
              team of dedicated professionals serving hundreds of households
              across the metro area. We take immense pride in every home we
              clean and every relationship we build.
            </p>
            <Link
              href="/contact"
              style={{
                backgroundColor: "#012D63",
                fontFamily: "var(--font-jakarta), sans-serif",
                fontWeight: 600,
              }}
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm no-underline hover:opacity-90 transition-opacity"
            >
              Work With Us <ArrowRight size={15} />
            </Link>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ aspectRatio: "4/3", backgroundColor: "#f0f6ff" }}
          >
            <Image
              src={aboutHeroImg}
              alt="A bright, clean modern living room with a kitchen in the background representing our work quality"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
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
              className="text xs uppercase mb-2"
            >
              What Drives Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-lora), serif",
                color: "#012D63",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(1,45,99,0.08)",
                  borderRadius: "1rem",
                }}
                className="p-7"
              >
                <div
                  style={{ backgroundColor: "#f0f6ff" }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    color: "#012D63",
                    fontSize: "1.05rem",
                  }}
                  className="mb-2"
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-jakarta), sans-serif",
                    color: "#4a6a99",
                    lineHeight: 1.7,
                  }}
                  className="text-sm"
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
