const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/40">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Sobre a Mediarise</h2>
          <p className="mt-4 text-muted-foreground">
            Somos uma agência de marketing moderna, profissional e próxima do cliente. Nosso
            foco é gerar crescimento consistente para clínicas estéticas, profissionais de saúde
            e negócios premium por meio de estratégia, criatividade e performance.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Estratégia orientada a dados e foco em ROI
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Design minimalista e comunicação clara
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Parceria próxima, com transparência e acompanhamento
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border p-8 shadow-elevated">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-bold">+120%</p>
              <p className="text-sm text-muted-foreground">Crescimento médio de leads</p>
            </div>
            <div>
              <p className="text-3xl font-bold">+5M</p>
              <p className="text-sm text-muted-foreground">Impressões em campanhas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground">Clientes recorrentes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">7 dias</p>
              <p className="text-sm text-muted-foreground">Tempo médio para ir ao ar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
