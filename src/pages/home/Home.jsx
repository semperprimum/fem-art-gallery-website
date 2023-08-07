import { Footer } from "../../components/Footer.styled.jsx";
import { Hero } from "./components/Hero.styled.jsx";
import { Grid } from "./components/Grid.styled.jsx";
import { Introduction } from "./components/Introduction.styled.jsx";
import { Container } from "../../components/Container.styled.jsx";
export function Home() {
  return (
    <>
      <Container as="header" $top>
        <Introduction />
      </Container>
      <Container as="main">
        <Hero />
        <Grid />
      </Container>
      <Footer />
    </>
  );
}
