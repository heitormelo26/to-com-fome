import React from "react";
import {
  Container,
  Title,
  Subtitle,
  ButtonPrimary,
  ButtonSecondary,
} from "./styles";

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
          <div className="col-md-6">
            <ButtonPrimary type="button" className="btn btn-danger">
              Cadastrar
            </ButtonPrimary>
            <ButtonSecondary type="button" className="btn btn-danger">
              Entrar
            </ButtonSecondary>
          </div>
        </div>
      </Container>
    );
  }
}
