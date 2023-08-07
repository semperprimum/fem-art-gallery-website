import { styled } from "styled-components";
import { Paragraph } from "../../../components/Paragraph.styled";

const Wrapper = styled.section``;
const CustomContainer = styled.div`
  padding: 3rem var(--padding-x) 3.5rem;
  @media only screen and (min-width: 37.5rem) {
    padding: 5.5rem var(--padding-x) 5rem;
    display: grid;
    grid-template-columns: 42% 58%;
  }
  @media only screen and (min-width: 60em) {
    max-width: 69.375rem;
    margin-inline: auto;
    padding: 6.5rem 0 8rem;
  }
`;
const Content = styled.div`
  p + p {
    margin-top: 1.25rem;
    @media only screen and (min-width: 60em) {
      margin-top: 2rem;
    }
  }
`;
const Heading1 = styled.h1`
  font-family: var(--ff-accent);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  font-size: var(--fs-600);
  line-height: 0.9;
  margin-bottom: 3rem;
  @media only screen and (min-width: 37.5rem) {
    max-width: 40%;
  }
`;
const Heading2 = styled.h2`
  font-family: var(--ff-accent);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  font-size: var(--fs-500);
  line-height: 1;
  margin-bottom: 1.25rem;

  @media only screen and (min-width: 60em) {
    margin-bottom: 1.5rem;
  }
`;

export function Description() {
  return (
    <Wrapper className="bg-neutral-300">
      <CustomContainer>
        <Heading1 className="text-neutral-100">Our Location</Heading1>
        <Content className="text-neutral-100">
          <Heading2 className="text-primary-400">99 King Street</Heading2>
          <Paragraph>
            Newport <br /> RI 02840 <br /> United States of America
          </Paragraph>
          <Paragraph>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </Paragraph>
        </Content>
      </CustomContainer>
    </Wrapper>
  );
}
