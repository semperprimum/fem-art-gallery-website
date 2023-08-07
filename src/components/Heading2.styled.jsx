import { styled } from "styled-components";

export const Heading2 = styled.h2`
  font-family: var(--ff-accent);
  text-transform: uppercase;
  font-size: var(--fs-700);
  line-height: 0.9;
  font-weight: var(--fw-bold);

  @media only screen and (min-width: 60em) {
    line-height: 1;
  }
`;
