import styled from "styled-components";

export const TextArea = styled.textarea`
  padding: 0.5rem !important;
  font: 500 1rem Lato;
  line-height: 1rem;
  color: var(--color-blue);
  background-color: var(--color-light-gray);
  border: 0;
  border-radius: 0.5rem !important;
  ::placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  ::-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :focus {
    background-color: var(--color-light-gray);
  }
`;

export const Label = styled.label`
  font: 600 1rem Lato;
  color: var(--color-blue);
  line-height: 1.4rem;
`;

export const Placeholder = styled.label`
  font: 500 1rem Lato;
  color: var(--color-dark-gray);
`;

export const InputText = styled.input`
  padding: 0.5rem 1rem !important;
  font: 500 1rem Lato;
  line-height: 1rem;
  color: var(--color-blue);
  background-color: var(--color-light-gray);
  border: 0;
  border-top-left-radius: 0.5rem !important;
  border-bottom-left-radius: 0.5rem !important;
  ::placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  ::-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :focus {
    background-color: var(--color-light-gray);
  }
`;

export const InputNoIcon = styled.input`
  padding: 0.5rem 1rem !important;
  font: 500 1rem Lato;
  line-height: 1rem;
  color: var(--color-blue);
  background-color: var(--color-light-gray);
  border: 0;
  border-radius: 0.5rem !important;
  ::placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  ::-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :focus {
    background-color: var(--color-light-gray);
  }
`;

export const IconGroup = styled.div`
  padding: 0.5rem 1rem !important;
  font: 500 1rem Lato;
  line-height: 1rem;
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray);
  border: 0;
  border-top-right-radius: 0.5rem !important;
  border-bottom-right-radius: 0.5rem !important;
  display: flex;
  align-items: center;
`;

export const Modal = styled.div`
  border: none !important;
  padding: 0.5rem;
  border-radius: 1rem !important;
  outline: 0;
  box-shadow: none !important;
  .modal-header,
  .modal-footer {
    border: none !important;
  }
  .modal-header {
    padding-bottom: 1rem !important;
    .close {
      color: var(--color-light-gray) !important;
      :active,
      :focus,
      :hover {
        color: var(--color-light-gray) !important;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }
  .modal-body {
    padding-top: 0;
  }
`;

export const Title = styled.h5`
  font: 600 1.5rem Lora;
  color: var(--color-blue);
`;

export const TrashCan = styled.button`
  background: transparent !important;
  border: 0 !important;
  text-align: center !important;
  line-height: 1rem;
  font: 500 1rem var(--color-dark-gray);
  border-radius: 0;
  text-decoration: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-right: 0 !important;
`;

export const Select = styled.select`
  color: var(--color-dark-gray) !important;
  button {
    font: 500 1rem Lato;
    color: var(--color-dark-gray) !important;
    background-color: var(--color-light-gray);
    border: 0;
    padding: 0.5rem 1rem !important;
    line-height: 1rem;
    border-radius: 0.5rem;
    :focus,
    .bootstrap-select > .dropdown-toggle.bs-placeholder:focus,
    .bootstrap-select .dropdown-toggle:focus,
    .bootstrap-select > select.mobile-device:focus + .dropdown-toggle {
      border: 0 !important;
      outline: none !important;
      box-shadow: none !important;
      background-color: var(--color-light-gray);
    }
    .filter-option .filter-option-inner .filter-option-inner-inner {
      color: var(--color-dark-gray) !important;
    }
    :hover {
      background-color: var(--color-light-gray);
    }
  }
  .bootstrap-select > .dropdown-toggle.bs-placeholder,
  .bootstrap-select > .dropdown-toggle.bs-placeholder:hover,
  .bootstrap-select > .dropdown-toggle.bs-placeholder:focus,
  .bootstrap-select > .dropdown-toggle.bs-placeholder:active {
    color: var(--color-dark-gray) !important;
    background-color: var(--color-light-gray);
  }
  ::placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  ::-ms-input-placeholder {
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
  :focus {
    background-color: var(--color-light-gray);
  }
  .btn.dropdown-toggle.btn-light:focus,
  .bootstrap-select > select.mobile-device:focus + .dropdown-toggle,
  .bootstrap-select .dropdown-toggle:focus {
    box-shadow: none !important;
    outline: 0px !important;
    border: 0px !important;
  }
  .dropdown-menu {
    z-index: 9999999 !important;
    margin: 0.5rem 0 0 0;
    background-color: var(--color-light-gray) !important;
    color: var(--color-dark-gray) !important;
    border: none !important;
    border-radius: 0.5rem !important;
    :focus,
    :active {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
    li a,
    li a:hover,
    li a:focus {
      font: 500 1rem Lato;
      background-color: var(--color-light-gray) !important;
      padding: 0.5rem 1rem !important;
      color: var(--color-dark-gray) !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      margin: 0;
    }
    .bs-searchbox {
      padding: 0 0.5rem;
      input {
        background-color: #8d99ae !important;
        font-size: 16px !important;
        border: 0 !important;
        outline: 0 !important;
        color: #edf2f4 !important;
        border-radius: 0.25rem !important;
        :focus {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }
      }
    }
  }
`;

export const Button = styled.button`
  font: 600 1rem "Lato";
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  align-self: center;
  color: var(--color-white);
  background-color: var(--color-red) !important;
  border: 0 !important;
  :focus {
    color: var(--color-white);
  }
  :hover {
    color: var(--color-white);
    background-color: rgba(239, 35, 60, 0.9) !important;
  }
`;

export const WhiteButton = styled(Button)`
  font: 600 1rem "Lato";
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  align-self: center;
  color: var(--color-blue);
  background-color: var(--color-white) !important;
  border: 0 !important;
  :focus {
    color: var(--color-blue);
  }
  :hover {
    color: var(--color-blue);
    background-color: var(--color-white) !important;
  }
`;
