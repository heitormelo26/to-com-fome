import styled from "styled-components";
import "../../assets/fonts/fonts.css";

export const Text = styled.p`
  color: #8d99ae;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  a {
    color: #ef233c;
    font-weight: 600 !important;
    :hover {
      color: #ef233c;
      text-decoration: none;
      font-weight: 600 !important;
    }
  }
`;

export const Google = styled.div`
  color: #8d99ae;
  text-align: center;
  line-height: 20px !important;
  font-size: 16px;
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

export const Container = styled.div`
  background-color: #f2f6f7;
  border-top: 1px solid rgba(141, 153, 174, 0.5);
  height: 100% !important;
  min-height: 25vh;
`;

export const Copyright = styled.p`
  text-align: center;
  color: #2b2d42;
  font-family: "Nunito";
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
