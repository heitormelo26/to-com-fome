import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiBookmark,
  mdiClockOutline,
  mdiHeart,
  mdiShareVariant,
  mdiSilverware,
} from "@mdi/js";

import {
  Border,
  Container,
  Description,
  Image,
  IngredientText,
  ListOL,
  ListUL,
  PrepareText,
  Subtitle,
  Tags,
  Title,
  Header,
  Buttons,
} from "./styles";

import $ from "jquery";

import { useLocation } from "react-router-dom";

import api from "../../services/api";

interface Receita {
  id: number;
  title: string;
  description: string;
  categories: string;
  image: string;
  prepare_mode: string;
  user_id: number;
  amount: number;
  time: number;
  likes: number;
}

function RecipePage() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  const [amount, setAmount] = useState<string>();
  const [user, setUser] = useState<string>();
  const [tags, setTags] = useState<string[]>();
  const [prepareMode, setPrepareMode] = useState<string[]>();
  const [recipe, setRecipe] = useState({
    id: 0,
    title: "",
    description: "",
    categories: "",
    image: "",
    prepare_mode: "",
    user_id: 0,
    amount: 0,
    time: 0,
    likes: 0,
  });

  const location = useLocation();
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const { data } = await api.get(`receita?${searchParams}`);
        setRecipe(data[0]);
      } catch (error) {
        console.log("Ocorreu um erro ao carregar a receita: " + error);
      }
    };
    getRecipe();
  }, [location.search]);

  useEffect(() => {
    setTags(recipe.categories.split(","));
    setPrepareMode(recipe.prepare_mode.split("\n"));
    if (recipe.amount <= 1) {
      setAmount(recipe.amount + " porção");
    } else {
      setAmount(recipe.amount + " porções");
    }
  }, [recipe]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await api.get(`/u-i?id=${recipe.user_id}`);
        setUser(data[0].name);
      } catch (error) {
        console.log("Ocorreu um erro ao carregar o usuário: " + error);
      }
    };
    getUser();
  }, [recipe.user_id]);

  return (
    <>
      <Navbar isLogged={true} />
      <div className="container-fluid">
        <Header>
          <Container className="jumbotron">
            <Title>{recipe.title.toLowerCase()}</Title>
            <Description>{recipe.description}</Description>
            <Buttons>
              <button
                type="button"
                className="btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Gostou da receita? Deixe sua curtida!"
              >
                <Icon
                  path={mdiHeart}
                  title="Curtir"
                  size="1rem"
                  color="#2b2d42"
                />
              </button>
              <button
                type="button"
                className="btn"
                data-toggle="tooltip"
                data-placement="top"
                title="Quer usar a receita mais tarde? Ela ficará salva no seu perfil!"
              >
                <Icon
                  path={mdiBookmark}
                  title="Salvar"
                  size="1rem"
                  color="#2b2d42"
                />
              </button>
              <button
                type="button"
                className="btn"
                data-toggle="tooltip"
                data-placement="right"
                title="Compartilhe essa receita com outras pessoas!"
              >
                <Icon
                  path={mdiShareVariant}
                  title="Compartilhar"
                  size="1rem"
                  color="#2b2d42"
                />
              </button>
            </Buttons>
          </Container>
          <Border>
            <Image src={recipe.image} alt={recipe.title} className="w-100" />
          </Border>
        </Header>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Subtitle>Sobre a receita</Subtitle>
            <Tags className="tags">
              <li>
                <span className="tag">
                  <Icon
                    path={mdiClockOutline}
                    title="Usuário"
                    size="1rem"
                    color="#8D99AE"
                    className="mr-2 tag-icon"
                  />
                  {recipe.time}
                </span>
              </li>
              <li>
                <span className="tag">
                  <Icon
                    path={mdiSilverware}
                    title="Usuário"
                    size="1rem"
                    color="#8D99AE"
                    className="mr-2 tag-icon"
                  />
                  {amount}
                </span>
              </li>
              <li>
                <span className="tag">
                  <Icon
                    path={mdiAccount}
                    title="Usuário"
                    size="1rem"
                    color="#8D99AE"
                    className="mr-2 tag-icon"
                  />
                  {user}
                </span>
              </li>
              {tags?.map(function (tag: string) {
                return (
                  <li key={tag}>
                    <a href={`/buscar?categories=${tag}`} className="tag">
                      {tag}
                    </a>
                  </li>
                );
              })}
            </Tags>
            <Subtitle>Ingredientes</Subtitle>
            <ListUL>
              <IngredientText>2 beterrabas</IngredientText>
              <IngredientText>250 g de macarrão bavette</IngredientText>
              <IngredientText>1 dente de alho descascado</IngredientText>
              <IngredientText>azeite a gosto</IngredientText>
              <IngredientText>
                sal e pimenta-do-reino moída na hora a gosto
              </IngredientText>
              <IngredientText>
                ricota esfarelada a gosto para servir
              </IngredientText>
              <IngredientText>
                folhas de endro (dill) a gosto para servir
              </IngredientText>
            </ListUL>
          </div>
          <div className="col-12 col-lg-6 text-justify">
            <Subtitle>Modo de preparo</Subtitle>
            <ListOL>
              {prepareMode?.map(function (mode: string) {
                return <PrepareText key={mode}>{mode}</PrepareText>;
              })}
            </ListOL>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Contact isLogged={false} />
      </div>
      <Footer />
    </>
  );
}

export default RecipePage;
