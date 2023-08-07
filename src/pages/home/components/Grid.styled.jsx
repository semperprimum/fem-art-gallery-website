import { styled } from "styled-components";
import item1Sm from "../../../assets/mobile/image-grid-2@2x.jpg";
import item2Sm from "../../../assets/mobile/image-grid-3@2x.jpg";
import item1Md from "../../../assets/tablet/image-grid-2@2x.jpg";
import item2Md from "../../../assets/tablet/image-grid-3@2x.jpg";
import item1Lg from "../../../assets/desktop/image-grid-2@2x.jpg";
import item2Lg from "../../../assets/desktop/image-grid-3@2x.jpg";
import { Heading2 } from "../../../components/Heading2.styled";
import { Paragraph } from "../../../components/Paragraph.styled";

const GridWrapper = styled.section`
  margin-top: 2rem;
  margin-inline: var(--padding-x);
  margin-bottom: 7.5rem;
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 37.5em) {
    grid-template-columns: 52.5520833% 47.4479167%;
    grid-template-rows: 19.5625rem 24.75rem;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .picture-1 {
      grid-row: 1 / 3;
    }
  }
  @media only screen and (min-width: 60em) {
    grid-template-columns: 57.1% auto;
    grid-template-rows: 19.5625rem 23.5625rem;
    gap: 1.88rem;
    margin-top: 1.88rem;
    margin-bottom: 11.25rem;
  }
`;
const Cta = styled.div`
  padding: 3rem 1.5rem;
  display: grid;
  gap: 1.5rem;

  @media only screen and (min-width: 37.5em) {
    grid-column: 2 / 3;
    display: block;
    padding: 5.31rem 1.75rem;
    p {
      margin-top: 1.5rem;
    }
  }
  @media only screen and (min-width: 60em) {
    padding: 4rem 3rem;
    h2 {
      margin-bottom: 2rem;
    }
    & > * {
      max-width: 90%;
    }
  }
`;
export function Grid() {
  return (
    <GridWrapper>
      <picture className="picture-1">
        <source media="(min-width: 60em)" srcSet={item1Lg} />
        <source media="(min-width: 37.5em)" srcSet={item1Md} />
        <img src={item1Sm} alt="" />
      </picture>
      <picture>
        <source media="(min-width: 60em)" srcSet={item2Lg} />
        <source media="(min-width: 37.5em)" srcSet={item2Md} />
        <img src={item2Sm} alt="" />
      </picture>
      <Cta className="bg-neutral-300">
        <Heading2 className="text-neutral-100">Come & Be Inspired</Heading2>
        <Paragraph className="text-neutral-100">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </Paragraph>
      </Cta>
    </GridWrapper>
  );
}
