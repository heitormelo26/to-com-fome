import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ props }) => {
    const c = props && props.cor;
    if (c === "branco") {
      return "#ffffff";
    } else return "#2b2d42";
  }};
`;
