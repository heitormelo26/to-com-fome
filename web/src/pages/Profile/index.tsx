import React, { useState, useEffect } from "react";

import ProfileForm from "../ProfileForm";

import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Recipe, { RecipeProps } from "../../components/Recipe";

import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import { EditButton, Category, Name, Data, Number, Header } from "./styles";

import api from "../../services/api";

import profile from "../../assets/images/profile.svg";

function Profile() {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState("Salvas");

  function setActiveButton(meal: any) {
    document.querySelectorAll("button.category").forEach((b) => {
      let button = document.getElementById(b.id);
      if (button) {
        button.style.background = "#edf2f4";
        button.style.color = "#8d99ae";
      }
    });
    let activeButton = document.getElementById(meal);
    if (activeButton) {
      activeButton.style.background = "#ef233c";
      activeButton.style.color = "#ffffff";
    }
  }

  useEffect(() => {
    api.get("r-u?user_id=1").then((response) => {
      setRecipes(response.data);
      setActiveButton("Salvas");
      setSelected("Salvas");
    });
  }, []);

  function selectMeal(meal: any) {
    if (meal === "Salvas") {
      api.get(`r-u?user_id=1`).then((response) => {
        setRecipes(response.data);
        setActiveButton(meal);
        setSelected(meal);
      });
    } else {
      api.get(`r-u?user_id=1`).then((response) => {
        setRecipes(response.data);
        setActiveButton(meal);
        setSelected(meal);
      });
    }
  }

  return (
    <div>
      <Navbar isLogged={true} />
      <div className="container-fluid">
        <Header>
          <div className="image d-none d-md-flex">
            <img
              className="img-fluid rounded-circle"
              width="100"
              src={profile}
              alt="Perfil"
            />
          </div>
          <div className="center-center flex-column">
            <Name className="d-flex flex-row align-self-center align-self-md-start">
              Usuário
              <EditButton
                type="button"
                data-toggle="modal"
                data-target="#editarPerfil"
                className="btn center-center"
              >
                <Icon path={mdiPencil} size="1rem" color="#edf2f4" />
              </EditButton>
              <ProfileForm />
            </Name>
            <div className="d-flex flex-row">
              <Data className="text-center text-md-left">
                <Number>N</Number> enviadas
              </Data>
              <Data className="text-center text-md-left">
                <Number>N</Number> privadas
              </Data>
              <Data className="text-center text-md-left">
                <Number>N</Number> salvas
              </Data>
            </div>
          </div>
        </Header>
        <div className="row mb-4 ">
          <div className="col-12 mb-4 d-none d-md-flex center-center">
            <Category
              id="Salvas"
              onClick={() => selectMeal("Salvas")}
              className="category center-center"
            >
              Salvas
            </Category>
            <Category
              id="Enviadas"
              onClick={() => selectMeal("Enviadas")}
              className="category center-center"
            >
              Enviadas
            </Category>
            <Category
              id="Privadas"
              onClick={() => selectMeal("Privadas")}
              className="category center-center"
            >
              Privadas
            </Category>
          </div>
        </div>
        {/* <div className="row mb-4">
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
        </div> */}
        <div className="row">
          {recipes.map((recipe: RecipeProps) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-center">
        <Pagination activePage={1} totalOfRecipes={16} recipesPerPage={3} />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
