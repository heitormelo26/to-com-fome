import React from "react";
import Pagination from "../../components/Pagination";

function Teste() {
  return (
    <div className="container py-5 text-center">
      <Pagination totalReceitas={16} receitasPorPagina={4} paginaAtual={2} />
    </div>
  );
}

export default Teste;
