import React from "react";
import Icon from "@mdi/react";
import { InputText, InputTextNoIcon, Label, IconGroup } from "./styles";

export default function Input(props) {
  function existeIcone() {
    if (props.icone !== "noIcon") {
      return (
        <div className="w-100 d-flex">
          <div className="input-group-prepend">
            <IconGroup className="input-group-text">
              <Icon path={[props.icone]} size={0.7} color="#8D99AE" />
            </IconGroup>
          </div>
          <InputText type={props.tipo} className="py-3 form-control" />
        </div>
      );
    } else {
      return (
        <InputTextNoIcon
          type={props.tipo}
          className="w-100 py-3 form-control"
          min={props.minimo}
        />
      );
    }
  }

  return (
    <div className="input-group mb-4">
      <Label className="w-100 mb-3 d-block">{props.label}</Label>
      {existeIcone()}
    </div>
  );
}
