import styled from "styled-components";
import "../../assets/fonts/fonts.css";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  font-family: "Nunito";
  font-size: 30px;
  font-weight: bold;
  text-decoration: none !important;
  color: ${(props) => (props.cor === "branco" ? "#ef233c" : "#ffffff")};
  :hover,
  :active,
  :visited {
    font-family: "Nunito";
    font-size: 30px;
    font-weight: bold;
    text-decoration: none !important;
    color: ${(props) => (props.cor === "branco" ? "#ef233c" : "#ffffff")};
  }
`;

export const Copyright = styled.span`
  font-size: 14px;
  color: ${(props) => (props.cor === "branco" ? "#2b2d42" : "#bcc1c7")};
`;

export const Line = styled.hr`
  border-bottom-color: ${(props) =>
    props.cor === "branco" ? "#edf2f4" : "#484b5d"};
`;

export const Container = styled.div`
  background-color: ${(props) =>
    props.cor === "branco" ? "#ffffff" : "#2b2d42"};
`;
