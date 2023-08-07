import { Button } from "../../components/Button.styled";
import { Container } from "../../components/Container.styled";
import { Footer } from "../../components/Footer.styled";
import { Description } from "./components/Description.styled";
import { Map } from "./components/Map.styled";
import styled from "styled-components";

const BackButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  @media only screen and (min-width: 37.5rem) {
    left: var(--padding-x);
  }
`;

export function Location() {
  return (
    <>
      <main>
        <Container>
          <BackButton to="/" $backwards>
            Back To Home
          </BackButton>
        </Container>
        <Map />
        <Description />
      </main>
      <Footer inverted />
    </>
  );
}
