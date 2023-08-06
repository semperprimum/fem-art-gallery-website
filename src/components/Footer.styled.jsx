import { styled } from "styled-components";
import { Paragraph } from "./Paragraph.styled";
import { Socials } from "./Socials.styled";
import { ReactComponent as LogoLight } from "../assets/logo-light.svg";
import { ReactComponent as LogoDark } from "../assets/logo-dark.svg";

const FooterWrapper = styled.footer`
  padding: 3rem var(--padding-x);

  @media only screen and (min-width: 37.5rem) {
    padding: 3.5rem var(--padding-x);
  }
`;
const Content = styled.div`
  p {
    padding-block: 2.38rem;
  }
  @media only screen and (min-width: 37.5rem) {
    display: flex;
    justify-content: space-between;
    p {
      width: 46%;
      padding-block: 0;
    }
  }
`;

export function Footer({ inverted }) {
  return (
    <FooterWrapper className={inverted ? "bg-primary-400" : "bg-neutral-300"}>
      <Content>
        {inverted ? <LogoDark /> : <LogoLight />}
        <Paragraph
          className={inverted ? "text-neutral-300" : "text-neutral-100"}
        >
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </Paragraph>
        <Socials $inverted={inverted} />
      </Content>
    </FooterWrapper>
  );
}
