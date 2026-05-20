const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Login Administrador — Lo&Bi" },
      { name: "description", content: "Área de login para administradores do sistema Lo&Bi." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { isAdmin, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    const success = login(username.trim(), password.trim());
    if (!success) {
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    _jsxDEV('div', { className: "min-h-screen bg-background text-foreground"  , children: [
      _jsxDEV('header', { className: "border-b border-border" , children: 
        _jsxDEV('div', { className: "mx-auto max-w-7xl px-6 py-6 flex items-center justify-between"      , children: [
          _jsxDEV(Link, { to: "/", className: "flex items-center gap-2"  , children: [
            _jsxDEV('span', { className: "h-9 w-9 rounded-full border border-[var(--gold)] flex items-center justify-center"       , children: 
              _jsxDEV('span', { className: "font-display text-[var(--gold)] text-lg"  , children: "M"}, void 0, false, {fileName: _jsxFileName, lineNumber: 36}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 35}, this)
            , _jsxDEV('span', { className: "font-display text-xl text-cream tracking-wide"   , children: "Lo & Bi"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 38}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 34}, this)
          , _jsxDEV(Link, { to: "/agentes", className: "text-sm text-cream/90 hover:text-[var(--gold)] transition"   , children: "Página de Agentes"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 40}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 33}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 32}, this)

      , _jsxDEV('main', { className: "mx-auto max-w-3xl px-6 py-16"   , children: 
        _jsxDEV('div', { className: "rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-elegant)]"     , children: [
          _jsxDEV('h1', { className: "font-display text-4xl text-cream mb-4"   , children: "Login do administrador"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 48}, this)
          , _jsxDEV('p', { className: "text-sm text-muted-foreground mb-8"  , children: "Entre com suas credenciais para ativar as opções de edição e exclusão na página de agentes."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 49}, this)

          , isAdmin ? (
            _jsxDEV('div', { className: "space-y-4", children: [
              _jsxDEV('div', { className: "rounded-sm border border-[var(--gold)] bg-[var(--olive-deep)]/10 p-4 text-sm text-cream"      , children: "Você já está logado como administrador."

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 55}, this)
              , _jsxDEV('button', {
                onClick: logout,
                className: "rounded-sm bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[var(--olive-deep)] hover:bg-[var(--gold-deep)] transition"        ,
 children: "Sair"

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 54}, this)
          ) : (
            _jsxDEV('form', { onSubmit: handleSubmit, className: "space-y-4", children: [
              _jsxDEV('div', { children: [
                _jsxDEV('label', { className: "text-sm text-muted-foreground block mb-2"   , children: "Usuário"}, void 0, false, {fileName: _jsxFileName, lineNumber: 68}, this)
                , _jsxDEV('input', {
                  value: username,
                  onChange: (event) => setUsername(event.target.value),
                  className: "w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-[var(--gold)]"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 69}, this
                )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 67}, this)
              , _jsxDEV('div', { children: [
                _jsxDEV('label', { className: "text-sm text-muted-foreground block mb-2"   , children: "Senha"}, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this)
                , _jsxDEV('input', {
                  value: password,
                  type: "password",
                  onChange: (event) => setPassword(event.target.value),
                  className: "w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-[var(--gold)]"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this
                )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 75}, this)
              , error ? _jsxDEV('p', { className: "text-sm text-destructive" , children: error}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this) : null
              , _jsxDEV('button', { className: "rounded-sm bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[var(--olive-deep)] hover:bg-[var(--gold-deep)] transition"        , children: "Entrar como administrador"

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 66}, this)
          )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 47}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 46}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 31}, this)
  );
}
