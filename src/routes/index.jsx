import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/app-layout";
import { useDataStore } from "@/lib/data-context";

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
      text: "Empresas cadastradas no dominio de locacao.",
    },
    {
      title: "Imoveis",
      count: data.imoveis.length,
      to: "/imoveis",
      text: "Catalogo de imoveis para venda e locacao.",
    },
    {
      title: "Corretores",
      count: data.corretores.length,
      to: "/agentes",
      text: "Profissionais responsaveis pelos atendimentos.",
    },
    {
      title: "Propostas",
      count: data.propostas.length,
      to: "/propostas",
      text: "Historico de propostas e negociacoes.",
    },
  ];

  return (
    <AppLayout
      title="Projeto SPODWE2 - Grupo Locacao de Imoveis"
      subtitle="SPA em React com rotas, dados de JSON, uso de props/state e CRUD completo de entidades do dominio."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className="rounded-sm border border-border bg-card p-5">
            <h2 className="font-display text-3xl text-[var(--olive-deep)]">{card.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
            <p className="mt-4 text-4xl font-semibold">{card.count}</p>
            <Link
              to={card.to}
              className="mt-4 inline-flex rounded-sm border border-border px-3 py-2 text-sm hover:bg-muted"
            >
              Abrir {card.title.toLowerCase()}
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-sm border border-border bg-card p-5 text-sm text-muted-foreground">
        <p>
          Credenciais de administrador para CRUD: usuario <strong>admin</strong> e senha
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
