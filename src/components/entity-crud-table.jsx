import { useMemo, useState } from "react";
import { useAuth } from "@/lib/auth";

function onlyDigits(value) {
  return String(value ?? "").replace(/\D/g, "");
}

function normalizePhoneDigits(value) {
  const digits = onlyDigits(value);
  if (digits.length <= 11) {
    return digits;
  }
  return digits.slice(-11);
}

function maskPhone(value) {
  const digits = normalizePhoneDigits(value);
  if (!digits) {
    return "";
  }

  const ddd = digits.slice(0, 2);
  if (digits.length <= 2) {
    return `(${ddd}`;
  }

  if (digits.length <= 10) {
    const prefix = digits.slice(2, 6);
    const suffix = digits.slice(6, 10);
    return suffix ? `(${ddd}) ${prefix}-${suffix}` : `(${ddd}) ${prefix}`;
  }

  const prefix = digits.slice(2, 7);
  const suffix = digits.slice(7, 11);
  return suffix ? `(${ddd}) ${prefix}-${suffix}` : `(${ddd}) ${prefix}`;
}

function maskCnpj(value) {
  const digits = onlyDigits(value).slice(0, 14);
  if (!digits) {
    return "";
  }

  let masked = digits;
  if (digits.length > 2) masked = `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length > 5) masked = `${masked.slice(0, 6)}.${masked.slice(6)}`;
  if (digits.length > 8) masked = `${masked.slice(0, 10)}/${masked.slice(10)}`;
  if (digits.length > 12) masked = `${masked.slice(0, 15)}-${masked.slice(15)}`;
  return masked;
}

function sanitizeFieldValue(value, field) {
  if (field.mask === "phone") {
    return maskPhone(value);
  }
  if (field.mask === "cnpj") {
    return maskCnpj(value);
  }
  if (field.transform === "uppercase") {
    return String(value ?? "").toUpperCase();
  }
  return String(value ?? "");
}

function getInitialForm(fields, record = null) {
  return fields.reduce((acc, field) => {
    const value = record ? record[field.name] ?? "" : "";
    acc[field.name] = sanitizeFieldValue(value, field);
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

function getFieldError(value, field) {
  const textValue = String(value ?? "").trim();

  if (field.required && !textValue) {
    return `${field.label} é obrigatório.`;
  }

  if (!textValue) {
    return "";
  }

  if (field.type === "number") {
    const parsed = Number(textValue);
    if (Number.isNaN(parsed)) {
      return field.validationMessage || `${field.label} precisa ser numérico.`;
    }
    if (field.min !== undefined && parsed < Number(field.min)) {
      return field.validationMessage || `${field.label} está abaixo do mínimo permitido.`;
    }
    if (field.max !== undefined && parsed > Number(field.max)) {
      return field.validationMessage || `${field.label} está acima do máximo permitido.`;
    }
  }

  if (field.type === "email") {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(textValue);
    if (!isValidEmail) {
      return field.validationMessage || "Informe um email válido.";
    }
  }

  if (field.pattern) {
    const regex = new RegExp(field.pattern);
    if (!regex.test(textValue)) {
      return field.validationMessage || `${field.label} está em formato inválido.`;
    }
  }

  return "";
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
  const [validationError, setValidationError] = useState("");

  const headers = useMemo(() => fields.map((field) => field.label), [fields]);

  const updateFormField = (name, value) => {
    const field = fields.find((item) => item.name === name);
    const nextValue = field ? sanitizeFieldValue(value, field) : String(value ?? "");
    setForm((current) => ({ ...current, [name]: nextValue }));
  };

  const updateEditFormField = (name, value) => {
    const field = fields.find((item) => item.name === name);
    const nextValue = field ? sanitizeFieldValue(value, field) : String(value ?? "");
    setEditForm((current) => ({ ...current, [name]: nextValue }));
  };

  const handleCreate = () => {
    const payload = {};

    for (const field of fields) {
      const fieldError = getFieldError(form[field.name], field);
      if (fieldError) {
        setValidationError(fieldError);
        return;
      }
      payload[field.name] = parseByType(form[field.name], field.type);
    }

    setValidationError("");
    onCreate(payload);
    setForm(getInitialForm(fields));
  };

  const startEdit = (row) => {
    setEditingId(row.id);
    setEditForm(getInitialForm(fields, row));
    setValidationError("");
  };

  const saveEdit = () => {
    const payload = {};

    for (const field of fields) {
      const fieldError = getFieldError(editForm[field.name], field);
      if (fieldError) {
        setValidationError(fieldError);
        return;
      }
      payload[field.name] = parseByType(editForm[field.name], field.type);
    }

    setValidationError("");
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
                    required={field.required}
                    onChange={(event) => updateFormField(field.name, event.target.value)}
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
                    type={field.type || "text"}
                    required={field.required}
                    pattern={field.pattern}
                    title={field.validationMessage}
                    inputMode={field.inputMode}
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                    min={field.min}
                    step={field.step}
                    onChange={(event) => updateFormField(field.name, event.target.value)}
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
      ) : null}

      {validationError ? (
        <p className="mb-4 rounded-sm border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          {validationError}
        </p>
      ) : null}

      {isAdmin ? (
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
                          required={field.required}
                          onChange={(event) => updateEditFormField(field.name, event.target.value)}
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
                          type={field.type || "text"}
                          required={field.required}
                          pattern={field.pattern}
                          title={field.validationMessage}
                          inputMode={field.inputMode}
                          placeholder={field.placeholder}
                          maxLength={field.maxLength}
                          min={field.min}
                          step={field.step}
                          onChange={(event) => updateEditFormField(field.name, event.target.value)}
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
      ) : (
        <p className="rounded-sm border border-border bg-muted p-3 text-sm text-muted-foreground">
          Acesso administrativo necessário para visualizar a tabela de registros.
        </p>
      )}
    </section>
  );
}
