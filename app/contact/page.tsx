import { contactMetadata } from "@/lib/metadata";
import { ContactPage } from "@/components/ContactPage";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata = contactMetadata;

export default function Page() {
  return (
    <>
      <BreadcrumbSchema page="contact" />
      <ContactPage />
    </>
  );
}
