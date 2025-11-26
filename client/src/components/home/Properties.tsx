import { useState } from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { properties } from "@/data/mockData";

export default function Properties() {
  const [filterType, setFilterType] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("Todos");

  const filteredProperties = properties.filter(p => {
    const typeMatch = filterType === "Todos" || p.type === filterType;
    const statusMatch = filterStatus === "Todos" || p.status === filterStatus;
    return typeMatch && statusMatch;
  });

  const propertyTypes = ["Todos", "Casa", "Departamento", "Terreno", "Comercial"];
  const statuses = ["Todos", "Venta", "Renta"];

  return (
    <section id="properties" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Catálogo Exclusivo</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Encuentra tu Espacio Ideal</h3>
          <p className="text-gray-600 text-lg">Explora nuestra selección curada de propiedades premium en las mejores ubicaciones.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 items-end md:items-center justify-between">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
            <div className="space-y-2 w-full md:w-48">
              <label className="text-xs font-semibold uppercase text-gray-500">Tipo de Propiedad</label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 w-full md:w-48">
              <label className="text-xs font-semibold uppercase text-gray-500">Operación</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Estatus" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2 w-full md:flex-1">
              <label className="text-xs font-semibold uppercase text-gray-500">Ubicación o Palabra Clave</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Ej. Polanco, Jardín, Vista" className="pl-10 bg-gray-50 border-gray-200" />
              </div>
            </div>
          </div>
          
          <Button className="bg-primary text-white px-8 h-10 w-full md:w-auto mt-4 md:mt-0">
            Buscar
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary/90 hover:bg-primary text-white border-0 rounded-sm uppercase tracking-wider text-[10px] py-1">
                      {property.status}
                    </Badge>
                    {property.badges.map(badge => (
                      <Badge key={badge} className="bg-secondary/90 hover:bg-secondary text-primary border-0 rounded-sm uppercase tracking-wider text-[10px] py-1">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                    <p className="text-white font-bold text-xl">{property.price}</p>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider mb-2">
                    <span>{property.type}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {property.location}</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {property.title}
                  </h4>
                  
                  <div className="flex justify-between py-4 border-t border-gray-100 text-gray-600">
                    <div className="flex flex-col items-center gap-1">
                      <Bed size={18} className="text-secondary" />
                      <span className="text-xs">{property.specs.bedrooms} Rec.</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Bath size={18} className="text-secondary" />
                      <span className="text-xs">{property.specs.bathrooms} Baños</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Square size={18} className="text-secondary" />
                      <span className="text-xs">{property.specs.area} m²</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-white border border-primary text-primary hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white transition-colors rounded-none md:rounded-sm">
                    Ver Detalles
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
            Ver Todas las Propiedades <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}