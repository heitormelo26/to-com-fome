import React from "react";
import Navbar from "../../components/Navbar";
import Receita from "../../components/Receita";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import {
  Container,
  Title,
  Subtitle,
  Fridge,
  Category,
  CategorySelected,
  IconGroup,
  InputText,
} from "./styles";
import ilustracao from "../../assets/images/ilustracao.png";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

function Inicio() {
  return (
    <div>
      <Navbar estaLogado={false} />
      <div className="container-fluid">
        <Container className="jumbotron mb-5">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <Title className="display-4">Tá com fome?</Title>
                <Subtitle className="lead">
                  Então o <strong>Tô Com Fome</strong> foi feito pra você!
                  <br /> Escolha quais ingredientes você tem que a
                  <br /> gente te indica quais receitas podem ser
                  <br /> feitas com eles.
                </Subtitle>
                <Fridge type="button" class="btn">
                  O que tem na sua geladeira?
                </Fridge>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img className="w-75 p-3" src={ilustracao} alt="" />
              </div>
            </div>
          </div>
        </Container>
        <div className="row mb-4">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <CategorySelected className="mr-3 mb-4 btn ">
              <span>Todas</span>
            </CategorySelected>
            <Category className="mr-3 mb-4 btn">
              <span>Café da manhã</span>
            </Category>
            <Category className="mr-3 btn mb-4">
              <span>Brunch</span>
            </Category>
            <Category className="mr-3 mb-4 btn">
              <span>Almoço</span>
            </Category>
            <Category className="mr-3 btn mb-4">
              <span>Lanche</span>
            </Category>
            <Category className="mr-3 mb-4 btn">
              <span>Jantar</span>
            </Category>
            <Category className="btn mb-4">
              <span>Sobremesa</span>
            </Category>
          </div>
          <div className="col-md-12 px-5 d-flex justify-content-center align-items-center">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <IconGroup className="input-group-text">
                  <Icon path={mdiMagnify} size={0.8} color="#8D99AE" />
                </IconGroup>
              </div>
              <InputText
                type="text"
                placeholder="Buscar..."
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
      <Contato estaLogado={false} />
      <Footer cor="branco" />
    </div>
  );
}

export default Inicio;
