import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">
              CARLOS <span className="text-secondary">RODRIGUEZ</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Asesoría inmobiliaria experta para encontrar el hogar de tus sueños o la inversión perfecta. Compromiso, transparencia y resultados.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-secondary">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {["Inicio", "Propiedades", "Sobre Mí", "Contacto", "Política de Privacidad"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-secondary">Contacto & Newsletter</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="shrink-0 text-secondary mt-1" size={18} />
                <span>Av. Reforma 222, Juárez,<br />Ciudad de México, CDMX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="shrink-0 text-secondary" size={18} />
                <span>+52 (55) 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="shrink-0 text-secondary" size={18} />
                <span>contacto@carlosrodriguez.mx</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Recibe oportunidades exclusivas</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm w-full focus:outline-none focus:border-secondary transition-colors"
                />
                <Button size="sm" className="bg-secondary text-primary hover:bg-secondary/90">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Carlos Rodriguez Inmobiliaria. Todos los derechos reservados.</p>
          <p>Diseñado con Replit</p>
        </div>
      </div>
    </footer>
  );
}