import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled.button`
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray);
  font: 500 1rem Lato;
  text-align: center;
  border-radius: 1rem;
  padding: 0.25rem 0.75rem;
  line-height: 1.15rem !important;
  text-decoration: none !important;
  border: 0 !important;
  :focus,
  :hover {
    color: var(--color-dark-gray);
    background-color: var(--color-light-gray);
    font: 500 1rem Lato;
  }
  :not(:last-of-type) {
    margin-right: 1rem;
  }
`;

export const More = styled(Link)`
  border: 2px solid var(--color-red);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: var(--color-red) !important;
    font: 600 1rem Lato;
    text-decoration: none;
    margin-right: 0.5rem;
  }
`;

export const Dropdown = styled.button`
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray);
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font: 500 1rem Lato;
  :focus {
    color: var(--color-dark-gray);
    background-color: var(--color-light-gray);
  }
`;

export const DropdownMenu = styled.div`
  width: 100%;
  color: var(--color-dark-gray);
  background-color: var(--color-light-gray);
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem 0;
  font: 500 1rem Lato;
  :focus {
    color: var(--color-dark-gray);
    background-color: var(--color-light-gray);
  }
  button {
    padding: 0.5rem 1rem;
    color: var(--color-dark-gray);
    font: 500 1rem Lato;
  }
`;
