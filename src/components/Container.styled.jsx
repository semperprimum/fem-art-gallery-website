import { styled } from "styled-components";
const Margins = styled.div`
  margin-inline: 1rem;
`;
const Wrapper = styled.div`
  @media only screen and (min-width: 60em) {
    position: relative;
    max-width: 69.375rem;
    margin-inline: auto;
    ${(props) => props.$top && "padding-top: 11.87rem"}
  }
`;

export const Container = ({ children, $top }) => {
  return (
    <Margins>
      <Wrapper $top={$top}>{children}</Wrapper>
    </Margins>
  );
};
