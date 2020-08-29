import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent !important;
`;

export const Name = styled.h1`
  font-family: Nunito;
  font-weight: bold;
  color: #2b2d42;
  font-size: 24px;
`;

export const Data = styled.p`
  font-family: Nunito;
  font-weight: 600;
  color: #8d99ae;
  font-size: 16px;
  margin-right: 24px;
  margin-bottom: 0;
  :last-child {
    margin-right: 0;
  }
`;

export const Number = styled.span`
  font-family: Nunito;
  font-weight: 700;
  color: #2b2d42;
  font-size: 16px;
`;

export const InputText = styled.input`
  background-color: #edf2f4 !important;
  font-size: 18px !important;
  border: 0 !important;
  outline: 0 !important;
  color: #8d99ae !important;
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  :focus {
    box-shadow: none !important;
  }
  ::placeholder {
    color: #8d99ae !important;
    font-size: 18px !important;
    font-family: Nunito;
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 18px !important;
    font-family: Nunito;
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 18px !important;
    font-family: Nunito;
  }
`;

export const IconGroup = styled.div`
  background-color: #edf2f4 !important;
  border: 0 !important;
  outline: 0 !important;
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
`;

export const EditButton = styled.button`
  overflow: hidden !important;
  color: #8d99ae;
  background-color: transparent;
  text-align: center;
  text-decoration: none !important;
  overflow: hidden !important;
  border: 0 !important;
  text-align: center;
  padding: 0 !important;
  margin-left: 8px;
  :focus,
  :hover {
    color: #8d99ae;
    background-color: transparent;
    outline: none !important;
    box-shadow: none !important;
    border: 0 !important;
  }
`;

export const CategorySelected = styled.button`
  overflow: hidden !important;
  color: #ffffff !important;
  background-color: #ef233c !important;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito;
  display: inline-block;
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
`;

export const Category = styled.button`
  overflow: hidden !important;
  color: #8d99ae;
  background-color: #edf2f4;
  font-size: 16px;
  font-weight: 600;
  font-family: Nunito;
  display: inline-block;
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
    color: #8d99ae;
    background-color: #edf2f4;
    outline: none !important;
    box-shadow: none !important;
  }
`;
