import React from "react";
import Navbar from "../../components/Navbar";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import Receita from "../../components/Receita";
import Botao from "../../components/Botao";
import { InputText, IconGroup, Container, Select } from "./styles";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

export default function Buscar() {
  return (
    <div>
      <Navbar estaLogado={false} />
      <Container className="jumbotron mb-5">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <IconGroup className="input-group-text">
                  <Icon path={mdiMagnify} size={0.8} color="#8D99AE" />
                </IconGroup>
              </div>
              <InputText
                type="text"
                placeholder="Tá com fome? Busque uma receita aqui..."
                className="py-3 form-control"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-md-3 d-flex align-items-center justify-content-start">
            <Select
              className="selectpicker show-tick"
              data-live-search="true"
              data-width="100%"
              title="Categoria"
              data-size="5"
            >
              <option>Entrada</option>
              <option>Acompanhamento</option>
              <option>Sobremesa</option>
            </Select>
          </div>
          <div className="mb-3 col-md-3 d-flex align-items-center justify-content-start">
            <Select
              className="selectpicker show-tick"
              data-live-search="true"
              data-width="100%"
              title="Refeição"
              data-size="5"
            >
              <option>Almoço</option>
              <option>Café da manhã</option>
              <option>Jantar</option>
            </Select>
          </div>
          <div className="mb-3 col-md-3 d-flex align-items-center justify-content-start">
            <Select
              className="selectpicker show-tick"
              data-live-search="true"
              data-width="100%"
              title="Nacionalidade"
              data-size="5"
            >
              <option>Brasileira</option>
              <option>Alemã</option>
              <option>Italiana</option>
            </Select>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-end">
            <Botao cor="vermelho" texto="Buscar" link="/buscar" />
          </div>
        </div>
      </Container>
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-3 mb-2 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-md-3 mb-2 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-md-3 mb-2 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-md-3 mb-2 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-center">
        <Pagination paginaAtual={1} totalReceitas={16} receitasPorPagina={3} />
      </div>
      <Contato estaLogado={false} />
      <Footer cor="branco" />
    </div>
  );
}
