import MainHeading from "./MainHeading";
import ContactForm from "./ContactForm";

export default function ContactsPage() {
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-12">
          <div className="relative">
            <MainHeading headingText="CONTACT ME" />
          </div>

          <section className="relative">
            <div className="border border-zinc-700 bg-zinc-800/30 p-6">
              <h2 className="mb-4 flex items-center font-mono text-xl">
                SEND MESSAGE
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
