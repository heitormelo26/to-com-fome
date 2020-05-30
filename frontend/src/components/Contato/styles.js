import styled from "styled-components";
import "../../assets/fonts/fonts.css";

export const Container = styled.div`
  background-color: ${(props) =>
    props.cor === "branco" ? "#ffffff" : "#2b2d42"};
`;

export const Title = styled.h1`
  font-family: "Nunito";
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`;

export const Subtitle = styled.h2`
  font-family: "Nunito";
  font-size: 20px;
  color: #ffffff;
`;

export const ButtonPrimary = styled.button`
  font-size: 18px;
  font-family: "Nunito";
  color: #2b2d42;
  background-color: #ffffff;
  font-weight: 700;
  margin-right: 24px;
  display: inline-block;
  text-align: center;
  border: 0 !important;
  padding: 10px 0 !important;
  line-height: 1.5;
  border-radius: 40px;
  width: 220px;
  :focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const ButtonSecondary = styled.button`
  font-size: 18px;
  font-family: "Nunito";
  color: #ffffff;
  background-color: #2b2d42;
  font-weight: 600;
  display: inline-block;
  text-align: center;
  border: 2px solid #ffffff;
  padding: 10px 0 !important;
  line-height: 1.5;
  border-radius: 40px;
  width: 220px;
  :focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;
