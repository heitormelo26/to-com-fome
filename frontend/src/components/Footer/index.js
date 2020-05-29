import React from "react";
import { Container } from "./styles";

export default function Footer(props) {
  return (
    <Container
      cor={props.cor}
      className="container text-center py-5 fixed-bottom w-100 m-0"
    >
      <div className="row w-100">
        <div className="col-md-12">
          <h1>Tô Com Fome</h1>
          <h2> Cor: {props.cor}</h2>
        </div>
      </div>
      <hr />
      <div className="row w-100">
        <div className="col-md-12 py-3">
          <span className="mr-5">© 2020</span>
          <span>Termos de Privacidade</span>
        </div>
      </div>
    </Container>
  );
}
