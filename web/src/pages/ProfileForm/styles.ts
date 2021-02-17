import styled from "styled-components";

export const Label = styled.label`
  font: 600 1rem Lato;
  color: var(--color-blue);
`;

export const InputText = styled.input`
  padding: 0.5rem 1rem !important;
  font: 500 1rem Lato;
  line-height: 1rem;
  color: var(--color-blue);
  background-color: var(--color-light-gray);
  border: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
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
  .password {
    border-top-right-radius: 0rem !important;
    border-bottom-right-radius: 0rem !important;
  }
`;

export const IconGroup = styled.div`
  padding: 0.5rem 1rem !important;
  font: 500 1rem Lato;
  line-height: 1rem;
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray);
  border: 0;
  border-top-left-radius: 0.5rem !important;
  border-bottom-left-radius: 0.5rem !important;
  display: flex;
  align-items: center;
`;

export const IconGroupRight = styled.div`
  background-color: var(--color-light-gray);
  border: 0;
  outline: 0;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0.5rem !important;
  border-top-right-radius: 0.5rem !important;
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
