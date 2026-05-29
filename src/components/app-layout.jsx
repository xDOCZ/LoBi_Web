import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/imoveis", label: "Imoveis" },
  { to: "/agentes", label: "Corretores" },
  { to: "/imobiliarias", label: "Imobiliarias" },
  { to: "/propostas", label: "Propostas" },
  { to: "/admin", label: "Painel" },
];

export function AppLayout({ title, subtitle, children }) {
  const { isAdmin, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <Link to="/" className="font-display text-2xl text-[var(--olive-deep)]">
            Lo&amp;Bi Locacao
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-sm border border-border px-3 py-1.5 hover:bg-muted"
                activeProps={{ className: "rounded-sm border border-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1.5" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-xs text-muted-foreground">
            {isAdmin ? (
              <button
                onClick={logout}
                className="rounded-sm border border-border px-3 py-1.5 text-foreground hover:bg-muted"
              >
                Sair do admin
              </button>
            ) : (
              <span>Modo visitante</span>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="mb-8 rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <h1 className="font-display text-4xl text-[var(--olive-deep)]">{title}</h1>
          {subtitle ? <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p> : null}
        </section>
        {children}
      </main>
    </div>
  );
}
