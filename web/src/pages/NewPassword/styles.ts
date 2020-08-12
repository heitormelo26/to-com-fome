import styled from "styled-components";

export const Modal = styled.div`
  border: none !important;
  padding: 24px !important;
  border-radius: 30px !important;
  outline: 0;
  box-shadow: none !important;
  .modal-header,
  .modal-footer {
    border: none !important;
  }
  .modal-header {
    .close {
      color: #8d99ae !important;
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
        color: #8d99ae !important;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }
`;

export const Title = styled.h5`
  color: #2b2d42;
  font-family: "Nunito";
  font-weight: 600;
`;

export const Paragraph = styled.p`
  font-size: 16px !important;
  font-family: "Nunito" !important;
  color: #8d99ae !important;
`;
