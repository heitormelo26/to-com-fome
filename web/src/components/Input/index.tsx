import React, { InputHTMLAttributes } from "react";

import Icon from "@mdi/react";

import { IconGroup, InputText, InputTextNoIcon, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type: string;
  iconName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  iconName,
  type,
  ...rest
}) => {
  function existeIcone() {
    if (iconName) {
      return (
        <div className="w-100 d-flex">
          <div className="input-group-prepend">
            <IconGroup className="input-group-text">
              <Icon path={iconName} size={0.7} color="#8D99AE" />
            </IconGroup>
          </div>
          <InputText
            type={type}
            id={name}
            {...rest}
            className="py-3 form-control"
          />
        </div>
      );
    } else {
      return (
        <InputTextNoIcon
          type={type}
          id={name}
          className="w-100 py-3 form-control"
          {...rest}
        />
      );
    }
  }

  return (
    <div className="input-group mb-4">
      <Label className="w-100 mb-3 d-block" htmlFor={name}>
        {label}
      </Label>
      {existeIcone()}
    </div>
  );
};

export default Input;
