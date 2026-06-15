import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#012D63" }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              style={{ backgroundColor: "#047A95" }}
              className="w-8 h-8 rounded-full flex items-center justify-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span
              style={{ fontFamily: "var(--font-lora), serif", fontWeight: 600 }}
              className="text-lg"
            >
              Clean Home Pros LLC
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
            }}
            className="text-sm"
          >
            Professional cleaning services that bring the shine back to your
            home. Trusted, thorough, and always on time.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              style={{ backgroundColor: "rgba(255,255,255,0.1" }}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              style={{ backgroundColor: "rgba(255,255,255,0.1" }}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontWeight: 600,
              color: "#047A95",
            }}
            className="mb-4 uppercase tracking-wider text-sm"
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link
                  href={to}
                  className="no-underline hover:opacity-80 transition-opacity text-sm"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "var(--font-jakarta), sans-serif",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            style={{
              fontFamily: "var(--font-jakarta), sans-serif",
              fontWeight: 600,
              color: "#047A95",
            }}
            className="mb-4 uppercase tracking-wider text-sm"
          >
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li
              className="flex items-start gap-2 text-sm"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              <Phone
                size={15}
                className="mt-0.5 shrink-0"
                style={{ color: "#047A95" }}
              />
              (555) 123-4567
            </li>
            <li
              className="flex items-start gap-2 text-sm"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              <Mail
                size={15}
                className="mt-0.5 shrink-0"
                style={{ color: "#047A95" }}
              />
              hello@cleanhomepros.com
            </li>
            <li
              className="flex items-start gap-2 text-sm"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              <MapPin
                size={15}
                className="mt-0.5 shrink-0"
                style={{ color: "#047A95" }}
              />
              Serving the Greater Metro Area
            </li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          className="max-w-6xl mx-auto px-6 py-4 text-center text-xs"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "var(--font-jakarta), sans-serif",
          }}
        >
          © {new Date().getFullYear()} Clean Home Pros LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
