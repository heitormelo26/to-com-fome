import styled from "styled-components";
import "../../assets/fonts/fonts.css";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: "Nunito" !important;
  font-weight: 700;
  color: #ef233c !important;
  padding: 10px 0 !important;
  :active {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  :focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

export const NavbarTitle = styled(Link)`
  text-decoration: none;
  font-family: "Nunito" !important;
  font-weight: 700;
  font-size: 20px;
  color: #ef233c !important;
  padding: 10px 0 !important;
  :active {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  :focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

export const NavLinks = styled.div`
  @media (max-width: 576px) {
    display: none !important;
  }
`;
