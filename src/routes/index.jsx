const _jsxFileName = "";import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, BedDouble, Bath, Maximize, ArrowUpRight, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import heroVilla from "@/imagens/home.jpg";
import imagem1 from "@/imagens/1/1.jpg";
import imagem2 from "@/imagens/2/2.jpg";
import imagem3 from "@/imagens/3/3.jpg";
import imagem4 from "@/imagens/4/4.jpg";
import imagem5 from "@/imagens/5/5.jpg";
import imagem6 from "@/imagens/6/imagem-6.jpg";
import imovel1_2 from "@/imagens/1/1.2.jpg";
import imovel1_3 from "@/imagens/1/1.3.jpg";
import imovel1_4 from "@/imagens/1/1.4.jpg";
import imovel2_1 from "@/imagens/2/2.1.jpg";
import imovel2_2 from "@/imagens/2/2.2.jpg";
import imovel2_3 from "@/imagens/2/2.3.jpg";
import imovel3_1 from "@/imagens/3/3.1.jpg";
import imovel3_2 from "@/imagens/3/3.2.jpg";
import imovel3_3 from "@/imagens/3/3.3.jpg";
import imovel4_1 from "@/imagens/4/4.1.jpg";
import imovel4_2 from "@/imagens/4/4.2.jpg";
import imovel4_3 from "@/imagens/4/4.3.jpg";
import imovel5_1 from "@/imagens/5/5.1.jpg";
import imovel5_2 from "@/imagens/5/5.2.jpg";
import imovel5_3 from "@/imagens/5/5.3.jpg";
import imovel6_1 from "@/imagens/6/6.2.jpg";
import imovel6_2 from "@/imagens/6/6.3.jpg";
import imovel6_3 from "@/imagens/6/6.4.jpg";
import imovel6_4 from "@/imagens/6/6.5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lo&Bi — Encontre o imóvel dos seus sonhos" },
      { name: "description", content: "Plataforma curada para localizar, comprar e alugar imóveis exclusivos. Casas, apartamentos e propriedades únicas com agentes especializados." },
      { property: "og:title", content: "Lo&Bi — Imóveis de valor agregado" },
      { property: "og:description", content: "Encontre, compre e contrate. Imóveis exclusivos." },
    ],
  }),
  component: HomePage,
});

const listings = [
  { id: 1, img: imagem1, images: [imagem1, imovel1_2, imovel1_3, imovel1_4], title: "Casa Ipê Modernista", location: "Jardins, São Paulo", price: "R$ 4.250.000", beds: 4, baths: 3, area: "320 m²", tag: "Venda" },
  { id: 2, img: imagem2, images: [imagem2, imovel2_1, imovel2_2, imovel2_3], title: "Penthouse Aurora", location: "Vila Olímpia, São Paulo", price: "R$ 12.900/mês", beds: 3, baths: 2, area: "210 m²", tag: "Aluguel" },
  { id: 3, img: imagem3, images: [imagem3, imovel3_1, imovel3_2, imovel3_3], title: "Casa de Campo Oliveira", location: "Serra da Mantiqueira", price: "R$ 2.890.000", beds: 5, baths: 4, area: "480 m²", tag: "Venda" },
  { id: 4, img: imagem4, images: [imagem4, imovel4_1, imovel4_2, imovel4_3], title: "Villa Costa Azul", location: "Búzios, Rio de Janeiro", price: "R$ 18.500.000", beds: 6, baths: 6, area: "920 m²", tag: "Exclusivo" },
  { id: 5, img: imagem5, images: [imagem5, imovel5_1, imovel5_2, imovel5_3], title: "Beleza Mineira", location: "Belo Horizonte, Minas Gerais", price: "R$ 20.500.000", beds: 8, baths: 5, area: "720 m²", tag: "Exclusivo" },
  { id: 6, img: imagem6, images: [imagem6, imovel6_1, imovel6_2, imovel6_3, imovel6_4], title: "Paraíso Praiano", location: "Salvador, Bahia", price: "R$ 10.500.000", beds: 5, baths: 2, area: "620 m²", tag: "Venda" },
];

const featuredListings = listings.slice(0, 4);

function HomePage() {
  return (
    _jsxDEV('div', { className: "min-h-screen bg-background text-foreground"  , children: [
      _jsxDEV(Header, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 58}, this )
      , _jsxDEV(Hero, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 59}, this )
      , _jsxDEV(SearchBar, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 60}, this )
      , _jsxDEV(Featured, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 61}, this )
      , _jsxDEV(Categories, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 62}, this )
      , _jsxDEV(AgentsCTA, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 63}, this )
      , _jsxDEV(Footer, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 64}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 57}, this)
  );
}

function Header() {
  const { isAdmin, logout } = useAuth();

  return (
    _jsxDEV('header', { className: "absolute top-0 left-0 right-0 z-20"    , children: 
      _jsxDEV('div', { className: "mx-auto max-w-7xl px-6 py-6 flex items-center justify-between"      , children: [
        _jsxDEV(Link, { to: "/", className: "flex items-center gap-2"  , children: [
          _jsxDEV('span', { className: "h-9 w-9 rounded-full border border-[var(--gold)] flex items-center justify-center"       , children: 
            _jsxDEV('span', { className: "font-display text-[var(--gold)] text-lg"  , children: "M"}, void 0, false, {fileName: _jsxFileName, lineNumber: 77}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 76}, this)
          , _jsxDEV('span', { className: "font-display text-xl text-cream tracking-wide"   , children: "Lo & Bi "   }, void 0, false, {fileName: _jsxFileName, lineNumber: 79}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 75}, this)
        , _jsxDEV('nav', { className: "hidden md:flex items-center gap-8 text-sm text-cream/90"     , children: [
          _jsxDEV(Link, { to: "/imoveis", className: "hover:text-[var(--gold)] transition" , children: "Imóveis"}, void 0, false, {fileName: _jsxFileName, lineNumber: 82}, this)
          , _jsxDEV(Link, { to: "/agentes", className: "hover:text-[var(--gold)] transition" , children: "Agentes"}, void 0, false, {fileName: _jsxFileName, lineNumber: 83}, this)
          , _jsxDEV('a', { href: "#categories", className: "hover:text-[var(--gold)] transition" , children: "Categorias"}, void 0, false, {fileName: _jsxFileName, lineNumber: 84}, this)
          , _jsxDEV('a', { href: "#contact", className: "hover:text-[var(--gold)] transition" , children: "Contato"}, void 0, false, {fileName: _jsxFileName, lineNumber: 85}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 81}, this)
        , isAdmin ? (
          _jsxDEV('button', { onClick: logout, className: "text-sm px-5 py-2.5 rounded-full bg-[var(--gold)] text-[var(--olive-deep)] font-medium hover:bg-[var(--gold-deep)] hover:text-cream transition"         , children: "Sair"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 88}, this)
        ) : (
          _jsxDEV(Link, { to: "/admin", className: "text-sm px-5 py-2.5 rounded-full bg-[var(--gold)] text-[var(--olive-deep)] font-medium hover:bg-[var(--gold-deep)] hover:text-cream transition"         , children: "Login admin"

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 92}, this)
        )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 74}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 73}, this)
  );
}

function Hero() {
  return (
    _jsxDEV('section', { className: "relative h-[92vh] min-h-[640px] w-full overflow-hidden"    , children: [
      _jsxDEV('img', { src: heroVilla, alt: "Villa moderna ao pôr do sol"     , width: 1600, height: 1200,
        className: "absolute inset-0 h-full w-full object-cover"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 104}, this )
      , _jsxDEV('div', { className: "absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.03_60/0.55)] via-[oklch(0.22_0.03_60/0.25)] to-[oklch(0.22_0.03_60/0.75)]"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 106}, this )
      , _jsxDEV('div', { className: "relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-24"         , children: [
        _jsxDEV('span', { className: "text-[var(--gold)] tracking-[0.3em] text-xs uppercase mb-6"    , children: "Realizando sonhos · Desde 2020"    }, void 0, false, {fileName: _jsxFileName, lineNumber: 108}, this)
        , _jsxDEV('h1', { className: "font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl"      , children: ["O endereço do seu"
             , _jsxDEV('br', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 110}, this )
          , _jsxDEV('em', { className: "text-[var(--gold)]", children: "próximo capítulo." }, void 0, false, {fileName: _jsxFileName, lineNumber: 111}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 109}, this)
        , _jsxDEV('p', { className: "text-cream/85 mt-8 max-w-xl text-lg"   , children: "Imóveis selecionados com exclusividade. Compre, alugue ou contrate um agente especializado."

        }, void 0, false, {fileName: _jsxFileName, lineNumber: 113}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 107}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 103}, this)
  );
}

function SearchBar() {
  return (
    _jsxDEV('div', { className: "relative z-30 -mt-14 mx-auto max-w-6xl px-6"     , children: 
      _jsxDEV('div', { className: "bg-card border border-border rounded-sm shadow-[var(--shadow-elegant)] p-2 flex flex-col md:flex-row gap-2"         , children: [
        _jsxDEV('div', { className: "flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border"         , children: [
          _jsxDEV(MapPin, { className: "h-5 w-5 text-[var(--olive)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this )
          , _jsxDEV('input', { className: "bg-transparent outline-none flex-1 text-sm placeholder:text-muted-foreground"    , placeholder: "Cidade, bairro ou endereço"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 127}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 125}, this)
        , _jsxDEV('div', { className: "flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border"         , children: 
          _jsxDEV('select', { className: "bg-transparent outline-none flex-1 text-sm text-foreground"    , children: [
            _jsxDEV('option', { children: "Comprar"}, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this)
            , _jsxDEV('option', { children: "Alugar"}, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this)
            , _jsxDEV('option', { children: "Investir"}, void 0, false, {fileName: _jsxFileName, lineNumber: 133}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 130}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
        , _jsxDEV('div', { className: "flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border"         , children: 
          _jsxDEV('select', { className: "bg-transparent outline-none flex-1 text-sm text-foreground"    , children: [
            _jsxDEV('option', { children: "Faixa de preço"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 138}, this)
            , _jsxDEV('option', { children: "Até R$ 1M"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 139}, this)
            , _jsxDEV('option', { children: "R$ 1M – 5M"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 140}, this)
            , _jsxDEV('option', { children: "Acima R$ 5M"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 141}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 137}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 136}, this)
        , _jsxDEV('button', { className: "bg-[var(--olive)] text-primary-foreground px-8 py-4 rounded-sm hover:bg-[var(--olive-deep)] transition flex items-center justify-center gap-2 font-medium"           , children: [
          _jsxDEV(Search, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 145}, this ), " Buscar"
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 144}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 124}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 123}, this)
  );
}

function Featured() {
  return (
    _jsxDEV('section', { id: "listings", className: "mx-auto max-w-7xl px-6 py-28"   , children: [
      _jsxDEV('div', { className: "flex items-end justify-between mb-14"   , children: [
        _jsxDEV('div', { children: [
          _jsxDEV('span', { className: "text-[var(--gold-deep)] tracking-[0.3em] text-xs uppercase"   , children: "Selecionados"}, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this)
          , _jsxDEV('h2', { className: "font-display text-4xl md:text-5xl mt-3"   , children: "Imóveis em destaque"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 158}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 156}, this)
        , _jsxDEV('a', { href: "#", className: "hidden md:inline-flex items-center gap-2 text-sm text-[var(--olive)] hover:text-[var(--gold-deep)] transition"       , children: [
          _jsxDEV(Link, { to: "/imoveis", children: "Ver todos" }, void 0, false, {fileName: _jsxFileName, lineNumber: 161}, this), " " , _jsxDEV(ArrowUpRight, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 161}, this )
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 160}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 155}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-8"   , children: 
        featuredListings.map((l) => (
          _jsxDEV('article', { className: "group cursor-pointer" , children: [
            _jsxDEV(HomeImageCarousel, { 
              images: l.images, 
              title: l.title, 
              tag: l.tag,}, void 0, false, {fileName: _jsxFileName, lineNumber: 168}, this 
            )
            , _jsxDEV('div', { className: "mt-5 flex items-start justify-between gap-6"    , children: [
              _jsxDEV('div', { children: [
                _jsxDEV('h3', { className: "font-display text-2xl" , children: l.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 175}, this)
                , _jsxDEV('p', { className: "text-muted-foreground text-sm mt-1 flex items-center gap-1.5"     , children: [
                  _jsxDEV(MapPin, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 177}, this ), " " , l.location
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 176}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 174}, this)
              , _jsxDEV('div', { className: "text-right shrink-0" , children: 
                _jsxDEV('p', { className: "font-display text-xl text-[var(--gold-deep)]"  , children: l.price}, void 0, false, {fileName: _jsxFileName, lineNumber: 181}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 180}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 173}, this)
            , _jsxDEV('div', { className: "mt-4 flex items-center gap-5 text-sm text-muted-foreground border-t border-border pt-4"        , children: [
              _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV(BedDouble, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 185}, this ), " " , l.beds, " quartos" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 185}, this)
              , _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV(Bath, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 186}, this ), " " , l.baths, " banheiros" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 186}, this)
              , _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV(Maximize, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 187}, this ), " " , l.area]}, void 0, true, {fileName: _jsxFileName, lineNumber: 187}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 184}, this)
          ]}, l.id, true, {fileName: _jsxFileName, lineNumber: 167}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 165}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 154}, this)
  );
}

function Categories() {
  const cats = [
    { label: "Casas", count: "240 imóveis" },
    { label: "Apartamentos", count: "186 imóveis" },
    { label: "Coberturas", count: "42 imóveis" },
    { label: "Rural & Campo", count: "78 imóveis" },
    { label: "Litoral", count: "94 imóveis" },
    { label: "Comercial", count: "53 imóveis" },
  ];
  return (
    _jsxDEV('section', { id: "categories", className: "bg-[var(--olive-deep)] text-cream py-28"  , children: 
      _jsxDEV('div', { className: "mx-auto max-w-7xl px-6"  , children: [
        _jsxDEV('div', { className: "grid md:grid-cols-3 gap-12 items-end mb-16"    , children: [
          _jsxDEV('div', { className: "md:col-span-2", children: [
            _jsxDEV('span', { className: "text-[var(--gold)] tracking-[0.3em] text-xs uppercase"   , children: "Explore"}, void 0, false, {fileName: _jsxFileName, lineNumber: 210}, this)
            , _jsxDEV('h2', { className: "font-display text-4xl md:text-5xl mt-3 text-cream"    , children: ["Encontre por "
                , _jsxDEV('em', { className: "text-[var(--gold)]", children: "categoria"}, void 0, false, {fileName: _jsxFileName, lineNumber: 212}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 211}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 209}, this)
          , _jsxDEV('p', { className: "text-cream/70 text-sm leading-relaxed"  , children: "Do urbano ao rural, do investimento ao lar. Navegue pelas categorias e descubra propriedades que combinam com a sua história."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 215}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 208}, this)
        , _jsxDEV('div', { className: "grid grid-cols-2 md:grid-cols-3 gap-px bg-cream/10"    , children: 
          cats.map((c) => (
            _jsxDEV('a', { href: "#", className: "bg-[var(--olive-deep)] hover:bg-[var(--olive)] transition p-8 group"    , children: [
              _jsxDEV('div', { className: "flex items-center justify-between"  , children: [
                _jsxDEV('h3', { className: "font-display text-2xl text-cream"  , children: c.label}, void 0, false, {fileName: _jsxFileName, lineNumber: 223}, this)
                , _jsxDEV(ArrowUpRight, { className: "h-5 w-5 text-[var(--gold)] group-hover:rotate-45 transition-transform"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 224}, this )
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 222}, this)
              , _jsxDEV('p', { className: "text-cream/60 text-sm mt-2"  , children: c.count}, void 0, false, {fileName: _jsxFileName, lineNumber: 226}, this)
            ]}, c.label, true, {fileName: _jsxFileName, lineNumber: 221}, this)
          ))
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 219}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 207}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 206}, this)
  );
}

function AgentsCTA() {
  return (
    _jsxDEV('section', { id: "agents", className: "mx-auto max-w-7xl px-6 py-28"   , children: 
      _jsxDEV('div', { className: "grid md:grid-cols-2 gap-16 items-center"   , children: [
        _jsxDEV('div', { className: "aspect-[4/5] bg-[var(--peach)] relative overflow-hidden rounded-sm"    , children: [
          _jsxDEV('div', { className: "absolute inset-8 border border-[var(--gold)]/40"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 240}, this )
          , _jsxDEV('div', { className: "absolute inset-0 flex items-center justify-center"    , children: 
            _jsxDEV('div', { className: "text-center", children: [
              _jsxDEV('p', { className: "font-display text-7xl text-[var(--olive-deep)]"  , children: "12"}, void 0, false, {fileName: _jsxFileName, lineNumber: 243}, this)
              , _jsxDEV('p', { className: "text-[var(--olive-deep)] tracking-widest text-xs uppercase mt-2"    , children: "anos de curadoria"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 244}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 242}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 241}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 239}, this)
        , _jsxDEV('div', { children: [
          _jsxDEV('span', { className: "text-[var(--gold-deep)] tracking-[0.3em] text-xs uppercase"   , children: "Nossos agentes" }, void 0, false, {fileName: _jsxFileName, lineNumber: 249}, this)
          , _jsxDEV('h2', { className: "font-display text-4xl md:text-5xl mt-3 leading-tight"    , children: ["Contrate quem entende"
              , _jsxDEV('br', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 251}, this )
            , _jsxDEV('em', { className: "text-[var(--gold-deep)]", children: "do seu lugar."  }, void 0, false, {fileName: _jsxFileName, lineNumber: 252}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 250}, this)
          , _jsxDEV('p', { className: "text-muted-foreground mt-6 leading-relaxed"  , children: "Conectamos você a agentes locais especializados. Pessoas que conhecem cada bairro, cada esquina, cada história. Atendimento consultivo do primeiro contato à entrega das chaves."

          }, void 0, false, {fileName: _jsxFileName, lineNumber: 254}, this)
          , _jsxDEV('div', { className: "mt-10 flex flex-wrap gap-4"   , children: [
            _jsxDEV('button', { className: "bg-[var(--olive)] text-primary-foreground px-7 py-3.5 rounded-sm hover:bg-[var(--olive-deep)] transition font-medium text-sm"        , children: "Falar com agente"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 258}, this)
            , _jsxDEV('button', { className: "border border-[var(--olive)] text-[var(--olive)] px-7 py-3.5 rounded-sm hover:bg-[var(--olive)] hover:text-primary-foreground transition font-medium text-sm"          , children: "Conhecer time"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 261}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 257}, this)
          , _jsxDEV('div', { className: "mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"      , children: [
            _jsxDEV('div', { children: [_jsxDEV('p', { className: "font-display text-3xl text-[var(--olive)]"  , children: "680+"}, void 0, false, {fileName: _jsxFileName, lineNumber: 266}, this), _jsxDEV('p', { className: "text-xs text-muted-foreground mt-1"  , children: "Vendas concluídas" }, void 0, false, {fileName: _jsxFileName, lineNumber: 266}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 266}, this)
            , _jsxDEV('div', { children: [_jsxDEV('p', { className: "font-display text-3xl text-[var(--olive)]"  , children: "42"}, void 0, false, {fileName: _jsxFileName, lineNumber: 267}, this), _jsxDEV('p', { className: "text-xs text-muted-foreground mt-1"  , children: "Agentes ativos" }, void 0, false, {fileName: _jsxFileName, lineNumber: 267}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 267}, this)
            , _jsxDEV('div', { children: [_jsxDEV('p', { className: "font-display text-3xl text-[var(--olive)]"  , children: "98%"}, void 0, false, {fileName: _jsxFileName, lineNumber: 268}, this), _jsxDEV('p', { className: "text-xs text-muted-foreground mt-1"  , children: "Clientes satisfeitos" }, void 0, false, {fileName: _jsxFileName, lineNumber: 268}, this)]}, void 0, true, {fileName: _jsxFileName, lineNumber: 268}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 265}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 248}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 238}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 237}, this)
  );
}

function Footer() {
  return (
    _jsxDEV('footer', { id: "contact", className: "bg-[var(--olive-deep)] text-cream/80" , children: 
      _jsxDEV('div', { className: "mx-auto max-w-7xl px-6 py-20"   , children: [
        _jsxDEV('div', { className: "grid md:grid-cols-4 gap-12"  , children: [
          _jsxDEV('div', { className: "md:col-span-2", children: [
            _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
              _jsxDEV('span', { className: "h-9 w-9 rounded-full border border-[var(--gold)] flex items-center justify-center"       , children: 
                _jsxDEV('span', { className: "font-display text-[var(--gold)]" , children: "M"}, void 0, false, {fileName: _jsxFileName, lineNumber: 284}, this)
              }, void 0, false, {fileName: _jsxFileName, lineNumber: 283}, this)
              , _jsxDEV('span', { className: "font-display text-xl text-cream"  , children: "Maison & Terra"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 286}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 282}, this)
            , _jsxDEV('p', { className: "mt-6 max-w-md text-sm leading-relaxed"   , children: "Plataforma especializada em sonhos: comprar ou alugar imóveis exclusivos no Brasil."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 288}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 281}, this)
          , _jsxDEV('div', { children: [
            _jsxDEV('h4', { className: "text-cream font-display text-lg mb-4"   , children: "Contato"}, void 0, false, {fileName: _jsxFileName, lineNumber: 293}, this)
            , _jsxDEV('p', { className: "text-sm flex items-center gap-2 mb-2"    , children: [_jsxDEV(Phone, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 294}, this ), " +55 11 4002-8922"   ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 294}, this)
            , _jsxDEV('p', { className: "text-sm flex items-center gap-2"   , children: [_jsxDEV(Mail, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 295}, this ), " realizar.sonhos@lobi.com" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 295}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 292}, this)
          , _jsxDEV('div', { children: [
            _jsxDEV('h4', { className: "text-cream font-display text-lg mb-4"   , children: "Navegue"}, void 0, false, {fileName: _jsxFileName, lineNumber: 298}, this)
            , _jsxDEV('ul', { className: "space-y-2 text-sm" , children: [
              _jsxDEV('li', { children: _jsxDEV('a', { href: "#listings", className: "hover:text-[var(--gold)]", children: "Imóveis"}, void 0, false, {fileName: _jsxFileName, lineNumber: 300}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 300}, this)
              , _jsxDEV('li', { children: _jsxDEV('a', { href: "#categories", className: "hover:text-[var(--gold)]", children: "Categorias"}, void 0, false, {fileName: _jsxFileName, lineNumber: 301}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 301}, this)
              , _jsxDEV('li', { children: _jsxDEV('a', { href: "#agents", className: "hover:text-[var(--gold)]", children: "Agentes"}, void 0, false, {fileName: _jsxFileName, lineNumber: 302}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 302}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 299}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 297}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 280}, this)
        , _jsxDEV('div', { className: "border-t border-cream/10 mt-16 pt-6 flex justify-between text-xs text-cream/50"       , children: [
          _jsxDEV('span', { children: "© 2026 Lo & Bi. Todos os direitos reservados."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 307}, this)
          , _jsxDEV('span', { children: "Imobiliária desde 2020"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 308}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 306}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 279}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 278}, this)
  );
}

function HomeImageCarousel({ images, title, tag }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    _jsxDEV('div', { className: "relative overflow-hidden rounded-sm aspect-[4/3] bg-muted group"     , children: [
      _jsxDEV('img', {
        src: images[currentIndex],
        alt: `${title} - imagem ${currentIndex + 1}`,
        loading: "lazy",
        width: 1024,
        height: 768,
        className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 328}, this
      )

      , _jsxDEV('span', { className: "absolute top-4 left-4 bg-cream/95 text-[var(--olive-deep)] text-xs uppercase tracking-widest px-3 py-1.5"         , children: 
        tag
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 337}, this)

      , images.length > 1 && (
        _jsxDEV(_Fragment, { children: [
          _jsxDEV('button', {
            onClick: prevImage,
            className: "absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"           ,
            'aria-label': "Imagem anterior" ,
 children: 
            _jsxDEV(ChevronLeft, { className: "h-5 w-5 text-[var(--olive-deep)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 348}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 343}, this)

          , _jsxDEV('button', {
            onClick: nextImage,
            className: "absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"           ,
            'aria-label': "Próxima imagem" ,
 children: 
            _jsxDEV(ChevronRight, { className: "h-5 w-5 text-[var(--olive-deep)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 356}, this )
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 351}, this)

          /* Indicadores */
          , _jsxDEV('div', { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"     , children: 
            images.map((_, index) => (
              _jsxDEV('button', {

                onClick: () => setCurrentIndex(index),
                className: `h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`,
                'aria-label': `Ir para imagem ${index + 1}`,}, index, false, {fileName: _jsxFileName, lineNumber: 362}, this
              )
            ))
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 360}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 342}, this)
      )

      , _jsxDEV('span', { className: "absolute top-4 right-4 h-10 w-10 rounded-full bg-cream/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"            , children: 
        _jsxDEV(ArrowUpRight, { className: "h-4 w-4 text-[var(--olive-deep)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 378}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 377}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 327}, this)
  );
}
