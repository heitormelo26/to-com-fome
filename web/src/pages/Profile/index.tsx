import React from "react";

import ProfileForm from "../ProfileForm";

import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Recipe from "../../components/Recipe";

import Icon from "@mdi/react";
import { mdiMagnify, mdiPencil } from "@mdi/js";

import {
  EditButton,
  Category,
  CategorySelected,
  Container,
  IconGroup,
  InputText,
  Name,
  Number,
  User,
} from "./styles";

function Profile() {
  return (
    <div>
      <Navbar isLogged={true} />
      <div className="container mb-4">
        <Container className="row d-flex justify-content-end  mx-1 p-4 mb-5">
          <EditButton
            type="button"
            data-toggle="modal"
            data-target="#editarPerfil"
            className="px-3 float-right h-auto btn btn-primary"
          >
            <Icon path={mdiPencil} size={0.8} color="#edf2f4" />
          </EditButton>
          <ProfileForm />
          <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-md-12 d-flex justify-content-center ">
            <img
              className="mb-3"
              width="100"
              src="https://image.flaticon.com/icons/svg/306/306005.svg"
              alt="Foto de perfil"
            />
          </div>
          <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-md-12 text-center">
            <Name className="mb-1">Paulinha</Name>
            <User>@monkeystoks</User>
          </div>
          <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-md-12 d-flex justify-content-center flex-fill">
            <div className="row w-100">
              <div className="col-6 col-sm-6 col-lg-6 col-xl-6 col-md-6 text-center">
                <Number>Receitas salvas</Number>
                <Number>67</Number>
              </div>
              <div className="col-6 col-sm-6 col-lg-6 col-xl-6 col-md-6 text-center">
                <Number>Receitas enviadas</Number>
                <Number>13</Number>
              </div>
            </div>
          </div>
        </Container>
        <div className="row mx-1 mb-4 ">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-md-12 d-flex justify-content-center">
            <CategorySelected className="mr-3 text-center text-truncate btn ">
              Salvas
            </CategorySelected>
            <Category className="mr-3 text-center text-truncate btn">
              Enviadas
            </Category>
            <Category className="btn text-center text-truncate">
              Privadas
            </Category>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-md-12">
            <div className="input-group mb-4">
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
          <div className="col-6 col-sm-6 col-lg-3 col-xl-3 col-md-3 mb-2 d-flex justify-content-center">
            <Recipe
              image="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              title="Receita 1"
              user="TotozinDelas"
            />
          </div>
          <div className="col-6 col-sm-6 col-lg-3 col-xl-3 col-md-3 mb-2 d-flex justify-content-center">
            <Recipe
              image="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              title="Receita 2"
              user="Zezezinho"
            />
          </div>
          <div className="col-6 col-sm-6 col-lg-3 col-xl-3 col-md-3 mb-2 d-flex justify-content-center">
            <Recipe
              image="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              title="Receita 3"
              user="Fitipaldi"
            />
          </div>
          <div className="col-6 col-sm-6 col-lg-3 col-xl-3 col-md-3 mb-2 d-flex justify-content-center">
            <Recipe
              image="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              title="Receita 4"
              user="Ana Carolina Carol"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-center">
        <Pagination activePage={1} totalOfRecipes={16} recipesPerPage={3} />
      </div>
      <Footer color="azul" />
    </div>
  );
}

export default Profile;
