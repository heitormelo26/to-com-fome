import React from "react";
import Receita from "../../components/Receita";

function Teste() {
  return (
    <div className="container-fluid py-5 text-center ">
      <div className="row ">
        <div className="col-md-3">
          <Receita
            imagem="https://cdn.panelinha.com.br/receita/1565893815418-carbonara.jpg"
            titulo="Carbonara"
            usuario="Brad Pitt"
          />
        </div>
        <div className="col-md-3 ">
          <Receita
            imagem="https://cdn.panelinha.com.br/receita/1590614663294-_JW_0929.jpg"
            titulo="Calzone de queijo"
            usuario="Al Pacino"
          />
        </div>
        <div className="col-md-3 ">
          <Receita
            imagem="https://cdn.panelinha.com.br/receita/1565893815418-carbonara.jpg"
            titulo="Carbonara"
            usuario="Brad Pitt"
          />
        </div>
        <div className="col-md-3 ">
          <Receita
            imagem="https://cdn.panelinha.com.br/receita/1590614663294-_JW_0929.jpg"
            titulo="Calzone de queijo"
            usuario="Al Pacino"
          />
        </div>
      </div>
    </div>
  );
}

export default Teste;
