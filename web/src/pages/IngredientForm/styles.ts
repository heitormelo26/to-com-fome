import styled from "styled-components";

export const Label = styled.label`
  font: 500 1rem Lato;
  color: var(--color-blue);
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

export const IconGroup = styled.div`
  padding: 0.5rem 1rem !important;
  font: 500 1rem Lato;
  line-height: 1rem;
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray);
  border: 0;
  border-top-right-radius: 0.5rem !important;
  border-bottom-right-radius: 0.5rem !important;
`;

export const CategoryButton = styled.button`
  font: 500 1rem Lato;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  align-self: center;
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray) !important;
  border: 0 !important;
  :focus {
    color: var(--color-dark-gray);
  }
  :hover {
    color: var(--color-dark-gray);
    background-color: var(--color-light-gray) !important;
  }
`;

export const CategoryMenu = styled.div`
  margin-top: 0.5rem !important;
  background-color: var(--color-light-gray) !important;
  color: var(--color-dark-gray) !important;
  border: none !important;
  border-radius: 0.5rem !important;
  overflow-y: scroll;
  max-height: 10rem;
  :focus,
  :active {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  button,
  button:focus {
    font: 500 1rem Lato;
    background-color: var(--color-light-gray) !important;
    padding: 0.5rem 1rem !important;
    color: var(--color-dark-gray) !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    margin: 0;
  }
`;

export const SearchButton = styled.button`
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

export const Modal = styled.div`
  border: none !important;
  padding: 0.5rem !important;
  border-radius: 1rem !important;
  outline: 0;
  box-shadow: none !important;
  .modal-header,
  .modal-footer {
    border: none !important;
  }
  .modal-header {
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
  font: 600 1.5rem Lora;
  color: var(--color-blue);
`;

export const Subtitle = styled.h5`
  font: 500 1rem Lato;
  color: var(--color-dark-gray);
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
  border-radius: 0.5rem !important;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border: none !important;
    background: transparent;
    box-shadow: none !important;
    border-radius: 0.5rem !important;
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
    border-radius: 0.5rem !important;
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
    border-radius: 0.5rem !important;
    h5 {
      text-align: center !important;
      color: var(--color-white);
      font: 700 1rem Lato;
      margin: 0;
    }
  }
`;
