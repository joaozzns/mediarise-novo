import { Megaphone, Target, Palette, Layout, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Megaphone,
    title: "Social Media",
    desc: "Conteúdo e gestão para fortalecer sua presença e gerar desejo.",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    desc: "Campanhas de performance com foco em leads e vendas.",
  },
  { icon: Palette, title: "Branding", desc: "Posicionamento, identidade e consistência visual." },
  {
    icon: Layout,
    title: "Landing Pages/Sites",
    desc: "Páginas rápidas, bonitas e que convertem mais.",
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    desc: "Estratégia integrada para crescer de forma sustentável.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Serviços</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Soluções completas para levar sua marca para o próximo nível com estética premium e foco em resultados.
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
      </div>
    </section>
  );
};

export default Services;
