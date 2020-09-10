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
  padding: 8px auto !important;
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
  padding: 8px auto !important;
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
      :active,
      :focus,
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

export const Plus = styled.select`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 5 !important;
  background-color: #ef233c !important;
  color: #fff !important;
  font-size: 16px !important;
  border: 0 !important;
  outline: 0 !important;
  border-radius: 6px !important;
  padding: 6px 32px !important;
  :focus,
  :active {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  ::placeholder {
    color: #fff !important;
    font-size: 16px !important;
    font-family: Nunito;
  }
  :-ms-input-placeholder {
    color: #fff !important;
    font-size: 16px !important;
    font-family: Nunito;
  }
  ::-ms-input-placeholder {
    color: #fff !important;
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
    .filter-option {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ef233c !important;
    color: #fff !important;
    font-size: 16px !important;
    font-family: Nunito;
    padding: 0 !important;
    border: 0 !important;
    :focus,
    :active {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
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
    background-color: #ef233c !important;
    color: #fff !important;
    border: none !important;
    width: auto;
    box-shadow: none !important;
    border-radius: 6px !important;
    .no-results {
      background-color: #ef233c !important;
      color: #fff !important;
    }
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
      background-color: #ef233c !important;
      color: #fff !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      margin: 8px 0;
    }
    .bs-searchbox {
      input {
        background-color: #fff !important;
        font-size: 16px !important;
        border: 0 !important;
        outline: 0 !important;
        color: #ef233c !important;
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

export const Menu = styled.div`
  margin-top: 24px;
  position: relative !important;
  z-index: 999 !important;
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
    font-family: Nunito !important;
    font-weight: 600 !important;
    color: #8d99ae !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background-color: #edf2f4;
    margin: 8px 0;
  }
`;

export const Check = styled.button`
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
    font-family: Nunito;
    font-size: 18px;
    color: #8d99ae;
    border: none !important;
  }
  :focus,
  :active,
  :hover {
    color: #8d99ae !important;
    background-color: #edf2f4 !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const Card = styled.div`
  border: none !important;
  background: transparent;
  box-shadow: none !important;
  border-radius: 20px !important;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border: none !important;
    background: transparent;
    box-shadow: none !important;
    border-radius: 20px !important;
    z-index: 2;
    object-fit: cover;
    min-height: 146px;
    max-height: 146px;
  }
  ::after {
    content: "";
    border: none !important;
    background: transparent;
    box-shadow: none !important;
    border-radius: 20px !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(43, 45, 66, 0.5) !important;
  }
  .icongroup {
    background-color: transparent !important;
    border: 0 !important;
    outline: 0 !important;
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .card-img-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    h5 {
      text-align: center !important;
      color: #ffffff;
      font-family: Nunito;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      font-size: 18px;
      margin: 0;
    }
  }
`;
