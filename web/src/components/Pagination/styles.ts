import styled from "styled-components";

export const CircleSelected = styled.li`
  background-color: #ef233c !important;
  color: #ffffff !important;
  font-size: 16px;
  font-weight: bold;
  font-family: Nunito;
  border-radius: 100%;
  border: none !important;
  width: 32px !important;
  height: 32px !important;
  text-align: center;
  margin-right: 12px;
  a {
    padding: 6px !important;
    margin: 0 !important;
    background-color: transparent !important;
    color: #ffffff !important;
    font-size: 16px;
    font-weight: bold;
    font-family: Nunito !important;
    border-radius: 100% !important;
    border: none !important;
    width: 32px !important;
    height: 32px !important;
    :focus {
      box-shadow: none !important;
      outline: 0 !important;
    }
  }
`;

export const Circle = styled.li`
  background-color: #f1f5f7;
  color: #8d99ae;
  font-size: 16px;
  font-weight: bold;
  font-family: Nunito;
  border-radius: 100%;
  border: none !important;
  width: 32px !important;
  height: 32px !important;
  text-align: center;
  margin-right: 12px;
  :focus {
    box-shadow: none !important;
    outline: 0 !important;
    border: 0 !important;
  }
  a {
    padding: 6px !important;
    margin: 0 !important;
    background-color: transparent !important;
    color: #8d99ae !important;
    font-size: 16px;
    font-weight: bold;
    font-family: Nunito !important;
    border-radius: 100% !important;
    border: none !important;
    width: 32px !important;
    height: 32px !important;
    :focus {
      box-shadow: none !important;
      outline: 0 !important;
    }
  }
`;
