import styled from "styled-components";
import "../../assets/fonts/fonts.css";

export const Image = styled.img`
  max-height: 170px;
  width: 270px;
  border-radius: 20px;
  object-fit: cover;
`;

export const Title = styled.h2`
  a,
  a:hover,
  a:visited,
  a:active {
    font-size: 22px;
    color: #2b2d42;
    font-weight: 600;
    max-width: 150px;
    font-family: "Nunito";
  }
  font-size: 22px;
  color: #2b2d42;
  font-weight: 600;
  max-width: 150px;
  font-family: "Nunito";
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #8d99ae;
  max-width: 150px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Nunito";
`;
