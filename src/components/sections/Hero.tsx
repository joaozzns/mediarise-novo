import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mediarise.jpg";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="container py-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Mediarise - Início">
          <img
            src="/lovable-uploads/87e88eee-c826-4d85-8459-a293e617e55a.png"
            alt="Logo Mediarise Design & Marketing"
            className="h-8 w-auto object-contain"
            width={152}
            height={36}
            loading="eager"
            decoding="async"
          />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicos" className="story-link">Serviços</a>
          <a href="#portfolio" className="story-link">Portfólio</a>
          <a href="#depoimentos" className="story-link">Depoimentos</a>
          <a href="#contato" className="story-link">Contato</a>
        </div>
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contato">Fale com a gente</a>
          </Button>
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
              Eleve sua marca com a Mediarise
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Agência de Marketing para negócios premium. Social Media, Tráfego Pago,
              Branding, Landing Pages/Sites e Marketing Digital focados em resultados.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="brand" size="lg" asChild>
                <a href="#contato">Começar agora</a>
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
