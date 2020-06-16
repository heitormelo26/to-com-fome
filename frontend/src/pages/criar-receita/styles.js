import styled from "styled-components";
import "../../assets/fonts/fonts.css";
import { Link } from "react-router-dom";

export const TextArea = styled.textarea`
  background-color: #edf2f4 !important;
  font-size: 16px !important;
  border: 0 !important;
  outline: 0 !important;
  width: 100% !important;
  color: #8d99ae !important;
  border-radius: 6px !important;
  padding: 8px;
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

export const Modal = styled.div`
  border: none !important;
  padding: 24px !important;
  border-radius: 30px !important;
  outline: 0;
  box-shadow: none !important;
  .modal-header,
  .modal-footer {
    border: none !important;
  }
  .modal-header {
    .close {
      color: #8d99ae !important;
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
        color: #8d99ae !important;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }
`;

export const Category = styled.button`
  overflow: hidden !important;
  color: #edf2f4;
  background-color: #8d99ae;
  font-size: 16px;
  font-family: "Nunito";
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 40px;
  padding: 2px 10px !important;
  text-decoration: none !important;
  overflow: hidden !important;
  border: none !important;
  text-align: center;
  span {
    line-height: 20px;
    overflow: hidden !important;
    font-size: 16px;
    font-family: "Nunito";
    font-weight: 700;
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
      color: #edf2f4;
      background-color: #8d99ae;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  :focus {
    color: #edf2f4;
    background-color: #8d99ae;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #edf2f4;
    background-color: #8d99ae;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 40px;
  display: inline-block !important;
  overflow: hidden !important;
  button {
    overflow: hidden !important;
    color: #ffffff !important;
    background: #ef233c !important;
    border: none !important;
    :active {
      border: 0px transparent solid !important;
    }
    font-size: 18px;
    font-family: "Nunito";
    font-weight: 700;
    display: inline-block;
    text-align: center;
    line-height: 1.5;
    border-radius: 40px;
    padding: 10px 20px !important;
    text-decoration: none !important;
    span {
      overflow: hidden !important;
      font-size: 18px;
      font-family: "Nunito";
      font-weight: 700;
      color: #ffffff !important;
      background: #ef233c !important;
      border: none !important;
      :active {
        border: 0px transparent solid !important;
      }
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
    }
    :focus {
      color: #ffffff !important;
      background: #ef233c !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
    :hover {
      color: #ffffff !important;
      background: #ef233c !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledLinkSecondary = styled(Link)`
  text-decoration: none;
  border-radius: 40px;
  display: inline-block !important;
  overflow: hidden !important;
  button {
    overflow: hidden !important;
    color: #2b2d42 !important;
    background: transparent !important;
    border: none !important;
    :active {
      border: 0px transparent solid !important;
    }
    font-size: 18px;
    font-family: "Nunito";
    font-weight: 700;
    display: inline-block;
    text-align: center;
    line-height: 1.5;
    border-radius: 40px;
    padding: 10px 20px !important;
    text-decoration: none !important;
    span {
      overflow: hidden !important;
      font-size: 18px;
      font-family: "Nunito";
      font-weight: 700;
      color: #2b2d42 !important;
      background: transparent !important;
      border: none !important;
      :active {
        border: 0px transparent solid !important;
      }
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
    }
    :focus {
      color: #2b2d42 !important;
      background: transparent !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
    :hover {
      color: #2b2d42 !important;
      background: transparent !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Title = styled.h5`
  color: #2b2d42;
  font-family: "Nunito";
  font-weight: 600;
`;

export const Subtitle = styled.h5`
  color: #8d99ae;
  font-family: "Open Sans";
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
`;
