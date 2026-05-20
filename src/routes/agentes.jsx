const _jsxFileName = "";import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpDown, ChevronLeft } from "lucide-react";
import { useAuth } from "@/lib/auth";
import heroVilla from "@/imagens/home.jpg";

export const Route = createFileRoute("/agentes")({
  head: () => ({
    meta: [
      { title: "Agentes — Lo&Bi" },
      { name: "description", content: "Conheça nossos agentes e organize sua equipe de atendimento imobiliário." },
    ],
  }),
  component: AgentsPage,
});










const initialAgents = [
  { id: 1, nome: "Marina Costa", empresa: "Lo&Bi Premium", email: "marina@lobi.com" },
  { id: 2, nome: "Eduardo Reis", empresa: "Lo&Bi Prime", email: "eduardo@lobi.com" },
  { id: 3, nome: "Sofia Andrade", empresa: "Lo&Bi Elite", email: "sofia@lobi.com" },
];

function AgentsPage() {
  const [agents, setAgents] = useState(initialAgents);
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editNome, setEditNome] = useState("");
  const [editEmpresa, setEditEmpresa] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [sortField, setSortField] = useState("nome");
  const [sortAsc, setSortAsc] = useState(true);
  const { isAdmin } = useAuth();

  const sortedAgents = [...agents].sort((a, b) => {
    const left = a[sortField].localeCompare(b[sortField], "pt-BR", { sensitivity: "base" });
    return sortAsc ? left : -left;
  });

  const handleAdd = () => {
    if (!nome.trim() || !empresa.trim() || !email.trim()) return;

    setAgents((current) => [
      ...current,
      { id: current.length ? Math.max(...current.map((agent) => agent.id)) + 1 : 1, nome: nome.trim(), empresa: empresa.trim(), email: email.trim() },
    ]);
    setNome("");
    setEmpresa("");
    setEmail("");
  };

  const handleDelete = (id) => {
    setAgents((current) => current.filter((agent) => agent.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const handleEdit = (agent) => {
    setEditingId(agent.id);
    setEditNome(agent.nome);
    setEditEmpresa(agent.empresa);
    setEditEmail(agent.email);
  };

  const handleSave = (id) => {
    if (!editNome.trim() || !editEmpresa.trim() || !editEmail.trim()) return;
    setAgents((current) =>
      current.map((agent) =>
        agent.id === id
          ? { ...agent, nome: editNome.trim(), empresa: editEmpresa.trim(), email: editEmail.trim() }
          : agent
      )
    );
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortAsc((current) => !current);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    _jsxDEV('div', { className: "min-h-screen bg-background text-foreground"  , children: [
      _jsxDEV('header', { className: "absolute top-0 left-0 right-0 z-20"    , children: 
        _jsxDEV('div', { className: "mx-auto max-w-7xl px-6 py-6 flex items-center justify-between"      , children: [
          _jsxDEV(Link, { to: "/", className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/80 shadow-sm hover:text-[var(--gold)] transition"            , children: 
            _jsxDEV(ChevronLeft, { className: "h-5 w-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 105}, this)
          , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
            _jsxDEV('span', { className: "h-9 w-9 rounded-full border border-[var(--gold)] flex items-center justify-center"       , children: 
              _jsxDEV('span', { className: "font-display text-[var(--gold)] text-lg"  , children: "M"}, void 0, false, {fileName: _jsxFileName, lineNumber: 110}, this)
            }, void 0, false, {fileName: _jsxFileName, lineNumber: 109}, this)
            , _jsxDEV('span', { className: "font-display text-xl text-cream tracking-wide"   , children: "Lo & Bi"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 112}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 108}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 104}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 103}, this)

      , _jsxDEV('section', { className: "relative h-[60vh] min-h-[420px] overflow-hidden"   , children: [
        _jsxDEV('img', { src: heroVilla, alt: "Imóvel de luxo ao pôr do sol"      , className: "absolute inset-0 h-full w-full object-cover"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 118}, this )
        , _jsxDEV('div', { className: "absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.03_60/0.55)] via-[oklch(0.22_0.03_60/0.25)] to-[oklch(0.22_0.03_60/0.75)]"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 119}, this )
        , _jsxDEV('div', { className: "relative z-10 mx-auto max-w-7xl px-6 h-full flex items-end pb-20"        , children: 
          _jsxDEV('div', { className: "max-w-3xl text-center mx-auto"  , children: [
            _jsxDEV('span', { className: "block text-[var(--gold)] tracking-[0.3em] text-sm md:text-base uppercase mb-4"      , children: "Agentes"}, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this)
            , _jsxDEV('span', { className: "block text-[var(--gold)] tracking-[0.3em] text-xs uppercase mb-6"     , children: "Realizando sonhos · Desde 2020"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
            , _jsxDEV('h1', { className: "font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95]"     , children: ["O endereço do seu"
                 , _jsxDEV('br', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this )
              , _jsxDEV('em', { className: "text-[var(--gold)]", children: "próximo capítulo." }, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 124}, this)
            , _jsxDEV('p', { className: "text-cream/85 mt-6 text-lg"  , children: "Gerencie sua equipe diretamente na tabela abaixo e mantenha o time pronto para cada atendimento."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 120}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 117}, this)

      , _jsxDEV('main', { className: "mx-auto max-w-7xl px-6 py-16"   , children: 
        _jsxDEV('div', { className: "rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-elegant)]"     , children: [
          _jsxDEV('div', { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6"      , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('h2', { className: "font-display text-2xl" , children: "Equipe de agentes"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this)
              , _jsxDEV('p', { className: "text-sm text-muted-foreground mt-1"  , children: "Adicione, remova e organize seus agentes por ordem alfabética."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 138}, this)
            , _jsxDEV('div', { className: "text-sm text-muted-foreground" , children: ["Quantidade de agentes: "   , agents.length]}, void 0, true, {fileName: _jsxFileName, lineNumber: 142}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 137}, this)

          , isAdmin ? (
            _jsxDEV('div', { className: "grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] mb-6"   , children: [
              _jsxDEV('label', { className: "flex flex-col gap-2 text-sm"   , children: ["Nome"

                , _jsxDEV('input', { value: nome, onChange: (e) => setNome(e.target.value), className: "rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-[var(--gold)]"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 149}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 147}, this)
              , _jsxDEV('label', { className: "flex flex-col gap-2 text-sm"   , children: ["Empresa"

                , _jsxDEV('input', { value: empresa, onChange: (e) => setEmpresa(e.target.value), className: "rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-[var(--gold)]"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 151}, this)
              , _jsxDEV('label', { className: "flex flex-col gap-2 text-sm"   , children: ["Email"

                , _jsxDEV('input', { value: email, onChange: (e) => setEmail(e.target.value), className: "rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none focus:border-[var(--gold)]"        ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 155}, this)
              , _jsxDEV('button', { onClick: handleAdd, className: "mt-6 rounded-sm bg-[var(--gold)] px-4 py-3 text-sm font-medium text-[var(--olive-deep)] hover:bg-[var(--gold-deep)] transition"         , children: "Adicionar"

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 159}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 146}, this)
          ) : (
            _jsxDEV('div', { className: "mb-6 rounded-sm border border-border bg-muted/50 p-6 text-sm text-muted-foreground"       , children: "Faça login como administrador para adicionar, editar ou excluir agentes."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 164}, this)
          )

          , _jsxDEV('div', { className: "overflow-hidden rounded-sm border border-border"   , children: 
            _jsxDEV('table', { className: "w-full border-collapse text-sm"  , children: [
              _jsxDEV('thead', { className: "bg-muted text-left text-[var(--olive-deep)]"  , children: 
                _jsxDEV('tr', { children: [
                  _jsxDEV('th', { className: "px-4 py-3" , children: "#"}, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this)
                  , _jsxDEV('th', { className: "cursor-pointer px-4 py-3"  , onClick: () => toggleSort("nome"), children: ["Nome " , _jsxDEV(ArrowUpDown, { className: "inline-block h-4 w-4 align-middle"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 174}, this )]}, void 0, true, {fileName: _jsxFileName, lineNumber: 174}, this)
                  , _jsxDEV('th', { className: "cursor-pointer px-4 py-3"  , onClick: () => toggleSort("empresa"), children: ["Empresa " , _jsxDEV(ArrowUpDown, { className: "inline-block h-4 w-4 align-middle"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 175}, this )]}, void 0, true, {fileName: _jsxFileName, lineNumber: 175}, this)
                  , _jsxDEV('th', { className: "px-4 py-3" , children: "Email"}, void 0, false, {fileName: _jsxFileName, lineNumber: 176}, this)
                  , _jsxDEV('th', { className: "px-4 py-3" , children: "Ações"}, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 172}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 171}, this)
              , _jsxDEV('tbody', { children: 
                sortedAgents.map((agent) => (
                  _jsxDEV('tr', { className: "border-t border-border hover:bg-muted/50 transition-colors"   , children: [
                    _jsxDEV('td', { className: "px-4 py-3 text-muted-foreground"  , children: agent.id}, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this)
                    , editingId === agent.id ? (
                      _jsxDEV(_Fragment, { children: [
                        _jsxDEV('td', { className: "px-4 py-3" , children: 
                          _jsxDEV('input', { value: editNome, onChange: (e) => setEditNome(e.target.value), className: "w-full rounded-sm border border-border bg-background px-2 py-1 text-sm outline-none focus:border-[var(--gold)]"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 187}, this )
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 186}, this)
                        , _jsxDEV('td', { className: "px-4 py-3" , children: 
                          _jsxDEV('input', { value: editEmpresa, onChange: (e) => setEditEmpresa(e.target.value), className: "w-full rounded-sm border border-border bg-background px-2 py-1 text-sm outline-none focus:border-[var(--gold)]"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 190}, this )
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 189}, this)
                        , _jsxDEV('td', { className: "px-4 py-3" , children: 
                          _jsxDEV('input', { value: editEmail, onChange: (e) => setEditEmail(e.target.value), className: "w-full rounded-sm border border-border bg-background px-2 py-1 text-sm outline-none focus:border-[var(--gold)]"         ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 193}, this )
                        }, void 0, false, {fileName: _jsxFileName, lineNumber: 192}, this)
                        , _jsxDEV('td', { className: "px-4 py-3 flex items-center gap-2"    , children: [
                          _jsxDEV('button', { onClick: () => handleSave(agent.id), className: "rounded-sm bg-[var(--gold)] px-3 py-1 text-xs font-medium text-[var(--olive-deep)] hover:bg-[var(--gold-deep)] transition"        , children: "Salvar"

                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 196}, this)
                          , _jsxDEV('button', { onClick: handleCancelEdit, className: "rounded-sm border border-border bg-background px-3 py-1 text-xs text-foreground hover:bg-muted/50 transition"         , children: "Cancelar"

                          }, void 0, false, {fileName: _jsxFileName, lineNumber: 199}, this)
                        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 195}, this)
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 185}, this)
                    ) : (
                      _jsxDEV(_Fragment, { children: [
                          _jsxDEV('td', { className: "px-4 py-3" , children: agent.nome}, void 0, false, {fileName: _jsxFileName, lineNumber: 206}, this)
                        , _jsxDEV('td', { className: "px-4 py-3" , children: agent.empresa}, void 0, false, {fileName: _jsxFileName, lineNumber: 207}, this)
                        , _jsxDEV('td', { className: "px-4 py-3" , children: agent.email}, void 0, false, {fileName: _jsxFileName, lineNumber: 208}, this)
                        , isAdmin ? (
                          _jsxDEV('td', { className: "px-4 py-3 flex items-center gap-2"    , children: [
                            _jsxDEV('button', { onClick: () => handleEdit(agent), className: "rounded-sm border border-border bg-background px-3 py-1 text-xs text-foreground hover:bg-muted/50 transition"         , children: "Editar"

                            }, void 0, false, {fileName: _jsxFileName, lineNumber: 211}, this)
                            , _jsxDEV('button', { onClick: () => handleDelete(agent.id), className: "rounded-sm border border-border bg-background px-3 py-1 text-xs text-foreground hover:bg-destructive/10 transition"         , children: "Excluir"

                            }, void 0, false, {fileName: _jsxFileName, lineNumber: 214}, this)
                          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 210}, this)
                        ) : (
                          _jsxDEV('td', { className: "px-4 py-3 text-sm text-muted-foreground"   , children: "Somente admin" }, void 0, false, {fileName: _jsxFileName, lineNumber: 219}, this)
                        )
                      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 205}, this)
                    )
                  ]}, agent.id, true, {fileName: _jsxFileName, lineNumber: 182}, this)
                ))
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 180}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 170}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 169}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 136}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 135}, this)

      , _jsxDEV('footer', { className: "bg-[var(--olive-deep)] text-cream/80 border-t border-border"   , children: 
        _jsxDEV('div', { className: "mx-auto max-w-7xl px-6 py-12"   , children: [
          _jsxDEV('div', { className: "grid md:grid-cols-2 gap-8 pb-8 border-b border-cream/10"     , children: [
            _jsxDEV('div', { children: [
              _jsxDEV('div', { className: "flex items-center gap-2 mb-4"   , children: [
                _jsxDEV('span', { className: "h-9 w-9 rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] font-display"         , children: "M"}, void 0, false, {fileName: _jsxFileName, lineNumber: 236}, this)
                , _jsxDEV('span', { className: "font-display text-xl" , children: "Maison & Terra"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 237}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 235}, this)
              , _jsxDEV('p', { className: "text-sm leading-relaxed" , children: "Plataforma especializada em sonhos: comprar ou alugar imóveis exclusivos no Brasil."

              }, void 0, false, {fileName: _jsxFileName, lineNumber: 239}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 234}, this)
            , _jsxDEV('div', { children: [
              _jsxDEV('h4', { className: "text-cream font-display text-lg mb-4"   , children: "Contato"}, void 0, false, {fileName: _jsxFileName, lineNumber: 244}, this)
              , _jsxDEV('p', { className: "text-sm flex items-center gap-2 mb-2"    , children: "+55 11 4002-8922"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 245}, this)
              , _jsxDEV('p', { className: "text-sm flex items-center gap-2"   , children: "realizar.sonhos@lobi.com"}, void 0, false, {fileName: _jsxFileName, lineNumber: 246}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 243}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 233}, this)
          , _jsxDEV('div', { className: "border-t border-cream/10 mt-16 pt-6 flex justify-between text-xs text-cream/50"       , children: [
            _jsxDEV('span', { children: "© 2026 Lo & Bi. Todos os direitos reservados."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 250}, this)
            , _jsxDEV('span', { children: "Imobiliária desde 2020"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 251}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 249}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 232}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 231}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 102}, this)
  );
}
