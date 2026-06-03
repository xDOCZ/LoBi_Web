import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

export const Route = createFileRoute("/imobiliarias")({
  component: ImobiliariasPage,
});

function ImobiliariasPage() {
  const { data, loading, error, createRecord, updateRecord, deleteRecord } = useDataStore();

  if (loading) {
    return <AppLayout title="Carregando imobiliarias..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponiveis"} />;
  }

  return (
    <AppLayout
      title="Imobiliarias"
      subtitle="Empresas parceiras com estrutura comercial, contato e cobertura regional."
    >
      <section className="mb-6 grid gap-4 md:grid-cols-3">
        {data.imobiliarias.map((item) => (
          <article key={item.id} className="rounded-sm border border-border bg-card p-4">
            <h2 className="font-display text-2xl text-[var(--olive-deep)]">{item.nome}</h2>
            <p className="mt-2 text-sm text-muted-foreground">CNPJ: {item.cnpj}</p>
            <p className="text-sm">{item.cidade}</p>
            <p className="text-sm">{item.telefone}</p>
            <p className="text-sm">{item.email}</p>
          </article>
        ))}
      </section>

      <EntityCrudTable
        title="CRUD de Imobiliarias"
        description="Mantenha a base de imobiliarias parceiras sempre atualizada."
        rows={data.imobiliarias}
        fields={[
          { name: "nome", label: "Nome", required: true },
          { name: "cnpj", label: "CNPJ", required: true },
          { name: "cidade", label: "Cidade", required: true },
          { name: "telefone", label: "Telefone", required: true },
          { name: "email", label: "Email", required: true },
        ]}
        onCreate={(record) => createRecord("imobiliarias", record)}
        onUpdate={(id, changes) => updateRecord("imobiliarias", id, changes)}
        onDelete={(id) => deleteRecord("imobiliarias", id)}
      />
    </AppLayout>
  );
}
