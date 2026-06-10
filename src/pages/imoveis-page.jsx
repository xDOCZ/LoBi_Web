import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/app-layout";
import { EntityCrudTable } from "@/components/entity-crud-table";
import { useDataStore } from "@/lib/data-context";
import { imageGalleryMap, imageMap } from "@/lib/image-map";

export function ImoveisPage() {
  const { data, loading, error, createRecord, updateRecord, deleteRecord } = useDataStore();
  const navigate = useNavigate();
  const [carouselByImovel, setCarouselByImovel] = useState({});

  if (loading) {
    return <AppLayout title="Carregando imoveis..." />;
  }

  if (error || !data) {
    return <AppLayout title="Erro" subtitle={error || "Dados indisponiveis"} />;
  }

  const imobiliariaOptions = data.imobiliarias.map((item) => ({
    value: String(item.id),
    label: `${item.nome} (#${item.id})`,
  }));

  const corretorOptions = data.corretores.map((item) => ({
    value: String(item.id),
    label: `${item.nome} (#${item.id})`,
  }));

  const imageOptions = Object.keys(imageMap).map((key) => ({
    value: key,
    label: key,
  }));

  const fields = [
    {
      name: "titulo",
      label: "Titulo",
      required: true,
      pattern: "^[A-Za-zÀ-ÿ0-9\\s.,'-]{3,}$",
      validationMessage: "Informe um título válido com pelo menos 3 caracteres.",
    },
    {
      name: "tipo",
      label: "Tipo",
      required: true,
      pattern: "^[A-Za-zÀ-ÿ\\s]{2,}$",
      validationMessage: "Informe um tipo válido.",
    },
    {
      name: "operacao",
      label: "Operacao",
      required: true,
      pattern: "^[A-Za-zÀ-ÿ\\s]{2,}$",
      validationMessage: "Informe a operação (ex.: Venda ou Locação).",
    },
    {
      name: "bairro",
      label: "Bairro",
      required: true,
      pattern: "^[A-Za-zÀ-ÿ0-9\\s'-]{2,}$",
      validationMessage: "Informe um bairro válido.",
    },
    {
      name: "cidade",
      label: "Cidade",
      required: true,
      pattern: "^[A-Za-zÀ-ÿ\\s'-]{2,}$",
      validationMessage: "Informe uma cidade válida.",
    },
    {
      name: "valor",
      label: "Valor",
      type: "number",
      required: true,
      min: 1,
      step: 1,
      validationMessage: "Informe um valor numérico maior que zero.",
    },
    {
      name: "quartos",
      label: "Quartos",
      type: "number",
      required: true,
      min: 0,
      step: 1,
      validationMessage: "Informe a quantidade de quartos.",
    },
    {
      name: "banheiros",
      label: "Banheiros",
      type: "number",
      required: true,
      min: 0,
      step: 1,
      validationMessage: "Informe a quantidade de banheiros.",
    },
    {
      name: "area",
      label: "Area (m2)",
      type: "number",
      required: true,
      min: 1,
      step: 1,
      validationMessage: "Informe a area em m2.",
    },
    {
      name: "imobiliariaId",
      label: "Imobiliaria",
      type: "number",
      required: true,
      options: imobiliariaOptions,
    },
    {
      name: "corretorId",
      label: "Corretor",
      type: "number",
      required: true,
      options: corretorOptions,
    },
    {
      name: "imageKey",
      label: "Imagem",
      required: true,
      options: imageOptions,
    },
    {
      name: "descricao",
      label: "Descricao",
      required: true,
      pattern: "^.{10,}$",
      validationMessage: "A descricao deve ter pelo menos 10 caracteres.",
    },
  ];

  const handleCreateImovel = (record) => {
    createRecord("imoveis", record);
  };

  return (
    <AppLayout
      title="Imóveis"
      subtitle="Veja as opções disponíveis para locação ou compra."
    >
      <section className="mb-6 grid gap-4 md:grid-cols-2">
        {data.imoveis.map((item) => {
          const gallery = imageGalleryMap[item.imageKey] || [imageMap[item.imageKey]].filter(Boolean);
          const currentIndex = Math.min(carouselByImovel[item.id] || 0, Math.max(gallery.length - 1, 0));

          const goToImage = (event, nextIndex) => {
            event.preventDefault();
            event.stopPropagation();
            setCarouselByImovel((current) => ({
              ...current,
              [item.id]: nextIndex,
            }));
          };

          const showPrevious = (event) => {
            if (!gallery.length) {
              return;
            }
            const nextIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
            goToImage(event, nextIndex);
          };

          const showNext = (event) => {
            if (!gallery.length) {
              return;
            }
            const nextIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
            goToImage(event, nextIndex);
          };

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
                      onClick={showPrevious}
                      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground opacity-0 shadow transition hover:bg-background group-hover:opacity-100"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
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
                          onClick={(event) => goToImage(event, index)}
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
                <h2 className="font-display text-2xl text-[var(--olive-deep)]">{item.titulo}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.tipo} | {item.operacao} | {item.bairro}, {item.cidade}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.descricao}</p>
                <p className="mt-3 font-semibold">R$ {Number(item.valor).toLocaleString("pt-BR")}</p>
                <span className="mt-3 inline-flex rounded-sm border border-border px-3 py-2 text-sm transition group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10">
                  Explorar detalhes
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      <EntityCrudTable
        title="Imóveis Cadastrados"
        rows={data.imoveis}
        fields={fields}
        onCreate={handleCreateImovel}
        onUpdate={(id, changes) => updateRecord("imoveis", id, changes)}
        onDelete={(id) => deleteRecord("imoveis", id)}
      />
    </AppLayout>
  );
}
