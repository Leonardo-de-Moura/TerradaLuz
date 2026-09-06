import { useState } from "react";

/* =========================
   TIPOS
========================= */

interface BarPlace {
  name: string;
  neighborhood: string;
  desc: string;
  highlight: string;
  vibe: string;
}

interface BarCategory {
  category: string;
  places: BarPlace[];
}

interface Cafe {
  name: string;
  neighborhood: string;
  desc: string;
  highlight: string;
}

/* =========================
   DADOS — BARES & ROOFTOPS
========================= */

const BARES: BarCategory[] = [
  {
    category: "🌅 Bares com Vista",
    places: [
      {
        name: "Órbita Blue Bar",
        neighborhood: "Praia do Futuro",
        desc: "Bar e restaurante próximo ao litoral, combinando clima descontraído, gastronomia e a atmosfera da Praia do Futuro.",
        highlight: "Clima de praia",
        vibe: "Relaxado",
      },
      {
        name: "Rooftop Gran Marquise",
        neighborhood: "Mucuripe",
        desc: "Rooftop sofisticado na Avenida Beira-Mar, com ambiente ao ar livre, drinks e uma vista privilegiada do litoral de Fortaleza.",
        highlight: "Vista para o mar",
        vibe: "Luxuoso",
      },
      {
        name: "Tôppo Rooftop",
        neighborhood: "Meireles",
        desc: "Rooftop moderno no 23º andar, combinando gastronomia, coquetéis e uma experiência elevada no coração do Meireles.",
        highlight: "23º andar",
        vibe: "Sofisticado",
      },
    ],
  },

  {
    category: "🏙️ Rooftops",
    places: [
      {
        name: "Vistta Rooftop",
        neighborhood: "Cocó",
        desc: "No 22º andar, reúne gastronomia contemporânea, drinks autorais e uma das vistas mais impressionantes do skyline de Fortaleza.",
        highlight: "22º andar",
        vibe: "Exclusivo",
      },
      {
        name: "W Rooftop",
        neighborhood: "Maraponga",
        desc: "Rooftop com pizzas, pratos de inspiração italiana, ingredientes regionais, coquetéis e programação musical.",
        highlight: "Pizza + drinks",
        vibe: "Vibrante",
      },
      {
        name: "Rooftop Gran Marquise",
        neighborhood: "Mucuripe",
        desc: "Uma experiência mais sofisticada na orla, especialmente interessante para aproveitar o fim de tarde e a noite.",
        highlight: "Sunset + drinks",
        vibe: "Romântico",
      },
    ],
  },

  {
    category: "🍸 Bares & Coquetelaria",
    places: [
      {
        name: "Giz Cozinha Boêmia",
        neighborhood: "Meireles",
        desc: "Bar de clima boêmio com música ao vivo, petiscos, chopes e drinks, bastante procurado para aproveitar a noite em Fortaleza.",
        highlight: "Música ao vivo",
        vibe: "Boêmio",
      },
      {
        name: "Floresta Garden",
        neighborhood: "Aldeota",
        desc: "Gastropub com ambiente arborizado, drinks, gastronomia e uma atmosfera descontraída para encontros e happy hour.",
        highlight: "Ambiente arborizado",
        vibe: "Descontraído",
      },
      {
        name: "88 Bier Bar",
        neighborhood: "Bela Vista",
        desc: "Bar voltado para cervejas, rock e happy hour, com uma atmosfera descontraída para quem quer curtir a noite.",
        highlight: "Cerveja + Rock",
        vibe: "Alternativo",
      },
    ],
  },
];

/* =========================
   DADOS — CAFETERIAS
========================= */

const CAFES: Cafe[] = [
  {
    name: "L'Amour Café",
    neighborhood: "Meireles",
    desc: "Cafeteria charmosa com ambiente acolhedor, ideal para café, sobremesas e momentos mais tranquilos.",
    highlight: "Café + romance",
  },
  {
    name: "Greta Café",
    neighborhood: "Dionísio Torres",
    desc: "Café bastante conhecido em Fortaleza, com cardápio variado e ambiente agradável para diferentes momentos do dia.",
    highlight: "Café especial",
  },
  {
    name: "Torra Café",
    neighborhood: "Aldeota",
    desc: "Cafeteria especializada com proposta mais focada na experiência do café e em preparos especiais.",
    highlight: "Café especial",
  },
  {
    name: "Le Pain Le Café",
    neighborhood: "Meireles",
    desc: "Café e padaria com inspiração francesa, ideal para acompanhar cafés, pães e doces.",
    highlight: "Estilo francês",
  },
  {
    name: "Marco Zero",
    neighborhood: "Barra do Ceará",
    desc: "Café e culinária cearense em uma região histórica da cidade, valorizando sabores e identidade local.",
    highlight: "Cearense",
  },
  {
    name: "Café de Praia",
    neighborhood: "Barra do Ceará",
    desc: "Cafeteria próxima ao litoral, ótima para combinar café e uma experiência mais tranquila junto ao mar.",
    highlight: "Café à beira-mar",
  },
  {
    name: "Petite Surprise",
    neighborhood: "Meireles",
    desc: "Bistrô e cafeteria com ambiente charmoso, ideal para cafés, doces e encontros durante o dia.",
    highlight: "Bistrô + café",
  },
  {
    name: "Bom Café Brasil",
    neighborhood: "Centro",
    desc: "Café e torrefação com foco na cultura do café e em experiências para quem aprecia diferentes métodos de preparo.",
    highlight: "Torrefação",
  },
];

/* =========================
   CORES DAS VIBES
========================= */

const VIBE_COLORS: Record<string, string> = {
  Relaxado: "#4A7A5A",
  Luxuoso: "#C88400",
  Romântico: "#C25E8A",
  Sofisticado: "#6A5A9A",
  Exclusivo: "#7A3A6A",
  Vibrante: "#E8845C",
  Boêmio: "#9A5A3A",
  Descontraído: "#5A7A9A",
  Alternativo: "#5A5A5A",
};

/* =========================
   COMPONENTE: TOGGLE
========================= */

interface SectionToggleProps {
  activeSection: "bares" | "cafes";
  onSelect: (section: "bares" | "cafes") => void;
}

function SectionToggle({
  activeSection,
  onSelect,
}: SectionToggleProps) {
  const tabs = [
    {
      id: "bares" as const,
      label: "🍹 Bares & Rooftops",
    },
    {
      id: "cafes" as const,
      label: "☕ Cafeterias",
    },
  ];

  return (
    <div className="flex justify-center mb-10">
      <div
        className="flex rounded-full p-1.5 gap-1"
        style={{
          background: "rgba(232,132,92,0.12)",
          border: "1.5px solid rgba(232,132,92,0.25)",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelect(tab.id)}
              className="px-8 py-2.5 rounded-full transition-all duration-300"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                background: isActive
                  ? "linear-gradient(135deg, #E8845C, #F4A940)"
                  : "transparent",
                color: isActive ? "#fff" : "#7A5444",
                boxShadow: isActive
                  ? "0 4px 16px rgba(232,132,92,0.35)"
                  : "none",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* =========================
   COMPONENTE: CATEGORIAS
========================= */

interface BarCategoryTabsProps {
  categories: BarCategory[];
  activeCategory: number;
  onSelect: (index: number) => void;
}

function BarCategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: BarCategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category, index) => {
        const isActive = activeCategory === index;

        return (
          <button
            key={category.category}
            onClick={() => onSelect(index)}
            className="px-5 py-2 rounded-full transition-all duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              fontWeight: isActive ? 600 : 400,
              background: isActive
                ? "#2C1810"
                : "rgba(44,24,16,0.07)",
              color: isActive ? "#FFF8F0" : "#7A5444",
              border: isActive
                ? "none"
                : "1px solid rgba(44,24,16,0.12)",
            }}
          >
            {category.category}
          </button>
        );
      })}
    </div>
  );
}

/* =========================
   COMPONENTE: CARD DE BAR
========================= */

interface BarCardProps {
  place: BarPlace;
}

function BarCard({ place }: BarCardProps) {
  const vibeColor =
    VIBE_COLORS[place.vibe] ?? "#7A5444";

  return (
    <div
      className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#fff",
        boxShadow: "0 4px 24px rgba(44,24,16,0.08)",
        border: "1px solid rgba(232,132,92,0.12)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="px-3 py-1 rounded-full"
          style={{
            background: `${vibeColor}18`,
            color: vibeColor,
            fontFamily: "Inter, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            border: `1px solid ${vibeColor}30`,
          }}
        >
          {place.vibe.toUpperCase()}
        </span>

        <span
          style={{
            color: "#E8845C",
            fontSize: "1.25rem",
          }}
        >
          🍹
        </span>
      </div>

      <h3
        className="mb-1"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "#2C1810",
        }}
      >
        {place.name}
      </h3>

      <p
        className="mb-3"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.75rem",
          color: "#E8845C",
          letterSpacing: "0.05em",
        }}
      >
        📍 {place.neighborhood}
      </p>

      <p
        className="mb-4"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.85rem",
          color: "#7A5444",
          lineHeight: 1.6,
        }}
      >
        {place.desc}
      </p>

      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{
          background: "rgba(244,169,64,0.1)",
          border: "1px solid rgba(244,169,64,0.25)",
        }}
      >
        <span style={{ fontSize: "0.75rem" }}>
          ✨
        </span>

        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#C88400",
          }}
        >
          {place.highlight}
        </span>
      </div>
    </div>
  );
}

/* =========================
   COMPONENTE: GRID DE BARES
========================= */

interface BarGridProps {
  places: BarPlace[];
}

function BarGrid({ places }: BarGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {places.map((place) => (
        <BarCard
          key={`${place.name}-${place.neighborhood}`}
          place={place}
        />
      ))}
    </div>
  );
}

/* =========================
   COMPONENTE: DICAS
========================= */

function BoemiaTips() {
  const tips = [
    {
      icon: "🌅",
      title: "Pôr do sol na Beira-Mar",
      desc: "A orla de Fortaleza é uma ótima escolha para começar a noite acompanhando o pôr do sol e depois seguir para um bar ou rooftop.",
    },
    {
      icon: "🎶",
      title: "Noite com música ao vivo",
      desc: "Meireles e Aldeota concentram diversas opções para quem procura música, drinks, petiscos e um ambiente mais descontraído.",
    },
  ];

  return (
    <div
      className="mt-10 rounded-2xl p-6"
      style={{
        background: "rgba(44,24,16,0.06)",
        border: "1px solid rgba(44,24,16,0.1)",
      }}
    >
      <h4
        className="mb-4"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#2C1810",
        }}
      >
        📍 Dicas para aproveitar Fortaleza
      </h4>

      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip) => (
          <div
            key={tip.title}
            className="flex gap-3"
          >
            <span style={{ fontSize: "1.25rem" }}>
              {tip.icon}
            </span>

            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#2C1810",
                  fontSize: "0.9rem",
                }}
              >
                {tip.title}
              </p>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#7A5444",
                  fontSize: "0.82rem",
                  lineHeight: 1.5,
                  marginTop: "2px",
                }}
              >
                {tip.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   COMPONENTE: CARD DE CAFÉ
========================= */

interface CafeCardProps {
  cafe: Cafe;
}

function CafeCard({ cafe }: CafeCardProps) {
  return (
    <div
      className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#fff",
        boxShadow: "0 4px 20px rgba(44,24,16,0.07)",
        border: "1px solid rgba(232,132,92,0.12)",
      }}
    >
      <div className="mb-3">
        <span style={{ fontSize: "1.5rem" }}>
          ☕
        </span>
      </div>

      <h3
        className="mb-1"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "#2C1810",
        }}
      >
        {cafe.name}
      </h3>

      <p
        className="mb-2"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.7rem",
          color: "#E8845C",
          letterSpacing: "0.05em",
        }}
      >
        📍 {cafe.neighborhood}
      </p>

      <p
        className="mb-3"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.82rem",
          color: "#7A5444",
          lineHeight: 1.5,
        }}
      >
        {cafe.desc}
      </p>

      <span
        className="inline-block px-2.5 py-1 rounded-lg"
        style={{
          background: "rgba(232,132,92,0.1)",
          color: "#E8845C",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 700,
          border: "1px solid rgba(232,132,92,0.2)",
        }}
      >
        {cafe.highlight}
      </span>
    </div>
  );
}

/* =========================
   COMPONENTE: GRID DE CAFÉS
========================= */

interface CafeGridProps {
  cafes: Cafe[];
}

function CafeGrid({ cafes }: CafeGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cafes.map((cafe) => (
        <CafeCard
          key={`${cafe.name}-${cafe.neighborhood}`}
          cafe={cafe}
        />
      ))}
    </div>
  );
}

/* =========================
   COMPONENTE PRINCIPAL
========================= */

export function BaresECafes() {
  const [activeSection, setActiveSection] =
    useState<"bares" | "cafes">("bares");

  const [activeBarCategory, setActiveBarCategory] =
    useState(0);

  const currentBarCategory =
    BARES[activeBarCategory];

  return (
    <section
      id="bares"
      className="py-24 px-4"
      style={{
        background:
          "linear-gradient(180deg, #FDF3E7 0%, #FFF8F0 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[0.3em] mb-3"
            style={{
              color: "#E8845C",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
            }}
          >
            ✦ Vida Noturna e Café ✦
          </p>

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#2C1810",
              lineHeight: 1.2,
            }}
          >
            Bares, Rooftops e Cafés
          </h2>

          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#7A5444",
              lineHeight: 1.7,
            }}
          >
            Do pôr do sol na Beira-Mar aos cafés especiais
            espalhados pela cidade, Fortaleza tem experiências
            para aproveitar todos os momentos do dia.
          </p>
        </div>

        {/* Toggle principal */}
        <SectionToggle
          activeSection={activeSection}
          onSelect={setActiveSection}
        />

        {/* =========================
            BARES
        ========================= */}

        {activeSection === "bares" && (
          <>
            <BarCategoryTabs
              categories={BARES}
              activeCategory={activeBarCategory}
              onSelect={setActiveBarCategory}
            />

            {currentBarCategory && (
              <BarGrid
                places={currentBarCategory.places}
              />
            )}

            <BoemiaTips />
          </>
        )}

        {/* =========================
            CAFÉS
        ========================= */}

        {activeSection === "cafes" && (
          <CafeGrid cafes={CAFES} />
        )}
      </div>
    </section>
  );
}