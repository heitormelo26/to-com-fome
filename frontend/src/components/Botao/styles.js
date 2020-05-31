import styled from "styled-components";
import "../../assets/fonts/fonts.css";

const botao = (cor) => {
  switch (cor) {
    case "vermelho":
      return "color: #ffffff; background: #EF233C;";
    case "branco":
      return "color: #2B2D42; background: #ffffff;";
    case "azul":
      return "color: #ffffff; background: #2B2D42; border: 2px solid #ffffff";
    default:
      return "color: #ffffff; background: #EF233C;";
  }
};

export const ButtonComponent = styled.button`
  ${(props) => botao(props.cor)};
  font-size: 18px;
  font-family: "Nunito";
  font-weight: 700;
  margin-right: 24px;
  display: inline-block;
  text-align: center;
  padding: 10px 0 !important;
  line-height: 1.5;
  border-radius: 40px;
  width: 220px;
  :focus {
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    ${(props) => botao(props.cor)};
    outline: none !important;
    box-shadow: none !important;
  }
`;
