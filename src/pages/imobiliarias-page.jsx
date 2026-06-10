import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";

export function ImobiliariasPage() {
  const { data, loading, error, createRecord, updateRecord, deleteRecord } = useDataStore();

  if (loading) {
    return <AppLayout title="Carregando imobiliarias..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponiveis"} />;
  }

  return (
    <AppLayout
      title="Imobiliárias"
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
        title="Cadastro de Imobiliárias"
        rows={data.imobiliarias}
        fields={[
          {
            name: "nome",
            label: "Nome",
            required: true,
            pattern: "^[A-Za-zÀ-ÿ0-9\\s&.'-]{3,}$",
            validationMessage: "Informe o nome da imobiliaria com pelo menos 3 caracteres.",
          },
          {
            name: "cnpj",
            label: "CNPJ",
            required: true,
            mask: "cnpj",
            inputMode: "numeric",
            pattern: "^[0-9]{2}\\.[0-9]{3}\\.[0-9]{3}/[0-9]{4}-[0-9]{2}$",
            validationMessage: "Use o formato 00.000.000/0000-00.",
            placeholder: "12.345.678/0001-99",
            maxLength: 18,
          },
          {
            name: "cidade",
            label: "Cidade",
            required: true,
            pattern: "^[A-Za-zÀ-ÿ\\s'-]{2,}$",
            validationMessage: "Informe uma cidade válida.",
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
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            validationMessage: "Informe um email válido.",
          },
        ]}
        onCreate={(record) => createRecord("imobiliarias", record)}
        onUpdate={(id, changes) => updateRecord("imobiliarias", id, changes)}
        onDelete={(id) => deleteRecord("imobiliarias", id)}
      />
    </AppLayout>
  );
}
