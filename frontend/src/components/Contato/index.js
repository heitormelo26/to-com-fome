import React from "react";
import { Container, Title, Subtitle } from "./styles";
import Botao from "../../components/Botao";

export default function Contato(props) {
  const estaLogado = props.estaLogado;
  if (!estaLogado) {
    return (
      <Container className="container-fluid text-center p-5 w-100 m-0">
        <div className="row w-100">
          <div className="col-md-6">
            <Title className="mb-3">Quer salvar suas receitas favoritas?</Title>
            <Subtitle>Crie sua conta agora!</Subtitle>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Botao cor="branco" link="/cadastrar" texto="Cadastrar" />
            <div className="mr-4"></div>
            <Botao cor="transparente" link="/" texto="Entrar" />
          </div>
        </div>
      </Container>
    );
  } else {
    return <br />;
  }
}
