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
`;
const Cta = styled.div`
  padding: 3rem 1.5rem;
  display: grid;
  gap: 1.5rem;
`;
export function Grid() {
  return (
    <GridWrapper>
      <picture>
        <source media="(min-width: 37.5em)" srcSet={item1Md} />
        <source media="(min-width: 60em)" srcSet={item1Lg} />
        <img src={item1Sm} alt="" />
      </picture>
      <picture>
        <source media="(min-width: 37.5em)" srcSet={item2Md} />
        <source media="(min-width: 60em)" srcSet={item2Lg} />
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
