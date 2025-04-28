import FadeInSection from "./ui/FadeInSection";
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background color */}
      <div className="absolute inset-0 bg-[#e0ded8] z-10"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/hero/hero-main.png')" }}
      ></div>

      {/* Content */}
      <FadeInSection className="container relative z-20 text-center flex flex-col items-center gap-4 ">
        {/* Head */}
        <h1 className="
          font-serif 
          text-4xl md:text-7xl lg:text-8xl 
          text-white shadow-text
          mb-1 leading-tight whitespace-nowrap">
          ĂN CHƠI ĐIỆU NGHỆ
        </h1>
        {/* Paragraph */}
        <p className="
          font-san font-light italic 
          text-lg md:text-xl lg:text-2xl mb-4 
          text-white shadow-text">
          ăn chơi không hậu quả
        </p>
        {/* Button */}
        <a
          href="#reservations"
          className="inline-block px-8 py-3 
          bg-[#111a1c]
          text-white font-medium 
          border border-black hover:bg-transparent 
          hover:text-black transition-colors"
        >
          Confirm Your Spot
        </a>
      </FadeInSection>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-jigger-cream"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
