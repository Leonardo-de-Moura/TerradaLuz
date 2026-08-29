import { useState } from "react";

const CATEGORIES = [
  {
    id: "churrascarias",
    label: "🥩 Churrascarias",
    restaurants: [
      {
        name: "Marius Degustare",
        neighborhood: "Copacabana",
        rating: 4.8,
        desc: "Rodízio premium de carnes e frutos do mar com vista deslumbrante para o mar de Copacabana.",
        tag: "Rodízio Premium",
        image: "https://images.unsplash.com/photo-1690983322857-0811d47fedfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBtZWF0JTIwcmVzdGF1cmFudCUyMHRhYmxlfGVufDF8fHx8MTc3NDIzNjI5OHww&ixlib=rb-4.1.0&q=80&w=400",
      },
      {
        name: "Fogo de Chão",
        neighborhood: "Botafogo",
        rating: 4.8,
        desc: "Cortes clássicos brasileiros servidos à mesa, com a incrível vista para a Baía de Guanabara.",
        tag: "Clássico Carioca",
        image: "https://images.unsplash.com/photo-1690983322857-0811d47fedfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBtZWF0JTIwcmVzdGF1cmFudCUyMHRhYmxlfGVufDF8fHx8MTc3NDIzNjI5OHww&ixlib=rb-4.1.0&q=80&w=400",
      },
      {
        name: "Mocellin Steakhouse",
        neighborhood: "Barra da Tijuca",
        rating: 4.8,
        desc: "Carnes selecionadas servidas em tábua, estilo à la carte. Ambiente sofisticado e intimista.",
        tag: "À la Carte",
        image: "https://images.unsplash.com/photo-1690983322857-0811d47fedfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBtZWF0JTIwcmVzdGF1cmFudCUyMHRhYmxlfGVufDF8fHx8MTc3NDIzNjI5OHww&ixlib=rb-4.1.0&q=80&w=400",
      },
    ],
  },
  {
    id: "frutos",
    label: "🦞 Frutos do Mar",
    restaurants: [
      {
        name: "Boutique do Mar",
        neighborhood: "Gávea",
        rating: 4.8,
        desc: "Foco em polvos e peixes fresquíssimos. Um dos endereços mais especiais da cidade para amantes do mar.",
        tag: "Alta Cozinha",
        image: "https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNlYWZvb2QlMjByZXN0YXVyYW50JTIwZWxlZ2FudCUyMHBsYXRlfGVufDF8fHx8MTc3NDIzNjI5Mnww&ixlib=rb-4.1.0&q=80&w=400",
      },
      {
        name: "Zazá Bistrô Tropical",
        neighborhood: "Ipanema",
        rating: 4.6,
        desc: "Ambiente romântico com decoração boêmia e um ceviche que é considerado o melhor do Rio.",
        tag: "Romântico",
        image: "https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNlYWZvb2QlMjByZXN0YXVyYW50JTIwZWxlZ2FudCUyMHBsYXRlfGVufDF8fHx8MTc3NDIzNjI5Mnww&ixlib=rb-4.1.0&q=80&w=400",
      },
      {
        name: "Tèreze",
        neighborhood: "Santa Teresa",
        rating: 4.5,
        desc: "Cozinha francesa elegante no charmoso hotel MGallery, no coração do bairro mais romântico do Rio.",
        tag: "Cozinha Francesa",
        image: "https://images.unsplash.com/photo-1751890939642-52aa0d543bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNlYWZvb2QlMjByZXN0YXVyYW50JTIwZWxlZ2FudCUyMHBsYXRlfGVufDF8fHx8MTc3NDIzNjI5Mnww&ixlib=rb-4.1.0&q=80&w=400",
      },
    ],
  },
  {
    id: "italianos",
    label: "🍝 Italianos",
    restaurants: [
      {
        name: "Pope Ipanema",
        neighborhood: "Ipanema",
        rating: 4.7,
        desc: "Considerado o melhor italiano do Rio. Aberto apenas para jantar (exceto sábados). Reserve com antecedência.",
        tag: "Apenas Jantar",
        image: "https://images.unsplash.com/photo-1767913338778-15b452c91423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMHJvbWFudGljJTIwcGFzdGElMjBkaW5uZXJ8ZW58MXx8fHwxNzc0MjM2MjkyfDA&ixlib=rb-4.1.0&q=80&w=400",
      },
      {
        name: "Babbo Osteria",
        neighborhood: "Ipanema",
        rating: 4.6,
        desc: "Famoso pelo gnocchi com trufas e pela varanda encantadora — perfeito para um jantar a dois.",
        tag: "Varanda Romântica",
        image: "https://images.unsplash.com/photo-1767913338778-15b452c91423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMHJvbWFudGljJTIwcGFzdGElMjBkaW5uZXJ8ZW58MXx8fHwxNzc0MjM2MjkyfDA&ixlib=rb-4.1.0&q=80&w=400",
      },
      {
        name: "Da Marino",
        neighborhood: "Ipanema",
        rating: 4.7,
        desc: "Clima mediterrâneo autêntico com frutos do mar de alta qualidade. Uma viagem à Itália sem sair do Rio.",
        tag: "Mediterrâneo",
        image: "https://images.unsplash.com/photo-1767913338778-15b452c91423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJdGFsaWFuJTIwcmVzdGF1cmFudCUyMHJvbWFudGljJTIwcGFzdGElMjBkaW5uZXJ8ZW58MXx8fHwxNzc0MjM2MjkyfDA&ixlib=rb-4.1.0&q=80&w=400",
      },
    ],
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const decimal = rating - full;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="w-3.5 h-3.5"
          fill={i < full ? "#F4A940" : i === full && decimal >= 0.5 ? "url(#half)" : "#E5E5E5"}
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#F4A940" />
              <stop offset="50%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "#C88400", marginLeft: "4px" }}>
        {rating}
      </span>
    </div>
  );
}

export function Gastronomia() {
  const [activeCategory, setActiveCategory] = useState("churrascarias");
  const category = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="gastronomia"
      className="py-24 px-4"
      style={{
        background: "linear-gradient(180deg, #2C1810 0%, #3D2314 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[0.3em] mb-3"
            style={{ color: "#F4A940", fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}
          >
            ✦ Sabores do Rio ✦
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
            Gastronomia Carioca
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,248,240,0.65)", lineHeight: 1.7 }}
          >
            Dos rodízios inesquecíveis à alta cozinha mediterrânea — o Rio tem uma
            cena gastronômica à altura da sua beleza.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-6 py-3 rounded-full transition-all duration-300"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                background: activeCategory === cat.id
                  ? "linear-gradient(135deg, #E8845C, #F4A940)"
                  : "rgba(255,248,240,0.08)",
                color: activeCategory === cat.id ? "#fff" : "rgba(255,248,240,0.7)",
                border: activeCategory === cat.id ? "none" : "1.5px solid rgba(255,248,240,0.15)",
                boxShadow: activeCategory === cat.id ? "0 6px 20px rgba(232,132,92,0.4)" : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Restaurant cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {category.restaurants.map((rest, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,248,240,0.06)",
                border: "1px solid rgba(255,248,240,0.12)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(44,24,16,0.7), transparent)" }} />
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
                  {rest.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "#FFF8F0",
                    }}
                  >
                    {rest.name}
                  </h3>
                </div>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    color: "#F4A940",
                    letterSpacing: "0.05em",
                  }}
                >
                  📍 {rest.neighborhood}
                </p>
                <Stars rating={rest.rating} />
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,248,240,0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  {rest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
