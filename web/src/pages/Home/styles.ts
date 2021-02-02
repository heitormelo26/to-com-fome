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
  color: #ef233c !important;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 18px;
  text-decoration: none;
  font-family: Nunito;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconCategorySelected = styled.button`
  color: #ffffff;
  background-color: #ef233c;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100%;
  text-decoration: none !important;
  overflow: hidden !important;
  padding: 6px !important;
  border: none !important;
  width: 30px !important;
  height: 30px !important;
  text-align: center;
  :focus,
  :hover,
  :active {
    color: #ffffff !important;
    background-color: #ef233c !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const IconCategory = styled.button`
  color: #8d99ae;
  background-color: #edf2f4;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100%;
  text-decoration: none !important;
  overflow: hidden !important;
  padding: 6px !important;
  border: none !important;
  width: 30px !important;
  height: 30px !important;
  text-align: center;
  :focus,
  :active,
  :hover {
    color: #8d99ae !important;
    background-color: #edf2f4 !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const CategoryTitle = styled.h2`
  color: #2b2d42 !important;
  font-size: 24px !important;
  font-family: Nunito;
  font-weight: bold;
`;
