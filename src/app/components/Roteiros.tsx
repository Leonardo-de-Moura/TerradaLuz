import { useState } from "react";

type TabType = "gratuito" | "pago";

interface RouteItem {
  time: string;
  place: string;
  desc: string;
}

interface DayRoute {
  day: string;
  icon: string;
  title: string;
  cost?: string;
  items: RouteItem[];
  image: string;
}


const DAYS_FREE: DayRoute[] = [
  {
    day: "Segunda",
    icon: "🎨",
    title: "Arte e História",
    items: [
      {
        time: "8h00",
        place: "Centro Cultural Dragão do Mar",
        desc: "Complexo cultural com exposições, cinema, teatro e espaços dedicados à arte cearense",
      },
      {
        time: "10h30",
        place: "Mercado Central de Fortaleza",
        desc: "Artesanato, rendas, comidas típicas e produtos tradicionais do Ceará",
      },
      {
        time: "15h00",
        place: "Praça José de Alencar",
        desc: "Uma das praças históricas de Fortaleza, cercada por importantes edifícios culturais",
      },
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Centro_Drag%C3%A3o_do_Mar_de_Arte_e_Cultura_%284%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  },

  {
    day: "Terça",
    icon: "🏛️",
    title: "Centro e Cultura Cearense",
    items: [
      {
        time: "9h00",
        place: "Museu do Ceará",
        desc: "Acervo que apresenta a história, a cultura e a formação social do Ceará",
      },
      {
        time: "11h00",
        place: "Catedral Metropolitana de Fortaleza",
        desc: "Um dos principais cartões-postais históricos do centro da cidade",
      },
      {
        time: "15h00",
        place: "Passeio Público",
        desc: "Praça histórica com árvores centenárias e vista para a região da orla",
      },
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70eK1UCwTncmOWrDpaJULPFm2vq-pGMrBR_3M-X3Cc1QAUraD_IrMrivg&s=10",
  },

  {
    day: "Quarta",
    icon: "🌿",
    title: "Natureza e Vistas",
    items: [
      {
        time: "8h00",
        place: "Parque Estadual do Cocó",
        desc: "Uma das principais áreas verdes de Fortaleza, com trilhas e contato com a natureza",
      },
      {
        time: "11h00",
        place: "Parque Adahil Barreto",
        desc: "Área arborizada ideal para caminhar e aproveitar um momento tranquilo",
      },
      {
        time: "16h00",
        place: "Mirante do Morro Santa Terezinha",
        desc: "Vista panorâmica de Fortaleza e da região litorânea",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1668628507370-fe568778b4eb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    day: "Quinta",
    icon: "🌊",
    title: "Praias e Pôr do Sol",
    items: [
      {
        time: "9h00",
        place: "Praia de Iracema",
        desc: "Uma das praias mais tradicionais de Fortaleza, cercada por cultura, bares e história",
      },
      {
        time: "11h00",
        place: "Ponte dos Ingleses",
        desc: "Um dos lugares mais conhecidos para contemplar o mar e a paisagem urbana",
      },
      {
        time: "17h00",
        place: "Espigão da Rui Barbosa",
        desc: "Um dos pontos favoritos para assistir ao pôr do sol sobre o litoral de Fortaleza",
      },
    ],
    image:
      "https://urbnews.com.br/wp-content/uploads/2025/06/foto-site-7-1.jpg",
  },

  {
    day: "Sexta",
    icon: "🏖️",
    title: "Beira-Mar e Artesanato",
    items: [
      {
        time: "8h00",
        place: "Avenida Beira-Mar",
        desc: "Caminhada pela orla com vista para o litoral e o movimento da cidade",
      },
      {
        time: "10h00",
        place: "Feirinha da Beira-Mar",
        desc: "Artesanato, lembranças, comidas típicas e produtos tradicionais do Ceará",
      },
      {
        time: "16h00",
        place: "Jardim Japonês",
        desc: "Espaço tranquilo na orla para relaxar e apreciar o fim da tarde",
      },
    ],
    image:
      "https://www.opovo.com.br/_midias/jpg/2021/01/26/750x499/1_obras_em_fortaleza_julio_caesar_26-14728381.jpg",
  },
];

const DAYS_PAID: DayRoute[] = [
  {
    day: "Segunda",
    icon: "🌊",
    title: "Beach Park",
    cost: "~R$ 200–300/pessoa",
    items: [
      {
        time: "9h00",
        place: "Beach Park",
        desc: "Um dos maiores complexos de entretenimento e parque aquático do Brasil, localizado em Aquiraz",
      },
      {
        time: "14h00",
        place: "Praia Porto das Dunas",
        desc: "Praia onde está localizado o complexo, ideal para aproveitar o litoral após as atrações",
      },
    ],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/26/a3/86/conheca-a-montanha-russa.jpg?w=1200&h=-1&s=1",
  },

  {
    day: "Terça",
    icon: "🔭",
    title: "Dragão do Mar e Planetário",
    cost: "~R$ 30–60/pessoa",
    items: [
      {
        time: "9h00",
        place: "Planetário Rubens de Azevedo",
        desc: "Experiência imersiva para conhecer o universo, os planetas e os fenômenos astronômicos",
      },
      {
        time: "14h00",
        place: "Museu da Cultura Cearense",
        desc: "Exposições que apresentam tradições, costumes e diferentes aspectos da cultura do Ceará",
      },
    ],
    image:
      "https://dicasdefortalezaejeri.com.br/wp-content/uploads/sites/29/2023/09/planetario-dragao-do-mar-jpg.webp",
  },

  {
    day: "Quarta",
    icon: "📷",
    title: "Fotografia e Cultura",
    cost: "~R$ 20–40/pessoa",
    items: [
      {
        time: "9h00",
        place: "Museu da Fotografia Fortaleza",
        desc: "Acervo dedicado à fotografia brasileira e internacional, com exposições temporárias e permanentes",
      },
      {
        time: "14h00",
        place: "Espaço Cultural Unifor",
        desc: "Centro cultural com exposições de arte, história e patrimônio cultural",
      },
    ],
    image:
      "https://artebrasileiros.com.br/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-25-at-17.38.02-1-e1606354330439.jpeg",
  },

  {
    day: "Quinta",
    icon: "⛵",
    title: "Mar e Experiência",
    cost: "~R$ 80–150/pessoa",
    items: [
      {
        time: "9h00",
        place: "Passeio de Barco pela Orla",
        desc: "Passeio pelo litoral de Fortaleza com uma perspectiva diferente da cidade e suas praias",
      },
      {
        time: "15h00",
        place: "Mercado dos Peixes",
        desc: "Espaço tradicional da Beira-Mar para conhecer frutos do mar e aproveitar a gastronomia local",
      },
    ],
    image:
      "https://deferiasnoceara.com.br/wp-content/uploads/2021/08/De-Ferias-no-Ceara-Passeio-de-Veleiro-1.webp",
  },

  {
    day: "Sexta",
    icon: "🍽️",
    title: "Gastronomia e Cultura",
    cost: "~R$ 70–120/pessoa",
    items: [
      {
        time: "10h00",
        place: "Mercado São Sebastião",
        desc: "Mercado tradicional de Fortaleza com produtos regionais, frutas, temperos e culinária cearense",
      },
      {
        time: "15h00",
        place: "Centro Cultural Dragão do Mar",
        desc: "Finalize o roteiro com arte, exposições, cinema e programação cultural no coração da Praia de Iracema",
      },
      {
        time: "19h00",
        place: "Feirinha da Beira-Mar",
        desc: "Encerramento do roteiro com artesanato, comidas típicas e o movimento noturno da orla",
      },
    ],
    image:
      "https://b3577058.assetcdn.net/3577058/wp-content/uploads/2023/01/barraca-da-Feirinha-da-Beira-Mar-antes-da-reforma-de-2022-foto-Jade-Queiroz-MTUR-1024x683.jpg?lossy=1&strip=0&webp=1",
  },
];


interface DaySelectorProps {
  days: DayRoute[];
  activeDay: number;
  onSelect: (index: number) => void;
}

function DaySelector({ days, activeDay, onSelect }: DaySelectorProps) {
  return (
    <div className="flex gap-3 justify-center mb-10 flex-wrap">
      {days.map((day, index) => (
        <button
          key={day.day}
          onClick={() => onSelect(index)}
          className="px-5 py-2 rounded-full transition-all duration-200"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
            fontWeight: activeDay === index ? 600 : 400,
            background: activeDay === index ? "#2C1810" : "rgba(44,24,16,0.07)",
            color: activeDay === index ? "#FFF8F0" : "#7A5444",
            border:
              activeDay === index ? "none" : "1px solid rgba(44,24,16,0.12)",
          }}
        >
          {day.icon} {day.day}
        </button>
      ))}
    </div>
  );
}

/* =========================
   COMPONENTE: CARD DO ROTEIRO
========================= */

interface DayCardProps {
  route: DayRoute;
  isPaid: boolean;
}

function DayCard({ route, isPaid }: DayCardProps) {
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        boxShadow: "0 20px 60px rgba(44,24,16,0.12)",
        background: "#fff",
      }}
    >
      <div className="grid md:grid-cols-2">
        {/* Imagem */}
        <div className="relative h-72 md:h-auto min-h-64">
          <img
            src={route.image}
            alt={route.title}
            className="w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.3))",
            }}
          />

          <div className="absolute bottom-0 left-0 p-6">
            <span
              className="px-3 py-1 rounded-full text-white"
              style={{
                background: "rgba(232,132,92,0.85)",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              {route.day}-feira
            </span>
          </div>
        </div>

        {/* Conteúdo */}
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
            {route.title}
          </h3>

          {/* Preço */}
          {isPaid && route.cost && (
            <div
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full w-fit"
              style={{
                background: "rgba(244,169,64,0.15)",
                border: "1px solid rgba(244,169,64,0.4)",
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>💰</span>

              <span
                style={{
                  color: "#C88400",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {route.cost}
              </span>
            </div>
          )}

          {/* Atividades */}
          <div className="flex flex-col gap-4 mt-2">
            {route.items.map((item, index) => (
              <div key={item.place} className="flex gap-4 items-start">
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

                  {index < route.items.length - 1 && (
                    <div
                      className="w-px flex-1 min-h-4"
                      style={{
                        background: "rgba(232,132,92,0.25)",
                      }}
                    />
                  )}
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      color: "#2C1810",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.place}
                  </p>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "#7A5444",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      marginTop: "2px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   COMPONENTE PRINCIPAL
========================= */

export function Roteiros() {
  const [activeTab, setActiveTab] = useState<TabType>("gratuito");

  const [activeDay, setActiveDay] = useState(0);

  const days = activeTab === "gratuito" ? DAYS_FREE : DAYS_PAID;

  const currentDay = days[activeDay];

  function changeTab(tab: TabType) {
    setActiveTab(tab);
    setActiveDay(0);
  }

  return (
    <section
      id="roteiros"
      className="py-24 px-4"
      style={{
        background: "linear-gradient(180deg, #FFF8F0 0%, #FDF3E7 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <p
            className="uppercase tracking-[0.3em] mb-3"
            style={{
              color: "#E8845C",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
            }}
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
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#7A5444",
              lineHeight: 1.7,
            }}
          >
            Dois roteiros completos para vocês aproveitarem Fortaleza ao máximo
            — um totalmente gratuito e outro com as grandes atrações pagas.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-full p-1.5 gap-1"
            style={{
              background: "rgba(232,132,92,0.12)",
              border: "1.5px solid rgba(232,132,92,0.25)",
            }}
          >
            {(["gratuito", "pago"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => changeTab(tab)}
                className="px-8 py-2.5 rounded-full transition-all duration-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  background:
                    activeTab === tab
                      ? "linear-gradient(135deg, #E8845C, #F4A940)"
                      : "transparent",
                  color: activeTab === tab ? "#fff" : "#7A5444",
                  boxShadow:
                    activeTab === tab
                      ? "0 4px 16px rgba(232,132,92,0.35)"
                      : "none",
                }}
              >
                {tab === "gratuito" ? "🌿 Gratuito" : "⭐ Experiências Pagas"}
              </button>
            ))}
          </div>
        </div>

        {/* Dias */}
        <DaySelector
          days={days}
          activeDay={activeDay}
          onSelect={setActiveDay}
        />

        {/* Roteiro atual */}
        <DayCard route={currentDay} isPaid={activeTab === "pago"} />

        {/* Dica */}
        <div
          className="mt-8 rounded-2xl p-5 flex items-start gap-4"
          style={{
            background: "rgba(244,169,64,0.1)",
            border: "1px solid rgba(244,169,64,0.3)",
          }}
        >
          <span style={{ fontSize: "1.25rem" }}>💡</span>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#7A5444",
              fontSize: "0.875rem",
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#2C1810" }}>Dica:</strong> Para
            qualquer um dos roteiros, reserve com antecedência as principais
            atrações e restaurantes. Use Uber ou 99 para se locomover com
            segurança.
          </p>
        </div>
      </div>
    </section>
  );
}
