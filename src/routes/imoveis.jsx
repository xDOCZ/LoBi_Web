const _jsxFileName = "";import {jsxDEV as _jsxDEV} from "react/jsx-dev-runtime";import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, BedDouble, Bath, Maximize, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroVilla from "@/imagens/home.jpg";
import imovel1_1 from "@/imagens/1/1.jpg";
import imovel1_2 from "@/imagens/1/1.2.jpg";
import imovel1_3 from "@/imagens/1/1.3.jpg";
import imovel1_4 from "@/imagens/1/1.4.jpg";
import imovel2_1 from "@/imagens/2/2.jpg";
import imovel2_2 from "@/imagens/2/2.1.jpg";
import imovel2_3 from "@/imagens/2/2.2.jpg";
import imovel2_4 from "@/imagens/2/2.3.jpg";
import imovel3_1 from "@/imagens/3/3.jpg";
import imovel3_2 from "@/imagens/3/3.1.jpg";
import imovel3_3 from "@/imagens/3/3.2.jpg";
import imovel3_4 from "@/imagens/3/3.3.jpg";
import imovel4_1 from "@/imagens/4/4.jpg";
import imovel4_2 from "@/imagens/4/4.1.jpg";
import imovel4_3 from "@/imagens/4/4.2.jpg";
import imovel4_4 from "@/imagens/4/4.3.jpg";
import imovel5_1 from "@/imagens/5/5.jpg";
import imovel5_2 from "@/imagens/5/5.1.jpg";
import imovel5_3 from "@/imagens/5/5.2.jpg";
import imovel5_4 from "@/imagens/5/5.3.jpg";
import imovel6_1 from "@/imagens/6/imagem-6.jpg";
import imovel6_2 from "@/imagens/6/6.2.jpg";
import imovel6_3 from "@/imagens/6/6.3.jpg";
import imovel6_4 from "@/imagens/6/6.4.jpg";
import imovel6_5 from "@/imagens/6/6.5.jpg";
import imovel7_1 from "@/imagens/7/7.jpg";
import imovel7_2 from "@/imagens/7/7.1.jpg";
import imovel7_3 from "@/imagens/7/7.2.jpg";
import imovel7_4 from "@/imagens/7/7.3.jpg";
import imovel8_1 from "@/imagens/8/8.jpg";
import imovel8_2 from "@/imagens/8/8.1.jpg";
import imovel8_3 from "@/imagens/8/8.2.jpg";
import imovel8_4 from "@/imagens/8/8.3.jpg";
import imovel9_1 from "@/imagens/9/9.jpg";
import imovel9_2 from "@/imagens/9/9.1.jpg";
import imovel9_3 from "@/imagens/9/9.2.jpg";
import imovel9_4 from "@/imagens/9/9.3.jpg";
import imovel10_1 from "@/imagens/10/10.jpg";
import imovel10_2 from "@/imagens/10/10.1.jpg";
import imovel10_3 from "@/imagens/10/10.2.jpg";
import imovel10_4 from "@/imagens/10/10.3.jpg";
import imovel11_1 from "@/imagens/11/11.jpg";
import imovel11_2 from "@/imagens/11/11.1.jpg";
import imovel11_3 from "@/imagens/11/11.2.jpg";
import imovel11_4 from "@/imagens/11/11.3.jpg";
import imovel11_5 from "@/imagens/11/11.4.jpg";
import imovel12_1 from "@/imagens/12/12.jpg";
import imovel12_2 from "@/imagens/12/12.1.jpg";
import imovel12_3 from "@/imagens/12/12.2.jpg";
import imovel12_4 from "@/imagens/12/12.3.jpg";
import imovel12_5 from "@/imagens/12/12.4.jpg";
import imovel13_1 from "@/imagens/13/13.jpg";
import imovel13_2 from "@/imagens/13/13.1.jpg";
import imovel13_3 from "@/imagens/13/13.2.jpg";
import imovel13_4 from "@/imagens/13/13.3.jpg";
import imovel13_5 from "@/imagens/13/13.4.jpg";
import imovel14_1 from "@/imagens/14/14.jpg";
import imovel14_2 from "@/imagens/14/14.1.jpg";
import imovel14_3 from "@/imagens/14/14.2.jpg";
import imovel14_4 from "@/imagens/14/14.3.jpg";
import imovel14_5 from "@/imagens/14/14.4.jpg";
import imovel15_1 from "@/imagens/15/15.jpg";
import imovel15_2 from "@/imagens/15/15.1.jpg";
import imovel15_3 from "@/imagens/15/15.2.jpg";
import imovel15_4 from "@/imagens/15/15.3.jpg";
import imovel15_5 from "@/imagens/15/15.4.jpg";

export const Route = createFileRoute("/imoveis")({
  head: () => ({
    meta: [
      { title: "Imóveis — Lo&Bi" },
      { name: "description", content: "Navegue por nossa coleção luxosa de imóveis exclusivos. Casas, apartamentos e propriedades únicas." },
    ],
  }),
  component: ImoveisPage,
});

// Imagens de exemplo para cada imóvel
const imagensImoveis = {
  1: [imovel1_1, imovel1_2, imovel1_3, imovel1_4],
  2: [imovel2_1, imovel2_2, imovel2_3, imovel2_4],
  3: [imovel3_1, imovel3_2, imovel3_3, imovel3_4],
  4: [imovel4_1, imovel4_2, imovel4_3, imovel4_4],
  5: [imovel5_1, imovel5_2, imovel5_3, imovel5_4],
  6: [imovel6_1, imovel6_2, imovel6_3, imovel6_4, imovel6_5],
  7: [imovel7_1, imovel7_2, imovel7_3, imovel7_4],
  8: [imovel8_1, imovel8_2, imovel8_3, imovel8_4],
  9: [imovel9_1, imovel9_2, imovel9_3, imovel9_4],
 10: [imovel10_1, imovel10_2, imovel10_3, imovel10_4],
 11: [imovel11_1, imovel11_2, imovel11_3, imovel11_4, imovel11_5],
 12: [imovel12_1, imovel12_2, imovel12_3, imovel12_4, imovel12_5],
 13: [imovel13_1, imovel13_2, imovel13_3, imovel13_4, imovel13_5],
 14: [imovel14_1, imovel14_2, imovel14_3, imovel14_4, imovel14_5],
 15: [imovel15_1, imovel15_2, imovel15_3, imovel15_4, imovel15_5],
};

const imoveis = [
  { id: 1, title: "Casa Ipê Modernista", location: "Jardins, São Paulo", price: "R$ 4.250.000", beds: 4, baths: 3, area: "320 m²", tag: "Venda" },
  { id: 2, title: "Penthouse Aurora", location: "Vila Olímpia, São Paulo", price: "R$ 12.900/mês", beds: 3, baths: 2, area: "210 m²", tag: "Aluguel" },
  { id: 3, title: "Casa de Campo Oliveira", location: "Serra da Mantiqueira", price: "R$ 2.890.000", beds: 5, baths: 4, area: "480 m²", tag: "Venda" },
  { id: 4, title: "Villa Costa Azul", location: "Búzios, Rio de Janeiro", price: "R$ 18.500.000", beds: 6, baths: 6, area: "920 m²", tag: "Exclusivo" },
  { id: 5, title: "Beleza Mineira", location: "Belo Horizonte, Minas Gerais", price: "R$ 20.500.000", beds: 8, baths: 5, area: "720 m²", tag: "Exclusivo" },
  { id: 6, title: "Paraíso Praiano", location: "Salvador, Bahia", price: "R$ 10.500.000", beds: 5, baths: 2, area: "620 m²", tag: "Venda" },
  { id: 7, title: "Jardim das Acácias", location: "Campinas, São Paulo", price: "R$ 3.980.000", beds: 5, baths: 4, area: "380 m²", tag: "Venda" },
  { id: 8, title: "Loft Contemporâneo", location: "Pinheiros, São Paulo", price: "R$ 11.200/mês", beds: 2, baths: 2, area: "145 m²", tag: "Aluguel" },
  { id: 9, title: "Casa Vila Romana", location: "Vila Madalena, São Paulo", price: "R$ 5.450.000", beds: 4, baths: 3, area: "355 m²", tag: "Venda" },
  { id: 10, title: "Refúgio da Serra", location: "Campos do Jordão, São Paulo", price: "R$ 4.780.000", beds: 6, baths: 5, area: "520 m²", tag: "Venda" },
  { id: 11, title: "Refúgio Marítimo", location: "Guarujá, São Paulo", price: "R$ 11.200.000", beds: 6, baths: 5, area: "640 m²", tag: "Venda" },
  { id: 12, title: "Cobertura Nova Iorque", location: "Ipanema, Rio de Janeiro", price: "R$ 32.900/mês", beds: 3, baths: 3, area: "245 m²", tag: "Aluguel" },
  { id: 13, title: "Casa Artística", location: "Pinheiros, São Paulo", price: "R$ 6.750.000", beds: 5, baths: 4, area: "410 m²", tag: "Venda" },
  { id: 14, title: "Residencial Palacete", location: "Lapa, Rio de Janeiro", price: "R$ 14.500.000", beds: 8, baths: 6, area: "890 m²", tag: "Exclusivo" },
  { id: 15, title: "Villa Serra Azul", location: "Petrópolis, Rio de Janeiro", price: "R$ 12.500.000", beds: 7, baths: 5, area: "740 m²", tag: "Venda" },
];

function ImoveisPage() {
  return (
    _jsxDEV('div', { className: "min-h-screen bg-background text-foreground"  , children: [
      _jsxDEV(Header, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 122}, this )
      , _jsxDEV('section', { className: "relative h-[60vh] min-h-[420px] overflow-hidden"   , children: [
        _jsxDEV('img', { src: heroVilla, alt: "Imóvel de luxo ao pôr do sol"      , className: "absolute inset-0 h-full w-full object-cover"    ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 124}, this )
        , _jsxDEV('div', { className: "absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.03_60/0.55)] via-[oklch(0.22_0.03_60/0.25)] to-[oklch(0.22_0.03_60/0.75)]"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 125}, this )
        , _jsxDEV('div', { className: "relative z-10 mx-auto max-w-7xl px-6 h-full flex items-end pb-20"        , children: 
          _jsxDEV('div', { className: "max-w-3xl text-center mx-auto"  , children: [
            _jsxDEV('span', { className: "block text-[var(--gold)] tracking-[0.3em] text-sm md:text-base uppercase mb-4"      , children: "Imóveis"}, void 0, false, {fileName: _jsxFileName, lineNumber: 128}, this)
            , _jsxDEV('span', { className: "block text-[var(--gold)] tracking-[0.3em] text-xs uppercase mb-6"     , children: "Seleção exclusiva · Encontre o seu próximo lar"       }, void 0, false, {fileName: _jsxFileName, lineNumber: 129}, this)
            , _jsxDEV('h1', { className: "font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95]"     , children: ["O imóvel dos seus"
                 , _jsxDEV('br', {}, void 0, false, {fileName: _jsxFileName, lineNumber: 131}, this )
              , _jsxDEV('em', { className: "text-[var(--gold)]", children: "próximos sonhos." }, void 0, false, {fileName: _jsxFileName, lineNumber: 132}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 130}, this)
            , _jsxDEV('p', { className: "text-cream/85 mt-6 text-lg"  , children: "Explore a coleção premium de imóveis com fotos reais, especificações completas e localização ideal."

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 134}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 127}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 126}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 123}, this)
      , _jsxDEV('main', { className: "mx-auto max-w-7xl px-6 py-16"   , children: [
        _jsxDEV(FilterSection, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 141}, this )
        , _jsxDEV(ListingsGrid, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 142}, this )
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 140}, this)
      , _jsxDEV(Footer, {}, void 0, false, {fileName: _jsxFileName, lineNumber: 144}, this )
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 121}, this)
  );
}

function Header() {
  return (
    _jsxDEV('header', { className: "absolute top-0 left-0 right-0 z-20"    , children: 
      _jsxDEV('div', { className: "mx-auto max-w-7xl px-6 py-6 flex items-center justify-between"      , children: [
        _jsxDEV(Link, { to: "/", className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/80 shadow-sm hover:text-[var(--gold)] transition"            , children: 
          _jsxDEV(ChevronLeft, { className: "h-5 w-5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 154}, this )
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 153}, this)
        , _jsxDEV('div', { className: "flex items-center gap-2"  , children: [
          _jsxDEV('span', { className: "h-9 w-9 rounded-full border border-[var(--gold)] flex items-center justify-center"       , children: 
            _jsxDEV('span', { className: "font-display text-[var(--gold)] text-lg"  , children: "M"}, void 0, false, {fileName: _jsxFileName, lineNumber: 158}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 157}, this)
          , _jsxDEV('span', { className: "font-display text-xl text-cream tracking-wide"   , children: "Lo & Bi"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 160}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 156}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 152}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 151}, this)
  );
}

function FilterSection() {
  return (
    _jsxDEV('section', { className: "bg-muted/30 border-b border-border py-8"   , children: 
      _jsxDEV('div', { className: "mx-auto max-w-7xl px-6"  , children: 
        _jsxDEV('div', { className: "bg-card border border-border rounded-sm shadow-[var(--shadow-elegant)] p-2 flex flex-col md:flex-row gap-2"         , children: [
          _jsxDEV('div', { className: "flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border"         , children: [
            _jsxDEV(MapPin, { className: "h-5 w-5 text-[var(--olive)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 173}, this )
            , _jsxDEV('input', { 
              className: "bg-transparent outline-none flex-1 text-sm placeholder:text-muted-foreground"    , 
              placeholder: "Cidade, bairro ou endereço"   ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 174}, this 
            )
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 172}, this)
          , _jsxDEV('div', { className: "flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border"         , children: 
            _jsxDEV('select', { className: "bg-transparent outline-none flex-1 text-sm text-foreground"    , children: [
              _jsxDEV('option', { children: "Todas as operações"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 181}, this)
              , _jsxDEV('option', { children: "Comprar"}, void 0, false, {fileName: _jsxFileName, lineNumber: 182}, this)
              , _jsxDEV('option', { children: "Alugar"}, void 0, false, {fileName: _jsxFileName, lineNumber: 183}, this)
              , _jsxDEV('option', { children: "Investir"}, void 0, false, {fileName: _jsxFileName, lineNumber: 184}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 180}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 179}, this)
          , _jsxDEV('div', { className: "flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border"         , children: 
            _jsxDEV('select', { className: "bg-transparent outline-none flex-1 text-sm text-foreground"    , children: [
              _jsxDEV('option', { children: "Faixa de preço"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 189}, this)
              , _jsxDEV('option', { children: "Até R$ 1M"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 190}, this)
              , _jsxDEV('option', { children: "R$ 1M – 5M"   }, void 0, false, {fileName: _jsxFileName, lineNumber: 191}, this)
              , _jsxDEV('option', { children: "Acima R$ 5M"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 192}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 188}, this)
          }, void 0, false, {fileName: _jsxFileName, lineNumber: 187}, this)
          , _jsxDEV('button', { className: "bg-[var(--olive)] text-primary-foreground px-8 py-4 rounded-sm hover:bg-[var(--olive-deep)] transition flex items-center justify-center gap-2 font-medium"           , children: [
            _jsxDEV(Search, { className: "h-4 w-4" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 196}, this ), " Buscar"
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 195}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 171}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 170}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 169}, this)
  );
}

function ListingsGrid() {
  return (
    _jsxDEV('section', { className: "mx-auto max-w-7xl px-6 py-16"   , children: [
      _jsxDEV('div', { className: "mb-8", children: 
        _jsxDEV('p', { className: "text-sm text-muted-foreground" , children: [imoveis.length, " imóveis encontrados"  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 208}, this)
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 207}, this)

      , _jsxDEV('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"    , children: 
        imoveis.map((imovel) => (
          _jsxDEV('article', {
 
            className: "group cursor-pointer border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow"       ,
 children: [
            _jsxDEV(ImageCarousel, { imovelId: imovel.id, title: imovel.title, tag: imovel.tag,}, void 0, false, {fileName: _jsxFileName, lineNumber: 217}, this )
            , _jsxDEV('div', { className: "p-5", children: [
              _jsxDEV('div', { className: "flex items-start justify-between gap-3"   , children: [
                _jsxDEV('div', { className: "flex-1", children: [
                  _jsxDEV('h3', { className: "font-display text-xl leading-tight"  , children: imovel.title}, void 0, false, {fileName: _jsxFileName, lineNumber: 221}, this)
                  , _jsxDEV('p', { className: "text-muted-foreground text-sm mt-1.5 flex items-center gap-1.5"     , children: [
                    _jsxDEV(MapPin, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 223}, this ), " " , imovel.location
                  ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 222}, this)
                ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 220}, this)
                , _jsxDEV('div', { className: "text-right shrink-0" , children: 
                  _jsxDEV('p', { className: "font-display text-lg text-[var(--gold-deep)]"  , children: imovel.price}, void 0, false, {fileName: _jsxFileName, lineNumber: 227}, this)
                }, void 0, false, {fileName: _jsxFileName, lineNumber: 226}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 219}, this)
              , _jsxDEV('div', { className: "mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4"         , children: [
                _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV(BedDouble, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 231}, this ), " " , imovel.beds, " quartos" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 231}, this)
                , _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV(Bath, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 232}, this ), " " , imovel.baths, " banheiros" ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 232}, this)
                , _jsxDEV('span', { className: "flex items-center gap-1.5"  , children: [_jsxDEV(Maximize, { className: "h-3.5 w-3.5" ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 233}, this ), " " , imovel.area]}, void 0, true, {fileName: _jsxFileName, lineNumber: 233}, this)
              ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 230}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 218}, this)
          ]}, imovel.id, true, {fileName: _jsxFileName, lineNumber: 213}, this)
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 211}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 206}, this)
  );
}

function Footer() {
  return (
    _jsxDEV('footer', { className: "bg-[var(--olive-deep)] text-cream/80 border-t border-border"   , children: 
      _jsxDEV('div', { className: "mx-auto max-w-7xl px-6 py-12"   , children: [
        _jsxDEV('div', { className: "grid md:grid-cols-3 gap-8 pb-8 border-b border-cream/10"     , children: [
          _jsxDEV('div', { children: [
            _jsxDEV('h4', { className: "text-cream font-display mb-4"  , children: "Contato"}, void 0, false, {fileName: _jsxFileName, lineNumber: 249}, this)
            , _jsxDEV('p', { className: "text-sm", children: "+55 11 4002-8922"  }, void 0, false, {fileName: _jsxFileName, lineNumber: 250}, this)
            , _jsxDEV('p', { className: "text-sm", children: "realizar.sonhos@lobi.com"}, void 0, false, {fileName: _jsxFileName, lineNumber: 251}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 248}, this)
          , _jsxDEV('div', { children: [
            _jsxDEV('h4', { className: "text-cream font-display mb-4"  , children: "Navegue"}, void 0, false, {fileName: _jsxFileName, lineNumber: 254}, this)
            , _jsxDEV('ul', { className: "space-y-2 text-sm" , children: [
              _jsxDEV('li', { children: _jsxDEV(Link, { to: "/", className: "hover:text-[var(--gold)]", children: "Home"}, void 0, false, {fileName: _jsxFileName, lineNumber: 256}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 256}, this)
              , _jsxDEV('li', { children: _jsxDEV(Link, { to: "/imoveis", className: "hover:text-[var(--gold)]", children: "Imóveis"}, void 0, false, {fileName: _jsxFileName, lineNumber: 257}, this)}, void 0, false, {fileName: _jsxFileName, lineNumber: 257}, this)
            ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 255}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 253}, this)
          , _jsxDEV('div', { children: [
            _jsxDEV('h4', { className: "text-cream font-display mb-4"  , children: "Ações"}, void 0, false, {fileName: _jsxFileName, lineNumber: 261}, this)
            , _jsxDEV('button', { className: "text-sm bg-[var(--gold)] text-[var(--olive-deep)] px-4 py-2 rounded hover:bg-[var(--gold-deep)] transition"       , children: "Anunciar imóvel"

            }, void 0, false, {fileName: _jsxFileName, lineNumber: 262}, this)
          ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 260}, this)
        ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 247}, this)
        , _jsxDEV('div', { className: "pt-6 flex justify-between text-xs text-cream/50"    , children: 
          _jsxDEV('span', { children: "© 2026 Lo & Bi. Todos os direitos reservados."        }, void 0, false, {fileName: _jsxFileName, lineNumber: 268}, this)
        }, void 0, false, {fileName: _jsxFileName, lineNumber: 267}, this)
      ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 246}, this)
    }, void 0, false, {fileName: _jsxFileName, lineNumber: 245}, this)
  );
}

function ImageCarousel({ imovelId, title, tag }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = imagensImoveis[imovelId] || ["#f5e6d3", "#e8d4b8", "#d4bfa3"];

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    _jsxDEV('div', { className: "relative overflow-hidden aspect-[4/3] bg-muted group"    , children: [
      _jsxDEV('img', {
        src: images[currentIndex],
        alt: `${title} - imagem ${currentIndex + 1}`,
        loading: "lazy",
        className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"     ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 289}, this
      )

      , _jsxDEV('span', { className: "absolute top-4 left-4 bg-cream/95 text-[var(--olive-deep)] text-xs uppercase tracking-widest px-3 py-1.5"         , children: 
        tag
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 296}, this)

      /* Setas de navegação */
      , _jsxDEV('button', {
        onClick: prevImage,
        className: "absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"           ,
        'aria-label': "Imagem anterior" ,
 children: 
        _jsxDEV(ChevronLeft, { className: "h-5 w-5 text-[var(--olive-deep)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 306}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 301}, this)

      , _jsxDEV('button', {
        onClick: nextImage,
        className: "absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"           ,
        'aria-label': "Próxima imagem" ,
 children: 
        _jsxDEV(ChevronRight, { className: "h-5 w-5 text-[var(--olive-deep)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 314}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 309}, this)

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
            'aria-label': `Ir para imagem ${index + 1}`,}, index, false, {fileName: _jsxFileName, lineNumber: 320}, this
          )
        ))
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 318}, this)

      , _jsxDEV('span', { className: "absolute top-4 right-4 h-10 w-10 rounded-full bg-cream/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"            , children: 
        _jsxDEV(ArrowUpRight, { className: "h-4 w-4 text-[var(--olive-deep)]"  ,}, void 0, false, {fileName: _jsxFileName, lineNumber: 334}, this )
      }, void 0, false, {fileName: _jsxFileName, lineNumber: 333}, this)
    ]}, void 0, true, {fileName: _jsxFileName, lineNumber: 288}, this)
  );
}
