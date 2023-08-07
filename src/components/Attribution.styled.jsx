import { styled } from "styled-components";

const Wrapper = styled.div`
  --clr-text: ${(props) =>
    props.$inverted ? "var(--clr-neutral-400)" : "var(--clr-neutral-100)"};
  color: var(--clr-text);
  width: 100%;
  font-size: var(--fs-300);
  text-align: center;
  font-weight: 600;
  padding-bottom: 1rem;
  background-color: ${(props) =>
    props.$inverted ? "var(--clr-primary-400)" : "var(--clr-neutral-300)"};

  @media only screen and (min-width: 60em) {
    a {
      --clr-link: ${(props) =>
        props.$inverted ? "var(--clr-neutral-100)" : "var(--clr-primary-400)"};
      position: relative;
      color: var(--clr-link);
      font-variation-settings: "wght" 600;
      transition: font-variation-settings 200ms ease;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -1.5px;
        left: 0;
        background-color: var(--clr-link);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 200ms ease, font-variation-settings 200ms ease;
      }
      &:hover {
        font-variation-settings: "wght" 200;
        &::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
`;

export function Attribution({ $inverted }) {
  return (
    <Wrapper $inverted={$inverted}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/semperprimum">Bogdan Kim</a>.
    </Wrapper>
  );
}
