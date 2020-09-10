import styled from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: Nunito;
  color: #2b2d42;
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
    font-family: Nunito;
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: Nunito;
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: Nunito;
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

export const Title = styled.h5`
  color: #2b2d42;
  font-family: Nunito;
  font-weight: 600;
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
    font-family: Nunito;
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: Nunito;
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: Nunito;
  }
  .btn.dropdown-toggle.btn-light:focus,
  .bootstrap-select > select.mobile-device:focus + .dropdown-toggle,
  .bootstrap-select .dropdown-toggle:focus {
    box-shadow: none !important;
    outline: 0px !important;
    border: 0px !important;
  }
  button {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: Nunito;
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
      font-family: Nunito !important;
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
