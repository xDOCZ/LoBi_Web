import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

export function CorretoresPage() {
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
      subtitle="Equipe de especialistas com CRECI, contato direto e vinculacao por imobiliaria."
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
        description="Gerencie o time de corretores responsavel pelo atendimento consultivo."
        rows={data.corretores}
        fields={[
          {
            name: "nome",
            label: "Nome",
            required: true,
            pattern: "^[A-Za-zÀ-ÿ\\s'-]{3,}$",
            validationMessage: "Informe um nome valido (somente letras e espacos).",
          },
          {
            name: "creci",
            label: "CRECI",
            required: true,
            transform: "uppercase",
            pattern: "^CRECI-[A-Z]{2}\\s[0-9]{4,10}$",
            validationMessage: "Use o formato CRECI-UF 123456.",
            placeholder: "CRECI-SP 123456",
            maxLength: 20,
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            validationMessage: "Informe um email valido.",
          },
          {
            name: "telefone",
            label: "Telefone",
            required: true,
            mask: "phone",
            inputMode: "numeric",
            pattern: "^\\([0-9]{2}\\)\\s[0-9]{4,5}-[0-9]{4}$",
            validationMessage: "Use 10 ou 11 digitos. Ex.: (11) 98888-7777.",
            placeholder: "(11) 98888-7777",
            maxLength: 15,
          },
          {
            name: "imobiliariaId",
            label: "Imobiliaria",
            type: "number",
            required: true,
            options: imobiliariaOptions,
          },
          {
            name: "especialidade",
            label: "Especialidade",
            required: true,
            pattern: "^[A-Za-zÀ-ÿ0-9\\s'-]{3,}$",
            validationMessage: "Informe a especialidade com pelo menos 3 caracteres.",
          },
        ]}
        onCreate={(record) => createRecord("corretores", record)}
        onUpdate={(id, changes) => updateRecord("corretores", id, changes)}
        onDelete={(id) => deleteRecord("corretores", id)}
      />
    </AppLayout>
  );
}
