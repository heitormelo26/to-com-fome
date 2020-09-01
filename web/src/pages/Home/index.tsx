import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import IngredientForm from "../IngredientForm";

import Navbar from "../../components/Navbar";
import Recipe, { RecipeProps } from "../../components/Recipe";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import {
  Category,
  CategorySelected,
  CategoryTitle,
  Container,
  Fridge,
  IconCategory,
  IconCategorySelected,
  More,
  Subtitle,
  Title,
} from "./styles";
import "../../App.css";

import Icon from "@mdi/react";
import {
  mdiArrowLeftCircle,
  mdiArrowRight,
  mdiArrowRightCircle,
  mdiBaguette,
  mdiCupcake,
  mdiFood,
  mdiFoodCroissant,
  mdiPasta,
  mdiPizza,
  mdiSilverwareVariant,
} from "@mdi/js";

import headerImage from "../../assets/images/ilustracao.png";
import alemanhaIcon from "../../assets/images/alemanha.png";
import brasilIcon from "../../assets/images/brasil.png";
import chinaIcon from "../../assets/images/china.png";
import euaIcon from "../../assets/images/estados-unidos.png";
import francaIcon from "../../assets/images/franca.png";
import japaoIcon from "../../assets/images/japao.png";
import ukIcon from "../../assets/images/reino-unido.png";

import api from "../../services/api";
import { settings } from "../../assets/settings/slider/slider";

function Home() {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    api.get("recipes").then((response) => {
      console.log(response.data);
      // const { total } = response.data;

      // setTotalConnections(total);
    });
  }, []);

  return (
    <>
      <Navbar isLogged={true} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Container className="jumbotron mb-5">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6 text-center text-sm-center text-md-left text-lg-left text-xl-left">
                    <Title>Tá com fome?</Title>
                    <Subtitle className="lead">
                      Então o <strong>Tô Com Fome</strong> foi feito pra você!
                      Escolha quais ingredientes você tem que a gente te indica
                      quais receitas podem ser feitas com eles.
                    </Subtitle>
                    <Fridge
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#selecionarIngredientes"
                    >
                      O que tem na sua geladeira?
                    </Fridge>
                    <IngredientForm />
                  </div>
                  <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <img
                      className="w-75 p-3 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
                      src={headerImage}
                      alt="Café da manhã"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12 mb-4 d-none d-sm-none d-md-flex d-l-flex d-xl-flex justify-content-center align-items-center">
            <CategorySelected className="mr-3 text-center text-truncate btn">
              Todas
            </CategorySelected>
            <Category className="mr-3 text-center text-truncate btn">
              Café da manhã
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              Brunch
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              Almoço
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              Lanche
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              Jantar
            </Category>
            <Category className="text-center text-truncate btn">
              Sobremesa
            </Category>
          </div>
          <div className="col-md-12 mb-4 d-flex d-sm-flex d-md-none d-l-none d-xl-none justify-content-center align-items-center">
            <IconCategorySelected className="mr-3 text-center btn">
              <Icon path={mdiSilverwareVariant} color="#ffffff" size={1} />
            </IconCategorySelected>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiBaguette} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiFoodCroissant} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiPasta} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiFood} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiPizza} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="text-center btn">
              <Icon path={mdiCupcake} color="#8d99ae" size={1} />
            </IconCategory>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12 mb-5 d-flex d-sm-flex d-md-none d-l-none d-xl-none justify-content-center align-items-center">
            <CategoryTitle className="m-0">Todas as receitas</CategoryTitle>
          </div>
          {recipes.map((recipe: RecipeProps) => {
            return (
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
                <Recipe key={recipe.id} recipe={recipe} />
              </div>
            );
          })}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2 d-flex justify-content-center align-items-center">
            <More to="/buscar" className="text-decoration-none">
              Mais receitas{" "}
              <Icon
                path={mdiArrowRight}
                size={0.7}
                color="#ef233c"
                className="ml-2"
              />
            </More>
          </div>
        </div>
        {/* Slide */}
        <div className="row my-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Slider {...settings} className="my-4">
              <div key={0} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link to="../buscar/alemanha">
                    <img alt="" width="75" height="75" src={alemanhaIcon} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/alemanha">
                  <h3 className="d-none text-center flag-title">Alemanha</h3>
                </Link>
              </div>
              <div key={1} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/brasil">
                    <img alt="" width="75" height="75" src={brasilIcon} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/brasil">
                  <h3 className="d-none text-center flag-title">Brasil</h3>
                </Link>
              </div>
              <div key={2} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/china">
                    <img alt="" width="75" height="75" src={chinaIcon} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/china">
                  <h3 className="d-none text-center flag-title">China</h3>
                </Link>
              </div>
              <div key={3} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/eua">
                    <img alt="" width="75" height="75" src={euaIcon} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/eua">
                  <h3 className="d-none text-center flag-title">EUA</h3>
                </Link>
              </div>
              <div key={4} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/franca">
                    <img alt="" width="75" height="75" src={francaIcon} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/franca">
                  <h3 className="d-none text-center flag-title">França</h3>
                </Link>
              </div>
              <div key={5} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/japao">
                    <img alt="" width="75" height="75" src={japaoIcon} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/japao">
                  <h3 className="d-none text-center flag-title">Japão</h3>
                </Link>
              </div>
              <div key={6} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/uk">
                    <img alt="" width="75" height="75" src={ukIcon} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/uk">
                  <h3 className="d-none text-center flag-title">UK</h3>
                </Link>
              </div>
              <div key={7} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={alemanhaIcon} />
                </div>
                <h3 className="d-none text-center flag-title">Alemanha 2</h3>
              </div>
              <div key={8} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={brasilIcon} />
                </div>
                <h3 className="d-none text-center flag-title">Brasil 2</h3>
              </div>
              <div key={9} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={chinaIcon} />
                </div>
                <h3 className="d-none text-center flag-title">China 2</h3>
              </div>
              <div key={10} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={euaIcon} />
                </div>
                <h3 className="d-none text-center flag-title">EUA 2</h3>
              </div>
            </Slider>
          </div>
        </div>
        {/* Slide */}
      </div>
      <Contact isLogged={false} />
      <Footer color="branco" />
    </>
  );
}

export default Home;
