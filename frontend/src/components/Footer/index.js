import React from "react";
import { Container, Title, Copyright, Line } from "./styles";

export default function Footer(props) {
  return (
    <Container
      cor={props.cor}
      className="container-fluid  text-center py-5 w-100 m-0"
    >
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <Title cor={props.cor} to="/">
            Tô Com Fome
          </Title>
        </div>
      </div>
      <Line cor={props.cor} />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-3">
          <Copyright cor={props.cor} className="mr-5">
            © 2020
          </Copyright>
          <Copyright cor={props.cor}>Termos de Privacidade</Copyright>
        </div>
      </div>
    </Container>
  );
}
