import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import heroVilla from "@/imagens/home.jpg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/imoveis", label: "Imoveis" },
  { to: "/agentes", label: "Corretores" },
  { to: "/imobiliarias", label: "Imobiliarias" },
  { to: "/propostas", label: "Negociacoes" },
  { to: "/admin", label: "Painel" },
];

export function AppLayout({ title, subtitle, children }) {
  const { isAdmin, logout } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[440px] overflow-hidden">
        <img src={heroVilla} alt="" className="h-full w-full object-cover opacity-20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--olive-deep)]/75 via-[var(--olive-deep)]/45 to-background" />
      </div>

      <header className="relative z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
              M
            </span>
            <span className="font-display text-2xl text-[var(--cream)] md:text-[var(--olive-deep)]">
              Lo&amp;Bi
            </span>
          </Link>

          <nav className="flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full border border-border/80 bg-card/70 px-3 py-1.5 transition hover:border-[var(--gold)] hover:text-[var(--gold-deep)]"
                activeProps={{
                  className:
                    "rounded-full border border-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1.5 text-[var(--gold-deep)]",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-xs text-muted-foreground">
            {isAdmin ? (
              <button
                onClick={logout}
                className="rounded-full border border-[var(--gold)] bg-[var(--gold)]/15 px-3 py-1.5 text-[var(--olive-deep)] transition hover:bg-[var(--gold)]/25"
              >
                Sair da sessao
              </button>
            ) : (
              <span>Modo visitante</span>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <section className="mb-8 rounded-sm border border-border bg-card/95 p-6 shadow-[var(--shadow-elegant)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold-deep)]">Lo&Bi | Realizando sonhos</p>
          <h1 className="mt-3 font-display text-4xl text-[var(--olive-deep)] md:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{subtitle}</p> : null}
        </section>
        {children}
      </main>
    </div>
  );
}
