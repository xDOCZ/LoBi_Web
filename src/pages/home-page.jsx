import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AppLayout } from "@/components/app-layout";
import { useDataStore } from "@/lib/data-context";
import { imageGalleryMap, imageMap } from "@/lib/image-map";
import { useState } from "react";
import heroVilla from "@/imagens/home.jpg";

export function HomePage() {
  const { data, loading, error } = useDataStore();
  const [carouselByImovel, setCarouselByImovel] = useState({});

  if (loading) {
    return <AppLayout title="Carregando dados..." subtitle="Lendo arquivo JSON do projeto." />;
  }

  if (error) {
    return <AppLayout title="Erro de carregamento" subtitle={error} />;
  }

  const cards = [
    {
      title: "Imobiliárias",
      count: data.imobiliarias.length,
      to: "/imobiliarias",
      text: "Parceiros especializados para cada perfil de cliente.",
    },
    {
      title: "Imóveis",
      count: data.imoveis.length,
      to: "/imoveis",
      text: "Coleção curada de oportunidades para venda e locacao.",
    },
    {
      title: "Corretores",
      count: data.corretores.length,
      to: "/agentes",
      text: "Consultores prontos para conduzir cada etapa da jornada.",
    },
    {
      title: "Propostas",
      count: data.propostas.length,
      to: "/propostas",
      text: "Histórico de negociações e decisões comerciais.",
    },
  ];

  const featuredImoveis = data.imoveis.slice(0, 6);

  const goToImage = (imovelId, nextIndex) => {
    setCarouselByImovel((current) => ({
      ...current,
      [imovelId]: nextIndex,
    }));
  };

  const showPrevious = (event, imovelId, gallery) => {
    event.preventDefault();
    event.stopPropagation();
    if (!gallery.length) return;
    const currentIndex = carouselByImovel[imovelId] || 0;
    const nextIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    goToImage(imovelId, nextIndex);
  };

  const showNext = (event, imovelId, gallery) => {
    event.preventDefault();
    event.stopPropagation();
    if (!gallery.length) return;
    const currentIndex = carouselByImovel[imovelId] || 0;
    const nextIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
    goToImage(imovelId, nextIndex);
  };

  return (
    <AppLayout
      title="Locação de Imóveis"
      subtitle="Os melhores imóveis para locação ou compra, com atendimento especializado e curadoria de qualidade."
    >
      <section className="mb-6 overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-soft)]">
        <div className="relative h-[300px] w-full md:h-[360px]">
          <img src={heroVilla} alt="Panorama de imovel" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--olive-deep)]/80 via-[var(--olive-deep)]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-cream md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">Locação com curadoria</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1] md:text-5xl">
              O endereço do seu próximo capítulo.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-cream/85">
              Da primeira busca a assinatura do contrato, uma experiência unificada para operação e atendimento.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-3xl text-[var(--olive-deep)]">Destaques</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredImoveis.map((item) => {
            const gallery = imageGalleryMap[item.imageKey] || [imageMap[item.imageKey]].filter(Boolean);
            const currentIndex = Math.min(carouselByImovel[item.id] || 0, Math.max(gallery.length - 1, 0));

            return (
              <Link
                key={item.id}
                to={`/imoveis/${item.id}`}
                className="group block overflow-hidden rounded-sm border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="relative h-52 overflow-hidden bg-muted">
                  {gallery.length ? (
                    <img
                      src={gallery[currentIndex]}
                      alt={`${item.titulo} - imagem ${currentIndex + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : null}

                  {gallery.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={(e) => showPrevious(e, item.id, gallery)}
                        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow transition hover:bg-background group-hover:opacity-100"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => showNext(e, item.id, gallery)}
                        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow transition hover:bg-background group-hover:opacity-100"
                        aria-label="Proxima imagem"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {gallery.map((_, index) => (
                          <button
                            key={`${item.id}-dot-${index}`}
                            type="button"
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                              goToImage(item.id, index);
                            }}
                            className={`h-2 rounded-full transition-all ${
                              index === currentIndex
                                ? "w-5 bg-background"
                                : "w-2 bg-background/60 hover:bg-background/80"
                            }`}
                            aria-label={`Ir para imagem ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="p-4">
                  <h3 className="font-display text-xl text-[var(--olive-deep)]">{item.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.bairro}, {item.cidade}
                  </p>
                  <p className="mt-2 font-semibold">R$ {Number(item.valor).toLocaleString("pt-BR")}</p>
                  <span className="mt-3 inline-flex rounded-sm border border-border px-3 py-2 text-sm transition group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10">
                    Ver detalhes
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
          >
            <h2 className="font-display text-3xl text-[var(--olive-deep)]">{card.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
            <p className="mt-4 font-display text-5xl text-[var(--gold-deep)]">{card.count}</p>
            <Link
              to={card.to}
              className="mt-4 inline-flex rounded-full border border-border px-3 py-2 text-sm transition hover:border-[var(--gold)] hover:bg-[var(--gold)]/10"
            >
              Abrir {card.title.toLowerCase()}
            </Link>
          </article>
        ))}
      </section>
    </AppLayout>
  );
  // Todo o conteúdo de negócio é carregado dinamicamente de "src/data/locacao.json"
}
