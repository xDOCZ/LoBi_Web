import { useMemo, useState } from "react";
import { useAuth } from "@/lib/auth";

function getInitialForm(fields, record = null) {
  return fields.reduce((acc, field) => {
    acc[field.name] = record ? String(record[field.name] ?? "") : "";
    return acc;
  }, {});
}

function parseByType(value, type) {
  if (type === "number") {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return value.trim();
}

export function EntityCrudTable({
  title,
  description,
  rows,
  fields,
  onCreate,
  onUpdate,
  onDelete,
}) {
  const { isAdmin } = useAuth();
  const [form, setForm] = useState(getInitialForm(fields));
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(getInitialForm(fields));

  const headers = useMemo(() => fields.map((field) => field.label), [fields]);

  const handleCreate = () => {
    const payload = {};

    for (const field of fields) {
      if (field.required && !String(form[field.name]).trim()) {
        return;
      }
      payload[field.name] = parseByType(form[field.name], field.type);
    }

    onCreate(payload);
    setForm(getInitialForm(fields));
  };

  const startEdit = (row) => {
    setEditingId(row.id);
    setEditForm(getInitialForm(fields, row));
  };

  const saveEdit = () => {
    const payload = {};

    for (const field of fields) {
      if (field.required && !String(editForm[field.name]).trim()) {
        return;
      }
      payload[field.name] = parseByType(editForm[field.name], field.type);
    }

    onUpdate(editingId, payload);
    setEditingId(null);
  };

  return (
    <section className="rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-elegant)]">
      <div className="mb-4">
        <h2 className="font-display text-3xl text-[var(--olive-deep)]">{title}</h2>
        {description ? <p className="mt-2 text-sm text-muted-foreground">{description}</p> : null}
      </div>

      {isAdmin ? (
        <div className="mb-4 rounded-sm border border-border bg-background/70 p-4">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {fields.map((field) => (
              <label key={field.name} className="text-sm">
                <span className="mb-1 block text-muted-foreground">{field.label}</span>
                {field.options ? (
                  <select
                    value={form[field.name]}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, [field.name]: event.target.value }))
                    }
                    className="w-full rounded-sm border border-border bg-card px-3 py-2 outline-none focus:border-[var(--gold)]"
                  >
                    <option value="">Selecione uma opcao</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    value={form[field.name]}
                    type={field.type === "number" ? "number" : "text"}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, [field.name]: event.target.value }))
                    }
                    className="w-full rounded-sm border border-border bg-card px-3 py-2 outline-none focus:border-[var(--gold)]"
                  />
                )}
              </label>
            ))}
            <button
              onClick={handleCreate}
              className="self-end rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--olive-deep)] transition hover:bg-[var(--gold-deep)] hover:text-cream"
            >
              Adicionar registro
            </button>
          </div>
        </div>
      ) : (
        <p className="mb-4 rounded-sm border border-border bg-muted p-3 text-sm text-muted-foreground">
          Acesso administrativo necessario para criar, editar e excluir registros.
        </p>
      )}

      <div className="overflow-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead className="bg-muted text-left text-[var(--olive-deep)]">
            <tr>
              <th className="px-3 py-2">ID</th>
              {headers.map((header) => (
                <th key={header} className="px-3 py-2">
                  {header}
                </th>
              ))}
              <th className="px-3 py-2">Gestao</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr className="border-t border-border">
                <td colSpan={fields.length + 2} className="px-3 py-6 text-center text-muted-foreground">
                  Nenhum registro disponivel nesta entidade.
                </td>
              </tr>
            ) : null}
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-border transition hover:bg-muted/35">
                <td className="px-3 py-2 text-muted-foreground">{row.id}</td>
                {fields.map((field) => (
                  <td key={`${row.id}-${field.name}`} className="px-3 py-2">
                    {editingId === row.id ? (
                      field.options ? (
                        <select
                          value={editForm[field.name]}
                          onChange={(event) =>
                            setEditForm((current) => ({
                              ...current,
                              [field.name]: event.target.value,
                            }))
                          }
                          className="w-full rounded-sm border border-border bg-background px-2 py-1 outline-none focus:border-[var(--gold)]"
                        >
                          <option value="">Selecione uma opcao</option>
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          value={editForm[field.name]}
                          type={field.type === "number" ? "number" : "text"}
                          onChange={(event) =>
                            setEditForm((current) => ({
                              ...current,
                              [field.name]: event.target.value,
                            }))
                          }
                          className="w-full rounded-sm border border-border bg-background px-2 py-1 outline-none focus:border-[var(--gold)]"
                        />
                      )
                    ) : (
                      String(row[field.name] ?? "")
                    )}
                  </td>
                ))}
                <td className="px-3 py-2">
                  {isAdmin ? (
                    editingId === row.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={saveEdit}
                          className="rounded-full border border-border px-3 py-1 transition hover:bg-muted"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="rounded-full border border-border px-3 py-1 transition hover:bg-muted"
                        >
                          Cancelar
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(row)}
                          className="rounded-full border border-border px-3 py-1 transition hover:bg-muted"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => onDelete(row.id)}
                          className="rounded-full border border-border px-3 py-1 transition hover:bg-muted"
                        >
                          Excluir
                        </button>
                      </div>
                    )
                  ) : (
                    <span className="text-xs text-muted-foreground">Acesso admin</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
