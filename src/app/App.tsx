import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Roteiros } from "./components/Roteiros";
import { Gastronomia } from "./components/Gastronomia";
import { BaresECafes } from "./components/BaresECafes";
import { Footer } from "./components/Footer";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Roteiros", href: "#roteiros" },
    { label: "Gastronomia", href: "#gastronomia" },
    { label: "Bares & Cafés", href: "#bares" },
    { label: "Dicas", href: "#dicas" },
    {label: "Contato", href: "https://t.me/TerradaLuzbot", target: "_blank", rel: "noopener noreferrer" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(20,6,2,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,248,240,0.07)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#FFF8F0",
            letterSpacing: "0.02em",
            textDecoration: "none",
          }}
        >
           <em style={{ color: "#F4A940" }}>Terra da Luz</em>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,248,240,0.8)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4A940")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,248,240,0.8)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#roteiros"
            className="px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E8845C, #F4A940)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 14px rgba(232,132,92,0.4)",
            }}
          >
            Ver Roteiros
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: "#FFF8F0" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(20,6,2,0.97)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "rgba(255,248,240,0.8)",
                textDecoration: "none",
                paddingBottom: "8px",
                borderBottom: "1px solid rgba(255,248,240,0.07)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>  
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />
      <Roteiros />
      <Gastronomia />
      <BaresECafes />
      <Footer />
    </div>
  );
}
