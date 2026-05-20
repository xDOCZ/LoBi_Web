const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { AuthContext } from "@/lib/auth";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    _jsxDEV('div', { className: "flex min-h-screen items-center justify-center bg-background px-4"     , children: 
      _jsxDEV('div', { className: "max-w-md text-center" , children: [
        _jsxDEV('h1', { className: "text-7xl font-bold text-foreground"  , children: "404"}, void 0, false, {fileName: _jsxFileName, lineNumber: 19}, this)
        , _jsxDEV('h2', { className: "mt-4 text-xl font-semibold text-foreground"   , children: "Page not found"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 20}, this)
        , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "The page you're looking for doesn't exist or has been moved."

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 21}, this)
        , _jsxDEV('div', { className: "mt-6", children: 
          _jsxDEV(Link, {
            to: "/",
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"           ,
 children: "Go home"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 25}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 24}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 18}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 17}, this)
  );
}

function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();

  return (
    _jsxDEV('div', { className: "flex min-h-screen items-center justify-center bg-background px-4"     , children: 
      _jsxDEV('div', { className: "max-w-md text-center" , children: [
        _jsxDEV('h1', { className: "text-xl font-semibold tracking-tight text-foreground"   , children: "This page didn't load"

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 44}, this)
        , _jsxDEV('p', { className: "mt-2 text-sm text-muted-foreground"  , children: "Something went wrong on our end. You can try refreshing or head back home."

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 47}, this)
        , _jsxDEV('div', { className: "mt-6 flex flex-wrap justify-center gap-2"    , children: [
          _jsxDEV('button', {
            onClick: () => {
              router.invalidate();
              reset();
            },
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"           ,
 children: "Try again"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 51}, this)
          , _jsxDEV('a', {
            href: "/",
            className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"             ,
 children: "Go home"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 50}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 43}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 42}, this)
  );
}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lo & Bi — Imóveis curados" },
      { name: "description", content: "Encontre, compre e alugue imóveis exclusivos com agentes especializados." },
      { name: "author", content: "Lo & Bi" },
      { property: "og:title", content: "Lo & Bi — Imóveis curados" },
      { property: "og:description", content: "Encontre, compre e alugue imóveis exclusivos com agentes especializados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lo & Bi — Imóveis curados" },
      { name: "twitter:description", content: "Encontre, compre e alugue imóveis exclusivos com agentes especializados." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/50d9522a-02ac-499c-b37c-741a11299c8b/id-preview-50c10255--10406b0a-aa24-4106-9003-d9d1969a65aa.lovable.app-1778883244262.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/50d9522a-02ac-499c-b37c-741a11299c8b/id-preview-50c10255--10406b0a-aa24-4106-9003-d9d1969a65aa.lovable.app-1778883244262.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }) {
  return (
    _jsxDEV('html', { lang: "en", children: [
      _jsxDEV('head', { children: 
        _jsxDEV(HeadContent, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 107}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this)
      , _jsxDEV('body', { children: [
        children
        , _jsxDEV(Scripts, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 109}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 105}, this)
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("lobi-admin");
      setIsAdmin(stored === "true");
    }
  }, []);

  const authContext = useMemo(
    () => ({
      isAdmin,
      login: (username, password) => {
        const isValid = username === "admin" && password === "admin123";
        if (isValid) {
          setIsAdmin(true);
          window.localStorage.setItem("lobi-admin", "true");
        }
        return isValid;
      },
      logout: () => {
        setIsAdmin(false);
        window.localStorage.removeItem("lobi-admin");
      },
    }),
    [isAdmin]
  );

  return (
    _jsxDEV(AuthContext.Provider, { value: authContext, children: 
      _jsxDEV(QueryClientProvider, { client: queryClient, children: 
        _jsxDEV(Outlet, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 150}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 148}, this)
  );
}
