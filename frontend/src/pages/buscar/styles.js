import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";

export const IconText = styled.span`
  font-size: 16px;
  color: #8d99ae;
  font-weight: 600;
`;

export const Button = styled.button`
  overflow: hidden !important;
  color: #ffffff;
  background-color: #2b2b42;
  font-size: 18px;
  font-family: "Nunito";
  display: inline-block;
  width: 220px;
  text-align: center;
  line-height: 1.5;
  border-radius: 40px;
  padding: 10px 0 !important;
  text-decoration: none !important;
  overflow: hidden !important;
  border: none !important;
  text-align: center;
  span {
    line-height: 20px;
    overflow: hidden !important;
    font-size: 18px;
    font-family: "Nunito";
    font-weight: 600;
    color: #ffffff;
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
    :hover {
      color: #ffffff !important;
      background-color: #2b2b42 !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  :focus {
    color: #ffffff !important;
    background-color: #2b2b42 !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #ffffff !important;
    background-color: #2b2b42 !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;
