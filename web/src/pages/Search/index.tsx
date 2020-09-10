import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import Recipe, { RecipeProps } from "../../components/Recipe";
import Button from "../../components/Button";

import { InputText, IconGroup, Container, Select } from "./styles";

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

import $ from "jquery";

import api from "../../services/api";

import {
  meals,
  categories,
  countries,
} from "../../assets/settings/selects/data";

export default function Search() {
  $(document).ready(function () {
    $(".selectpicker").selectpicker("refresh");
  });

  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  const location = useLocation();
  useEffect(() => {
    // const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    api.get(`r?${searchParams}`).then((response) => {
      setRecipes(response.data);
    });
  }, [location]);

  return (
    <>
      <Navbar isLogged={false} />
      <Container className="jumbotron mb-5">
        <div className="row mb-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <IconGroup className="input-group-text">
                  <Icon path={mdiMagnify} size={0.8} color="#8D99AE" />
                </IconGroup>
              </div>
              <InputText
                type="text"
                placeholder="Busque uma receita aqui..."
                className="py-3 form-control"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center justify-content-start">
            <Select
              className="selectpicker show-tick d-block"
              data-live-search="true"
              data-width="100%"
              title="Categoria"
              data-size="4"
            >
              {categories.map((category: string) => {
                return <option>{category}</option>;
              })}
            </Select>
          </div>
          <div className="mb-3 col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center justify-content-start">
            <Select
              className="selectpicker show-tick d-block"
              data-live-search="true"
              data-width="100%"
              title="Refeição"
              data-size="4"
            >
              {meals.map((meal: string) => {
                return <option>{meal}</option>;
              })}
            </Select>
          </div>
          <div className="mb-3 col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center justify-content-start">
            <Select
              className="selectpicker show-tick d-block"
              data-live-search="true"
              data-width="100%"
              title="Nacionalidade"
              data-size="4"
            >
              {countries.map((country: string) => {
                return <option>{country}</option>;
              })}
            </Select>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center justify-content-end">
            <Button color="vermelho" text="Buscar" link="/buscar" />
          </div>
        </div>
      </Container>
      <div className="container mb-4">
        <div className="row">
          {recipes.map((recipe: RecipeProps) => {
            return (
              <div
                key={recipe.id}
                className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center"
              >
                <Recipe recipe={recipe} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-center">
        <Pagination activePage={1} totalOfRecipes={16} recipesPerPage={3} />
      </div>
      <Contact isLogged={false} />
      <Footer color="branco" />
    </>
  );
}
