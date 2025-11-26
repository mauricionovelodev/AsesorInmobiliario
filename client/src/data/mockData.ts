import { Bed, Bath, Square, Car, Home, Building, MapPin } from "lucide-react";
import image1 from "@assets/stock_images/luxury_modern_home_e_dde114a7.jpg";
import image2 from "@assets/stock_images/modern_luxury_apartm_cfd07cfd.jpg";
import image3 from "@assets/stock_images/modern_villa_with_po_8f6af635.jpg";

export const properties = [
  {
    id: 1,
    title: "Penthouse de Lujo en Reforma",
    type: "Departamento",
    status: "Venta",
    price: "$12,500,000 MXN",
    location: "Lomas de Chapultepec, CDMX",
    specs: {
      area: 280,
      bedrooms: 3,
      bathrooms: 3.5,
      parking: 2
    },
    image: image2,
    badges: ["Exclusiva", "Nuevo"],
    featured: true
  },
  {
    id: 2,
    title: "Residencia Moderna en Valle Real",
    type: "Casa",
    status: "Venta",
    price: "$24,000,000 MXN",
    location: "Zapopan, Jalisco",
    specs: {
      area: 450,
      bedrooms: 4,
      bathrooms: 5,
      parking: 4
    },
    image: image1,
    badges: ["Oportunidad"],
    featured: true
  },
  {
    id: 3,
    title: "Villa con Vista al Mar",
    type: "Casa",
    status: "Renta",
    price: "$85,000 MXN/mes",
    location: "Cancún, Quintana Roo",
    specs: {
      area: 320,
      bedrooms: 3,
      bathrooms: 4,
      parking: 2
    },
    image: image3,
    badges: ["Premium"],
    featured: true
  },
  {
    id: 4,
    title: "Loft Industrial Centro Histórico",
    type: "Departamento",
    status: "Renta",
    price: "$25,000 MXN/mes",
    location: "Centro, CDMX",
    specs: {
      area: 95,
      bedrooms: 1,
      bathrooms: 1.5,
      parking: 1
    },
    image: image2,
    badges: [],
    featured: false
  },
  {
    id: 5,
    title: "Oficinas Corporativas Santa Fe",
    type: "Comercial",
    status: "Renta",
    price: "$120,000 MXN/mes",
    location: "Santa Fe, CDMX",
    specs: {
      area: 200,
      bedrooms: 0,
      bathrooms: 2,
      parking: 5
    },
    image: image1, // Reusing for now
    badges: ["Nuevo"],
    featured: false
  },
  {
    id: 6,
    title: "Terreno Residencial Premium",
    type: "Terreno",
    status: "Venta",
    price: "$5,500,000 MXN",
    location: "Mérida, Yucatán",
    specs: {
      area: 600,
      bedrooms: 0,
      bathrooms: 0,
      parking: 0
    },
    image: image3, // Reusing for now
    badges: ["Inversión"],
    featured: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sofia Mendoza",
    role: "Inversionista",
    content: "La asesoría de Carlos fue fundamental para encontrar la propiedad ideal. Su conocimiento del mercado y profesionalismo son inigualables.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Roberto Alarcón",
    role: "Comprador Primer Hogar",
    content: "Gracias a su paciencia y dedicación, logramos comprar nuestra primera casa sin estrés. Nos guió en cada paso del proceso.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Elena Torres",
    role: "Vendedora",
    content: "Vendió mi propiedad en tiempo récord y al precio que buscaba. La estrategia de marketing que utiliza es de otro nivel.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const stats = [
  { label: "Años de Experiencia", value: "12+", icon: Building },
  { label: "Propiedades Vendidas", value: "350+", icon: Home },
  { label: "Clientes Satisfechos", value: "500+", icon: Car }, // Using Car as placeholder for Client icon if user icon not imported, or use generic
  { label: "Valor Vendido (MXN)", value: "$850M+", icon: MapPin }
];