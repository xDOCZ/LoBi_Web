import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

export const Route = createFileRoute("/agentes")({
  component: CorretoresPage,
});

function CorretoresPage() {
  const { data, loading, error, createRecord, updateRecord, deleteRecord } = useDataStore();

  if (loading) {
    return <AppLayout title="Carregando corretores..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponiveis"} />;
  }

  const imobiliariaOptions = data.imobiliarias.map((item) => ({
    value: String(item.id),
    label: `${item.nome} (#${item.id})`,
  }));

  return (
    <AppLayout
      title="Corretores"
      subtitle="Entidade de negocio Corretor com detalhes de CRECI, contato e vinculacao com imobiliaria."
    >
      <section className="mb-6 grid gap-4 md:grid-cols-3">
        {data.corretores.map((corretor) => {
          const imobiliaria = data.imobiliarias.find((item) => item.id === corretor.imobiliariaId);
          return (
            <article key={corretor.id} className="rounded-sm border border-border bg-card p-4">
              <h2 className="font-display text-2xl text-[var(--olive-deep)]">{corretor.nome}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{corretor.creci}</p>
              <p className="text-sm">{corretor.email}</p>
              <p className="text-sm">{corretor.telefone}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Imobiliaria: {imobiliaria ? imobiliaria.nome : "Nao vinculada"}
              </p>
            </article>
          );
        })}
      </section>

      <EntityCrudTable
        title="CRUD de Corretores"
        description="Gerencie cadastro de corretores para atendimento das locacoes."
        rows={data.corretores}
        fields={[
          { name: "nome", label: "Nome", required: true },
          { name: "creci", label: "CRECI", required: true },
          { name: "email", label: "Email", required: true },
          { name: "telefone", label: "Telefone", required: true },
          {
            name: "imobiliariaId",
            label: "Imobiliaria",
            type: "number",
            required: true,
            options: imobiliariaOptions,
          },
          { name: "especialidade", label: "Especialidade", required: true },
        ]}
        onCreate={(record) => createRecord("corretores", record)}
        onUpdate={(id, changes) => updateRecord("corretores", id, changes)}
        onDelete={(id) => deleteRecord("corretores", id)}
      />
    </AppLayout>
  );
}
