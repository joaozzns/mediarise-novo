import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "A Mediarise trouxe clareza estratégica e um padrão visual que elevou nossa marca. O melhor: resultados rápidos.",
    name: "Dra. Camila, Clínica Essenza",
  },
  {
    quote:
      "Reduzimos o CAC e aumentamos os agendamentos em 2 meses. Equipe próxima e muito profissional.",
    name: "Dr. Rafael, Centro Odonto Prime",
  },
  {
    quote:
      "Trabalho impecável em branding e social media. Recebemos elogios dos clientes todos os dias.",
    name: "Mariana, Boutique Lux",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Depoimentos</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover-scale">
              <CardContent className="p-6">
                <p className="text-sm leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-xs text-muted-foreground">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
