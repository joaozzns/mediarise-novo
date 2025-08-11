import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Pronto para elevar sua marca?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Fale com a nossa equipe e receba um diagnóstico gratuito do seu marketing.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button variant="brand" size="lg" asChild>
            <a href="mailto:contato@mediarise.agency" aria-label="Enviar e-mail para Mediarise">
              Entrar em contato
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#servicos">Ver serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
