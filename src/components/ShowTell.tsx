import FadeInSection from "./ui/FadeInSection";
import AuthGate from "./AuthGate";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import PulsatingButton from "./ui/pulsating-button";
import { Link } from "react-router-dom";

const ShowTell = () => {
  const images = [
    { src: "/cocktail1.jpg", alt: "Signature cocktail" },
    { src: "/bar1.jpeg", alt: "Bar interior" },
    { src: "/cocktail2.jpg", alt: "Cocktail preparation" },
    { src: "/bar2.webp", alt: "Bar seating" },
    { src: "/cocktail3.webp", alt: "Seasonal cocktail" },
    { src: "/bartender.jpg", alt: "Bartender crafting drink" },
  ];

  const menuItems = [
    {
      name: "Mother's Milk",
      description: "Gin, Sake, Cherry Blossom Vermouth, Umeshu",
    },
    {
      name: "Anh Di Dai",
      description: "Jamaican Rum, Campari, Pineapple, Lime, Demerara",
    },
    {
      name: "Pink Panther",
      description: "Bourbon, Aperol, Amaro Nonino, Lemon",
    },
    {
      name: "Luon Vui Tuoi",
      description:
        "Gin, Cherry Heering, DOM Bénédictine, Grenadine, Pineapple, Lime",
    },
    {
      name: "Princes Peach",
      description: "Bourbon, Angostura Bitters, Sugar, Orange",
    },
    {
      name: "Cha Nail",
      description: "Vodka, Coffee Liqueur, Espresso, Vanilla",
    },
  ];

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <section id="showtell" className="py-10 bg-[#111a1c] z-10">
      <FadeInSection className="container">
        <h2 className="font-serif text-4xl text-jigger-gold mb-4 text-center">
          Menu & Gallery
        </h2>

        {!isAuthenticated ? (
          <div className="text-center  text-white">
            <p className="font-bold font-sans text-2xl mt-10">
              Please enter the party code to view this section.
            </p>
            <AuthGate onAuthSuccess={() => setIsAuthenticated(true)} />
          </div>
        ) : (
          <FadeInSection className="flex flex-col justify-center items-center gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Gallery Section as Carousel */}
              <div>
                <h3 className="font-serif text-2xl text-jigger-gold mb-6 text-center">
                  Gallery
                </h3>
                <Carousel className="relative" autoplay autoplayInterval={3000}>
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Menu Section */}
              <div>
                <h3 className="font-serif text-2xl text-jigger-gold mb-6 text-center">
                  Signature Menu
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="border border-jigger-gold/30 p-6 rounded bg-jigger-dark/30"
                    >
                      <h4 className="font-serif text-xl text-jigger-gold mb-2">
                        {item.name}
                      </h4>
                      <p className="text-jigger-cream/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <PulsatingButton
              as={Link} // Use React Router's Link
              to="/gallery" // Navigate to the gallery route
              pulseColor="#ffffff"
              className="inline-block font-serif px-8 py-3 bg-jigger-gold text-jigger-dark font-medium border border-jigger-gold hover:bg-transparent hover:text-jigger-gold transition-colors"
            >
              See Full Gallery
            </PulsatingButton>
          </FadeInSection>
        )}
      </FadeInSection>
    </section>
  );
};

export default ShowTell;
