import React from "react";
import Botao from "../../components/Botao";
import Pagination from "../../components/Pagination";

function Teste() {
  return (
    <div className="container py-5 bg-warning">
      <Botao cor="vermelho" texto="Botão" link="/teste" />
      <Botao cor="transparente" texto="Botão" link="/" />
      <Botao cor="branco" texto="Botão" link="/" />
      <Pagination totalReceitas={16} receitasPorPagina={4} paginaAtual={1} />
    </div>
  );
}

export default Teste;
