import FadeInSection from "./ui/FadeInSection";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FadeInSection className="w-full bg-[#e0ded8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid Container */}
        <div className="py-16 flex justify-evenly items-center flex-col gap-8 lg:flex-row">

          {/* Logo Section */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="w-64 flex flex-col items-center lg:items-start text-center lg:text-left">
              <img
                src="/Logo Combination Mark (short).svg"
                alt="Logo"
                className="object-contain mb-5"
              />
              <p className="text-[#191919]">
                Crafting exceptional cocktail experiences since 2025.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          {/* <ul className="text-lg text-center sm:flex items-center justify-center gap-10 transition-all duration-500">
            <li><a href="#about" className="font-sans text-jigger-gold hover:text-gray-400 font-bold">About</a></li>
            <li><a href="#showtell" className="font-sans text-jigger-gold hover:text-gray-400 font-bold whitespace-nowrap">Menu & Gallery</a></li>
            <li><a href="#reservations" className="font-sans text-jigger-gold hover:text-gray-400 font-bold">Reservation</a></li>
            <li><a href="#contact" className="font-sans text-jigger-gold hover:text-gray-400 font-bold">Contact</a></li>
          </ul> */}

          {/* Social Media Icons */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="flex space-x-4">
              {/* Gmail */}
              <a href="mailto:anchoidiunghe@gmail.com" className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-red-500">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-.4 2L12 11.01 4.4 6h15.2zM4 18V8.36l8 5.33 8-5.33V18H4z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/anchoidieunghe" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-pink-600">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.75a.75.75 0 011.5 0v.5a.75.75 0 01-1.5 0v-.5zm-4.5 1.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-[#191919] ">
              © {currentYear} Ăn Chơi Điệu Nghệ. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </FadeInSection>




  );
};

export default Footer;
