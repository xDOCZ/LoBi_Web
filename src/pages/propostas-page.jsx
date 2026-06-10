import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

export function PropostasPage() {
  const { data, loading, error, createRecord, updateRecord, deleteRecord } = useDataStore();

  if (loading) {
    return <AppLayout title="Carregando propostas..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponíveis"} />;
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
      subtitle="Etapa comercial que conecta cliente, imóvel, corretor e status da negociação."
    >
      <section className="mb-6 rounded-sm border border-border bg-card p-5">
        <p className="text-sm text-muted-foreground">
          Acompanhe o fluxo de propostas em locação e venda com histórico de contato e valor ofertado.
        </p>
      </section>

      <EntityCrudTable
        title="Cadastro de Propostas"
        rows={data.propostas}
        fields={[
          {
            name: "imovelId",
            label: "Imóvel",
            type: "number",
            required: true,
            options: imovelOptions,
          },
          {
            name: "cliente",
            label: "Cliente",
            required: true,
            pattern: "^[A-Za-zÀ-ÿ\\s'-]{3,}$",
            validationMessage: "Informe o nome do cliente com pelo menos 3 caracteres.",
          },
          {
            name: "valorOferta",
            label: "Valor da oferta",
            type: "number",
            required: true,
            min: 1,
            step: 1,
            validationMessage: "Informe um valor numerico maior que zero.",
          },
          {
            name: "status",
            label: "Status",
            required: true,
            pattern: "^[A-Za-zÀ-ÿ\\s]{2,}$",
            validationMessage: "Informe um status válido.",
          },
          {
            name: "dataContato",
            label: "Data de contato",
            type: "date",
            required: true,
            validationMessage: "Informe uma data válida.",
          },
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
