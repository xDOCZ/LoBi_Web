import { Link, NavLink } from "react-router-dom";
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
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B8943D" />
                  <stop offset="100%" stopColor="#6B7A3D" />
                </linearGradient>
              </defs>
              <rect width="40" height="40" rx="6" fill="url(#logoGradient)" opacity="0.15" />
              <rect width="40" height="40" rx="6" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.3" />
              <text
                x="20"
                y="27"
                fontSize="18"
                fontWeight="700"
                textAnchor="middle"
                fill="url(#logoGradient)"
                fontFamily="Instrument Serif, Georgia, serif"
                letterSpacing="-0.02em"
              >
                LB
              </text>
            </svg>
            <span className="font-display text-lg font-semibold text-[var(--cream)] md:text-[var(--olive-deep)]">
              Lo&amp;Bi
            </span>
          </Link>

          <nav className="flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-full border border-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1.5 text-[var(--gold-deep)]"
                    : "rounded-full border border-border/80 bg-card/70 px-3 py-1.5 transition hover:border-[var(--gold)] hover:text-[var(--gold-deep)]"
                }
              >
                {item.label}
              </NavLink>
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
