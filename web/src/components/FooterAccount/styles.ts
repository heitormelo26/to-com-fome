import styled from "styled-components";

export const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid rgba(141, 153, 174, 0.5);
`;

export const Or = styled.span`
  color: rgba(141, 153, 174, 0.5);
  margin: 0 1rem;
  font: 700 0.75rem Lato;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font: 700 1rem Lato;
  color: var(--color-dark-gray);
  a {
    font: 700 1rem Lato;
    color: var(--color-red);
    :hover {
      color: var(--color-red);
      text-decoration: none;
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
