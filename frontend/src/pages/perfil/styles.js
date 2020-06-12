import styled from "styled-components";
import "../../assets/fonts/fonts.css";

export const Container = styled.div`
  background-color: #2b2d42 !important;
  border-radius: 40px !important;
`;

export const InputText = styled.input`
  background-color: #edf2f4 !important;
  font-size: 18px !important;
  border: 0 !important;
  outline: 0 !important;
  color: #8d99ae !important;
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  :focus {
    box-shadow: none !important;
  }
  ::placeholder {
    color: #8d99ae !important;
    font-size: 18px !important;
    font-family: "Nunito";
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 18px !important;
    font-family: "Nunito";
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 18px !important;
    font-family: "Nunito";
  }
`;

export const IconGroup = styled.div`
  background-color: #edf2f4 !important;
  border: 0 !important;
  outline: 0 !important;
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
`;
