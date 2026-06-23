// import type { Metadata } from "next";
import { servicesMetadata } from "@/lib/metadata";
import { ServicesPage } from "@/components/ServicesPage";
import { ServicesSchema, BreadcrumbSchema } from "@/components/schema";

export const metadata = servicesMetadata;

export default function Page() {
    return (
        <>
        <ServicesSchema />
        <BreadcrumbSchema page='services' />
        <ServicesPage />
        </>
    )
}