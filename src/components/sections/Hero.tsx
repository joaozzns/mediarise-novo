
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mediarise.jpg";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Instagram } from "lucide-react";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "portfolio", "depoimentos", "contato"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkClass = (sectionId: string) =>
    `story-link transition-colors cursor-pointer ${
      activeSection === sectionId ? "text-primary font-semibold" : "text-foreground hover:text-primary"
    }`;

  return (
    <header className="relative overflow-hidden">
      <nav className="container py-6 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection("inicio")} 
          className="flex items-center gap-2" 
          aria-label="Mediarise - Início"
        >
          <img
            src="/lovable-uploads/683f8cff-d5e9-405e-8cfb-af4a3d755275.png"
            alt="Logo Mediarise Design & Marketing"
            className="h-10 w-auto object-contain"
            width={152}
            height={36}
            loading="eager"
            decoding="async"
          />
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollToSection("servicos")} className={navLinkClass("servicos")}>
            Serviços
          </button>
          <button onClick={() => scrollToSection("portfolio")} className={navLinkClass("portfolio")}>
            Portfólio
          </button>
          <button onClick={() => scrollToSection("depoimentos")} className={navLinkClass("depoimentos")}>
            Depoimentos
          </button>
          <button onClick={() => scrollToSection("contato")} className={navLinkClass("contato")}>
            Contato
          </button>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" asChild>
            <a href="#contato">Fale com a gente</a>
          </Button>
          <Button variant="hero" size="icon" asChild>
            <a href="https://www.instagram.com/agenciamediarise/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Mediarise">
              <Instagram />
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="hero" size="icon" aria-label="Abrir menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:w-80">
              <nav className="mt-8 grid gap-4 text-lg">
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("servicos")} className={navLinkClass("servicos")}>
                    Serviços
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("portfolio")} className={navLinkClass("portfolio")}>
                    Portfólio
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("depoimentos")} className={navLinkClass("depoimentos")}>
                    Depoimentos
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button onClick={() => scrollToSection("contato")} className={navLinkClass("contato")}>
                    Contato
                  </button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="relative">
        <div className="absolute inset-0 bg-hero" aria-hidden="true" />
        <img
          src={heroImage}
          alt="Fundo abstrato escuro com brilho amarelo moderno"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-3xl animate-enter">
            <h1 className="font-brand text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Transformamos marcas em referências no mercado.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Estratégias inteligentes de Marketing para negócios premium que querem
              crescer mais rápido e com consistência.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="brand" size="lg" asChild>
                <a href="https://wa.me/5531986173170?text=Agende%20uma%20Consultoria%20Gratuita">Agende uma Consultoria Gratuita</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">Ver portfólio</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
