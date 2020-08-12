import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 100% !important;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: Nunito;
  color: #ef233c;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-family: Nunito;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2b2d42;
  font-weight: 700;
`;

export const LinkAccount = styled.a`
  font-size: 14px;
  color: #2b2d42;
  text-decoration: none;
  :hover {
    color: #2b2d42;
    text-decoration: none;
  }
`;

export const LinkContainer = styled.span`
  font-size: 14px;
  color: #ef233c;
  text-decoration: none;
  a {
    font-size: 14px;
    color: #ef233c;
    text-decoration: none;
    :hover {
      color: #ef233c;
      text-decoration: none;
    }
  }
`;
