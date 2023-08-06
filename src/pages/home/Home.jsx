import { Footer } from "../../components/Footer.styled.jsx";
import { Hero } from "./components/Hero.styled.jsx";
import { Grid } from "./components/Grid.styled.jsx";
import { Introduction } from "./components/Introduction.styled.jsx";
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
