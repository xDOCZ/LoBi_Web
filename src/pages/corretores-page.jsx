import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

function Avatar({ nome }) {
  const initials = nome
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const colors = [
    "bg-[var(--gold)]/20 text-[var(--gold-deep)]",
    "bg-[var(--olive)]/20 text-[var(--olive-deep)]",
    "bg-[var(--peach)]/20 text-[var(--olive-deep)]",
  ];

  const colorIndex = initials.charCodeAt(0) % colors.length;

  return (
    <div className={`${colors[colorIndex]} flex h-20 w-20 items-center justify-center rounded-full`}>
      <span className="font-display text-2xl font-semibold">{initials}</span>
    </div>
  );
}

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
      subtitle="Equipe de especialistas com CRECI, contato direto e vinculação por imobiliária."
    >
      <section className="mb-6 grid gap-4 md:grid-cols-3">
        {data.corretores.map((corretor) => {
          const imobiliaria = data.imobiliarias.find((item) => item.id === corretor.imobiliariaId);
          return (
            <article key={corretor.id} className="rounded-sm border border-border bg-card p-4">
              <div className="mb-4 flex justify-center">
                <Avatar nome={corretor.nome} />
              </div>
              <h2 className="text-center font-display text-2xl text-[var(--olive-deep)]">{corretor.nome}</h2>
              <p className="mt-2 text-center text-sm font-medium text-[var(--gold-deep)]">{corretor.especialidade}</p>
              <p className="mt-3 text-center text-sm text-muted-foreground">{corretor.creci}</p>
              <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                <p><span className="text-muted-foreground">Email:</span> {corretor.email}</p>
                <p><span className="text-muted-foreground">Tel:</span> {corretor.telefone}</p>
                <p><span className="text-muted-foreground">Imobiliária:</span> {imobiliaria ? imobiliaria.nome : "Não vinculada"}</p>
              </div>
            </article>
          );
        })}
      </section>

      <EntityCrudTable
        title="Cadastro de Corretores"
        rows={data.corretores}
        fields={[
          {
            name: "nome",
            label: "Nome",
            required: true,
            pattern: "^[A-Za-zÀ-ÿ\\s'-]{3,}$",
            validationMessage: "Informe um nome válido (somente letras e espaços).",
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
            validationMessage: "Informe um email válido.",
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
        onCreate={(record) => {
          createRecord("corretores", record);
        }}
        onUpdate={(id, changes) => updateRecord("corretores", id, changes)}
        onDelete={(id) => deleteRecord("corretores", id)}
      />
    </AppLayout>
  );
}
