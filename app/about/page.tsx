import { aboutMetadata } from "@/lib/metadata";
import { AboutPage } from "@/components/AboutPage";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata = aboutMetadata;

export default function Page() {
  return (
    <>
      <BreadcrumbSchema page="about" />
      <AboutPage />
    </>
  );
}
