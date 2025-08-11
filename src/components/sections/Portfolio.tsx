import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cases = [
  {
    title: "Clínica de Estética",
    result: "+180% em agendamentos",
    desc: "SEO local, redes sociais e tráfego pago integrados, garantindo demanda previsível e constante.",
  },
  {
    title: "Centro Odontológico",
    result: "-35% no custo de aquisição de clientes (CAC)",
    desc: "Otimização de campanhas e novas landing pages.",
  },
  {
    title: "Marca Premium",
    result: "+3x alcance orgânico",
    desc: "Reposicionamento e calendário de conteúdo de alto impacto.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-accent text-accent-foreground">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Portfólio e Casos</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Conheça alguns projetos que aumentaram vendas, melhoraram presença digital e elevaram marcas ao próximo nível.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Card key={c.title} className="hover-scale">
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-semibold">{c.result}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
