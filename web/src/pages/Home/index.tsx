import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Recipe, { RecipeProps } from "../../components/Recipe";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import {
  Category,
  CategoryTitle,
  IconCategory,
  IconCategorySelected,
  More,
} from "./styles";
import "../../App.css";

import api from "../../services/api";

import { flags } from "../../assets/settings/slider/flags";
import { settings } from "../../assets/settings/slider/slider";
import { homeMeals } from "../../assets/settings/selects/data";

import Icon from "@mdi/react";
import {
  mdiArrowRight,
  mdiBaguette,
  mdiCupcake,
  mdiFood,
  mdiFoodCroissant,
  mdiPasta,
  mdiPizza,
  mdiSilverwareVariant,
} from "@mdi/js";

function Home() {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  useEffect(() => {
    api.get("r-m").then((response) => {
      setRecipes(response.data);
      let activeButton = document.getElementById("Todas");
      if (activeButton) {
        activeButton.classList.add("active");
        activeButton.style.background = "#ef233c";
        activeButton.style.color = "#ffffff";
      }
    });
  }, []);

  function selectMeal(meal: any) {
    if (meal === "Todas") {
      api.get(`r-m`).then((response) => {
        setRecipes(response.data);
        let activeButton = document.getElementById(meal);
        if (activeButton) {
          activeButton.style.background = "#ef233c";
          activeButton.style.color = "#ffffff";
        }
      });
    } else {
      api.get(`r-m?meals=${meal}`).then((response) => {
        setRecipes(response.data);
        document.querySelectorAll("button.category").forEach((b) => {
          let activeButton = document.getElementById(b.id);
          if (activeButton) {
            activeButton.style.background = "#edf2f4";
            activeButton.style.color = "#8d99ae";
          }
        });
        let activeButton = document.getElementById(meal);
        if (activeButton) {
          activeButton.style.background = "#ef233c";
          activeButton.style.color = "#ffffff";
        }
      });
    }
  }

  return (
    <>
      <Navbar isLogged={true} />
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12 mb-4 d-none d-md-flex center-center">
            {homeMeals.map((meal: string) => {
              return (
                <Category
                  key={meal}
                  id={meal}
                  onClick={() => selectMeal(meal)}
                  className="category text-truncate center-center"
                >
                  {meal}
                </Category>
              );
            })}
          </div>
          <div className="col-md-12 mb-4 d-flex d-md-none center-center">
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
          <div className="col-md-12 mb-5 d-flex d-md-none center-center">
            <CategoryTitle className="m-0">Todas as receitas</CategoryTitle>
          </div>
          {recipes.map((recipe: RecipeProps) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
          <div className="col-12 center-center">
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
        {/* Slide */}
      </div>
      <div className="container-fluid">
        <Contact isLogged={false} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
