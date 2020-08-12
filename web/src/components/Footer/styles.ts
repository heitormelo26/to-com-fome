import styled from "styled-components";
import { Link } from "react-router-dom";
import { FooterProps } from "./index";

export const Title = styled(Link)`
  font-family: Nunito;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none !important;
  color: ${(props: FooterProps) =>
    props.color === "branco" ? "#ef233c" : "#ffffff"};
  :hover,
  :active,
  :visited {
    font-family: Nunito;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none !important;
    color: ${(props: FooterProps) =>
      props.color === "branco" ? "#ef233c" : "#ffffff"};
  }
`;

export const Copyright = styled.span`
  font-size: 14px;
  color: ${(props: FooterProps) =>
    props.color === "branco" ? "#2b2d42" : "#bcc1c7"};
`;

export const Line = styled.hr`
  border-top-color: ${(props: FooterProps) =>
    props.color === "branco" ? "#edf2f4" : "#484b5d"};
`;

export const Container = styled.div`
  background-color: ${(props: FooterProps) =>
    props.color === "branco" ? "#ffffff" : "#2b2d42"};
`;
