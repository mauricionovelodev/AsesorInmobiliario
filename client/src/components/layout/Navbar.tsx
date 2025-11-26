import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Propiedades", href: "#properties" },
    { name: "Testimoniales", href: "#testimonials" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-primary/95 backdrop-blur-md py-3 border-white/10 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className={cn("text-2xl font-serif font-bold tracking-tighter transition-colors cursor-pointer", isScrolled ? "text-white" : "text-white")}>
          CARLOS <span className="text-secondary">RODRIGUEZ</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-secondary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold transition-all"
            onClick={() => window.location.href = "#contact"}
          >
            Agendar Cita
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-secondary py-2 block text-center text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90">
            Agendar Asesoría
          </Button>
        </div>
      )}
    </nav>
  );
}