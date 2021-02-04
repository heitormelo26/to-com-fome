import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-white);
  height: 100vh !important;
  min-height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  padding: 0;
`;

export const Title = styled.h1`
  font: 600 2rem Lora;
  color: var(--color-red);
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font: 600 1rem Lato;
  color: var(--color-blue);
  margin-bottom: 2rem;
`;

export const SubContainer = styled.div`
  width: 50% !important;
  @media (max-width: 769px) {
    width: 80% !important;
  }
`;

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
  border-top-right-radius: 0.5rem !important;
  border-bottom-right-radius: 0.5rem !important;
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
  border-top-left-radius: 0.5rem !important;
  border-bottom-left-radius: 0.5rem !important;
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
