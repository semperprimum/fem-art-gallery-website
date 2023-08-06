import { styled } from "styled-components";
import { ReactComponent as IconFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "../assets/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";

const SocialsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.25rem;
  svg {
    fill: /* var(--clr-neutral-100) */ ${(props) =>
      props.$inverted ? "var(--clr-neutral-300)" : "var(--clr-neutral-100)"};
  }
`;

export function Socials({ $inverted }) {
  return (
    <SocialsList $inverted={$inverted} role="list" aria-label="Social links">
      <li>
        <a href="#" aria-label="Facebook">
          <IconFacebook aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#" aria-label="Instagram">
          <IconInstagram aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#" aria-label="Twitter">
          <IconTwitter aria-hidden="true" />
        </a>
      </li>
    </SocialsList>
  );
}
