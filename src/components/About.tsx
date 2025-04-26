import FadeInSection from "./ui/FadeInSection";

const About = () => {
  return (
    <section id="about" className="py-20 bg-jigger-dark">
      <FadeInSection className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl text-jigger-gold mb-6">
              Our Story
            </h2>
            <p className="font-sans font-light text-sm text-jigger-cream mb-4 text-justify">
              Our mission is simple: to serve drinks in a space where people can
              gather and celebrate. We believe in the transformative power of
              hospitality to turn strangers into friends. At Ăn Chơi Điệu Nghệ,
              everyone is welcome to experience thoughtfully crafted drinks and
              genuine service.
            </p>
            <p className="font-sans font-light text-sm text-jigger-cream mb-4 text-justify">
              It’s more than just a name — it’s a lifestyle. “Ăn chơi” means to
              have fun, to indulge, to live it up. “Điệu nghệ” means with
              finesse, with flavor, with undeniable style.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 bg-jigger-gold rounded">
              <div className="translate-x-0 -translate-y-4 h-full w-full">
                <img
                  src="/symbol.svg"
                  alt="Jigger & Pony Bar Interior"
                  className="w-full h-full object-cover  filter invert brightness-0"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
