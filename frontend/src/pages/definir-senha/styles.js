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

export const Placeholder = styled.label`
  font-size: 18px;
  color: #8d99ae !important;
  font-family: "Nunito" !important;
`;

export const InputText = styled.input`
  background-color: #edf2f4 !important;
  font-size: 16px !important;
  border: 0 !important;
  outline: 0 !important;
  color: #8d99ae !important;
  border-radius: 0px !important;
  :focus {
    box-shadow: none !important;
  }
  ::placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
`;

export const IconGroup = styled.div`
  background-color: #edf2f4 !important;
  border: 0 !important;
  outline: 0 !important;
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
`;

export const IconGroupRight = styled.div`
  background-color: #edf2f4 !important;
  border: 0 !important;
  outline: 0 !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 6px !important;
  border-top-right-radius: 6px !important;
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

export const Plus = styled.button`
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
  border-radius: 6px;
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
`;

export const TrashCan = styled.button`
  overflow: hidden !important;
  color: #8d99ae !important;
  background: transparent !important;
  border: none !important;
  :focus,
  :active {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  font-size: 18px;
  font-family: "Nunito";
  font-weight: 700;
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 6px;
  text-decoration: none !important;
`;

export const Ingredient = styled.p`
  font-size: 18px;
  font-family: "Nunito";
  color: #8d99ae !important;
`;

export const Menu = styled.div`
  margin-top: 24px;
  background-color: #edf2f4 !important;
  border: none !important;
  width: auto;
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

export const Paragraph = styled.p`
  font-size: 16px !important;
  font-family: "Nunito" !important;
  color: #8d99ae !important;
`;

export const Button = styled.button`
  overflow: hidden !important;
  color: #8d99ae;
  background-color: #edf2f4;
  font-size: 18px;
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 6px;
  text-decoration: none !important;
  overflow: hidden !important;
  border: none !important;
  text-align: center;
  padding: 6px 12px;
  span {
    line-height: 20px;
    overflow: hidden !important;
    font-family: "Nunito";
    font-size: 18px;
    color: #8d99ae;
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
      color: #8d99ae !important;
      background-color: #edf2f4 !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  :focus,
  :active {
    color: #8d99ae !important;
    background-color: #edf2f4 !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #8d99ae !important;
    background-color: #edf2f4 !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const Select = styled.select`
  background-color: #edf2f4 !important;
  font-size: 16px !important;
  border: 0 !important;
  outline: 0 !important;
  color: #8d99ae !important;
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  padding: 7px 12px !important;
  width: 100% !important;
  :focus {
    box-shadow: none !important;
  }
  ::placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
  button {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
    background-color: #edf2f4 !important;
    padding: 0 !important;
    border: 0 !important;
    div:focus,
    :focus,
    .bootstrap-select > .dropdown-toggle.bs-placeholder:focus,
    .bootstrap-select .dropdown-toggle:focus,
    .bootstrap-select > select.mobile-device:focus + .dropdown-toggle {
      border: 0 !important;
      outline: none !important;
      box-shadow: none !important;
      outline: none !important;
    }
  }
  .dropdown-menu {
    margin-top: 16px;
    margin-bottom: 16px;
    background-color: #8d99ae !important;
    color: #edf2f4 !important;
    border: none !important;
    width: auto;
    box-shadow: none !important;
    border-radius: 6px !important;
    :focus,
    :active {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
    a,
    a:hover,
    a:focus,
    a:active {
      font-size: 16px !important;
      font-family: "Nunito" !important;
      font-weight: normal !important;
      background-color: #8d99ae !important;
      color: #edf2f4 !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      margin: 8px 0;
    }
  }
`;
