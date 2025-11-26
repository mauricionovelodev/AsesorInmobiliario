import { motion } from "framer-motion";
import { CheckCircle2, Award, TrendingUp, Users } from "lucide-react";
import { stats } from "@/data/mockData";
import agentImage from "@assets/stock_images/professional_real_es_da4d8cc5.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Sobre Mí</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Más que un asesor, <br/>tu aliado estratégico.
              </h3>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Con más de una década de experiencia en el mercado inmobiliario de lujo, mi misión es transformar el proceso de compra-venta en una experiencia fluida, transparente y exitosa.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Me especializo en conectar a clientes exigentes con propiedades excepcionales. Mi filosofía se basa en la honestidad, el análisis de datos preciso y una negociación estratégica que siempre prioriza tus intereses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Certificación AMPI Nacional",
                "Especialista en Lujo",
                "Asesoría Legal y Fiscal",
                "Marketing Premium"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-3xl font-serif font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src={agentImage} 
                alt="Carlos Rodriguez Agente Inmobiliario" 
                className="w-full h-[600px] object-cover object-top"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 z-0 rounded-full blur-2xl"></div>
            <div className="absolute top-10 -right-10 w-60 h-60 bg-primary/5 z-0 rounded-full blur-3xl"></div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 z-20 bg-white p-6 shadow-lg max-w-xs hidden md:block border-l-4 border-secondary">
              <div className="flex gap-4 items-center mb-3">
                <div className="bg-secondary/10 p-2 rounded-full text-secondary">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-bold text-primary">Top Producer 2024</p>
                  <p className="text-xs text-gray-500">Reconocimiento Nacional</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">"La excelencia no es un acto, es un hábito."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}