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

export const ButtonLink = styled.button`
  text-decoration: none;
  overflow: hidden !important;

  color: #ffffff !important;
  background: #ef233c !important;
  border: none !important;
  :active {
    border: 0px transparent solid !important;
  }
  font-size: 18px;
  font-family: "Nunito";
  font-weight: 700;
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 40px;
  padding: 10px 20px !important;
  span {
    overflow: hidden !important;
    font-size: 18px;
    font-family: "Nunito";
    font-weight: 700;
    color: #ffffff !important;
    background: #ef233c !important;
    border: none !important;
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
  }
  :focus {
    color: #ffffff !important;
    background: #ef233c !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #ffffff !important;
    background: #ef233c !important;
    border: none !important;
    outline: none !important;
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

export const NavLinks = styled.div``;
