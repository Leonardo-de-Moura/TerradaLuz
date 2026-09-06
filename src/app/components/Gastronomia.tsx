import { useState } from "react";

/* =========================
   TIPOS
========================= */

interface Restaurant {
  name: string;
  neighborhood: string;
  rating: number;
  desc: string;
  tag: string;
  image: string;
}

interface Category {
  id: string;
  label: string;
  restaurants: Restaurant[];
}

/* =========================
   DADOS
========================= */

const CATEGORIES: Category[] = [
  {
    id: "regionais",
    label: "🌵 Culinária Cearense",
    restaurants: [
      {
        name: "Velho Zé",
        neighborhood: "Aldeota",
        rating: 4.9,
        desc: "Sabores tradicionais do Ceará em um ambiente acolhedor, valorizando ingredientes e receitas da culinária regional.",
        tag: "Cearense",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Restaurante Maria Chica",
        neighborhood: "Parangaba",
        rating: 4.5,
        desc: "Culinária regional com pratos que valorizam os sabores tradicionais do Ceará e uma proposta acolhedora.",
        tag: "Comida Regional",
        image:
          "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Carneiro do Tércio",
        neighborhood: "Aldeota",
        rating: 4.4,
        desc: "Uma opção tradicional para experimentar preparos de carneiro e outros sabores marcantes da cozinha nordestina.",
        tag: "Nordestina",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  {
    id: "churrascarias",
    label: "🥩 Carnes & Churrasco",
    restaurants: [
      {
        name: "Nativas Grill",
        neighborhood: "Meireles",
        rating: 4.8,
        desc: "Rodízio de carnes em uma das regiões mais movimentadas de Fortaleza, próximo à Avenida Dom Luís.",
        tag: "Rodízio",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Sal e Brasa",
        neighborhood: "Aldeota",
        rating: 4.7,
        desc: "Churrascaria tradicional com cortes variados e sistema de rodízio, localizada no coração da Aldeota.",
        tag: "Churrascaria",
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fogo Campeiro Sul",
        neighborhood: "Cambeba",
        rating: 4.4,
        desc: "Rodízio de carnes com cortes variados e uma proposta voltada para quem busca uma experiência tradicional de churrascaria.",
        tag: "Rodízio Premium",
        image:
          "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  {
    id: "frutos",
    label: "🦞 Frutos do Mar",
    restaurants: [
      {
        name: "Coco Bambu Beira Mar",
        neighborhood: "Meireles",
        rating: 4.7,
        desc: "Um dos restaurantes mais conhecidos da orla de Fortaleza, com destaque para camarões, peixes e outros frutos do mar.",
        tag: "Beira-Mar",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Ponza Frutos do Mar",
        neighborhood: "Meireles",
        rating: 4.5,
        desc: "Restaurante de inspiração mediterrânea com pratos de frutos do mar e ambiente sofisticado no Meireles.",
        tag: "Mediterrâneo",
        image:
          "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Tempero do Mar",
        neighborhood: "Praia do Futuro",
        rating: 4.5,
        desc: "Uma opção para conhecer os sabores do litoral cearense na região da Praia do Futuro.",
        tag: "Litoral Cearense",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },

  {
    id: "italianos",
    label: "🍝 Italianos",
    restaurants: [
      {
        name: "La Bella Itália",
        neighborhood: "Praia de Iracema",
        rating: 4.6,
        desc: "Restaurante italiano tradicional de Fortaleza, conhecido pelas massas, pizzas e pratos inspirados na culinária italiana.",
        tag: "Italiano",
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Trevi Cucina",
        neighborhood: "Cocó",
        rating: 4.9,
        desc: "Culinária italiana em um ambiente sofisticado, com massas, pratos contemporâneos e proposta gastronômica refinada.",
        tag: "Alta Gastronomia",
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Cortile Ristorante",
        neighborhood: "Meireles",
        rating: 4.6,
        desc: "Culinária italiana e mediterrânea em uma experiência mais sofisticada, ideal para um jantar especial.",
        tag: "Mediterrâneo",
        image:
          "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

/* =========================
   COMPONENTE: ESTRELAS
========================= */

interface StarsProps {
  rating: number;
}

function Stars({ rating }: StarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const isFull = index < fullStars;
        const isHalf = index === fullStars && hasHalfStar;

        const gradientId = `half-${rating}-${index}`;

        return (
          <svg
            key={index}
            viewBox="0 0 20 20"
            className="w-3.5 h-3.5"
            fill={
              isFull
                ? "#F4A940"
                : isHalf
                  ? `url(#${gradientId})`
                  : "#E5E5E5"
            }
          >
            {isHalf && (
              <defs>
                <linearGradient id={gradientId}>
                  <stop offset="50%" stopColor="#F4A940" />
                  <stop offset="50%" stopColor="#E5E5E5" />
                </linearGradient>
              </defs>
            )}

            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}

      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "#C88400",
          marginLeft: "4px",
        }}
      >
        {rating}
      </span>
    </div>
  );
}

/* =========================
   COMPONENTE: CATEGORIAS
========================= */

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

function CategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className="px-6 py-3 rounded-full transition-all duration-300"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              background: isActive
                ? "linear-gradient(135deg, #E8845C, #F4A940)"
                : "rgba(255,248,240,0.08)",
              color: isActive ? "#fff" : "rgba(255,248,240,0.7)",
              border: isActive
                ? "none"
                : "1.5px solid rgba(255,248,240,0.15)",
              boxShadow: isActive
                ? "0 6px 20px rgba(232,132,92,0.4)"
                : "none",
            }}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

/* =========================
   COMPONENTE: CARD
========================= */

interface RestaurantCardProps {
  restaurant: Restaurant;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,248,240,0.06)",
        border: "1px solid rgba(255,248,240,0.12)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      {/* Imagem */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(44,24,16,0.7), transparent)",
          }}
        />

        <span
          className="absolute top-3 right-3 px-3 py-1 rounded-full"
          style={{
            background: "rgba(244,169,64,0.9)",
            color: "#2C1810",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
          }}
        >
          {restaurant.tag}
        </span>
      </div>

      {/* Informações */}
      <div className="p-5">
        <h3
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "#FFF8F0",
          }}
        >
          {restaurant.name}
        </h3>

        <p
          className="mb-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.75rem",
            color: "#F4A940",
            letterSpacing: "0.05em",
          }}
        >
          📍 {restaurant.neighborhood}
        </p>

        <Stars rating={restaurant.rating} />

        <p
          className="mt-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
            color: "rgba(255,248,240,0.7)",
            lineHeight: 1.6,
          }}
        >
          {restaurant.desc}
        </p>
      </div>
    </div>
  );
}

/* =========================
   COMPONENTE: GRID
========================= */

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.name}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}

/* =========================
   COMPONENTE PRINCIPAL
========================= */

export function Gastronomia() {
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES[0]?.id ?? "",
  );

  const currentCategory = CATEGORIES.find(
    (category) => category.id === activeCategory,
  );

  return (
    <section
      id="gastronomia"
      className="py-24 px-4"
      style={{
        background:
          "linear-gradient(180deg, #2C1810 0%, #3D2314 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[0.3em] mb-3"
            style={{
              color: "#F4A940",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
            }}
          >
            ✦ Sabores de Fortaleza ✦
          </p>

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#FFF8F0",
              lineHeight: 1.2,
            }}
          >
            Gastronomia de Fortaleza
          </h2>

          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,248,240,0.65)",
              lineHeight: 1.7,
            }}
          >
            Do sabor marcante da culinária cearense aos frutos do
            mar da costa, Fortaleza reúne tradição, ingredientes
            regionais e experiências gastronômicas para todos os
            gostos.
          </p>
        </div>

        {/* Categorias */}
        <CategoryTabs
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Restaurantes */}
        {currentCategory && (
          <RestaurantGrid
            restaurants={currentCategory.restaurants}
          />
        )}
      </div>
    </section>
  );
}