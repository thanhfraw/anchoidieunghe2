import FadeInSection from "./ui/FadeInSection";
import { Mail, Instagram } from "lucide-react"; // Optional: use icons if you're using Lucide or Heroicons

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#191919] text-white">
      <FadeInSection className="container max-w-3xl mx-auto px-4 text-center space-y-10">
        <div className="w-full h-full">
          <img
            src="/public/contact/contact-background-cut.png"
            alt="Drink setup"
            className="w-full h-full object-cover rounded transition duration-300"
          />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl text-jigger-gold">Contact Us</h2>


        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-base font-serif">
          <a
            href="mailto:anchoidiunghe@gmail.com"
            className="text-jigger-cream hover:text-jigger-gold transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            anchoidiunghe@gmail.com
          </a>

          <a
            href="https://www.instagram.com/anchoidieunghe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jigger-cream hover:text-jigger-gold transition-colors flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            @anchoidunghe
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
