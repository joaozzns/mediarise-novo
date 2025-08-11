const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/40">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Por que Escolher a Mediarise?</h2>
          <p className="mt-4 text-muted-foreground">
            A Mediarise é uma agência de marketing focada em gerar crescimento consistente para clínicas estéticas, profissionais de saúde e negócios premium.
            Combinamos estratégia orientada a dados, criatividade de alto nível e execução rápida para entregar resultados reais e mensuráveis.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              ROI acima da média com campanhas otimizadas por dados.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Design elegante e minimalista para destacar sua marca.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Parceria estratégica com acompanhamento contínuo.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border p-8 shadow-elevated">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-bold">+120%</p>
              <p className="text-sm text-muted-foreground">Crescimento médio de leads em apenas 3 meses</p>
            </div>
            <div>
              <p className="text-3xl font-bold">+5M</p>
              <p className="text-sm text-muted-foreground">Impressões qualificadas em campanhas segmentadas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground">Clientes recorrentes graças a resultados consistentes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">7 dias</p>
              <p className="text-sm text-muted-foreground">Tempo médio do planejamento ao lançamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
