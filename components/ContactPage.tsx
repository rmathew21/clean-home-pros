"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Check,
  User,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const NAVY = "#012D63";
const TEAL = "#047A95";
const MUTED = "#4a6a99";
const MUTED_BG = "#f0f6ff";
const BORDER = "1px solid rgba(1,45,99,0.1)";
const FONT_SANS = 'var(--font-jakarta), sans-serif"';
const FONT_SERIF = "var(--font-lora), serif";

const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  border: BORDER,
  borderRadius: "1.25rem",
  padding: "2rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: FONT_SANS,
  fontWeight: 600,
  color: NAVY,
  fontSize: "0.9rem",
  marginBottom: "0.4rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: FONT_SANS,
  fontSize: "0.95rem",
  color: NAVY,
  backgroundColor: MUTED_BG,
  border: BORDER,
  borderRadius: "0.75rem",
  padding: "0.7rem 0.9rem",
  outline: "none",
};

const pillButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontFamily: FONT_SANS,
  fontWeight: 600,
  fontSize: "0.95rem",
  color: "#fff",
  backgroundColor: TEAL,
  border: "none",
  borderRadius: "9999px",
  padding: "0.8rem 1.6rem",
  cursor: "pointer",
};

function ChoiceButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{
        fontFamily: FONT_SANS,
        fontWeight: 600,
        fontSize: "0.875rem",
        padding: "0.6rem 1.1rem",
        borderRadius: "9999px",
        cursor: "pointer",
        border: `2px solid ${TEAL}`,
        backgroundColor: selected ? TEAL : "transparent",
        color: selected ? "#fff" : NAVY,
        transition: "background-color 0.15s ease, color 0.15s ease",
      }}
    >
      {children}
    </button>
  );
}

function Step({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: "1.4rem" }}>
      <p
        style={{
          fontFamily: FONT_SANS,
          fontWeight: 600,
          color: NAVY,
          fontSize: "0.95rem",
          marginBottom: "0.65rem",
        }}
      >
        {label}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {children}
      </div>
    </div>
  );
}

function SuccessCard({ message }: { message: string }) {
  return (
    <div
      style={{
        ...cardStyle,
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <CheckCircle2 size={48} style={{ color: TEAL, marginBottom: "1rem" }} />
      <h3
        style={{
          fontFamily: FONT_SERIF,
          color: NAVY,
          fontSize: "1.4rem",
          marginBottom: "0.5rem",
        }}
      >
        Thank you!
      </h3>
      <p style={{ fontFamily: FONT_SANS, color: MUTED, maxWidth: "26rem" }}>
        {message}
      </p>
    </div>
  );
}

type ServiceType = "" | "regular" | "deep" | "moveinout";
type Frequency = "" | "weekly" | "biweekly" | "monthly" | "onetime";
type ContactMethod = "" | "phone" | "email";

const SERVICE_LABELS: Record<Exclude<ServiceType, "">, string> = {
  regular: "Regular Clean",
  deep: "Deep Clean",
  moveinout: "Move In / Out Clean",
};

const AREAS = [
  "Sugar Land",
  "Missouri City",
  "Richmond",
  "Cinco Ranch (Katy)",
  "Bellaire",
  "West University",
];

// type FormState = {
//   name: string;
//   email: string;
//   phone: string;
//   service: string;
//   message: string;
// };

// const initialForm: FormState = {
//   name: "",
//   email: "",
//   phone: "",
//   service: "",
//   message: "",
// };

export function ContactPage() {
  // simple message form
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPhone, setMsgPhone] = useState("");
  const [msgService, setMsgService] = useState<ServiceType>("");
  const [msgDetails, setMsgDetails] = useState("");
  const [msgSubmitted, setMsgSubmitted] = useState(false);

  //   consultation wizard
  const [consultOpen, setConsultOpen] = useState(false);
  const [method, setMethod] = useState<ContactMethod>("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState<ServiceType>("");
  const [frequency, setFrequency] = useState<Frequency>("");
  const [area, setArea] = useState("");
  const [details, setDetails] = useState("");
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  // user-based reveal conditions
  const hasContact =
    (method === "phone" && phone.trim() !== "") ||
    (method === "email" && email.trim() !== "");
  const showName = hasContact;
  const showService = showName && name.trim() !== "";
  const showFrequency = showService && service === "regular";
  const serviceComplete =
    service !== "" && (service !== "regular" || frequency !== "");
  const showAreaAndDetails = serviceComplete;
  const canSubmitConsult =
    hasContact && name.trim() !== "" && serviceComplete && area.trim() !== "";

  function handleMessageSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Space for Formspree api route
    setMsgSubmitted(true);
  }

  function handleConsultSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmitConsult) return;
    // TODO: POST the consultation payload to Formspree / a Server Action.
    // Payload: { method, phone, email, name, service, frequency, area, details }
    setConsultSubmitted(true);
  }

  return (
    <div style={{ backgroundColor: MUTED_BG }}>
      <section
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        {/* header */}
        <div style={{ marginBottom: "3rem" }} className="text-center">
          <p
            style={{
              fontFamily: FONT_SANS,
              fontWeight: 600,
              color: TEAL,
              letterSpacing: "0.08em",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Get In Touch
          </p>
          <h1
            style={{
              fontFamily: FONT_SERIF,
              color: NAVY,
              fontSize: "2.5rem",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Let&rsquo;s make your home shine
          </h1>
          <p
            style={{
              fontFamily: FONT_SANS,
              color: MUTED,
              maxWidth: "36rem",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Send us a quick message, or request a free consultation and
            we&rsquo;ll tailor a plan to your home and schedule.
          </p>
        </div>

        <div
          className="grid grid-cols01 lg:grid-cols-2 gap-8"
          style={{ alignItems: "start" }}
        >
          {/* Left simple msg form */}
          {msgSubmitted ? (
            <SuccessCard message="Your message is on its way. We&rsquo;ll get back to you within 24 hours." />
          ) : (
            <form onSubmit={handleMessageSubmit} style={cardStyle}>
              <h2
                style={{
                  fontFamily: FONT_SERIF,
                  color: NAVY,
                  fontSize: "1.5rem",
                  marginBottom: "0.4rem",
                }}
              >
                Send us a message
              </h2>
              <p
                style={{
                  fontFamily: FONT_SANS,
                  color: MUTED,
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                Tell us what you need and we&rsquo;ll follow up shortly.
              </p>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="msg-name" style={labelStyle}>
                  Name
                </label>
                <input
                  id="msg-name"
                  type="text"
                  required
                  value={msgName}
                  onChange={(e) => setMsgName(e.target.value)}
                  style={inputStyle}
                  placeholder="Your name"
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="msg-email" style={labelStyle}>
                  Email
                </label>
                <input
                  id="msg-email"
                  type="email"
                  required
                  value={msgEmail}
                  onChange={(e) => setMsgEmail(e.target.value)}
                  style={inputStyle}
                  placeholder="you@example.com"
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="msg-phone" style={labelStyle}>
                  Phone
                </label>
                <input
                  id="msg-phone"
                  type="tel"
                  required
                  value={msgPhone}
                  onChange={(e) => setMsgPhone(e.target.value)}
                  style={inputStyle}
                  placeholder="(281) 555-5555"
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="msg-service" style={labelStyle}>
                  Service you&rsquo;re interested in
                </label>
                <select
                  id="msg-service"
                  required
                  value={msgService}
                  onChange={(e) => setMsgService(e.target.value as ServiceType)}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="regular">Regular Clean</option>
                  <option value="deep">Deep Clean</option>
                  <option value="moveinout">Move In / Out Clean</option>
                </select>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="msg-details" style={labelStyle}>
                  Additional details
                </label>
                <textarea
                  id="msg-details"
                  rows={4}
                  
                  
                  value={msgDetails}
                  onChange={(e) => setMsgDetails(e.target.value)}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Anything else we should know?"
                />
              </div>

              <button type="submit" style={{ ...pillButtonStyle, width: '100% '}}>
                Send Message
              </button>
            </form>
          )}
          
        </div>
      </section>
    </div>
  );
}
