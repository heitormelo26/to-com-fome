import React from "react";
import { Button, StyledLink } from "./styles";
import { createRipples } from "react-ripples";

const Effect = createRipples({
  color: "rgba(255, 255, 255, .3)",
  during: 1000,
});

export default function Botao(props) {
  return (
    <StyledLink
      cor={props.cor}
      to={props.link}
      className="d-flex align-items-center"
    >
      <Effect>
        <Button cor={props.cor} type="button" className="btn btn-primary">
          <span>{props.texto}</span>
        </Button>
      </Effect>
    </StyledLink>
  );
}
