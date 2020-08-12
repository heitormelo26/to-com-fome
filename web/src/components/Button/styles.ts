import styled from "styled-components";
import { Link } from "react-router-dom";

const buttonColor = (color: string) => {
  switch (color) {
    case "vermelho":
      return `color: #ffffff !important;
              background: #ef233c !important;
              border: 0 !important;
              transition: background 1s ease;
              :hover {
                color: #ffffff !important;
                background: #e0102a!important;
                border: 0 !important;
                transition: background 1s ease;
              }
              :active {
                color: #ffffff !important;
                background: #ef233c !important;
                border: 0 !important;
              }`;
    case "branco":
      return `color: #2b2d42 !important;
              background: #ffffff !important;
              border: 0 !important;
              opacity: 1;
              transition: all 1s ease;
              :hover {
                color: #2b2d42 !important;
                background: #ffffff !important;
                border: 0 !important;
                opacity: 0.8;
                transition: all 1s ease;
              }
              :active {
                color: #2b2d42 !important;
                background: #ffffff !important;
                border: 0 !important;
              }`;
    case "transparente":
      return `color: #ffffff !important;
              background: transparent !important;
              border: 2px solid #ffffff !important;
              opacity: 1;
              transition: all 1s ease;
              :hover {
                color: #ffffff !important;
                background: transparent !important;
                border: 2px solid #ffffff !important;
                opacity: 0.8;
                transition: all 1s ease;
              }
              :active {
                color: #ffffff !important;
                background: transparent !important;
                border: 2px solid #ffffff !important;
              }`;
    default:
      return `color: #ffffff !important;
              background: #ef233c !important;
              border: 0 !important;
              transition: background 1s ease;
              :hover {
                color: #ffffff !important;
                background: #e0102a!important;
                border: 0 !important;
                transition: background 1s ease;
              }
              :active {
                color: #ffffff !important;
                background: #ef233c !important;
                border: 0 !important;
              }`;
  }
};

export const ButtonLink = styled(Link)`
  ${({ color }) => buttonColor(color as string)};
  font-size: 18px;
  font-family: Nunito;
  font-weight: 700;
  text-align: center;
  border-radius: 40px;
  padding: 8px 32px !important;
  text-decoration: none;
  display: inline-block;
  overflow: hidden !important;
  outline: none !important;
  box-shadow: none !important;
  :active,
  :focus {
    ${({ color }) => buttonColor(color as string)};
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
    text-decoration: none;
  }
`;

export const ButtonNoLink = styled.button`
  ${({ color }) => buttonColor(color as string)};
  font-size: 18px;
  font-family: Nunito;
  font-weight: 700;
  text-align: center;
  border-radius: 40px;
  padding: 8px 32px !important;
  text-decoration: none;
  display: inline-block;
  overflow: hidden !important;
  outline: none !important;
  box-shadow: none !important;
  :active,
  :focus {
    ${({ color }) => buttonColor(color as string)};
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
    text-decoration: none;
  }
`;
