import styled from "styled-components";
import "../../assets/fonts/fonts.css";
import { Link } from "react-router-dom";

const botao = (cor) => {
  switch (cor) {
    case "vermelho":
      return "color: #ffffff!important; background: #EF233C!important; border: none!important; :active { border: 0px transparent solid !important; }";
    case "branco":
      return "color: #2B2D42!important; background: #ffffff!important; border: none!important; :active { border: 0px transparent solid !important; }";
    case "transparente":
      return "color: #ffffff!important; background: transparent!important; border: 2px solid #ffffff; :active { border: 2px solid #ffffff!important; }";
    default:
      return "color: #ffffff!important; background: #EF233C!important; border: none!important; :active { border: 0px transparent solid !important; }";
  }
};

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 40px;
  width: 220px !important;
  display: inline-block !important;
  overflow: hidden !important;
  button {
    overflow: hidden !important;
    ${(props) => botao(props.cor)};
    font-size: 18px;
    font-family: "Nunito";
    font-weight: 700;
    display: inline-block;
    width: 220px;
    text-align: center;
    line-height: 1.5;
    border-radius: 40px;
    padding: 10px 0 !important;
    text-decoration: none !important;
    span {
      overflow: hidden !important;
      font-size: 18px;
      font-family: "Nunito";
      font-weight: 700;
      ${(props) => botao(props.cor)};
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
      ${(props) => botao(props.cor)};
      outline: none !important;
      box-shadow: none !important;
    }
    :hover {
      ${(props) => botao(props.cor)};
      outline: none !important;
      box-shadow: none !important;
    }
  }
  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Button = styled.button``;
