import { Link, Outlet, createFileRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";
import { imageMap } from "@/lib/image-map";

export const Route = createFileRoute("/imoveis")({
  component: ImoveisPage,
});

function ImoveisPage() {
  const { data, loading, error, createRecord, updateRecord, deleteRecord } = useDataStore();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (loading) {
    return <AppLayout title="Carregando imoveis..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponiveis"} />;
  }

  const normalizedPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const isDetailRoute = normalizedPath !== "/imoveis" && normalizedPath.startsWith("/imoveis/");

  if (isDetailRoute) {
    return <Outlet />;
  }

  const imobiliariaOptions = data.imobiliarias.map((item) => ({
    value: String(item.id),
    label: `${item.nome} (#${item.id})`,
  }));

  const corretorOptions = data.corretores.map((item) => ({
    value: String(item.id),
    label: `${item.nome} (#${item.id})`,
  }));

  const imageOptions = Object.keys(imageMap).map((key) => ({
    value: key,
    label: key,
  }));

  const fields = [
    { name: "titulo", label: "Titulo", required: true },
    { name: "tipo", label: "Tipo", required: true },
    { name: "operacao", label: "Operacao", required: true },
    { name: "bairro", label: "Bairro", required: true },
    { name: "cidade", label: "Cidade", required: true },
    { name: "valor", label: "Valor", type: "number", required: true },
    { name: "quartos", label: "Quartos", type: "number", required: true },
    { name: "banheiros", label: "Banheiros", type: "number", required: true },
    { name: "area", label: "Area (m2)", type: "number", required: true },
    {
      name: "imobiliariaId",
      label: "Imobiliaria",
      type: "number",
      required: true,
      options: imobiliariaOptions,
    },
    {
      name: "corretorId",
      label: "Corretor",
      type: "number",
      required: true,
      options: corretorOptions,
    },
    {
      name: "imageKey",
      label: "Imagem",
      required: true,
      options: imageOptions,
    },
    { name: "descricao", label: "Descricao", required: true },
  ];

  const handleCreateImovel = (record) => {
    const nextId =
      data.imoveis.length > 0 ? Math.max(...data.imoveis.map((item) => item.id)) + 1 : 1;

    createRecord("imoveis", record);
    navigate({ to: "/imoveis/$id", params: { id: String(nextId) } });
  };

  return (
    <AppLayout
      title="Imoveis"
      subtitle="Colecao premium com imagens locais e gestao completa da entidade Imovel."
    >
      <section className="mb-6 grid gap-4 md:grid-cols-2">
        {data.imoveis.map((item) => (
          <Link
            key={item.id}
            to="/imoveis/$id"
            params={{ id: String(item.id) }}
            className="group block overflow-hidden rounded-sm border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            <img
              src={imageMap[item.imageKey]}
              alt={item.titulo}
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-display text-2xl text-[var(--olive-deep)]">{item.titulo}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.tipo} | {item.operacao} | {item.bairro}, {item.cidade}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{item.descricao}</p>
              <p className="mt-3 font-semibold">R$ {Number(item.valor).toLocaleString("pt-BR")}</p>
              <span className="mt-3 inline-flex rounded-sm border border-border px-3 py-2 text-sm transition group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10">
                Explorar detalhes
              </span>
            </div>
          </Link>
        ))}
      </section>

      <EntityCrudTable
        title="CRUD de Imoveis"
        description="Crie, ajuste e remova registros da colecao de imoveis com agilidade."
        rows={data.imoveis}
        fields={fields}
        onCreate={handleCreateImovel}
        onUpdate={(id, changes) => updateRecord("imoveis", id, changes)}
        onDelete={(id) => deleteRecord("imoveis", id)}
      />
    </AppLayout>
  );
}
