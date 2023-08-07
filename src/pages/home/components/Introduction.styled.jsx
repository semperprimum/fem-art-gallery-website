import heroSm from "../../../assets/mobile/image-hero@2x.jpg";
import heroMd from "../../../assets/tablet/image-hero@2x.jpg";
import heroLg from "../../../assets/desktop/image-hero@2x.jpg";
import { styled } from "styled-components";
import { Button } from "../../../components/Button.styled";
import { Paragraph } from "../../../components/Paragraph.styled";
import { Container } from "../../../components/Container.styled";

const Wrapper = styled.div`
  /* margin-top: 2rem; */
  @media only screen and (min-width: 37.5em) {
    width: 55%;
    margin-left: auto;
    margin-top: 9.06rem;
  }
  @media only screen and (min-width: 60rem) {
    display: flex;
    margin-left: revert;
    justify-content: space-between;
    width: revert;
    margin-top: 0;
  }
`;
const IntroductionContent = styled.div`
  margin-inline: var(--padding-x);
  & p {
    margin-bottom: 2rem;

    @media only screen and (min-width: 60em) {
      margin-bottom: 4rem;
    }
  }
  @media only screen and (min-width: 37.5em) {
    grid-column: 2 / 3;
  }
  @media only screen and (min-width: 60em) {
    max-width: 21.875rem;
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
  @media only screen and (min-width: 60em) {
    color: var(--clr-neutral-100);
    mix-blend-mode: difference;
    max-width: 32.125rem;
    line-height: 0.91667;
    margin-top: 0;
  }
`;
const Picture = styled.picture`
  @media only screen and (min-width: 37.5em) {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 27.3125rem;
    z-index: -20;
  }
  @media only screen and (min-width: 60em) {
    max-width: revert;
    width: 33.75rem;
    left: 17.75rem;
    z-index: -999;
    img {
      width: 100%;
      object-fit: cover;
      max-height: 49.9375rem;
    }
  }
`;

export function Introduction() {
  return (
    <Wrapper>
      <Picture>
        <source media="(min-width: 60em)" srcSet={heroLg} />
        <source media="(min-width: 37.5em)" srcSet={heroMd} />
        <img src={heroSm} alt="" />
      </Picture>
      <PrimaryHeading className="text-neutral-300">
        Modern <br /> Art Gallery
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
    </Wrapper>
  );
}
