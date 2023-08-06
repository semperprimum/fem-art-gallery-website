import { styled } from "styled-components";
import { Paragraph } from "./Paragraph.styled";
import { Socials } from "./Socials.styled";
import { ReactComponent as LogoLight } from "../assets/logo-light.svg";
import { ReactComponent as LogoDark } from "../assets/logo-dark.svg";

const FooterWrapper = styled.footer`
  padding: 3rem 2rem;
`;
const Content = styled.div`
  p {
    padding-block: 2.38rem;
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
