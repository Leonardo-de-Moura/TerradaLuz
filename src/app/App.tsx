import { Hero } from "./components/Hero";
import { Roteiros } from "./components/Roteiros";
import { Gastronomia } from "./components/Gastronomia";
import { BaresECafes } from "./components/BaresECafes";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <NavBar />
      <Hero />
      <Roteiros />
      <Gastronomia />
      <BaresECafes />
      <Footer />
    </div>
  );
}
