import { homeMetadata } from "@/lib/metadata";
import { HomePage } from "@/components/HomePage";
import { BusinessSchema, WebsiteSchema, FaqSchema } from "@/components/schema";

export const metadata = homeMetadata;

// export { HomePage as default } from "@/components/HomePage";
export default function Page() {
    return (
        <>
            <BusinessSchema />
            <WebsiteSchema />
            <FaqSchema />
            <HomePage />
        </>
    );
}
