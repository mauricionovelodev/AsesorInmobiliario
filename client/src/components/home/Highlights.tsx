import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/mockData";

export default function Highlights() {
  const featured = properties.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Colección Premium</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2">Propiedades Destacadas</h3>
          </div>
          <Button variant="link" className="text-white hover:text-secondary p-0 text-lg">
            Ver colección completa <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer relative overflow-hidden rounded-sm h-[500px]"
            >
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="mb-2 flex gap-2">
                  {property.badges.map(badge => (
                    <span key={badge} className="bg-secondary text-primary text-xs font-bold px-2 py-1 uppercase tracking-wider">
                      {badge}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-2 leading-tight">{property.title}</h4>
                <p className="text-secondary text-xl font-medium mb-4">{property.price}</p>
                <div className="h-0 overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    Ubicado en {property.location}. {property.specs.bedrooms} recámaras, {property.specs.bathrooms} baños.
                  </p>
                  <span className="text-white text-sm font-bold border-b border-secondary pb-1 inline-block">
                    EXPLORAR PROPIEDAD
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}