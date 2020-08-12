import styled from "styled-components";

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
  font-family: Nunito;
  color: #2b2d42;
`;

export const Placeholder = styled.label`
  font-size: 18px;
  color: #8d99ae !important;
  font-family: Nunito !important;
`;

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
  ::placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
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
  color: #ffffff !important;
  background-color: #ef233c !important;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito;
  text-align: center;
  border-radius: 40px;
  padding: 2px 14px !important;
  text-decoration: none !important;
  overflow: hidden !important;
  border: none !important;
  text-align: center;
  :focus,
  :hover,
  :active {
    color: #ffffff !important;
    background-color: #ef233c !important;
    outline: none !important;
    box-shadow: none !important;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    font-family: Nunito;
    margin-right: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Title = styled.h5`
  color: #2b2d42;
  font-family: Nunito;
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
  font-family: Nunito;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 6px;
  text-decoration: none !important;
  span {
    overflow: hidden !important;
    font-size: 18px;
    font-family: Nunito;
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
  font-family: Nunito;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 6px;
  text-decoration: none !important;
`;

export const Ingredient = styled.p`
  font-size: 18px;
  font-family: Nunito;
  color: #8d99ae !important;
`;

export const Select = styled.select`
  background-color: #edf2f4 !important;
  color: #8d99ae !important;
  font-size: 16px;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 6px !important;
  padding: 6px 12px !important;
  width: 100% !important;
  :focus {
    box-shadow: none !important;
  }
  ::placeholder {
    color: #8d99ae !important;
    font-size: 16px;
    font-family: Nunito;
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px;
    font-family: Nunito;
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px;
    font-family: Nunito;
  }
  button {
    background-color: #edf2f4 !important;
    color: #8d99ae !important;
    font-size: 16px;
    font-family: Nunito;
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
    background-color: #edf2f4 !important;
    color: #8d99ae !important;
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
      font-size: 16px;
      font-family: Nunito !important;
      font-weight: normal !important;
      background-color: #edf2f4 !important;
      color: #8d99ae !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      margin: 8px 0;
    }
    .bs-searchbox {
      input {
        background-color: #8d99ae !important;
        font-size: 16px;
        border: 0 !important;
        outline: 0 !important;
        color: #edf2f4 !important;
        border-radius: 6px !important;
        :focus {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
      }
    }
  }
`;

export const InfoButton = styled.button`
  background: transparent;
  border: 0;
  color: #8d99ae;
  text-decoration: none;
  :focus,
  :active,
  :hover {
    border: 0 !important;
    outline: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
  }
`;
