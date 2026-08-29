export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/18892315/pexels-photo-18892315.jpeg?_gl=1*v9irkv*_ga*MTcyNjk0NDE3NS4xNzg4MDQyMjc4*_ga_8JE65Q40S6*czE3ODgwNDIyNzckbzEkZzEkdDE3ODgwNDI0MDIkajYwJGwwJGgw')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,10,5,0.35) 0%, rgba(20,6,2,0.6) 60%, rgba(44,24,16,0.92) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="uppercase tracking-[0.35em] mb-4"
          style={{ color: "#F4A940", fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}
        >
          ✦ Roteiro De Viagem ✦
        </p>
        <h1
          className="mb-6"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 600,
            color: "#FFF8F0",
            lineHeight: 1.15,
          }}
        >
          Fortaleza,<br />
          <em style={{ color: "#F4A940" }}>Terra da Luz</em>
        </h1>
        <p
          className="mb-10 max-w-2xl mx-auto"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.125rem",
            color: "rgba(255,248,240,0.85)",
            lineHeight: 1.7,
          }}
        >
          De praias douradas a restaurantes imperdíveis — descubra o melhor que a
          cidade tem a oferecer para vocês dois.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#roteiros"
            className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E8845C, #F4A940)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.05em",
              boxShadow: "0 8px 32px rgba(232,132,92,0.45)",
            }}
          >
            Ver Roteiros
          </a>
          <a
            href="#gastronomia"
            className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              border: "1.5px solid rgba(255,248,240,0.55)",
              color: "#FFF8F0",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "0.95rem",
              letterSpacing: "0.05em",
              backdropFilter: "blur(6px)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            Gastronomia
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-60">
          <span style={{ color: "#FFF8F0", fontFamily: "Inter, sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            EXPLORE
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(to bottom, #F4A940, transparent)" }}
          />
        </div>
      </div>

      {/* Bottom badge strip */}
      <div
        className="absolute bottom-0 left-0 right-0 py-3 flex justify-center gap-8 flex-wrap px-4"
        style={{ background: "rgba(44,24,16,0.7)", backdropFilter: "blur(8px)" }}
      >
        {["🌊 Praias Paradisíacas", "🍽️ Alta Gastronomia", "🌅 Pôr do Sol Inesquecível", "🍹 Bares & Rooftops"].map(
          (item) => (
            <span
              key={item}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,248,240,0.8)",
                letterSpacing: "0.05em",
              }}
            >
              {item}
            </span>
          )
        )}
      </div>
    </section>
  );
}
