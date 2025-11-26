import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Highlights from "@/components/home/Highlights";
import Properties from "@/components/home/Properties";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Properties />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}