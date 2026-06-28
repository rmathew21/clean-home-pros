import { termsMetadata } from "@/lib/metadata";
import { LegalPageSchema } from "@/components/schema";

const COMPANY = "Clean Home Pros LLC";
const CONTACT_EMAIL = "cleanhomepros@yahoo.com";
const CONTACT_PHONE = "(832) 776-9288";
const SERVICE_AREA = "the Greater Houston area";
const STATE = "Texas";
const LAST_UPDATED = "June 26, 2026";

export const metadata = termsMetadata;

function Flag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-yellow-100 px-1 py0.5 font-medium text-yellow-900">
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

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <LegalPageSchema
        name="Terms of Service"
        description="The terms and conditions that apply when you book or use residential cleaning services from Clean Home Pros LLC."
        path="terms"
      />
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-5 text-sm text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="mt-8 space-y-3 text-slate-700 leading-relaxed">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
          website operated by {COMPANY} (&ldquo;{COMPANY},&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and the
          residential cleaning services we provide. By using our website,
          requesting a quote, or booking a service, you agree to these Terms. If
          you do not agree, please do not use our website or services.
        </p>
      </div>

      <Section title="1. Our Services">
        <p>
          {COMPANY} provides residential cleaning services in {SERVICE_AREA},
          including regular (recurring) cleans, deep cleans, and move-in /
          move-out cleans. The specific tasks included in your service are based
          on the plan and scope agreed upon when you book. Services and
          availability may change over time.
        </p>
      </Section>

      <Section title="2. Quotes & Booking">
        <p>
          Quotes and estimates provided through our website, by phone, or by
          text are based on the information you give us and are not final until
          confirmed. The final price may be adjusted if the actual condition,
          size, or scope of the home differs from what was described. A booking
          is confirmed only once we have agreed on the service, date, and price
          with you.
        </p>
      </Section>

      <Section title="3. Scheduling, Access & Your Responsibilities">
        <p>
          To allow us to perform the service, you agree to provide safe and
          reasonable access to the property at the scheduled time. If we are
          unable to access the property, or are turned away after arrival, a
          cancellation fee of $50 may apply.
        </p>
        <p>You also agree to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Secure cash, jewelry, and other valuables or irreplaceable items
            before the cleaning;
          </li>
          <li>
            Inform us in advance of pets, security systems, hazards, or areas
            you do not want cleaned; and
          </li>
          <li>
            Provide a safe working environment free of hazardous conditions.
          </li>
        </ul>
        <p>You agree to provide the following products:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Toilet brushes</li>
          <li>Paper towels</li>
          <li>Trashbags</li>
        </ul>
        <p>
          If you have wood floors, you will also provide a suitable wood-floor
          cleaner&nbsp;&mdash; Bona, Method Wood Floor Cleaner, or
          Murphy&rsquo;s Oil Soap.
        </p>
      </Section>

      <Section title="4. Cancellations & Rescheduling">
        <p>
          If you need to cancel or reschedule, please let us know at least 24
          hours in advance. Cancellations or reschedules made with less notice
          may be subject to a $50 cancellation fee. We reserve the right to
          reschedule a service due to weather, illness, or other circumstances
          beyond our reasonable control, and will work with you to find a new
          time.
        </p>
      </Section>

      <Section title="5. Pricing & Payment">
        <p>
          Prices are as quoted and agreed at the time of booking. Payment is due
          on the day of service upon completion, unless otherwise agreed in
          writing. We accept cash, check, or Zelle. Recurring service prices may
          be adjusted with advance notice to you.
        </p>
      </Section>

      <Section title="6. Satisfaction Guarantee">
        <p>
          Your satisfaction matters to us. If you are not satisfied with any
          area we cleaned, contact us within 24 hours of the service and we will
          return to re-clean the affected area at no additional charge. This
          re-clean is our sole obligation, and refunds, if any, are provided at
          our discretion.
        </p>
      </Section>

      <Section title="7. Damage, Breakage & Liability">
        <p>
          We treat your home with care. If we are responsible for damaging or
          breaking an item during a cleaning, please notify us within 24 hours
          so we can assess and address it fairly. We are not responsible for
          damage caused by normal wear and tear, pre-existing damage, items that
          were not properly secured or mounted, or conditions outside our
          control.
        </p>
        <p>
          To the fullest extent permitted by law, our total liability arising
          from any service is limited to the amount you paid for that service.
          We are not liable for indirect, incidental, or consequential damages.
        </p>
        <p>
          {COMPANY} carries general liability insurance for your protection and
          peace of mind.
        </p>
      </Section>

      <Section title="8. Non-Solicitation of Staff">
        <p>
          Our team members are a vital part of our business. You agree not to
          directly hire or engage any {COMPANY} staff member, outside of our
          company, for cleaning or related services during the time we provide
          services to you and for 6 months afterward.
        </p>
      </Section>

      <Section title="9. Website Content & Intellectual Property">
        <p>
          The content on this website, including text, logos, images, and
          design, is owned by or licensed to {COMPANY} and is protected by
          applicable laws. You may not copy, reproduce, or use it without our
          permission, except for personal, non-commercial use of the site as
          intended.
        </p>
      </Section>

      <Section title="10. Disclaimers">
        <p>
          Our website is provided &ldquo;as is&rdquo; without warranties of any
          kind. While we strive for accuracy, we do not guarantee that the
          website will always be available, error-free, or up to date. Service
          results may vary depending on the condition of the property.
        </p>
      </Section>

      <Section title="11. Indemnification">
        <p>
          You agree to indemnify and hold harmless {COMPANY} and its team from
          claims, losses, or expenses arising out of your breach of these Terms,
          your misuse of our website, or unsafe conditions at the property that
          were not disclosed to us.
        </p>
      </Section>

      <Section title="12. Governing Law & Dispute Resolution">
        <p>
          These Terms are governed by the laws of the State of {STATE}, without
          regard to its conflict-of-laws rules. We encourage you to contact us
          first so we can try to resolve any concern informally. Any dispute
          that cannot be resolved that way will be handled in the state or
          federal courts located in Fort Bend County, and you consent to that
          venue.
        </p>
        {/* <p>
          <Flag>
            [Confirm with attorney: whether to include a binding arbitration
            clause and class-action waiver instead of court venue.]
          </Flag>
        </p> */}
      </Section>

      <Section title="13. Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we do, we&rsquo;ll
          revise the &ldquo;Last updated&rdquo; date above. Your continued use
          of our website or services after changes are posted means you accept
          the updated Terms.
        </p>
      </Section>

      <Section title="14. Contact Us">
        <p>Questions about these Terms? Contact {COMPANY}:</p>
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
