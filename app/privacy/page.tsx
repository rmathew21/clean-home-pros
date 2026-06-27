import { privacyMetadata } from "@/lib/metadata";
import { LegalPageSchema } from "@/components/schema";

const COMPANY = "Clean Home Pros LLC";
const CONTACT_EMAIL = "cleanhomepros@yahoo.com";
const CONTACT_PHONE = "(832) 776-9288";
const SERVICE_AREA = "the Greater Houston area";
const LAST_UPDATED = "June 26, 2026";

export const metadata = privacyMetadata;

function Flag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-yellow-100 px-1 py-0.5 font-medium text-yellow-900">
      {children}
    </span>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <LegalPageSchema
        name="Privacy Policy"
        description="How Clean Home Pros LLC collects, uses, and protects the information you share when requesting a quote or contacting us."
        path="privacy"
      />
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-5 text-sm text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="mt-8 space-y-3 text-slate-700 leading-relaxed">
        <p>
          {COMPANY} (&ldquo;{COMPANY},&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
          Privacy Policy explains what information we collect when you visit our
          website or contact us about cleaning services, how we use that
          information, and the choices you have. By using our website or
          submitting a request through it, you agree to the practices described
          here.
        </p>
      </div>

      <Section title="Information We Collect">
        <p>
          <strong>Information you give us.</strong> When you fill out our
          contact form or request a consultation, we collect the details you
          provide, which may include your name, email address, phone number, the
          type of cleaning service you&rsquo;re interested in, details about
          your home or property, your preferred schedule, and any additional
          information you choose to share in your message.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like most
          websites, we (and our hosting and analytics providers) automatically
          collect limited technical information when you visit, such as your
          device and browser type, general location derived from your IP
          address, pages viewed, and the date and time of your visit. This is
          used in aggregate to understand how the site is used and to keep it
          working properly.
        </p>
        <p>
          We do not knowingly collect payment card numbers or other sensitive
          financial information through this website.
        </p>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Respond to your inquiries and provide quotes or consultations;
          </li>
          <li>Schedule, confirm, and provide cleaning services;</li>
          <li>Communicate with you about your request or booking;</li>
          <li>Improve our website, services, and customer experience; and</li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>
        <p>
          We will only contact you for marketing purposes if you have asked us
          to, and you can opt out at any time.
        </p>
      </Section>

      <Section title="Text Messaging">
        <p>
          If you call or text the number listed on our website, you consent to
          receiving a reply from us at that number. Message and data rates may
          apply. We do not sell your phone number, and we do not send marketing
          texts unless you have separately agreed to receive them. You can stop
          messages at any time by replying STOP.
        </p>
      </Section>

      <Section title="How We Share Information">
        <p>
          We do <strong>not</strong> sell your personal information. We share it
          only in these limited situations:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Service providers.</strong> We use trusted third-party
            services to operate our website and process the requests you submit,
            including our form-handling provider (Formspree), our website host
            and analytics provider (Vercel), and our email provider. These
            providers process information on our behalf and are not permitted to
            use it for their own purposes.
          </li>
          <li>
            <strong>Legal reasons.</strong> We may disclose information if
            required by law, or to protect the rights, safety, or property of{" "}
            {COMPANY}, our customers, or others.
          </li>
          <li>
            <strong>Business transfers.</strong> If our business is sold or
            reorganized, customer information may be transferred as part of that
            transaction.
          </li>
        </ul>
      </Section>

      <Section title="Cookies & Analytics">
        <p>
          Our website may use cookies and similar technologies, along with
          privacy-focused analytics provided through our host, to understand how
          visitors use the site and to improve performance. Most browsers let
          you refuse or delete cookies through their settings. Disabling cookies
          may affect how some parts of the site function.
        </p>
      </Section>

      <Section title="Third-Party Links">
        <p>
          Our site includes links to third-party services, such as our Google
          Business Profile and our social media pages on Facebook and Instagram.
          When you follow those links or interact with Google Reviews, your
          information is handled under those companies&rsquo; own privacy
          policies, not ours. We encourage you to review their policies.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          We keep the information you submit for as long as needed to respond to
          your request, provide services, and meet our legal and recordkeeping
          obligations, after which we delete or anonymize it. You may ask us to
          delete your information sooner using the contact details below.
        </p>
      </Section>

      <Section title="Data Security">
        <p>
          We take reasonable measures to protect the information you share with
          us. However, no method of transmission over the internet or method of
          storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </Section>

      <Section title="Your Choices & Rights">
        <p>
          You may ask us to access, correct, or delete the personal information
          you have provided, or to stop contacting you, by reaching out using
          the details below. We will respond as required by applicable law.
        </p>
        <p>
          <strong>Texas residents.</strong> Under the Texas Data Privacy and
          Security Act, Texas consumers have rights regarding their personal
          data, including the right to know what we collect, to request
          correction or deletion, and to opt out of the sale of personal data or
          targeted advertising. We do not sell your personal data or use it for
          targeted advertising. To exercise any of these rights, contact us
          using the information below.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          Our website and services are intended for adults. We do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided us with personal information, please contact us and
          we will delete it.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do,
          we&rsquo;ll revise the &ldquo;Last updated&rdquo; date above. Changes
          are effective when posted on this page.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, contact {COMPANY}, which serves {SERVICE_AREA}:
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li>
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-slate-900 underline underline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>Phone: {CONTACT_PHONE}</li>
        </ul>
      </Section>
    </main>
  );
}
