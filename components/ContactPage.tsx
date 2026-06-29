"use client";

import { useState, useEffect, useRef } from "react";
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
  MessageSquare,
} from "lucide-react";

const NAVY = "#012D63";
const TEAL = "#047A95";
const MUTED = "#4a6a99";
const MUTED_BG = "#f0f6ff";
const BORDER = "1px solid rgba(1,45,99,0.1)";
const FONT_SANS = "var(--font-jakarta), sans-serif";
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

// const PHONE_DISPLAY = "(832) 776-9288";
const PHONE_E164 = "+18327769288";
const SMS_BODY = encodeURIComponent(
  "Hi Clean Home Pros, I'd like a quote for "
);

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

export function ContactPage() {
  type SubmitStatus = "idle" | "submitting" | "success" | "error";

  // simple message form
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPhone, setMsgPhone] = useState("");
  const [msgService, setMsgService] = useState<ServiceType>("");
  const [msgDetails, setMsgDetails] = useState("");
  const [msgStatus, setMsgStatus] = useState<SubmitStatus>("idle");

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

  const [consultStatus, setConsultStatus] = useState<SubmitStatus>("idle");

  const consultSuccessRef = useRef<HTMLDivElement>(null);
  const msgSuccessRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const reduce = window.matchMedia(
  //     "(prefers-reduced-motion: reduce)"
  //   ).matches;
  //   const behavior = reduce ? "auto" : "smooth";

  //   if (msgStatus === "success") {
  //     msgSuccessRef.current?.scrollIntoView({ behavior, block: "start" });
  //   } else if (consultStatus === "success") {
  //     consultSuccessRef.current?.scrollIntoView({ behavior, block: "start" });
  //   }
  // }, [msgStatus, consultStatus]);

  useEffect(() => {
    if (msgStatus !== "success") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    msgSuccessRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [msgStatus]);

  useEffect(() => {
    if (consultStatus !== "success") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    consultSuccessRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [consultStatus]);

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

  const MESSAGE_FORM_ID = "meebabzg";
  const CONSULT_FORM_ID = "mgojajzz";
  // my message mzdldozb
  // Lluvia message meebabzg
  // my consult mpqgqbwd
  // Lluvia consult mgojajzz

  // contact/message form
  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMsgStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${MESSAGE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: msgName,
          email: msgEmail,
          phone: msgPhone,
          service: msgService,
          details: msgDetails,
          _subject: `New website message from ${msgName}`,
        }),
      });

      if (res.ok) {
        setMsgStatus("success");
        setMsgName("");
        setMsgEmail("");
        setMsgPhone("");
        setMsgService("");
        setMsgDetails("");
      } else {
        setMsgStatus("error");
      }
    } catch {
      setMsgStatus("error");
    }
  };

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setConsultStatus("submitting");

    const payload: Record<string, string> = {
      contactMethod: method,
      name,
      service: SERVICE_LABELS[service as Exclude<ServiceType, "">] ?? "",
      area,
      details,
      _subject: `New consultation request from ${name || "website"}`,
    };
    if (method === "phone") payload.phone = phone;
    if (method === "email") payload.email = email;
    if (service === "regular") payload.frequency = frequency;

    try {
      const res = await fetch(`https://formspree.io/f/${CONSULT_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setConsultStatus("success");
        // reset form
        setMethod("");
        setPhone("");
        setEmail("");
        setName("");
        setService("");
        setFrequency("");
        setArea("");
        setDetails("");
      } else {
        setConsultStatus("error");
      }
    } catch {
      setConsultStatus("error");
    }
  };

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
          {msgStatus === "success" ? (
            <div
              ref={msgSuccessRef}
              style={{
                ...cardStyle,
                textAlign: "center",
                padding: "3rem 2rem",
                scrollMarginTop: "6rem",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#e8f5ee",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Check size={28} color="#1b9e54" />
              </div>
              <h2
                style={{
                  fontFamily: FONT_SERIF,
                  color: NAVY,
                  fontSize: "1.4rem",
                }}
              >
                Message sent!
              </h2>
              <p
                style={{
                  fontFamily: FONT_SANS,
                  color: MUTED,
                  marginTop: "0.4rem",
                }}
              >
                Thanks for reaching out - we&rsquo;ll follow up shortly.
              </p>
              <button
                type="button"
                onClick={() => setMsgStatus("idle")}
                style={{ ...pillButtonStyle, marginTop: "1.6rem" }}
              >
                Send another message
              </button>
            </div>
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

              {msgStatus === "error" && (
                <div
                  role="alert"
                  style={{
                    background: "#fdecec",
                    color: "#a12626",
                    fontFamily: FONT_SANS,
                    fontSize: "0.85rem",
                    padding: "0.7rem 0.9rem",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Something went wrong sending your message. Please try again or
                  call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={msgStatus === "submitting"}
                style={{
                  ...pillButtonStyle,
                  width: "100%",
                  opacity: msgStatus === "submitting" ? 0.6 : 1,
                  cursor:
                    msgStatus === "submitting" ? "not-allowed" : "pointer",
                }}
              >
                {msgStatus === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}

          {/* Right request free consultation form */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Call or text card */}
            <div style={cardStyle}>
              <h2
                style={{
                  fontFamily: FONT_SERIF,
                  color: NAVY,
                  fontSize: "1.5rem",
                  marginBottom: "0.4rem",
                }}
              >
                Call or text us
              </h2>
              <p
                style={{
                  fontFamily: FONT_SANS,
                  color: MUTED,
                  fontSize: "0.9rem",
                  marginBottom: "1.25rem",
                }}
              >
                Prefer to talk now? Reach us directly &mdash; we usually reply
                within the hour.
              </p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
              >
                <a
                  href={`tel:${PHONE_E164}`}
                  style={{ ...pillButtonStyle, textDecoration: "none" }}
                >
                  <Phone size={17} /> Call
                </a>
                <a
                  href={`sms:${PHONE_E164}?&body=${SMS_BODY}`}
                  style={{
                    ...pillButtonStyle,
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    color: NAVY,
                    border: `2px solid ${TEAL}`,
                  }}
                >
                  <MessageSquare size={17} /> Text
                </a>
              </div>
              <p
                style={{
                  fontFamily: FONT_SANS,
                  color: MUTED,
                  fontSize: "0.85rem",
                  marginTop: "1rem",
                }}
              >
                {/* {PHONE_DISPLAY} */}
              </p>
            </div>

            {consultStatus === "success" ? (
              <div ref={consultSuccessRef} style={{ scrollMarginTop: "6rem" }}>
                <SuccessCard message="Your consultation request is in. We&rsquo;ll reach out using your preferred method to confirm details." />
              </div>
            ) : (
              <div style={cardStyle}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <Sparkles size={18} style={{ color: TEAL }} />
                  <h2
                    style={{
                      fontFamily: FONT_SERIF,
                      color: NAVY,
                      fontSize: "1.5rem",
                    }}
                  >
                    Request a free consultation
                  </h2>
                </div>
                <p
                  style={{
                    fontFamily: FONT_SANS,
                    color: MUTED,
                    fontSize: "0.9rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  A few quick questions so we can tailor your quote &mdash; no
                  obligation.
                </p>

                {!consultOpen ? (
                  <button
                    type="button"
                    onClick={() => setConsultOpen(true)}
                    style={pillButtonStyle}
                  >
                    Request Consultation
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <form onSubmit={handleConsultSubmit}>
                    {/* 1. Contact method */}
                    <Step label="What&rsquo;s the best way to reach you?">
                      <ChoiceButton
                        selected={method === "phone"}
                        onClick={() => setMethod("phone")}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <Phone size={15} /> Phone
                        </span>
                      </ChoiceButton>
                      <ChoiceButton
                        selected={method === "email"}
                        onClick={() => setMethod("email")}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <Mail size={15} /> Email
                        </span>
                      </ChoiceButton>
                    </Step>

                    {/* 2. phone or email field */}
                    {method === "phone" && (
                      <div style={{ marginTop: "1rem" }}>
                        <label style={labelStyle} htmlFor="c-phone">
                          Your phone number
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          style={inputStyle}
                          placeholder="(281) 555-5555"
                        />
                      </div>
                    )}
                    {method === "email" && (
                      <div style={{ marginTop: "1rem" }}>
                        <label style={labelStyle} htmlFor="c-email">
                          Your email address
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={inputStyle}
                          placeholder="you@example.com"
                        />
                      </div>
                    )}

                    {/* 3. name */}
                    {showName && (
                      <div style={{ marginTop: "1.4rem" }}>
                        <label style={labelStyle} htmlFor="c-name">
                          And your name?
                        </label>
                        <div style={{ position: "relative" }}>
                          <User
                            size={16}
                            style={{
                              color: MUTED,
                              position: "absolute",
                              left: "0.8rem",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          />
                          <input
                            id="c-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ ...inputStyle, paddingLeft: "2.3rem" }}
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                    )}

                    {/* 4. Services type */}
                    {showService && (
                      <Step label="Which service are you interested in?">
                        {(
                          Object.keys(SERVICE_LABELS) as Exclude<
                            ServiceType,
                            ""
                          >[]
                        ).map((s) => (
                          <ChoiceButton
                            key={s}
                            selected={service === s}
                            onClick={() => {
                              setService(s);
                              if (s !== "regular") setFrequency("");
                            }}
                          >
                            {SERVICE_LABELS[s]}
                          </ChoiceButton>
                        ))}
                      </Step>
                    )}

                    {/* 5. Frequency (only for regular cleans) */}
                    {showFrequency && (
                      <Step label="How often would you like a regular clean?">
                        {(
                          [
                            ["weekly", "Weekly"],
                            ["biweekly", "Bi-weekly"],
                            ["monthly", "Monthly"],
                            ["onetime", "One-time"],
                          ] as [Frequency, string][]
                        ).map(([value, lbl]) => (
                          <ChoiceButton
                            key={value}
                            selected={frequency === value}
                            onClick={() => setFrequency(value)}
                          >
                            {lbl}
                          </ChoiceButton>
                        ))}
                      </Step>
                    )}

                    {/* 6. area + 7. details */}
                    {showAreaAndDetails && (
                      <>
                        <Step label="What area are you in?">
                          {AREAS.map((a) => (
                            <ChoiceButton
                              key={a}
                              selected={area === a}
                              onClick={() => setArea(a)}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "0.4rem",
                                }}
                              >
                                <MapPin size={15} /> {a}
                              </span>
                            </ChoiceButton>
                          ))}
                        </Step>
                        <div style={{ marginTop: "0.8rem" }}>
                          <input
                            type="text"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            style={inputStyle}
                            placeholder="Or type your city / neighborhood"
                            aria-label="Your area"
                          />
                        </div>

                        <div style={{ marginTop: "1.4rem" }}>
                          <label style={labelStyle} htmlFor="c-details">
                            Anything else we should know?
                          </label>
                          <textarea
                            id="c-details"
                            rows={3}
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            style={{ ...inputStyle, resize: "vertical" }}
                            placeholder="Square footage, pets, problem areas.."
                          />
                        </div>
                      </>
                    )}

                    {/* submit */}
                    <button
                      type="submit"
                      disabled={
                        !canSubmitConsult || consultStatus === "submitting"
                      }
                      style={{
                        ...pillButtonStyle,
                        width: "100%",
                        marginTop: "1.6rem",
                        opacity:
                          !canSubmitConsult || consultStatus === "submitting"
                            ? 0.45
                            : 1,
                        cursor:
                          !canSubmitConsult || consultStatus === "submitting"
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      <Check size={18} />
                      Submit Consultation Request
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
