import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";

export const Image = styled.img`
  border-radius: 40px;
  width: 540px;
`;

export const Tag = styled(Link)`
  color: #ef233c;
  font-weight: 600 !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Nunito";
  :hover {
    color: #ef233c;
    text-decoration: none;
    font-weight: 600 !important;
    text-transform: uppercase;
    letter-spacing: 1px;
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

export const description = styled.p`
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
  font-weight: 700;
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
  :focus {
    color: #ffffff;
    background-color: #2b2b42;
    outline: none !important;
    box-shadow: none !important;
  }
  :hover {
    color: #ffffff;
    background-color: #2b2b42;
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
  font-size: 20px;
  color: #2b2b42;
  ::before {
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const PrepareText = styled.li`
  font-size: 20px;
  color: #2b2b42;
`;
