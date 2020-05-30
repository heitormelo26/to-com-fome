import styled from "styled-components";
import "../../assets/fonts/fonts.css";

export const Title = styled.h1`
  font-family: "Nunito";
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.cor === "branco" ? "#ef233c" : "#ffffff")};
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
