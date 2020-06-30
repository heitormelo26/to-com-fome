import React from "react";
import { Image, Title, Subtitle } from "./styles";
import { Link } from "react-router-dom";
export default function Receita(props) {
  return (
    <div className="mb-3">
      <Link className="text-decoration-none" to="/receita">
        <Image
          src={props.imagem}
          alt={props.titulo}
          className="img-fluid mb-3"
        />
      </Link>
      <Title className="mb-1 text-truncate">
        <Link className="text-decoration-none" to="/receita">
          {props.titulo}
        </Link>
      </Title>
      <Subtitle className="text-truncate">por {props.usuario}</Subtitle>
    </div>
  );
}
