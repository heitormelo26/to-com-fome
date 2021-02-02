import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--color-white);
  margin-top: 3rem;
  padding: 4rem 2rem;
`;

export const Title = styled(Link)`
  font: 700 2rem Lora;
  text-decoration: none !important;
  color: var(--color-red);
  :hover,
  :active,
  :visited {
    font: 700 2rem Lora;
    text-decoration: none !important;
    color: var(--color-red);
  }
`;

export const Copyright = styled.span`
  font: 500 1rem Lato;
  color: var(--color-blue);
  :first-of-type {
    margin-right: 2rem;
  }
`;
