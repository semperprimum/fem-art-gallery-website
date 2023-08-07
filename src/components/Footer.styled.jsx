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

  @media only screen and (min-width: 60em) {
    padding: 5rem 0;
  }
`;
const Content = styled.div`
  p {
    padding-block: 2.38rem;
    font-size: var(--fs-300);
  }
  @media only screen and (min-width: 37.5rem) {
    display: flex;
    justify-content: space-between;
    p {
      width: 46%;
      padding-block: 0;
    }
  }
  @media only screen and (min-width: 60em) {
    max-width: 69.375rem;
    margin-inline: auto;
    & > svg {
      height: 3.625rem;
      width: 9.97325rem;
    }
    p {
      width: 39%;
      transform: translateX(-4.25rem);
      line-height: 1.55556;
      letter-spacing: 0.1px;
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
