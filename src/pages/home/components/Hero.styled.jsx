import { styled } from "styled-components";
import { Paragraph } from "../../../components/Paragraph.styled";
import heroSm from "../../../assets/mobile/image-grid-1@2x.jpg";
import heroMd from "../../../assets/tablet/image-grid-1@2x.jpg";
import heroLg from "../../../assets/desktop/image-grid-1@2x.jpg";
import { Heading2 } from "../../../components/Heading2.styled";

const HeroWrapper = styled.section`
  margin-inline: var(--padding-x);
  margin-top: 7.5rem;
  @media only screen and (min-width: 37.5em) {
    margin-top: 16.56rem;
    display: grid;
    gap: 3.2rem;
    grid-template-columns: auto 25.875rem;
  }
  h2 {
    margin-top: 1.56rem;
    margin-bottom: 1.31rem;
  }
  @media only screen and (min-width: 60em) {
    margin-top: 30.88rem;
  }
`;
const Content = styled.div`
  @media only screen and (min-width: 37.5em) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export function Hero() {
  return (
    <HeroWrapper>
      <picture>
        <source media="(min-width: 37.5em)" srcSet={heroMd} />
        <source media="(min-width: 60em)" srcSet={heroLg} />
        <img src={heroSm} alt="" />
      </picture>
      {/* <img src={heroLg} alt="" /> */}
      <Content>
        <Heading2 className="text-neutral-300">
          Your Day at the Gallery
        </Heading2>
        <Paragraph className="text-neutral-200">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </Paragraph>
      </Content>
    </HeroWrapper>
  );
}
