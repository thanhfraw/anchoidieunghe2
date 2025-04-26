import FadeInSection from "./ui/FadeInSection";
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#e0ded8] z-10"></div>
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center"></div>

      {/* Content */}
      <FadeInSection className="container relative z-20 text-center flex flex-col items-center gap-4 ">
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-black mb-1 leading-tight whitespace-nowrap">
          ĂN CHƠI ĐIỆU NGHỆ
        </h1>
        <p className="font-san font-light italic text-lg md:text-xl lg:text-2xl mb-4 text-black">
          {/* <p className="font-sans text-sm md:text-3xl lg:text-4xl"> */}
          ăn chơi không hậu quả
          {/* </p> */}
        </p>
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
