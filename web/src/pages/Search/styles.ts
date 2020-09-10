import styled from "styled-components";

export const Container = styled.div`
  background-color: #2b2d42 !important;
  border-radius: 0 !important;
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

export const Select = styled.select`
  background-color: #8d99ae !important;
  color: #edf2f4 !important;
  font-size: 16px !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 40px !important;
  padding: 8px 32px !important;
  width: 100% !important;
  display: block;
  :focus {
    box-shadow: none !important;
  }
  ::placeholder {
    color: #edf2f4 !important;
    font-size: 16px !important;
    font-family: Nunito;
  }
  :-ms-input-placeholder {
    color: #edf2f4 !important;
    font-size: 16px !important;
    font-family: Nunito;
  }
  ::-ms-input-placeholder {
    color: #edf2f4 !important;
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
    background-color: #8d99ae !important;
    color: #edf2f4 !important;
    font-size: 16px !important;
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
      font-size: 16px !important;
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
        font-size: 16px !important;
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
  .selectpicker {
    display: block !important;
  }
`;
