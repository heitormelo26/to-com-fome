import styled from "styled-components";
import "../../assets/fonts/fonts.css";

export const Container = styled.div`
  background-color: #2b2d42 !important;
  border-radius: 0 !important;
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

export const Button = styled.button`
  overflow: hidden !important;
  color: #edf2f4;
  background-color: #8d99ae;
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
    color: #edf2f4;
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
      color: #edf2f4 !important;
      background-color: #8d99ae !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  :focus,
  :active {
    color: #edf2f4 !important;
    background-color: #8d99ae !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #edf2f4 !important;
    background-color: #8d99ae !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const Menu = styled.div`
  margin-top: 16px;
  background-color: #edf2f4 !important;
  border: none !important;
  width: 220px;
  box-shadow: none !important;
  color: #8d99ae !important;
  border-radius: 6px !important;
  :focus,
  :active {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :before {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -8px;
    width: 0;
    height: 0;
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #edf2f4;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    font-size: 18px !important;
    font-family: "Nunito" !important;
    font-weight: 600 !important;
    color: #8d99ae !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background-color: #edf2f4;
    margin: 8px 0;
  }
`;
