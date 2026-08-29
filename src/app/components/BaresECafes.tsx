import { useState } from "react";

const BARES = [
  {
    category: "🌅 Clássicos com Vista",
    places: [
      {
        name: "Bar Urca",
        neighborhood: "Urca",
        desc: "Um ícone absoluto. Compre a cerveja e os petiscos no balcão e atravesse a rua para apreciar a Baía de Guanabara sentado na mureta.",
        highlight: "Bolinho de bacalhau inesquecível",
        vibe: "Tradicional",
      },
      {
        name: "Arp Bar",
        neighborhood: "Ipanema / Arpoador",
        desc: "No Hotel Arpoador, um bar 'pé na areia' sofisticado. Perfeito para drinques autorais após o famoso pôr do sol do Arpoador.",
        highlight: "Drinques autorais",
        vibe: "Relaxado",
      },
      {
        name: "Bar da Laje",
        neighborhood: "Vidigal",
        desc: "Uma das vistas mais espetaculares do Rio — Ipanema, Copacabana e o Pão de Açúcar ao mesmo tempo. Vibrante e animado.",
        highlight: "Vista 360° do Rio",
        vibe: "Vibrante",
      },
    ],
  },
  {
    category: "🏙️ Rooftops Sofisticados",
    places: [
      {
        name: "Isabel Lounge",
        neighborhood: "Copacabana",
        desc: "No 39º andar do Hilton Copacabana. Vista panorâmica deslumbrante com menu focado em ingredientes frescos e coquetéis refinados.",
        highlight: "39º andar do Hilton",
        vibe: "Luxuoso",
      },
      {
        name: "Moonlounge",
        neighborhood: "Copacabana",
        desc: "No topo do JW Marriott. Bar a céu aberto com iluminação especial e trilha sonora suave — muito frequentado por casais.",
        highlight: "Topo do JW Marriott",
        vibe: "Romântico",
      },
      {
        name: "Brewteco",
        neighborhood: "Botafogo",
        desc: "No terraço do Botafogo Praia Shopping, combina o espírito de boteco carioca com uma vista privilegiada para o Pão de Açúcar.",
        highlight: "Vista para o Pão de Açúcar",
        vibe: "Descontraído",
      },
    ],
  },
  {
    category: "🍸 Coquetelaria & Date",
    places: [
      {
        name: "Quartinho Bar",
        neighborhood: "Botafogo",
        desc: "Espaço criativo e cool com decoração minimalista. O cardápio é apresentado em formato de fanzine — uma experiência única.",
        highlight: "Cardápio em fanzine",
        vibe: "Cool",
      },
      {
        name: "Bar Tero",
        neighborhood: "Jardim Botânico",
        desc: "A primeira vermuteria do Rio. Luz baixa, clima romântico e, em algumas noites, música ao vivo com saxofonista.",
        highlight: "Vermuteria + Saxofone ao vivo",
        vibe: "Romántico",
      },
      {
        name: "Liz Cocktail & Co",
        neighborhood: "Leblon",
        desc: "Bar pequeno e charmoso especializado em alta coquetelaria. Ideal para quem busca uma experiência exclusiva e técnica.",
        highlight: "Alta coquetelaria",
        vibe: "Exclusivo",
      },
    ],
  },
];

const CAFES = [
  { name: "Cirandaia", neighborhood: "Botafogo", desc: "O mais bem avaliado de Botafogo.", highlight: "Mais bem avaliado" },
  { name: "Spesso", neighborhood: "Botafogo", desc: "Vista do 8º andar para o Pão de Açúcar enquanto toma café.", highlight: "Vista Pão de Açúcar" },
  { name: "Aussie Coffee", neighborhood: "Ipanema", desc: "Estilo australiano com o melhor cold brew da cidade.", highlight: "Melhor cold brew" },
  { name: "Le P'tit Café", neighborhood: "Ipanema", desc: "Estilo parisiense com jazz ao fundo — romance garantido.", highlight: "Jazz + Paris" },
  { name: "Mô Café", neighborhood: "Santa Teresa", desc: "Ambiente artístico em um bairro boêmio — perfeito para inspiração.", highlight: "Artístico" },
  { name: "Café do Alto", neighborhood: "Santa Teresa", desc: "Opções veganas e influências nordestinas em cardápio criativo.", highlight: "Vegano & Nordestino" },
  { name: "Coffee Five", neighborhood: "Centro", desc: "Torrefadora especializada — o café mais sério da cidade.", highlight: "Torrefadora" },
  { name: "Curto Café", neighborhood: "Centro", desc: "Conceito único: você mesmo prepara o próprio café.", highlight: "Faça seu café" },
];

const VIBE_COLORS: Record<string, string> = {
  Tradicional: "#7A5444",
  Relaxado: "#4A7A5A",
  Vibrante: "#E8845C",
  Luxuoso: "#C88400",
  Romântico: "#C25E8A",
  Descontraído: "#5A7A9A",
  Cool: "#6A5A9A",
  Exclusivo: "#7A3A6A",
  "Romántico": "#C25E8A",
};

export function BaresECafes() {
  const [activeSection, setActiveSection] = useState<"bares" | "cafes">("bares");
  const [activeBarCategory, setActiveBarCategory] = useState(0);

  return (
    <section
      id="bares"
      className="py-24 px-4"
      style={{ background: "linear-gradient(180deg, #FDF3E7 0%, #FFF8F0 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[0.3em] mb-3"
            style={{ color: "#E8845C", fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}
          >
            ✦ Vida Noturna & Café ✦
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
            Bares, Rooftops & Cafés
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#7A5444", lineHeight: 1.7 }}
          >
            Do sundowner na mureta da Urca ao cold brew australiano em Ipanema — o Rio
            tem o cenário perfeito para cada momento do dia.
          </p>
        </div>

        {/* Main toggle */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-full p-1.5 gap-1"
            style={{ background: "rgba(232,132,92,0.12)", border: "1.5px solid rgba(232,132,92,0.25)" }}
          >
            {[
              { id: "bares", label: "🍹 Bares & Rooftops" },
              { id: "cafes", label: "☕ Cafeterias" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as "bares" | "cafes")}
                className="px-8 py-2.5 rounded-full transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  background: activeSection === tab.id
                    ? "linear-gradient(135deg, #E8845C, #F4A940)"
                    : "transparent",
                  color: activeSection === tab.id ? "#fff" : "#7A5444",
                  boxShadow: activeSection === tab.id ? "0 4px 16px rgba(232,132,92,0.35)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeSection === "bares" && (
          <>
            {/* Bar category tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {BARES.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveBarCategory(i)}
                  className="px-5 py-2 rounded-full transition-all duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: activeBarCategory === i ? 600 : 400,
                    background: activeBarCategory === i ? "#2C1810" : "rgba(44,24,16,0.07)",
                    color: activeBarCategory === i ? "#FFF8F0" : "#7A5444",
                    border: activeBarCategory === i ? "none" : "1px solid rgba(44,24,16,0.12)",
                  }}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Bar cards */}
            <div className="grid md:grid-cols-3 gap-5">
              {BARES[activeBarCategory].places.map((place, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 24px rgba(44,24,16,0.08)",
                    border: "1px solid rgba(232,132,92,0.12)",
                  }}
                >
                  {/* Vibe badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: `${VIBE_COLORS[place.vibe]}18`,
                        color: VIBE_COLORS[place.vibe],
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        border: `1px solid ${VIBE_COLORS[place.vibe]}30`,
                      }}
                    >
                      {place.vibe.toUpperCase()}
                    </span>
                    <span style={{ color: "#E8845C", fontSize: "1.25rem" }}>🍹</span>
                  </div>
                  <h3
                    className="mb-1"
                    style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 600, color: "#2C1810" }}
                  >
                    {place.name}
                  </h3>
                  <p
                    className="mb-3"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#E8845C", letterSpacing: "0.05em" }}
                  >
                    📍 {place.neighborhood}
                  </p>
                  <p
                    className="mb-4"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#7A5444", lineHeight: 1.6 }}
                  >
                    {place.desc}
                  </p>
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ background: "rgba(244,169,64,0.1)", border: "1px solid rgba(244,169,64,0.25)" }}
                  >
                    <span style={{ fontSize: "0.75rem" }}>✨</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#C88400" }}>
                      {place.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Boemia tips */}
            <div
              className="mt-10 rounded-2xl p-6"
              style={{ background: "rgba(44,24,16,0.06)", border: "1px solid rgba(44,24,16,0.1)" }}
            >
              <h4
                className="mb-4"
                style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 600, color: "#2C1810" }}
              >
                📍 Dicas Extras de Boemia
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <span style={{ fontSize: "1.25rem" }}>🎵</span>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#2C1810", fontSize: "0.9rem" }}>
                      Samba na Pedra do Sal
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#7A5444", fontSize: "0.82rem", lineHeight: 1.5, marginTop: "2px" }}>
                      O berço histórico do samba. Cerveja gelada, música ao vivo e a essência carioca mais autêntica.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span style={{ fontSize: "1.25rem" }}>🏙️</span>
                  <div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#2C1810", fontSize: "0.9rem" }}>
                      Bar Carioca da Gema — Lapa
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#7A5444", fontSize: "0.82rem", lineHeight: 1.5, marginTop: "2px" }}>
                      Samba em casarão colonial histórico no centro da vida noturna carioca. Inesquecível.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === "cafes" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAFES.map((cafe, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#fff",
                  boxShadow: "0 4px 20px rgba(44,24,16,0.07)",
                  border: "1px solid rgba(232,132,92,0.12)",
                }}
              >
                <div className="mb-3">
                  <span style={{ fontSize: "1.5rem" }}>☕</span>
                </div>
                <h3
                  className="mb-1"
                  style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 600, color: "#2C1810" }}
                >
                  {cafe.name}
                </h3>
                <p
                  className="mb-2"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "#E8845C", letterSpacing: "0.05em" }}
                >
                  📍 {cafe.neighborhood}
                </p>
                <p
                  className="mb-3"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "#7A5444", lineHeight: 1.5 }}
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
