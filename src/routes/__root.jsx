import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import appCss from "../styles.css?url";
import { AuthContext } from "@/lib/auth";
import { DataContext } from "@/lib/data-context";
import { loadLocacaoData } from "@/lib/data-loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">A pagina solicitada nao foi encontrada.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-sm border border-border px-4 py-2 hover:bg-muted"
        >
          Voltar para inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }) {
  const router = useRouter();
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Erro ao carregar pagina</h1>
        <p className="mt-3 text-muted-foreground">
          Tente novamente. Se o problema persistir, recarregue o navegador.
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-sm border border-border px-4 py-2 hover:bg-muted"
          >
            Tentar novamente
          </button>
          <Link to="/" className="rounded-sm border border-border px-4 py-2 hover:bg-muted">
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lo&Bi Locacao" },
      {
        name: "description",
        content:
          "SPA de locacao de imoveis com gerenciamento de imobiliarias, imoveis, corretores e propostas.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("lobi-admin");
    setIsAdmin(stored === "true");
  }, []);

  useEffect(() => {
    async function bootstrap() {
      try {
        setLoading(true);
        const payload = await loadLocacaoData();
        setData(payload);
        setError("");
      } catch (loadError) {
        console.error(loadError);
        setError("Nao foi possivel carregar os dados do arquivo JSON.");
      } finally {
        setLoading(false);
      }
    }

    bootstrap();
  }, []);

  const authContext = useMemo(
    () => ({
      isAdmin,
      login: (username, password) => {
        const valid = username === "admin" && password === "admin123";
        if (valid) {
          setIsAdmin(true);
          window.localStorage.setItem("lobi-admin", "true");
        }
        return valid;
      },
      logout: () => {
        setIsAdmin(false);
        window.localStorage.removeItem("lobi-admin");
      },
    }),
    [isAdmin],
  );

  const dataContext = useMemo(
    () => ({
      data,
      loading,
      error,
      createRecord: (entityKey, record) => {
        setData((current) => {
          if (!current) return current;
          const list = current[entityKey] || [];
          const nextId = list.length ? Math.max(...list.map((item) => item.id)) + 1 : 1;
          return { ...current, [entityKey]: [...list, { id: nextId, ...record }] };
        });
      },
      updateRecord: (entityKey, id, changes) => {
        setData((current) => {
          if (!current) return current;
          return {
            ...current,
            [entityKey]: (current[entityKey] || []).map((item) =>
              item.id === id ? { ...item, ...changes } : item,
            ),
          };
        });
      },
      deleteRecord: (entityKey, id) => {
        setData((current) => {
          if (!current) return current;
          return {
            ...current,
            [entityKey]: (current[entityKey] || []).filter((item) => item.id !== id),
          };
        });
      },
      async reloadFromJson() {
        const payload = await loadLocacaoData();
        setData(payload);
      },
    }),
    [data, error, loading],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <DataContext.Provider value={dataContext}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </DataContext.Provider>
    </AuthContext.Provider>
  );
}
