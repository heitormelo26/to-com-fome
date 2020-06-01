import React from "react";
import Botao from "../../components/Botao";

function Teste() {
  return (
    <div className="container py-5 bg-warning">
      <Botao cor="vermelho" texto="Botão" link="/teste" />
      <Botao cor="transparente" texto="Botão" link="/" />
      <Botao cor="branco" texto="Botão" link="/" />
    </div>
  );
}

export default Teste;
