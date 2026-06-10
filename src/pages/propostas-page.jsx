import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

const getInitials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const formatDate = (iso) => {
  if (!iso) return "—";
  const date = new Date(`${iso}T00:00:00`);
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleDateString("pt-BR");
};

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

  const fields = [
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
      validationMessage: "Informe um valor numérico maior que zero.",
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
  ];

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

      {data.propostas.length > 0 ? (
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.propostas.map((proposta) => {
            const imovel = data.imoveis.find((item) => item.id === proposta.imovelId);
            const corretor = data.corretores.find((item) => item.id === proposta.corretorId);

            return (
              <article
                key={proposta.id}
                className="rounded-sm border border-border bg-card p-6 text-center transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gold)]/15">
                  <span className="font-display text-xl text-[var(--olive-deep)]">
                    {getInitials(proposta.cliente)}
                  </span>
                </div>

                <h2 className="font-display text-2xl text-[var(--olive-deep)]">{proposta.cliente}</h2>
                <p className="mt-1 text-sm font-medium text-[var(--gold)]">{proposta.status}</p>
                <p className="mt-2 font-semibold">
                  R$ {Number(proposta.valorOferta).toLocaleString("pt-BR")}
                </p>

                <hr className="my-4 border-border" />

                <div className="space-y-2 text-left text-sm">
                  <p>
                    <span className="text-muted-foreground">Imóvel: </span>
                    <span className="font-medium">
                      {imovel ? imovel.titulo : `#${proposta.imovelId}`}
                    </span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Corretor: </span>
                    <span className="font-medium">
                      {corretor ? corretor.nome : `#${proposta.corretorId}`}
                    </span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Contato: </span>
                    <span className="font-medium">{formatDate(proposta.dataContato)}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <section className="mb-6 rounded-sm border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Nenhuma proposta cadastrada ainda.</p>
        </section>
      )}

      <EntityCrudTable
        title="Cadastro de Propostas"
        rows={data.propostas}
        fields={fields}
        onCreate={(record) => createRecord("propostas", record)}
        onUpdate={(id, changes) => updateRecord("propostas", id, changes)}
        onDelete={(id) => deleteRecord("propostas", id)}
      />
    </AppLayout>
  );
}