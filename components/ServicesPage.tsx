import Link from "next/link";
import { Check, ArrowRight, CalendarDays, Sparkles, PackageOpen } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const regularFrequencies = [
    {
        label: 'Weekly',
        badge: 'Most Popular',
        desc: 'Ideal for busy households or families with kids and pets. Your home stays consistently fresh with a full clean every week.',
        includes: ['Dusting all surfaces', 'Vacuuming & mopping floors', 'Kitchen wipe-down', 'Bed linen change (optional)'],
    },
    {
        label: 'Bi-weekly',
        badge: 'Best Value',
        desc: 'A great balance of cleanliness and cost. Perfect for couples or individuals who maintain tidiness between visits.',
        includes: ['All surfaces dusted', 'Full vacuum & mop', 'Kitchen deep-wipe', 'Bathroom sanitizing', 'Trash removal', 'Interior window sills'],
    },
    {
        label: 'Monthly',
        badge: '',
        desc: 'A thorough monthly clean or those who keep up day-to-day but want a professional refresh each month.',
        includes: ['Detailed surface dusting', 'Full vacuum & mop', 'Kitchen & appliance wipe-down', 'Bathroom deep-clean', 'Trash removal', 'Baseboards & trim'],
    },
];

const deepCleanIncludes = [
    'Everything in a regular clean',
    'Inside oven and microwave',
    'Inside refrigerator',
    'Cabinet fronts & handles',
    'Grout scrubbing in bathrooms',
    'Baseboards & door frames',
    'Light fixtures & ceiling fans',
    'Window sills & tracks',
    'Behind & under appliances',
    'Detailed bathroom tile work',
];

const moveCleanIncludes = [
    'Full deep clean of entire property',
    'Inside all cabinets & drawers',
    'Inside all appliances',
    'Walls spot-cleaned',
    'Closets cleaned out & wiped',
    'Garage sweep (on request)',
    'All floors scrubbed',
    'Carpet cleaning (on request)',
    'All fixtures polished',
    'Final walkthrough with you',
];

export function ServicesPage() {
    return (
        <div>
            {/* Hero */}
            <section style={{ backgroundColor: "#012D63" }} className="py-20 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <p style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "#047A95", fontWeight: 600, letterSpacing: "0.08em" }} className="text-xs uppercase mb-3">
                        What We Offer
                    </p>
                    <h1 style={{ fontFamily: "var(--font-lora), serif", color: "#ffffff", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.25 }} className="mb-5">
                        Professional Cleaning <br />Tailored to You
                    </h1>
                    <p style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }} className="text-base mb-7">
                        Whether you need ongoing maintenance, a one-time deep clean, or help with a move - we have a service built for your situation.
                    </p>
                    <Link href='/contact' style={{ backgroundColor: "#047A95", fontFamily: "var(--font-jakarta), sans-serif", fontWeight: 600 }} className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full text-sm no-underline hover:opacity-90 transition-opacity">
                        Get a Free Quote <ArrowRight size={15} />
                    </Link>
                </div>
            </section>

            {/* Regular Cleans */}
            <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                        <div style={{ backgroundColor: "#f0f6ff" }} className="w-10 h-10 rounded-xl flex items-center justify-center">
                            <CalendarDays size={22} style={{ color: "#047A95" }} />
                        </div>
                        <p style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "#047A95", fontWeight: 600, letterSpacing: "0.08em" }} className="text-xs uppercase">Service 01</p>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-lora), serif", color: "#012D63", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }} className="mb-3">Regular Cleans</h2>
                    <p style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "#4a6a99", lineHeight: 1.75 }} className="text-sm max-w-xl mb-10">
                        Our recurring cleaning service keeps your home in top shape. Choose the frequency that works best for your lifestyle and budget - we handle the rest.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {regularFrequencies.map((freq) => (
                            <div
                                key={freq.label}
                                style={{
                                    border: freq.badge === "Most Popular" ? "2px solid #047A95" : "1px solid rgba(1,45,99,0.1)",
                                    borderRadius: "1.25rem",
                                    backgroundColor: freq.badge === "Most Popular" ? "#f0f9fc" : "#fff",
                                  }}
                                   className="p-7 relative shadow-sm hover:shadow-md transition-shadow">
                                    {freq.badge && (
                                        <div style={{ backgroundColor: "#047A95", fontFamily: "var(--font-jakarta), sans-serif", fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.08em" }} className="absolute top-4 right-4 text-white px-2 5 py-1 rounded-full uppercase">
                                            {freq.badge}
                                        </div>
                                    )}
                                    <h3 style={{ fontFamily: "var(--font-lora), serif", color: "#012D63", fontSize: "1.35rem" }} className="mb-2">{freq.label}</h3>
                                    <p style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "#4a6a99", lineHeight: 1.7 }} className="text-sm mb-5">{freq.desc}</p>
                                    <ul className="space-y-2">
                                        {freq.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm" style={{ fontFamily: "var(--font-jakarta), sans-serif", color: "#4a6a99" }}>
                                                <Check size={15} className="mt-0.5 shrink-0" style={{ color: "#047A95" }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                  <Link href='/contact'
                                  style={{
                                    display: "block",
                                    marginTop: "1.5rem",
                                    textAlign: "center",
                                    backgroundColor: freq.badge === "Most Popular" ? "#047A95" : "transparent",
                                    border: freq.badge === "Most Popular" ? "none" : "2px solid #012D63",
                                    color: freq.badge === "Most Popular" ? "#fff" : "#012D63",
                                    fontFamily: "var(--font-jakarta), sans-serif",
                                    fontWeight: 600,
                                    borderRadius: "9999px",
                                    padding: "0.6rem 1rem",
                                    fontSize: "0.85rem",
                                  }}
                                   className="no-underline hover:opacity-85 transition-opacity">
                                    Book {freq.label}
                                    </Link>  
                            </div>

                        ))}
                    </div>

                </div>

            </section>

        </div>
    )
}