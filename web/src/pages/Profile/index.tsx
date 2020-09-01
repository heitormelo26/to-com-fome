import React from "react";

import ProfileForm from "../ProfileForm";

import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
//import Recipe from "../../components/Recipe";

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
  Data,
  Number,
} from "./styles";

import profile from "../../assets/images/profile.png";

function Profile() {
  return (
    <div>
      <Navbar isLogged={true} />
      <div className="container mb-4 w-100">
        <div className="row">
          <div className="col-12">
            <Container className="d-flex flex-row justify-content-center p-4 mb-5 mx-5 mx-sm-5 mx-md-auto mx-lg-auto mx-xl-auto">
              <div className="d-none d-sm-none d-md-flex justify-content-end align-items-center mr-md-4">
                <img
                  className="img-fluid rounded-circle"
                  width="100"
                  src={profile}
                  alt="Perfil"
                />
              </div>
              <div className="d-flex justify-content-md-start justify-content-center flex-column align-self-center">
                <Name className="d-flex flex-row align-self-center align-self-sm-center align-self-md-start align-self-lg-start align-self-xl-start">
                  Usuário
                  <EditButton
                    type="button"
                    data-toggle="modal"
                    data-target="#editarPerfil"
                    className="btn d-flex justify-content-center align-items-center"
                  >
                    <Icon path={mdiPencil} size={0.7} color="#8d99ae" />
                  </EditButton>
                  <ProfileForm />
                </Name>
                <div className="d-flex flex-row">
                  <Data className="text-center text-sm-center text-md-left text-lg-left text-xl-left">
                    <Number>N</Number> enviadas
                  </Data>
                  <Data className="text-center text-sm-center text-md-left text-lg-left text-xl-left">
                    <Number>N</Number> privadas
                  </Data>
                  <Data className="text-center text-sm-center text-md-left text-lg-left text-xl-left">
                    <Number>N</Number> salvas
                  </Data>
                </div>
              </div>
            </Container>
          </div>
        </div>
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
          {/* <div className="col-6 col-sm-6 col-lg-3 col-xl-3 col-md-3 mb-2 d-flex justify-content-center">
            <Recipe
              image="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              title="Receita 1"
              user="TotozinDelas"
            />
          </div> */}
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
