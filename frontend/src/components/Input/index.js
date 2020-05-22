import React from "react";
import Icon from "@mdi/react";
import { InputText, Label, IconGroup } from "./styles";

export default function Input(props) {
  return (
    <div className="input-group mb-3">
      <Label className="w-100 mb-3 d-block">{props.label}</Label>
      <div className="input-group-prepend">
        <IconGroup className="input-group-text">
          <Icon path={[props.icone]} size={0.7} color="#8D99AE" />
        </IconGroup>
      </div>
      <InputText type={props.tipo} className="py-3 form-control" />
    </div>
  );
}
