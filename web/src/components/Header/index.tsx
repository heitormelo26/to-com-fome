import React from "react";

import IngredientForm from "../../pages/IngredientForm";

import { Container, Title, Subtitle, HeaderButton } from "./styles";

import cooking from "../../assets/images/cooking.svg";

const Header = () => {
  return (
    <Container className="jumbotron">
      <div className="content">
        <Title className="display-4">Tá com fome?</Title>
        <Subtitle>
          Então o <strong>Tô Com Fome</strong> foi feito pra você! Escolha quais
          ingredientes você tem que a gente te indica quais receitas podem ser
          feitas com eles.
        </Subtitle>
        <HeaderButton
          className="btn btn-header"
          type="button"
          data-toggle="modal"
          data-target="#selecionarIngredientes"
        >
          O que tem na sua geladeira?
        </HeaderButton>
        <IngredientForm />
      </div>
      <div className="image">
        <img src={cooking} width="350" className="d-none d-md-flex" />
      </div>
    </Container>
  );
};

export default Header;
