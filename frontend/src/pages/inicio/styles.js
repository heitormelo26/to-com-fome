import styled from "styled-components";
import "../../assets/fonts/fonts.css";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #2b2d42 !important;
  border-radius: 40px !important;
  padding: 32px;
`;

export const Title = styled.h1`
  font-family: "Nunito";
  font-size: 48px;
  font-weight: bold;
  color: #edf2f4;
  @media (max-width: 767px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: rgba(237, 242, 244, 0.75);
`;

export const Fridge = styled.button`
  overflow: hidden !important;
  color: #ffffff;
  background-color: #ef233c;
  font-size: 18px;
  font-family: "Nunito";
  border-radius: 40px;
  text-decoration: none !important;
  border: none !important;
  text-align: center;
  font-weight: 600;
  padding: 5px 30px !important;
  :focus,
  :active {
    color: #ffffff !important;
    background-color: #ef233c !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #ffffff !important;
    background-color: #ef233c !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const CategorySelected = styled.button`
  overflow: hidden !important;
  color: #ffffff;
  background-color: #ef233c;
  font-size: 16px;
  font-family: "Nunito";
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 40px;
  padding: 2px 14px !important;
  text-decoration: none !important;
  overflow: hidden !important;
  border: none !important;
  text-align: center;
  span {
    line-height: 20px;
    overflow: hidden !important;
    font-size: 16px;
    font-family: "Nunito";
    font-weight: 600;
    color: #ffffff;
    border: none !important;
    :active {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
    :focus {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
    :hover {
      color: #ffffff !important;
      background-color: #ef233c !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  :focus {
    color: #ffffff !important;
    background-color: #ef233c !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
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
  font-family: "Nunito";
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  border-radius: 40px;
  padding: 2px 14px !important;
  text-decoration: none !important;
  overflow: hidden !important;
  border: none !important;
  text-align: center;
  span {
    line-height: 20px;
    overflow: hidden !important;
    font-size: 16px;
    font-family: "Nunito";
    font-weight: 600;
    color: #8d99ae;
    border: none !important;
    :active {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
    :focus {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
    :hover {
      color: #8d99ae;
      background-color: #edf2f4;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  :focus {
    color: #8d99ae;
    background-color: #edf2f4;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #8d99ae;
    background-color: #edf2f4;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const InputText = styled.input`
  background-color: #edf2f4 !important;
  font-size: 16px !important;
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
    font-size: 16px !important;
    font-family: "Nunito";
  }
  :-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
  ::-ms-input-placeholder {
    color: #8d99ae !important;
    font-size: 16px !important;
    font-family: "Nunito";
  }
`;

export const IconGroup = styled.div`
  background-color: #edf2f4 !important;
  border: 0 !important;
  outline: 0 !important;
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
`;

export const Flag = styled.h3`
  color: #2b2d42 !important;
  font-size: 18px !important;
  font-family: "Nunito";
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

export const More = styled(Link)`
  color: #ef233c !important;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 18px;
  text-decoration: none;
  font-family: "Nunito";
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconCategorySelected = styled.button`
  color: #ffffff;
  background-color: #ef233c;
  font-size: 16px;
  font-family: "Nunito";
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
  :focus {
    color: #ffffff !important;
    background-color: #ef233c !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
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
  :focus {
    color: #8d99ae !important;
    background-color: #edf2f4 !important;
    outline: none !important;
    box-shadow: none !important;
  }
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
  font-family: "Nunito";
  font-weight: bold;
`;
