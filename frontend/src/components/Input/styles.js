import styled from "styled-components";
import "../../assets/fonts/fonts.css";

export const InputText = styled.input`
  background-color: #edf2f4 !important;
  font-size: 16px !important;
  border: 0 !important;
  outline: 0 !important;
  color: #8d99ae !important;
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  :focus {
    box-shadow: none !important;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: "Nunito";
  color: #2b2d42;
`;

export const IconGroup = styled.div`
  background-color: #edf2f4 !important;
  border: 0 !important;
  outline: 0 !important;
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
`;

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
