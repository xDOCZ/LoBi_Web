import { Link } from "react-router-dom";
import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { useAuth } from "@/lib/auth";
import { useDataStore } from "@/lib/data-context";

export function AdminPage() {
  const { authLoading, currentUser, isAdmin, isAuthenticated, login, register, logout } = useAuth();
  const { data, loading, error, reloadFromJson } = useDataStore();
  const [authMode, setAuthMode] = useState("login");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [registerForm, setRegisterForm] = useState({
    nome: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const result = login(identifier, password);
    setMessage(result.message);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const result = register(registerForm);
    setMessage(result.message);
    if (result.ok) {
      setRegisterForm({
        nome: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <AppLayout
      title="Painel Administrativo"
      subtitle="Acesso restrito para habilitar criação, edição e exclusão em todas as entidades do domínio."
    >
      <section className="rounded-sm border border-border bg-card p-5">
        {authLoading ? (
          <p className="text-sm text-muted-foreground">Carregando autenticação...</p>
        ) : isAdmin ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Sessão administrativa ativa para {currentUser?.nome || currentUser?.username}.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={logout}
                className="rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
              >
                Sair da área admin
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
              <p>Gestão de entidades:</p>
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
        ) : isAuthenticated ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Conta autenticada: <strong>{currentUser?.nome}</strong> ({currentUser?.email}).
            </p>
            <p className="text-sm text-muted-foreground">
              Este painel requer permissão administrativa. Sua conta atual possui perfil de usuário comum.
            </p>
            <button
              onClick={logout}
              className="rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
            >
              Sair da conta
            </button>
          </div>
        ) : (
          <div className="space-y-4 md:max-w-lg">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAuthMode("login")}
                className={`rounded-sm border px-4 py-2 text-sm ${
                  authMode === "login"
                    ? "border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--gold-deep)]"
                    : "border-border hover:bg-muted"
                }`}
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => setAuthMode("register")}
                className={`rounded-sm border px-4 py-2 text-sm ${
                  authMode === "register"
                    ? "border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--gold-deep)]"
                    : "border-border hover:bg-muted"
                }`}
              >
                Criar conta
              </button>
            </div>

            {authMode === "login" ? (
              <form onSubmit={handleLogin} className="grid gap-3">
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Usuário ou email</span>
                  <input
                    value={identifier}
                    onChange={(event) => setIdentifier(event.target.value)}
                    className="w-full rounded-sm border border-border bg-background px-3 py-2"
                    placeholder="admin ou admin@lobi.com"
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
                <p className="text-xs text-muted-foreground">
                  Conta admin inicial: admin@lobi.com / admin123
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="grid gap-3">
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Nome completo</span>
                  <input
                    value={registerForm.nome}
                    onChange={(event) =>
                      setRegisterForm((current) => ({ ...current, nome: event.target.value }))
                    }
                    className="w-full rounded-sm border border-border bg-background px-3 py-2"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Usuário</span>
                  <input
                    value={registerForm.username}
                    onChange={(event) =>
                      setRegisterForm((current) => ({ ...current, username: event.target.value }))
                    }
                    className="w-full rounded-sm border border-border bg-background px-3 py-2"
                    placeholder="somente letras, números, ., _ e -"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Email</span>
                  <input
                    type="email"
                    value={registerForm.email}
                    onChange={(event) =>
                      setRegisterForm((current) => ({ ...current, email: event.target.value }))
                    }
                    className="w-full rounded-sm border border-border bg-background px-3 py-2"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Senha</span>
                  <input
                    type="password"
                    value={registerForm.password}
                    onChange={(event) =>
                      setRegisterForm((current) => ({ ...current, password: event.target.value }))
                    }
                    className="w-full rounded-sm border border-border bg-background px-3 py-2"
                    placeholder="Mínimo 8 caracteres com letras e números"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-muted-foreground">Confirmação da senha</span>
                  <input
                    type="password"
                    value={registerForm.confirmPassword}
                    onChange={(event) =>
                      setRegisterForm((current) => ({
                        ...current,
                        confirmPassword: event.target.value,
                      }))
                    }
                    className="w-full rounded-sm border border-border bg-background px-3 py-2"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-sm bg-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--olive-deep)]"
                >
                  Criar conta
                </button>
              </form>
            )}
          </div>
        )}

        {loading ? <p className="mt-4 text-sm text-muted-foreground">Carregando dados...</p> : null}
        {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}
        {message ? <p className="mt-4 text-sm text-[var(--olive-deep)]">{message}</p> : null}
      </section>
    </AppLayout>
  );
}
