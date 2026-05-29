import { Link, createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/app-layout";
import { useDataStore } from "@/lib/data-context";
import { imageMap } from "@/lib/image-map";

export const Route = createFileRoute("/imoveis/$id")({
  component: ImovelDetailPage,
});

function ImovelDetailPage() {
  const { id } = Route.useParams();
  const { data, loading, error } = useDataStore();

  if (loading) {
    return <AppLayout title="Carregando detalhes do imovel..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponiveis"} />;
  }

  const imovelId = Number(id);
  const imovel = data.imoveis.find((item) => item.id === imovelId);

  if (!imovel) {
    return (
      <AppLayout title="Imovel nao encontrado" subtitle="O registro solicitado nao existe na base atual.">
        <Link
          to="/imoveis"
          className="inline-flex rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
        >
          Voltar para lista de imoveis
        </Link>
      </AppLayout>
    );
  }

  const imobiliaria = data.imobiliarias.find((item) => item.id === imovel.imobiliariaId);
  const corretor = data.corretores.find((item) => item.id === imovel.corretorId);

  return (
    <AppLayout title={imovel.titulo} subtitle="Pagina dinamica gerada por rota /imoveis/$id com dados em tempo real.">
      <article className="overflow-hidden rounded-sm border border-border bg-card">
        <img
          src={imageMap[imovel.imageKey]}
          alt={imovel.titulo}
          className="h-[360px] w-full object-cover"
        />
        <div className="grid gap-4 p-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Tipo: {imovel.tipo}</p>
            <p className="text-sm text-muted-foreground">Operacao: {imovel.operacao}</p>
            <p className="text-sm text-muted-foreground">Local: {imovel.bairro}, {imovel.cidade}</p>
            <p className="text-sm text-muted-foreground">Area: {imovel.area} m2</p>
            <p className="text-sm text-muted-foreground">Quartos: {imovel.quartos}</p>
            <p className="text-sm text-muted-foreground">Banheiros: {imovel.banheiros}</p>
            <p className="text-lg font-semibold">R$ {Number(imovel.valor).toLocaleString("pt-BR")}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Imobiliaria: {imobiliaria ? imobiliaria.nome : "Nao vinculada"}
            </p>
            <p className="text-sm text-muted-foreground">
              Corretor: {corretor ? corretor.nome : "Nao vinculado"}
            </p>
            <p className="text-sm text-muted-foreground">Descricao:</p>
            <p className="text-sm">{imovel.descricao}</p>
          </div>
        </div>
      </article>

      <div className="mt-5">
        <Link
          to="/imoveis"
          className="inline-flex rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
        >
          Voltar para lista de imoveis
        </Link>
      </div>
    </AppLayout>
  );
}
