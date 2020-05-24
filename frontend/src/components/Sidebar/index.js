import React from "react";
import { Container, Description, Title, Image } from "./styles";

export default function Sidebar(props) {
  return (
    <div className="container-fluid m-0 p-0 h-100">
      <Container className="row py-2 m-0 d-flex align-content-center flex-wrap">
        <div className="col-md-12 my-4">
          <Image>
            <img
              className="w-75"
              src={props.imagem}
              alt={props.descricaoImagem}
            />
          </Image>
        </div>
        <div className="col-md-12 mb-4">
          <Title className="text-center ">Tá com fome?</Title>
        </div>
        <div className="col-md-12">
          <Description className="m-0">{props.descricao}</Description>
        </div>
      </Container>
    </div>
  );
}
