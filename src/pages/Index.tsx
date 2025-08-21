
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground font-brand">
      <SEO
        title="Agência MediaRise"
        description="Agência de marketing especializada em clínicas estéticas, saúde e negócios premium, unindo dados, criatividade e agilidade para gerar crescimento consistente e resultados mensuráveis."
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mediarise. Todos os direitos reservados.
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
