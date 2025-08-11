import { Megaphone, Target, Palette, Layout, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Social Media",
    desc: "Gestão estratégica e criação de conteúdo de alto impacto para fortalecer sua presença, gerar desejo e atrair clientes certos.",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    desc: "Campanhas de performance com foco em leads e vendas.",
  },
  { icon: Palette, title: "Branding", desc: "Posicionamento e identidade visual únicos para destacar sua marca e criar conexão" },
  {
    icon: Layout,
    title: "Landing Pages/Sites",
    desc: "Páginas rápidas, bonitas e com design estratégico para transformar visitantes em clientes.",
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    desc: "Estratégia integrada que une presença online, performance e branding para crescimento sustentável.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Nossas Especialidades</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Estratégias completas e personalizadas para gerar resultados reais, com estética premium e foco total no crescimento do seu negócio.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="group border border-border/60 hover:border-primary/40 transition-colors duration-200 hover-scale">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                  <Icon />
                </div>
                <CardTitle className="mt-3 text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="brand" size="lg" asChild>
            <a href="https://wa.me/5531986173170?text=Quero%20Impulsionar%20Minha%20Marca" aria-label="Entrar em contato para impulsionar marca">
              Quero Impulsionar Minha Marca
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
