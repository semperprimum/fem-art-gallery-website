import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  font-size: var(--fs-300);
  text-align: center;
  font-weight: 600;
  padding-bottom: 1rem;
  background-color: var(--clr-neutral-300);

  @media only screen and (min-width: 60em) {
    a {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        bottom: -1.5px;
        left: 0;
        background-color: var(--clr-primary-400);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 200ms ease;
      }
      &:hover {
        &::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
`;

export function Attribution() {
  return (
    <Wrapper className="text-neutral-100">
      Challenge by{" "}
      <a
        className="text-primary-400"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a className="text-primary-400" href="https://github.com/semperprimum">
        Bogdan Kim
      </a>
      .
    </Wrapper>
  );
}
