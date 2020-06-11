import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";

export const Image = styled.img`
  border-radius: 40px;
  width: 540px;
  height: auto;
  max-height: 360px !important;
`;

export const Tag = styled(Link)`
  color: #ef233c;
  font-weight: 700 !important;
  text-transform: uppercase;
  font-family: "Nunito";
  :hover {
    color: #ef233c;
    text-decoration: none;
    font-weight: 700 !important;
    text-transform: uppercase;
    font-family: "Nunito";
  }
  :focus {
    border: 0 !important;
    outline: 0 !important;
    box-shadow: none !important;
  }
`;

export const Title = styled.h1`
  font-family: "Nunito";
  font-size: 30px;
  font-weight: 600;
  color: #2b2b42;
`;

export const IconText = styled.span`
  font-size: 16px;
  color: #8d99ae;
  font-weight: 600;
`;

export const Description = styled.p`
  font-family: "Nunito";
  font-size: 18px;
  color: #2b2b42;
`;

export const Button = styled.button`
  overflow: hidden !important;
  color: #ffffff;
  background-color: #2b2b42;
  font-size: 18px;
  font-family: "Nunito";
  display: inline-block;
  width: 220px;
  text-align: center;
  line-height: 1.5;
  border-radius: 40px;
  padding: 10px 0 !important;
  text-decoration: none !important;
  overflow: hidden !important;
  border: none !important;
  text-align: center;
  span {
    line-height: 20px;
    overflow: hidden !important;
    font-size: 18px;
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
      background-color: #2b2b42 !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  :focus {
    color: #ffffff !important;
    background-color: #2b2b42 !important;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #ffffff !important;
    background-color: #2b2b42 !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const SecondTitle = styled.h2`
  font-family: "Nunito";
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ef233c;
`;

export const IngredientText = styled.li`
  font-size: 18px;
  color: #2b2b42;
  display: flex;
  margin-bottom: 8px;
  :before {
    content: "●";
    text-align: center;
    color: #8d99ae;
    font-family: "Open Sans" !important;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: start !important;
    margin-right: 12px;
  }
`;

export const ListUL = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px !important;
  list-style: none;
`;

export const ListOL = styled.ol`
  display: flex;
  flex-direction: column;
  padding-left: 0px !important;
  list-style: none;
  counter-reset: item;
`;

export const PrepareText = styled.li`
  font-size: 18px;
  color: #2b2b42;
  display: flex;
  margin-bottom: 8px;
  :before {
    content: counter(item) ". ";
    counter-increment: item;
    text-align: center;
    color: #8d99ae;
    font-family: "Nunito" !important;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: start !important;
    margin-right: 12px;
  }
`;
