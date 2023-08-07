import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: var(--fs-400);
  line-height: 1.55556;

  @media only screen and (min-width: 60em) {
    line-height: 1.45455;
  }
`;
