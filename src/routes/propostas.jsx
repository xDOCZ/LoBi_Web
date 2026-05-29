import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

export const Route = createFileRoute("/propostas")({
  component: PropostasPage,
});

function PropostasPage() {
  const { data, loading, error, createRecord, updateRecord, deleteRecord } = useDataStore();

  if (loading) {
    return <AppLayout title="Carregando propostas..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponiveis"} />;
  }

  const imovelOptions = data.imoveis.map((item) => ({
    value: String(item.id),
    label: `${item.titulo} (#${item.id})`,
  }));

  const corretorOptions = data.corretores.map((item) => ({
    value: String(item.id),
    label: `${item.nome} (#${item.id})`,
  }));

  return (
    <AppLayout
      title="Propostas"
      subtitle="Entidade de negocio Proposta, relacionada a imoveis e corretores."
    >
      <section className="mb-6 rounded-sm border border-border bg-card p-5">
        <p className="text-sm text-muted-foreground">
          Esta tabela registra o fluxo comercial de locacao e venda: cliente, valor ofertado, status e
          data de contato.
        </p>
      </section>

      <EntityCrudTable
        title="CRUD de Propostas"
        description="Criacao, alteracao e exclusao de propostas comerciais."
        rows={data.propostas}
        fields={[
          {
            name: "imovelId",
            label: "Imovel",
            type: "number",
            required: true,
            options: imovelOptions,
          },
          { name: "cliente", label: "Cliente", required: true },
          { name: "valorOferta", label: "Valor da oferta", type: "number", required: true },
          { name: "status", label: "Status", required: true },
          { name: "dataContato", label: "Data de contato", required: true },
          {
            name: "corretorId",
            label: "Corretor",
            type: "number",
            required: true,
            options: corretorOptions,
          },
        ]}
        onCreate={(record) => createRecord("propostas", record)}
        onUpdate={(id, changes) => updateRecord("propostas", id, changes)}
        onDelete={(id) => deleteRecord("propostas", id)}
      />
    </AppLayout>
  );
}
