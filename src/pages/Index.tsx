import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground font-brand">
      <SEO
        title="Mediarise | Agência de Marketing Premium"
        description="Agência de Marketing para clínicas, saúde e negócios premium. Social Media, Tráfego Pago, Branding e Sites que elevam sua marca."
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
    </div>
  );
};

export default Index;
