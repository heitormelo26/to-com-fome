import React from "react";
import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Receita from "../../components/Receita";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { InputText, IconGroup, Container } from "./styles";

function Perfil(props) {
  return (
    <div>
      <Navbar estaLogado={false} />
      <div className="container-fluid mb-4">
        <Container className="row d-flex justify-content-center mx-1 p-4 mb-5">
          <div className="col-md-12 d-flex justify-content-center">
            <img
              width="100"
              src="https://image.flaticon.com/icons/svg/306/306005.svg"
              alt="Foto de perfil"
            />
            <button> Editar </button>
          </div>
          <div className="col-md-12 text-center">
            <p>Paulinha</p>
            <p>@monkeystoks</p>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="row">
              <div className="col-md-6">
                <p>Receitas salvas</p>
                <p>127</p>
              </div>
              <div className="col-md-6">
                <p>Recitas enviadas</p>
                <p>13</p>
              </div>
            </div>
          </div>
        </Container>
        <div className="row mx-1 mb-5">
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
        <div className="row mx-1 mb-5 ">
          <div className="col-md-12 d-flex justify-content-center">
            <button className="mr-3">Receitas Salvas</button>
            <button className="mr-3">Receitas Enviadas</button>
            <button>Receitas Privadas</button>
          </div>
        </div>
        <div className="row d-flex justify-content-start">
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
      <Footer cor="azul" />
    </div>
  );
}

export default Perfil;
