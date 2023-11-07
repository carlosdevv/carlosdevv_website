import { ContactHeader } from "./components/contact-header";
import { HeroContact } from "./components/hero-contact";

export const Contact = () => {
  return (
    <section id="contact" className="h-full w-full mt-32">
      <div className="flex flex-col items-center">
        <ContactHeader />
        <HeroContact />
      </div>
    </section>
  );
};
