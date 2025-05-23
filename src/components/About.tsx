import { useState } from "react";
import FadeInSection from "./ui/FadeInSection";

const About = () => {
  const [selectedImage, setSelectedImage] = useState("/about/main.jpg");

  const thumbnails = [
    "/about/thumb1.jpg",
    "/about/thumb2.jpg",
    "/about/thumb3.jpg",
    "/about/thumb4.jpg",
  ];

  return (
    <section id="about" className="relative bg-[#d4d2ca] py-10 overflow-hidden">
      {/* Nội dung chính */}
      <FadeInSection className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE LEFT SIDE */}
        <div className="w-full h-full">
          <img
            src={selectedImage}
            alt="Drink setup"
            className="w-full h-full object-cover rounded transition duration-300"
          />
        </div>

        {/* TEXT RIGHT SIDE */}
        <div className="flex items-center justify-center h-full">
          <div className="text-[#111a1c] max-w-md w-full text-justify">
            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-xl font-bold mb-4 uppercase tracking-wide">
              Our Story
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base font-light mb-4">
              Our mission is simple: to create a space where people can gather and celebrate.
              We believe in the magic of hospitality to turn strangers into friends.
              Our name says it all. “Ăn chơi” is all about having fun, living it up,
              and making the most out of every moment.
              “Điệu nghệ” means doing it with extra style, extra flavor, and a whole lot of heart.
              It’s not just a name — it’s a way of living.

            </p>
            <p className="text-sm md:text-base font-light mb-6">
              It’s more than just a name — it’s a lifestyle. “Ăn chơi” means to
              have fun, to indulge, to live it up. “Điệu nghệ” means with
              finesse, with flavor, with undeniable style.
            </p>

            {/* Thumbnails with click + highlight */}
            <div className="flex justify-center space-x-4 mb-6">
              {thumbnails.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(src)}
                  className={`w-24 h-24 rounded overflow-hidden border-2 transition duration-300 ${selectedImage === src
                    ? "border-black"
                    : "border-transparent"
                    } hover:scale-105`}
                >
                  <img
                    src={src}
                    alt={`thumb-${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
