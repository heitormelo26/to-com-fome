import React from "react";
import { Image, Title, Subtitle } from "./styles";
export default function Receita(props) {
  return (
    <div className="mb-3">
      <Image src={props.imagem} alt={props.titulo} className="img-fluid mb-3" />
      <Title className="mb-1 text-truncate">{props.titulo}</Title>
      <Subtitle className="text-truncate">por {props.usuario}</Subtitle>
    </div>
  );
}
