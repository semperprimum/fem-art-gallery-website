import { styled } from "styled-components";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icon-arrow-right.svg";
import ArrowLeft from "../assets/icon-arrow-left.svg";

export const Button = styled(Link)`
  ${(props) => (props.$block ? "display: block; width: fit-content;" : "")}
  position: relative;
  font-family: var(--ff-accent);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.22725rem;
  text-transform: uppercase;
  border: none;
  background-color: var(--clr-neutral-300);
  color: var(--clr-neutral-100);
  padding: ${(props) =>
    props.$backwards
      ? "1.5rem 2rem 1.5rem 5.7rem"
      : "1.5rem 5.7rem 1.5rem 2rem"};
  line-height: normal;

  &::after {
    content: "";
    position: absolute;
    width: 3.5rem;
    height: 100%;
    ${(props) => (props.$backwards ? "left: 0;" : "right: 0;")}
    top: 0;
    background-color: var(--clr-primary-400);
    background-image: ${(props) =>
      props.$backwards ? `url(${ArrowLeft})` : `url(${ArrowRight})`};
    background-repeat: no-repeat;
    background-position: center;
  }
`;
