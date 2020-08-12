import React from "react";

import { ButtonLink, ButtonNoLink } from "./styles";

export interface ButtonProps {
  color: string;
  link?: string;
  text: string;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ color, link, text, className, ...props }) => {
  if (link) {
    return (
      <ButtonLink
        to={link}
        color={color}
        type="button"
        className={`btn align-self-center ${className}`}
      >
        {text}
      </ButtonLink>
    );
  } else {
    return (
      <ButtonNoLink
        color={color}
        type="button"
        {...props}
        className={`btn align-self-center ${className}`}
      >
        {text}
      </ButtonNoLink>
    );
  }
};

export default Button;
