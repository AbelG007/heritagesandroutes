import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import heroBackground from "@/assets/herobg3.jpg";
import aboutSection from "@/pages/aboutus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBackground} alt="Hero" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">Heritages And Routes</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up opacity-90">
            From premium to budget-friendly tours, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />

      {/* About */}
      {aboutSection()}

      {/* Services */}
      <ServicesSection />

      {/* Contact */}
      <ContactSection />

      {/* footer */}
      <Footer />
    </div>
  );
}
