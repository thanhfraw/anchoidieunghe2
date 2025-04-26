import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  // State to manage mobile menu open/close toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to apply scroll-based styling (e.g. background color)
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener on mount to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Navbar becomes solid color
      } else {
        setIsScrolled(false); // Navbar remains transparent
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-jigger-gold py-4" // Navbar background when scrolled
        : "bg-[#111a1c] shadow-lg py-4" // Initial navbar style
        }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo linked to hero section */}
        <HashLink to="/#hero" className="text-jigger-gold font-serif text-2xl">
          <div className="w-36 md:w-72 lg:w-72 max-h-12 flex items-center">
            <img
              src="/Logo Combination Mark (short).svg"
              alt="Logo"
              className="object-contain filter invert brightness-0"
            />
          </div>
        </HashLink>

        {/* Mobile menu button (visible on small screens only) */}
        <button
          className="md:hidden text-jigger-cream"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop menu links (hidden on small screens) */}
        <div className="hidden md:flex space-x-8 pt-1">
          <HashLink
            to="/#about"
            className="text-jigger-cream hover:text-jigger-gold transition-colors uppercase"
          >
            About
          </HashLink>
          <HashLink
            to="/#showtell"
            className="text-jigger-cream hover:text-jigger-gold transition-colors uppercase"
          >
            Menu & Gallery
          </HashLink>
          <HashLink
            to="/#reservations"
            className="text-jigger-cream hover:text-jigger-gold transition-colors uppercase"
          >
            Reservations
          </HashLink>
          <HashLink
            to="/#contact"
            className="text-jigger-cream hover:text-jigger-gold transition-colors uppercase"
          >
            Contact
          </HashLink>
        </div>

        {/* Mobile dropdown menu (visible when toggled on small screens) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-jigger-dark p-4 flex flex-col space-y-4">
            <HashLink
              to="/#about"
              className="text-jigger-cream hover:text-jigger-gold transition-colors"
              onClick={() => setIsMenuOpen(false)} // Auto-close menu on link click
            >
              About
            </HashLink>
            <HashLink
              to="/#showtell"
              className="text-jigger-cream hover:text-jigger-gold transition-colors"
              onClick={() => setIsMenuOpen(false)} // Auto-close menu on link click
            >
              Menu & Gallery
            </HashLink>
            <HashLink
              to="/#reservations"
              className="text-jigger-cream hover:text-jigger-gold transition-colors"
              onClick={() => setIsMenuOpen(false)} // Auto-close menu on link click
            >
              Reservations
            </HashLink>
            <HashLink
              to="/#contact"
              className="text-jigger-cream hover:text-jigger-gold transition-colors"
              onClick={() => setIsMenuOpen(false)} // Auto-close menu on link click
            >
              Contact
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
