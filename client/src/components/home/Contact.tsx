import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es muy corto" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Número inválido" }),
  interest: z.string().min(1, { message: "Selecciona un interés" }),
  message: z.string().min(10, { message: "El mensaje debe ser más detallado" }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo a la brevedad.",
      className: "bg-primary text-white border-secondary",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Form Side */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-xs">Hablemos</h2>
              <h3 className="text-3xl font-serif font-bold text-primary">Agenda tu Asesoría</h3>
              <p className="text-gray-500 mt-2">Déjanos tus datos y te contactaremos hoy mismo.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan Pérez" {...field} className="bg-gray-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="55 1234 5678" {...field} className="bg-gray-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="juan@ejemplo.com" {...field} className="bg-gray-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Estoy interesado en</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Seleccionar" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="comprar">Comprar Propiedad</SelectItem>
                            <SelectItem value="vender">Vender Propiedad</SelectItem>
                            <SelectItem value="rentar">Rentar</SelectItem>
                            <SelectItem value="inversion">Inversión</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntanos qué estás buscando..." 
                          className="resize-none bg-gray-50 min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 h-12 text-lg">
                  Solicitar Asesoría <Send size={18} className="ml-2" />
                </Button>
              </form>
            </Form>
          </div>

          {/* Info Side */}
          <div className="w-full md:w-2/5 bg-primary text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-secondary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Llámanos</p>
                    <p className="text-gray-300">+52 (55) 1234 5678</p>
                    <p className="text-gray-300 text-sm">Lun-Vie: 9am - 7pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-secondary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Escríbenos</p>
                    <p className="text-gray-300 break-words">contacto@carlosrodriguez.mx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Visítanos</p>
                    <p className="text-gray-300">
                      Av. Reforma 222, Torre 1, Piso 25<br/>
                      Juárez, Cuauhtémoc<br/>
                      06600 Ciudad de México, CDMX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                WhatsApp Directo
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Map Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 -z-0 opacity-50 hidden md:block">
         {/* Placeholder for map image or pattern */}
         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/city-fields.png')] opacity-20"></div>
      </div>
    </section>
  );
}