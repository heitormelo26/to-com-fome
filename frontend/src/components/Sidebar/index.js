import React from "react";
import { Container, Description, Title, Image } from "./styles";

export default function Sidebar(props) {
  return (
    <Container className="d-flex align-items-center align-content-center flex-wrap">
      <Image className="mb-3 w-100 d-block">
        <img className="w-75" src={props.imagem} alt={props.descricaoImagem} />
      </Image>
      <Title className="my-3 w-100 text-center d-block">Tá com fome?</Title>
      <Description className="m-0 w-100 d-block">{props.descricao}</Description>
    </Container>
  );
}
