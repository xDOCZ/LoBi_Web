import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/app-layout";
import { useDataStore } from "@/lib/data-context";
import heroVilla from "@/imagens/home.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { data, loading, error } = useDataStore();

  if (loading) {
    return <AppLayout title="Carregando dados..." subtitle="Lendo arquivo JSON do projeto." />;
  }

  if (error) {
    return <AppLayout title="Erro de carregamento" subtitle={error} />;
  }

  const cards = [
    {
      title: "Imobiliarias",
      count: data.imobiliarias.length,
      to: "/imobiliarias",
      text: "Parceiros especializados para cada perfil de cliente.",
    },
    {
      title: "Imoveis",
      count: data.imoveis.length,
      to: "/imoveis",
      text: "Colecao curada de oportunidades para venda e locacao.",
    },
    {
      title: "Corretores",
      count: data.corretores.length,
      to: "/agentes",
      text: "Consultores prontos para conduzir cada etapa da jornada.",
    },
    {
      title: "Propostas",
      count: data.propostas.length,
      to: "/propostas",
      text: "Historico de negociaoes e decisoes comerciais.",
    },
  ];

  return (
    <AppLayout
      title="Lo&Bi Locacao de Imoveis"
      subtitle="Plataforma SPA com dados reais, navegacao por entidades e operacao administrativa completa."
    >
      <section className="mb-6 overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-soft)]">
        <div className="relative h-[300px] w-full md:h-[360px]">
          <img src={heroVilla} alt="Panorama de imovel" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--olive-deep)]/80 via-[var(--olive-deep)]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-cream md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">Locacao com curadoria</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1] md:text-5xl">
              O endereco do seu proximo capitulo.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-cream/85">
              Da primeira busca a assinatura do contrato, uma experiencia unificada para operacao e atendimento.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
          >
            <h2 className="font-display text-3xl text-[var(--olive-deep)]">{card.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
            <p className="mt-4 font-display text-5xl text-[var(--gold-deep)]">{card.count}</p>
            <Link
              to={card.to}
              className="mt-4 inline-flex rounded-full border border-border px-3 py-2 text-sm transition hover:border-[var(--gold)] hover:bg-[var(--gold)]/10"
            >
              Abrir {card.title.toLowerCase()}
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-sm border border-border bg-card p-5 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
        <p>
          Credenciais administrativas para CRUD: usuario <strong>admin</strong> e senha
          <strong> admin123</strong>.
        </p>
        <p className="mt-2">
          Todo o conteudo de negocio e carregado dinamicamente de
          <strong> src/data/locacao.json</strong>.
        </p>
      </section>
    </AppLayout>
  );
}
