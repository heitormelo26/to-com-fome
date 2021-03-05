import React, { useContext, useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiBookmark,
  mdiClockOutline,
  mdiDelete,
  mdiHeart,
  mdiPencil,
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
import { UserContext } from "../../contexts/UserContext";
import user from "../../store/modules/user/reducer";

interface Ingrediente {
  name: string;
  quantity: number;
  unity: string;
}

function RecipePage() {
  const { user, isLogged } = useContext(UserContext);

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  const [bookmarkColor, setBookmarkColor] = useState("#2b2d42");
  const [heartColor, setHeartColor] = useState("#2b2d42");
  const [amount, setAmount] = useState<string>();
  const [recipeUser, setRecipeUser] = useState<string>(); // Usuário "dono" da receita
  const [tags, setTags] = useState<string[]>();
  const [prepareMode, setPrepareMode] = useState<string[]>();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [userRecipe, setUserRecipe] = useState({
    // Usuário que está na receita
    id: 0,
    user_id: 0,
    recipe_id: 0,
    isLiked: 0,
    isSaved: 0,
  });
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
  const [ingredients, setIngredients] = useState<any[]>([]);

  const options = () => {
    if (user?.id === recipe.user_id) {
      return (
        <>
          <button
            type="button"
            className="btn"
            data-toggle="tooltip"
            data-placement="top"
            title="Edite sua receita"
          >
            <Icon
              path={mdiPencil}
              title="Compartilhar"
              size="1rem"
              color="#2b2d42"
            />
          </button>
          <button
            type="button"
            className="btn"
            data-toggle="tooltip"
            data-placement="right"
            title="Exclua sua receita"
          >
            <Icon
              path={mdiDelete}
              title="Compartilhar"
              size="1.5rem"
              color="#2b2d42"
            />
          </button>
        </>
      );
    }
  };

  function curtir() {
    try {
      if (recipe.id !== 0) {
        api
          .put(`/ur-l?recipe_id=${recipe.id}&user_id=${user?.id}`)
          .then((response) => {
            console.log(response);
          });
        setUserRecipe({
          ...userRecipe,
          isLiked: userRecipe.isLiked === 0 ? 1 : 0,
        });
        setHeartColor(userRecipe.isLiked === 0 ? "#ef233c" : "#2b2d42");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function salvar() {
    try {
      if (recipe.id !== 0) {
        api
          .put(`/ur-s?recipe_id=${recipe.id}&user_id=${user?.id}`)
          .then((response) => {
            console.log(response);
          });
        setUserRecipe({
          ...userRecipe,
          isSaved: userRecipe.isSaved === 0 ? 1 : 0,
        });
        setBookmarkColor(userRecipe.isSaved === 0 ? "#ef233c" : "#2b2d42");
      }
    } catch (err) {
      console.log(err);
    }
  }

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
    setPrepareMode(recipe.prepare_mode.split("@"));
    if (recipe.amount <= 1) {
      setAmount(recipe.amount + " porção");
    } else {
      setAmount(recipe.amount + " porções");
    }
  }, [recipe, ingredients]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await api.get(`/u-i?id=${recipe.user_id}`);
        setRecipeUser(data[0].name);
      } catch (error) {
        //console.log("Ocorreu um erro ao carregar o usuário: " + error);
      }
    };
    getUser();
  }, [recipe.user_id]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const { data } = await api.get(`ir-i?id=${recipe.id}`);
        setIngredients(data);
      } catch (error) {
        console.log("Ocorreu um erro ao carregar os ingredientes: " + error);
      }
    };
    getIngredients();
  }, [recipe]);

  useEffect(() => {}, [ingredients]);

  useEffect(() => {
    const getUserRecipe = async () => {
      try {
        const { data } = await api.get(
          `/ur?recipe_id=${recipe.id}&user_id=${user?.id}`
        );
        if (data.length === 0) {
          try {
            if (recipe.id !== 0 && isLogged) {
              await api
                .post(
                  `/ur?recipe_id=${recipe.id}&user_id=${user?.id}&isLiked=0&isSaved=0`
                )
                .then((response) => {
                  console.log(response);
                });
              setUserRecipe(data);
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log(data[0]);
          setUserRecipe(data[0]);
          setHeartColor(data[0].isLiked === 0 ? "#2b2d42" : "#ef233c");
          setBookmarkColor(data[0].isSaved === 0 ? "#2b2d42" : "#ef233c");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserRecipe();
  }, [recipe]);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Header>
          <Container className="jumbotron">
            <Title>{recipe.title.toLowerCase()}</Title>
            <Description>{recipe.description}</Description>
            <Buttons>
              <button
                disabled={!isLogged}
                onClick={curtir}
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
                  color={heartColor}
                />
              </button>
              <button
                disabled={!isLogged}
                onClick={salvar}
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
                  color={bookmarkColor}
                />
              </button>
              <button
                type="button"
                className="btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Compartilhe essa receita com outras pessoas!"
              >
                <Icon
                  path={mdiShareVariant}
                  title="Compartilhar"
                  size="1rem"
                  color="#2b2d42"
                />
              </button>
              {options()}
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
                  {recipe.time} minutos
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
                  {recipeUser}
                </span>
              </li>
              {tags?.map(function (tag: string) {
                return (
                  <li key={tag}>
                    <a href={`/search?categories=${tag}`} className="tag">
                      {tag}
                    </a>
                  </li>
                );
              })}
            </Tags>
            <Subtitle>Ingredientes</Subtitle>
            <ListUL>
              {ingredients?.map(function (i: Ingrediente) {
                return (
                  <IngredientText key={i.name}>
                    {i.quantity} {i.unity} de {i.name}
                  </IngredientText>
                );
              })}
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
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default RecipePage;
