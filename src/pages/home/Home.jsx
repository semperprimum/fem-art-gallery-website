import { Footer } from "../../components/Footer.styled.jsx";
import { Grid } from "./components/grid.styled.jsx";
import { Hero } from "./components/hero.styled.jsx";
import { Introduction } from "./components/introduction.styled.jsx";
export function Home() {
  return (
    <>
      <header>
        <Introduction />
      </header>
      <main>
        <Hero />
        <Grid />
      </main>
      <Footer />
    </>
  );
}
