import React from "react";
import { ButtonComponent } from "./styles";
export default function Botao(props) {
  return (
    <ButtonComponent cor={props.cor} type="button" className="btn btn-primary">
      {props.texto}
    </ButtonComponent>
  );
}
