import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/assets/logo.png"
            alt="Heritages and Routes Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {["home", "about", "gallery", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300
                bg-gradient-to-r from-olive-600 to-yellow-400 text-black
                hover:scale-105 hover:shadow-[0_0_10px_rgba(0,0,0,0.7)]
                active:scale-95"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 w-full
          bg-gradient-to-b from-olive-800/95 to-yellow-300/90
          backdrop-blur-md border-t border-black/10 shadow-lg
          animate-[fadeInDown_0.3s_ease-in-out]"
        >
          <div className="flex flex-col items-center py-5 space-y-4">
            {["home", "about", "gallery", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="w-10/12 py-3 rounded-lg font-semibold text-black
                  bg-gradient-to-r from-yellow-400 to-olive-600
                  shadow-[0_0_6px_rgba(0,0,0,0.3)]
                  hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
