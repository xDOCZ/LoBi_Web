import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { useAuth } from "@/lib/auth";
import { useDataStore } from "@/lib/data-context";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const { isAdmin, login, logout } = useAuth();
  const { data, loading, error, reloadFromJson } = useDataStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const ok = login(username.trim(), password.trim());
    setMessage(ok ? "Login realizado com sucesso." : "Usuario ou senha invalidos.");
  };

  return (
    <AppLayout
      title="Painel Administrativo"
      subtitle="Acesso restrito para habilitar criacao, edicao e exclusao em todas as entidades do dominio."
    >
      <section className="rounded-sm border border-border bg-card p-5">
        {isAdmin ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Sessao administrativa ativa.</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={logout}
                className="rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
              >
                Sair da area admin
              </button>
              <button
                onClick={async () => {
                  await reloadFromJson();
                  setMessage("Dados recarregados do arquivo JSON original.");
                }}
                className="rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
              >
                Recarregar JSON
              </button>
              <button
                onClick={() => {
                  if (!data) return;
                  const blob = new Blob([JSON.stringify(data, null, 2)], {
                    type: "application/json;charset=utf-8",
                  });
                  const href = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = href;
                  link.download = "locacao.updated.json";
                  link.click();
                  URL.revokeObjectURL(href);
                  setMessage("Arquivo locacao.updated.json gerado para download.");
                }}
                className="rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
              >
                Exportar JSON atualizado
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Gestao de entidades:</p>
              <p className="mt-2">
                <Link to="/imoveis" className="underline">
                  Ir para CRUD de Imoveis
                </Link>
                {" | "}
                <Link to="/agentes" className="underline">
                  Ir para CRUD de Corretores
                </Link>
                {" | "}
                <Link to="/imobiliarias" className="underline">
                  Ir para CRUD de Imobiliarias
                </Link>
                {" | "}
                <Link to="/propostas" className="underline">
                  Ir para CRUD de Propostas
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="grid gap-3 md:max-w-sm">
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Usuario</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full rounded-sm border border-border bg-background px-3 py-2"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Senha</span>
              <input
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-sm border border-border bg-background px-3 py-2"
              />
            </label>
            <button
              type="submit"
              className="rounded-sm bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--olive-deep)]"
            >
              Entrar
            </button>
            <p className="text-xs text-muted-foreground">Credenciais: admin / admin123</p>
          </form>
        )}

        {loading ? <p className="mt-4 text-sm text-muted-foreground">Carregando dados...</p> : null}
        {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
        {message ? <p className="mt-4 text-sm text-[var(--olive-deep)]">{message}</p> : null}
      </section>
    </AppLayout>
  );
}
