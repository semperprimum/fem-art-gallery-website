import heroSm from "../../../assets/mobile/image-hero@2x.jpg";
import heroMd from "../../../assets/tablet/image-hero@2x.jpg";
import heroLg from "../../../assets/desktop/image-hero@2x.jpg";
import { styled } from "styled-components";
import { Button } from "../../../components/Button.styled";
import { Paragraph } from "../../../components/Paragraph.styled";

const IntroductionContent = styled.div`
  margin-inline: var(--padding-x);
  & p {
    margin-bottom: 2rem;
  }
`;
const PrimaryHeading = styled.h1`
  font-size: var(--fs-800);
  font-family: var(--ff-accent);
  text-transform: uppercase;
  line-height: 0.91667;
  font-weight: var(--fw-bold);
  margin-inline: var(--padding-x);
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const Picture = styled.picture``;

export function Introduction() {
  return (
    <section>
      <Picture>
        <source media="(min-width: 37.5em)" srcSet={heroMd} />
        <source media="(min-width: 60em)" srcSet={heroLg} />
        <img src={heroSm} alt="" />
      </Picture>
      <PrimaryHeading className="text-neutral-300">
        Modern Art Gallery
      </PrimaryHeading>
      <IntroductionContent>
        <Paragraph className="text-neutral-200">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </Paragraph>
        <Button to="/location" $block>
          Our Location
        </Button>
      </IntroductionContent>
    </section>
  );
}
