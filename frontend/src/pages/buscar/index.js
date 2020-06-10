import React from "react";
import Navbar from "../../components/Navbar";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import Receita from "../../components/Receita";
import Botao from "../../components/Botao";
import { Button, IconText } from "./styles";

import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

export default function Buscar() {
  return (
    <div>
      <Navbar estaLogado={true} />
      <div class="jumbotron">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div>
          <Button
            type="Button"
            className="btn btn-primary mr-4 d-flex align-items-center justify-content-center"
          >
            <Icon
              path={mdiChevronDown}
              title="Categoria"
              size={0.8}
              color="#ffffff"
              className="mr-2"
            />
            <span>Categoria</span>
          </Button>
          <Button
            type="Button"
            className="btn btn-primary mr-4 d-flex align-items-center justify-content-center"
          >
            <Icon
              path={mdiChevronDown}
              title="Tipo de Refeição"
              size={0.8}
              color="#ffffff"
              className="mr-2"
            />
            <span>Tipo de Refeição</span>
          </Button>
          <Button
            type="Button"
            className="btn btn-primary mr-4 d-flex align-items-center justify-content-center"
          >
            <Icon
              path={mdiChevronDown}
              title="Nacionalidade"
              size={0.8}
              color="#ffffff"
              className="mr-2"
            />
            <span>Nacionalidade</span>
          </Button>
        </div>
        <Botao cor="vermelho" texto="Buscar" link="/buscar" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-md-3">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-md-3">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-md-3">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol Carolinada"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <Pagination
            paginaAtual={1}
            totalReceitas={16}
            receitasPorPagina={3}
          />
        </div>
      </div>
      <Contato estaLogado={false} />
      <Footer cor="branco" />
    </div>
  );
}
