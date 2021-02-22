import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Recipe, { RecipeProps } from "../../components/Recipe";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Category, Dropdown, DropdownMenu, More } from "./styles";
import "./styles.css";

import api from "../../services/api";

import { flags } from "../../assets/settings/slider/flags";
import { settings } from "../../assets/settings/slider/slider";
import { homeMeals, meals } from "../../assets/settings/selects/data";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

function Home() {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [selected, setSelected] = useState("Todas as receitas");

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
    api.get("r-m").then((response) => {
      setRecipes(response.data);
      setActiveButton("Todas");
      setSelected("Todas as receitas");
    });
  }, []);

  function selectMeal(meal: any) {
    if (meal === "Todas") {
      api.get(`r-m`).then((response) => {
        setRecipes(response.data);
        setActiveButton(meal);
        setSelected(meal);
      });
    } else {
      api.get(`r-m?meals=${meal}`).then((response) => {
        setRecipes(response.data);
        setActiveButton(meal);
        setSelected(meal);
      });
    }
  }

  return (
    <>
      <Navbar isLogged={true} />
      <div className="container-fluid">
        <Header />
        <div className="row mb-4">
          {/* Categorias - tablet, em diante */}
          <div className="col-12 mb-4 d-none d-md-flex center-center">
            {homeMeals.map((meal: string) => {
              return (
                <Category
                  key={meal}
                  id={meal}
                  onClick={() => selectMeal(meal)}
                  className="category center-center"
                >
                  {meal}
                </Category>
              );
            })}
          </div>

          {/* Categorias - mobile */}
          <div className="col-md-12 mb-4 d-flex d-md-none center-center">
            <div className="dropdown w-100">
              <Dropdown
                className="btn btn-block dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selected}
              </Dropdown>
              <DropdownMenu
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                {homeMeals.map((meal: string) => {
                  return (
                    <button
                      key={meal}
                      id={meal}
                      onClick={() => selectMeal(meal)}
                      className="dropdown-item"
                    >
                      {meal}
                    </button>
                  );
                })}
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Receitas */}
        <div className="row mb-5">
          {recipes.map((recipe: RecipeProps) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
          <div className="col-12 center-center">
            <More
              to={{
                pathname: "/buscar",
                search: `?meal=${meals}`,
              }}
              className="text-decoration-none"
            >
              <span>Mostrar mais</span>
              <Icon path={mdiArrowRight} size={0.8} color="#ef233c" />
            </More>
          </div>
        </div>

        {/* Slide */}
        <div className="row my-5 mx-lg-5">
          <div className="col-12">
            <Slider {...settings} className="my-4">
              {flags.map((flag) => {
                return (
                  <div key={flag.country} className="flag text-center">
                    <div className="center-center">
                      <Link to={flag.link}>
                        <img
                          alt={flag.country}
                          width="75"
                          height="75"
                          src={flag.image}
                        />
                      </Link>
                    </div>
                    <Link className="text-decoration-none" to={flag.link}>
                      <h3 className="d-none text-center flag-title">
                        {flag.country}
                      </h3>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* Contato */}
        <Contact isLogged={false} />
      </div>

      {/* Footer*/}
      <Footer />
    </>
  );
}

export default Home;
