import type { Metadata } from "next";

const SITE_URL = "https://cleanhomeprosllc.com";
const SITE_NAME = "Clean Home Pros LLC";
const OG_IMAGE = "/og-image.jpg";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Professional Cleaning Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Clean Home Pros LLC delivers exceptional residential cleaning with attention to every detail. Regular cleans, deep cleans, and move in / move out services in the Sugar Land, Missouri City, Richmond, Cinco Ranch, Katy, Bellaire, and West University areas.",
  applicationName: SITE_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path ? `${SITE_URL}/${path}` : SITE_URL;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export const homeMetadata: Metadata = {
  ...pageMeta({
    title: `${SITE_NAME} | Professional Cleaning Services`,
    description:
      "Clean Home Pros LLC delivers exceptional residential cleaning with attention to every detail. Regular cleans, deep cleans, and move in / move out services. Trusted by hundreds of families.",
    path: "",
  }),
  title: { absolute: `${SITE_NAME} | Professional Cleaning Services` },
};

export const servicesMetadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Professional cleaning tailored to you: regular cleans (weekly, bi-weekly, monthly), deep cleans, and move in / move out services.",
  path: "services",
});

export const aboutMetadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "Clean Home Pros LLC was founded on a simple belief: everyone deserves a clean, comfortable home. Meet the owner and the team behind the shine.",
  path: "about",
});

export const contactMetadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Request your free quote from Clean Home Pros LLC. We'll reach out within 24 hours to confirm your booking and answer any questions.",
  path: "contact",
});
