import styled from "styled-components";

export const Card = styled.div`
  border-radius: 1rem !important;
  padding: 0.5rem;
  border: 1px solid var(--color-light-gray);
  .card-body {
    padding: 1rem 0 0 0;
  }
  @media (max-height: 769px) {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  object-fit: cover;
  min-height: 190px;
  height: 190px;
  max-height: 190px;
`;

export const Title = styled.h2`
  font: 600 1rem Lora;
  margin-bottom: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  a,
  a:hover {
    font: 600 1rem Lora;
    color: #2b2d42;
    text-transform: capitalize;
    text-decoration: none;
  }
`;

export const Subtitle = styled.p`
  font: 500 1rem Lato;
  color: var(--color-dark-gray);
  margin-top: 0 !important;
  margin-bottom: 0.5rem;
`;
