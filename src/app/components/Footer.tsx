interface Dica {
  icon: string;
  title: string;
  items: string[];
}

interface NavItem {
  label: string;
  href: string;
}

const DICAS: Dica[] = [
  {
    icon: "🔒",
    title: "Segurança",
    items: [
      "Evite deixar celular e objetos de valor à mostra em praias e locais muito movimentados.",
      "À noite, prefira áreas movimentadas e utilize aplicativos de transporte.",
      "Em regiões turísticas, fique atento aos seus pertences, principalmente durante grandes eventos.",
    ],
  },
  {
    icon: "🚗",
    title: "Logística",
    items: [
      "Uber e 99 são opções práticas para circular pela cidade.",
      "O trânsito pode ficar intenso nos horários de pico, principalmente na região da Beira-Mar.",
      "Para trajetos mais longos, planeje o deslocamento com antecedência.",
    ],
  },
  {
    icon: "📅",
    title: "Reservas",
    items: [
      "Restaurantes e rooftops mais disputados podem exigir reserva antecipada.",
      "Passeios para praias próximas, como Cumbuco e Morro Branco, podem ser reservados com antecedência.",
      "Fins de semana e feriados costumam ter maior movimento nas atrações turísticas.",
    ],
  },
  {
    icon: "🌊",
    title: "Praia",
    items: [
      "A orla da Beira-Mar é uma das principais áreas para caminhar, pedalar e aproveitar o pôr do sol.",
      "Na Praia do Futuro, confira os preços antes de consumir nas barracas.",
      "Evite deixar celular e outros objetos de valor sem supervisão enquanto estiver na praia.",
    ],
  },
  {
    icon: "☀️",
    title: "Clima",
    items: [
      "O sol pode ser intenso durante boa parte do ano — use protetor solar.",
      "Leve água e mantenha-se hidratado durante passeios ao ar livre.",
      "Uma roupa leve e proteção para o sol são boas escolhas para explorar a cidade.",
    ],
  },
  {
    icon: "💳",
    title: "Dinheiro",
    items: [
      "PIX e cartões são amplamente aceitos em estabelecimentos turísticos.",
      "Ainda assim, é útil ter uma pequena quantia em dinheiro para vendedores e situações pontuais.",
      "Confira preços e taxas antes de consumir em barracas, bares e restaurantes.",
    ],
  },
];

const NAV: NavItem[] = [
  { label: "Roteiros", href: "#roteiros" },
  { label: "Gastronomia", href: "#gastronomia" },
  { label: "Bares & Cafés", href: "#bares" },
];

export function Footer() {
  return (
    <footer
      id="dicas"
      style={{ background: "linear-gradient(180deg, #1A0A05 0%, #0D0402 100%)" }}
    >
      {/* Dicas Essenciais */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-[0.3em] mb-3"
              style={{ color: "#F4A940", fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}
            >
              ✦ Para o Turista ✦
            </p>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
                fontWeight: 600,
                color: "#FFF8F0",
                lineHeight: 1.2,
              }}
            >
              Dicas Essenciais
            </h2>
            <p
              className="mt-4 max-w-lg mx-auto"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,248,240,0.55)", lineHeight: 1.7 }}
            >
              Tudo o que vocês precisam saber para aproveitar Fortaleza com segurança,
              praticidade e muito estilo.
            </p>
          </div>

          {/* Dicas grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DICAS.map((dica, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,248,240,0.04)",
                  border: "1px solid rgba(255,248,240,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(244,169,64,0.15)", fontSize: "1.2rem" }}
                  >
                    {dica.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#FFF8F0",
                    }}
                  >
                    {dica.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {dica.items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span
                        className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#F4A940" }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.82rem",
                          color: "rgba(255,248,240,0.65)",
                          lineHeight: 1.55,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 py-8"
        style={{ borderColor: "rgba(255,248,240,0.07)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#FFF8F0",
              }}
            >
              Fortal para Turistas
            </span>
            <span
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,248,240,0.4)" }}
            >
              Terra da luz✦ Roteiro de 5 Dias
            </span>
          </div>

          {/* Nav */}
          <nav className="flex gap-6 flex-wrap justify-center">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-200 hover:text-amber-300"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,248,240,0.5)",
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,248,240,0.3)",
              textAlign: "center",
            }}
          >
            © 2026 Feito por um cearense ❤️.
          </p>
        </div>
      </div>
    </footer>
  );
}
