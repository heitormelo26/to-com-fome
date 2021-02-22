import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex !important;
  align-items: center !important;
  padding: 1rem 2rem !important;
  justify-content: space-between !important;
  margin-bottom: 2rem;
  background-color: #ffffff !important;
  @media (max-width: 769px) {
    padding: 0.5rem !important;
  }
`;

export const NavButton = styled.button`
  font: 600 1rem "Lato";
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  align-self: center;
  color: #fff;
  background-color: rgba(239, 35, 60, 1) !important;
  border: 0 !important;
  a {
    text-decoration: none !important;
    font: 600 1rem "Lato";
    color: #fff;
  }
  :focus {
    color: #fff;
  }
  :hover {
    color: #fff;
    background-color: rgba(239, 35, 60, 0.9) !important;
  }
`;

export const NavbarTitle = styled(Link)`
  font: 600 1.5rem Lora !important;
  padding: 0.5rem 0rem;
  margin-right: 2rem !important;
  color: var(--color-red) !important;
  @media (max-width: 769px) {
    margin-right: 1rem !important;
  }
`;

export const NavbarLink = styled(Link)`
  font: 600 1rem "Lato";
  padding: 0.5rem 1rem !important;
  color: var(--color-blue) !important;
  @media (min-width: 769px) {
    ::after {
      display: block;
      content: "";
      border-bottom: solid 2px var(--color-red) !important;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    :hover:after {
      transform: scaleX(1);
    }
  }
  @media (max-width: 769px) {
    :hover {
      color: var(--color-red) !important;
    }
  }
`;

export const NavbarRightLink = styled(NavbarLink)`
  margin-right: 1.5rem;
`;

export const IconBar = styled.span`
  background-color: var(--color-red) !important;
  color: var(--color-red) !important;
  display: block;
  width: 22px;
  height: 2px;
  margin: 4px 0 4px 0;
  transition: all 0.2s;
`;

export const NavbarToggle = styled.button`
  background: none;
  border: none;
  text-align: center;
  margin-left: 1rem;
  padding: 0 !important;
  :active,
  :focus {
    outline: 0;
  }
`;
