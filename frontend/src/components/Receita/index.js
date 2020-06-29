import React from "react";
import { Image, Title, Subtitle } from "./styles";
export default function Receita(props) {
  return (
    <div className="mb-3">
      <Image src={props.imagem} alt={props.titulo} className="img-fluid mb-3" />
      <Title className="mb-2">{props.titulo}</Title>
      <Subtitle>por {props.usuario}</Subtitle>
    </div>
  );
}
