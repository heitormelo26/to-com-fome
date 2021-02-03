import styled from "styled-components";

export const CircleSelected = styled.li`
  box-sizing: border-box !important;
  margin-right: 1rem;
  a {
    width: 2rem !important;
    height: 2rem !important;
    border-radius: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.5rem;
    margin-left: 0;
    font: 500 1rem Lato;
    line-height: 1rem;
    color: var(--color-white);
    background-color: var(--color-red);
    border: 0;
    :hover {
      color: var(--color-white);
      background-color: var(--color-red);
    }
  }
`;

export const Circle = styled.li`
  box-sizing: border-box !important;
  margin-right: 1rem;
  a {
    width: 2rem !important;
    height: 2rem !important;
    border-radius: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.5rem;
    margin-left: 0;
    font: 500 1rem Lato;
    line-height: 1rem;
    color: var(--color-dark-gray);
    background-color: var(--color-light-gray);
    border: 0;
    :hover {
      color: var(--color-dark-gray);
      background-color: var(--color-light-gray);
    }
  }
`;
