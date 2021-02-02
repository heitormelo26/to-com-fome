import styled from "styled-components";

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
    font-family: Nunito;
    text-transform: lowercase;
  }
  text-transform:lowercase;
  font-size: 22px;
  color: #2b2d42;
  font-weight: 600;
  max-width: 135px;
  font-family: Nunito;
  @media (min-width: 768px) {
    max-width: 235px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #8d99ae;
  max-width: 150px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: Nunito;
  @media (min-width: 768px) {
    max-width: 235px;
  }
`;
