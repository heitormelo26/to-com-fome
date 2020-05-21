import React from "react";
import Icon from "@mdi/react";

export default function Input(props) {
  return (
    <div class="input-group mb-3">
      <label> {props.label}</label>
      <div class="input-group-prepend">
        <span class="input-group-text">
          <Icon path={[props.icone]} />
        </span>
      </div>
      <input type={props.tipo} class="form-control" />
    </div>
  );
}
