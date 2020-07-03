import React from "react";
import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Receita from "../../components/Receita";
import Icon from "@mdi/react";
import { mdiMagnify, mdiPencil } from "@mdi/js";
import {
  InputText,
  IconGroup,
  Container,
  Name,
  User,
  Number,
  Button,
  Category,
  CategorySelected,
} from "./styles";

function Perfil(props) {
  return (
    <div>
      <Navbar estaLogado={true} />
      <div className="container mb-4">
        <Container className="row d-flex justify-content-end  mx-1 p-4 mb-5">
          <Button
            type="button"
            className="px-3 float-right h-auto btn btn-primary"
          >
            <Icon path={mdiPencil} size={0.8} color="#edf2f4" />
          </Button>
          <div className="col-md-12 d-flex justify-content-center">
            <img
              className="mb-3"
              width="100"
              src="https://image.flaticon.com/icons/svg/306/306005.svg"
              alt="Foto de perfil"
            />
          </div>
          <div className="col-md-12 text-center">
            <Name className="mb-1">Paulinha</Name>
            <User>@monkeystoks</User>
          </div>
          <div className="col-md-12 d-flex justify-content-center flex-fill">
            <div className="row w-100">
              <div className="col-md-6 text-center">
                <Number>Receitas salvas</Number>
                <Number>127</Number>
              </div>
              <div className="col-md-6 text-center">
                <Number>Receitas enviadas</Number>
                <Number>13</Number>
              </div>
            </div>
          </div>
        </Container>
        <div className="row mx-1 mb-4 ">
          <div className="col-md-12 d-flex justify-content-center">
            <CategorySelected className="mr-3 text-center text-truncate btn ">
              <span>Receitas Salvas</span>
            </CategorySelected>
            <Category className="mr-3 text-center text-truncate btn">
              <span> Receitas Enviadas </span>
            </Category>
            <Category className="btn text-center text-truncate">
              <span>Receitas Privadas</span>
            </Category>
          </div>
        </div>
        <div className="row mx-1 mb-4">
          <div className="col-md-12">
            <div className="input-group mb-4">
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
