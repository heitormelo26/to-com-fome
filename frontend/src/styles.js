import styled from "styled-components";
import "./assets/fonts/fonts.css";

export const Container = styled.div`
  background-color: #ffffff;
  width: 60%;
  position: fixed;
  top: 0;
  right: 0;
  height: 80%;
  z-index: 999;
  padding: 88px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: "Nunito";
  color: #ef233c;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-family: "Nunito";
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2b2d42;
  font-weight: 700;
`;

export const Button = styled.button`
  font-size: 18px;
  font-family: "Nunito";
  color: #ffffff;
  background-color: #ef233c;
  font-weight: 600;
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

export const Link = styled.a`
  font-size: 14px;
  color: #2b2d42;
  text-decoration: none;
  :hover {
    color: #2b2d42;
    text-decoration: none;
  }
`;
