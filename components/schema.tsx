const SITE_URL = "https://cleanhomeprosllc.com";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${SITE_URL}/#business`,
    name: "Clean Home Pros LLC",
    description:
      "Professional residential cleaning serving the Sugar Land, Missouri City, Richmond, Cinco Ranch, Katy, Bellaire, and West University areas. Regular cleans, deep cleans, and move in/ move out service.",
    url: SITE_URL,
    telephone: "+18327769288",
    foundingDate: "2018",
    founder: {
      "@type": "Person",
      name: "Lluvia Ayala",
    },
    image: `${SITE_URL}/clean-home-pros-logo.png`, 
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: "Sugar Land",
        "@id": "https://www.wikidata.org/wiki/Q956534",
      },
      { "@type": "City", name: "Missouri City" },
      { "@type": "City", name: "Richmond" },
      { "@type": "City", name: "Cinco Ranch" },
      { "@type": "City", name: "Katy" },
      { "@type": "City", name: "Bellaire" },
      { "@type": "City", name: "West University" },
      { "@type": "AdministrativeArea", name: "Fort Bend County" },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61573592632258",
      "https://www.instagram.com/cleanhomepros832",
    ],
    hasOfferCatalog: { "@id": `${SITE_URL}/services#catalog` },
  };
  return <JsonLd data={data} />;
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Clean Home Pros LLC",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
  return <JsonLd data={data} />;
}

export function ServicesSchema() {
  const provider = { "@id": `${SITE_URL}/#business` };
  const areaServed = [
    "Sugar Land",
    "Missouri City",
    "Richmond",
    "Cinco Ranch",
    "Katy",
    "Bellaire",
    "West University",
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/services#catalog`,
    name: "Cleaning Services",
    url: `${SITE_URL}/services`,
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}/services#regular`,
          name: "Regular Cleans",
          serviceType: "Recurring house cleaning",
          description:
            "Recurring cleaning on a weekly, bi-weekly, or monthly schedule to keep your home consistently fresh.",
          provider,
          areaServed,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}/services#deep`,
          name: "Deep Cleans",
          serviceType: "Deep house cleaning",
          description:
            "A comprehensive top-to-bottom clean covering built-up grime and hard-to-reach areas, including inside appliances, grout, baseboards, and fixtures.",
          provider,
          areaServed,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}/services#move`,
          name: "Move In / Move Out Cleans",
          serviceType: "Move-in / move-out cleaning",
          description:
            "A full deep clean of an empty property — inside all cabinets, drawers, and appliances — to prepare for a move or maximize a security deposit return.",
          provider,
          areaServed,
        },
      },
    ],
  };
  return <JsonLd data={data} />;
}

export function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I get started with Clean Home Pros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply fill out our contact form or give us a call or text. We'll schedule a consultation, provide a free Quote, and book your first cleaning at a time that works for you.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to be home during the cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all! Many of our clients provide a key or access code. Our team is fully vetted, insured, and bonded, so you can trust us in your home.",
        },
      },
      {
        "@type": "Question",
        name: "What cleaning products do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use professional-grade, eco-friendly cleaning solutions that are safe for your family and pets. Just let us know if you have any specific preferences or sensitivities.",
        },
      },
      {
        "@type": "Question",
        name: "What if I'm not satisfied with the cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your satisfaction is our priority. If you're not happy with any aspect of our service, contact us within 24 hours and we'll return to re-clean the area at no extra charge.",
        },
      },
    ],
  };
  return <JsonLd data={data} />;
}

type SubPage = "about" | "services" | "contact";
const PAGE_LABELS: Record<SubPage, string> = {
  about: "About Us",
  services: "Services",
  contact: "Contact Us",
};

export function BreadcrumbSchema({ page }: { page: SubPage }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: PAGE_LABELS[page],
        item: `${SITE_URL}/${page}`,
      },
    ],
  };
  return <JsonLd data={data} />;
}
