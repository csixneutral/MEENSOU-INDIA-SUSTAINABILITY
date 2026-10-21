import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Meensou India website handles enquiry information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="What this website does with an enquiry."
        lede="The contact form does not store messages on the site. It opens an email to the company."
      />
      <section className="bg-ivory py-16">
        <div className="shell max-w-3xl space-y-5 leading-8 text-charcoal/80">
          <p>
            If you use the contact form, your browser prepares an email to {site.email} containing the name, email, organisation, phone, topic and message you entered. That email is sent only if you send it from your own mail application. This website does not keep a copy.
          </p>
          <p>
            Server logs on the host that serves this site may record technical data such as IP address and browser type, as is ordinary for web hosting. The company uses contact details you send in order to reply. They are not sold.
          </p>
          <p>
            Project photographs on this site come from Meensou’s own published galleries. If you appear in a photograph and want it reviewed, write to {site.email}.
          </p>
          <p>Questions about this notice can be sent to the same address.</p>
        </div>
      </section>
    </>
  );
}
