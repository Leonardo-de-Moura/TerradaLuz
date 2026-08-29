import { useState } from "react";

const DAYS_FREE = [
  {
    day: "Segunda",
    icon: "🎨",
    title: "Arte & História",
    items: [
      { time: "8h00", place: "Escadaria Selarón", desc: "Mosaicos coloridos únicos no mundo" },
      { time: "9h30", place: "Bairro de Santa Teresa", desc: "Charmoso bairro boêmio com arte e cultura" },
      { time: "15h00", place: "Parque do Flamengo", desc: "Passeio à beira da Baía de Guanabara" },
    ],
    image: "https://images.unsplash.com/photo-1600834672703-cbe39d8efc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFc2NhZGFyaWElMjBTZWxhcm9uJTIwY29sb3JmdWwlMjBzdGFpcnMlMjBSaW98ZW58MXx8fHwxNzc0MjM2MjkxfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Terça",
    icon: "🔭",
    title: "Ciência & Arquitetura",
    items: [
      { time: "10h00", place: "Museu do Amanhã", desc: "Entrada gratuita às terças — arquitetura de Calatrava e exposições interativas" },
    ],
    image: "https://images.unsplash.com/photo-1715528892617-fab2cd0ce0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3QlMjBSZWRlZW1lciUyMHN0YXR1ZSUyMFJpb3xlbnwxfHx8fDE3NzQyMzYyOTB8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Quarta",
    icon: "🌿",
    title: "Natureza & Vistas",
    items: [
      { time: "9h00", place: "Parque Lage", desc: "Café no palacete histórico cercado de mata atlântica" },
      { time: "15h00", place: "Mirante Dona Marta", desc: "Vista privilegiada da cidade sem custo" },
    ],
    image: "https://images.unsplash.com/photo-1658191695837-cab2fe29fcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBSaW8lMjBkZSUyMEphbmVpcm98ZW58MXx8fHwxNzc0MjM2MjkxfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Quinta",
    icon: "🌊",
    title: "Praias & Pôr do Sol",
    items: [
      { time: "10h00", place: "Praia de Ipanema", desc: "Vista para o Morro Dois Irmãos e o mar de Ipanema" },
      { time: "17h00", place: "Arpoador", desc: "O pôr do sol mais aplaudido do Rio" },
    ],
    image: "https://images.unsplash.com/photo-1773514532625-93a9b980650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGFuZW1hJTIwYmVhY2glMjBzdW5zZXQlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc3NDIzNjI5MHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Sexta",
    icon: "🏖️",
    title: "Copacabana Clássica",
    items: [
      { time: "8h00", place: "Praia de Copacabana", desc: "A praia mais famosa do mundo ao amanhecer" },
      { time: "11h00", place: "Calçadão Histórico", desc: "Passeio pelo icônico mosaico de ondas portuguesas" },
    ],
    image: "https://images.unsplash.com/photo-1600131160488-1048a6fa0f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWdhciUyMExvYWYlMjBNb3VudGFpbiUyMFJpbyUyMGRlJTIwSmFuZWlyb3xlbnwxfHx8fDE3NzQyMzYyODl8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

const DAYS_PAID = [
  {
    day: "Segunda",
    icon: "🚡",
    title: "Pão de Açúcar & AquaRio",
    cost: "~R$ 250–320/pessoa",
    items: [
      { time: "9h00", place: "Bondinho do Pão de Açúcar", desc: "Com Fast Pass para evitar filas — vistas de tirar o fôlego" },
      { time: "14h00", place: "AquaRio", desc: "O maior aquário da América do Sul" },
    ],
    image: "https://images.unsplash.com/photo-1600131160488-1048a6fa0f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWdhciUyMExvYWYlMjBNb3VudGFpbiUyMFJpbyUyMGRlJTIwSmFuZWlyb3xlbnwxfHx8fDE3NzQyMzYyODl8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Terça",
    icon: "✝️",
    title: "Cristo Redentor de Trem",
    cost: "~R$ 80–130/pessoa",
    items: [
      { time: "8h00", place: "Estação Cosme Velho", desc: "Trem histórico até a 8ª Maravilha do Mundo" },
    ],
    image: "https://images.unsplash.com/photo-1715528892617-fab2cd0ce0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaHJpc3QlMjBSZWRlZW1lciUyMHN0YXR1ZSUyMFJpb3xlbnwxfHx8fDE3NzQyMzYyOTB8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Quarta",
    icon: "🌺",
    title: "Jardim Botânico & Teatro",
    cost: "~R$ 50–65/pessoa",
    items: [
      { time: "8h00", place: "Jardim Botânico", desc: "Um dos jardins mais belos do mundo — flora tropical exuberante" },
      { time: "14h00", place: "Theatro Municipal", desc: "Visita guiada ao suntuoso teatro estilo Belle Époque" },
    ],
    image: "https://images.unsplash.com/photo-1658191695837-cab2fe29fcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBSaW8lMjBkZSUyMEphbmVpcm98ZW58MXx8fHwxNzc0MjM2MjkxfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Quinta",
    icon: "⚽",
    title: "Maracanã & Museu",
    cost: "~R$ 100–120/pessoa",
    items: [
      { time: "9h00", place: "Tour no Maracanã", desc: "Nos bastidores do estádio mais famoso do futebol mundial" },
      { time: "14h00", place: "Museu do Amanhã", desc: "Exposições interativas sobre o futuro da humanidade" },
    ],
    image: "https://images.unsplash.com/photo-1773514532625-93a9b980650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGFuZW1hJTIwYmVhY2glMjBzdW5zZXQlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc3NDIzNjI5MHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    day: "Sexta",
    icon: "🦁",
    title: "BioPark & Cultura",
    cost: "~R$ 60–80/pessoa",
    items: [
      { time: "9h00", place: "BioPark Rio", desc: "O novo zoo carioca — experiência imersiva com os animais" },
      { time: "15h00", place: "Real Gabinete Português de Leitura", desc: "Uma das mais belas bibliotecas do mundo — entrada gratuita" },
    ],
    image: "https://images.unsplash.com/photo-1600834672703-cbe39d8efc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFc2NhZGFyaWElMjBTZWxhcm9uJTIwY29sb3JmdWwlMjBzdGFpcnMlMjBSaW98ZW58MXx8fHwxNzc0MjM2MjkxfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

export function Roteiros() {
  const [activeTab, setActiveTab] = useState<"gratuito" | "pago">("gratuito");
  const [activeDay, setActiveDay] = useState(0);

  const days = activeTab === "gratuito" ? DAYS_FREE : DAYS_PAID;
  const current = days[activeDay];

  return (
    <section
      id="roteiros"
      className="py-24 px-4"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #FDF3E7 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[0.3em] mb-3"
            style={{ color: "#E8845C", fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}
          >
            ✦ Planejamento Completo ✦
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
            Roteiro de 5 Dias
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: "#7A5444", lineHeight: 1.7 }}
          >
            Dois roteiros completos para vocês aproveitarem o Rio ao máximo — um
            totalmente gratuito e outro com as grandes atrações pagas.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-full p-1.5 gap-1"
            style={{ background: "rgba(232,132,92,0.12)", border: "1.5px solid rgba(232,132,92,0.25)" }}
          >
            {(["gratuito", "pago"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setActiveDay(0); }}
                className="px-8 py-2.5 rounded-full transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  background: activeTab === tab
                    ? "linear-gradient(135deg, #E8845C, #F4A940)"
                    : "transparent",
                  color: activeTab === tab ? "#fff" : "#7A5444",
                  boxShadow: activeTab === tab ? "0 4px 16px rgba(232,132,92,0.35)" : "none",
                }}
              >
                {tab === "gratuito" ? "🌿 Gratuito" : "⭐ Experiências Pagas"}
              </button>
            ))}
          </div>
        </div>

        {/* Day selector */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap">
          {days.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className="px-5 py-2 rounded-full transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                fontWeight: activeDay === i ? 600 : 400,
                background: activeDay === i ? "#2C1810" : "rgba(44,24,16,0.07)",
                color: activeDay === i ? "#FFF8F0" : "#7A5444",
                border: activeDay === i ? "none" : "1px solid rgba(44,24,16,0.12)",
              }}
            >
              {d.icon} {d.day}
            </button>
          ))}
        </div>

        {/* Day card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 20px 60px rgba(44,24,16,0.12)",
            background: "#fff",
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-72 md:h-auto min-h-64">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.3))",
                }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <span
                  className="px-3 py-1 rounded-full text-white"
                  style={{ background: "rgba(232,132,92,0.85)", fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
                >
                  {current.day}-feira
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "#2C1810",
                }}
              >
                {current.title}
              </h3>
              {"cost" in current && current.cost && (
                <div
                  className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full w-fit"
                  style={{ background: "rgba(244,169,64,0.15)", border: "1px solid rgba(244,169,64,0.4)" }}
                >
                  <span style={{ color: "#C88400", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>
                    💰 {(current as { cost: string }).cost}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-4 mt-2">
                {current.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <span
                        className="px-2.5 py-1 rounded-lg"
                        style={{
                          background: "rgba(232,132,92,0.12)",
                          color: "#E8845C",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.time}
                      </span>
                      {idx < current.items.length - 1 && (
                        <div className="w-px flex-1 min-h-4" style={{ background: "rgba(232,132,92,0.25)" }} />
                      )}
                    </div>
                    <div>
                      <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#2C1810", fontSize: "0.95rem" }}>
                        {item.place}
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#7A5444", fontSize: "0.85rem", lineHeight: 1.5, marginTop: "2px" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div
          className="mt-8 rounded-2xl p-5 flex items-start gap-4"
          style={{ background: "rgba(244,169,64,0.1)", border: "1px solid rgba(244,169,64,0.3)" }}
        >
          <span style={{ fontSize: "1.25rem" }}>💡</span>
          <p style={{ fontFamily: "Inter, sans-serif", color: "#7A5444", fontSize: "0.875rem", lineHeight: 1.6 }}>
            <strong style={{ color: "#2C1810" }}>Dica do casal:</strong> Para qualquer um dos roteiros, reserve com antecedência o Cristo Redentor, o Bondinho do Pão de Açúcar e os restaurantes renomados. Use Uber ou 99 para se locomover com segurança.
          </p>
        </div>
      </div>
    </section>
  );
}
