import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import Recipe, { RecipeProps } from "../../components/Recipe";

import {
  InputText,
  IconGroup,
  Container,
  Select,
  SearchButton,
} from "./styles";

import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

import api from "../../services/api";

import {
  meals,
  categories,
  countries,
} from "../../assets/settings/selects/data";

export default function Search() {
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
      <Navbar isLogged={true} />

      <div className="container-fluid">
        <Container className="jumbotron">
          {/* Buscar */}
          <div className="row mb-4">
            <div className="col-12 center-center">
              <div className="input-group">
                <InputText
                  type="text"
                  className="form-control"
                  placeholder="Buscar..."
                  aria-label="Buscar..."
                />
                <div className="input-group-append">
                  <IconGroup className="input-group-text">
                    <Icon path={mdiMagnify} size={0.8} color="#8D99AE" />
                  </IconGroup>
                </div>
              </div>
            </div>
          </div>

          {/* Selects */}
          <div className="row">
            {/* Categoria */}
            <div className="col-12 col-md-3 center-center">
              <Select
                className="selectpicker w-100"
                data-live-search="true"
                title="Categoria"
                data-size="4"
              >
                {categories.map((category: string) => {
                  return <option>{category}</option>;
                })}
              </Select>
            </div>

            {/* Refeição */}
            <div className="col-12 col-md-3 center-center">
              <Select
                className="selectpicker w-100"
                data-live-search="true"
                title="Refeição"
                data-size="4"
              >
                {meals.map((meal: string) => {
                  return <option>{meal}</option>;
                })}
              </Select>
            </div>

            {/* Nacionalidade */}
            <div className="col-12 col-md-3 center-center">
              <Select
                className="selectpicker w-100"
                data-live-search="true"
                title="Nacionalidade"
                data-size="4"
              >
                {countries.map((country: string) => {
                  return <option>{country}</option>;
                })}
              </Select>
            </div>

            {/* Botão */}
            <div className="col-12 col-md-3 d-flex align-items-center justify-content-end">
              <SearchButton type="button" className="btn">
                Buscar
              </SearchButton>
            </div>
          </div>
        </Container>
        {/* Receitas */}
        <div className="row">
          {recipes.map((recipe: RecipeProps) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
        </div>

        {/* Paginação */}
        <div className="mb-5 center-center">
          <Pagination activePage={1} totalOfRecipes={16} recipesPerPage={3} />
        </div>

        {/* Contato */}
        <Contact isLogged={false} />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
