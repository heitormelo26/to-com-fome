import React from "react";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import Input from "../../components/Input";

import { Link } from "react-router-dom";

import { Title, Subtitle, Container, Button, LinkContainer } from "./styles";
import "../../App.css";

import Imagem from "../../assets/images/ilustracao.png";
import { mdiLock, mdiEmail, mdiAccount } from "@mdi/js";

function Cadastrar() {
  return (
    <div>
      <Sidebar
        descricao={[
          "Então o ",
          <strong>Tô Com Fome</strong>,
          " foi feito pra",
          <br />,
          "você! Escolha quais ingredientes",
          <br />,
          "você tem que a gente te indica",
          <br />,
          "quais receitas podem ser feitas",
          <br />,
          "com eles.",
        ]}
        imagem={Imagem}
        descricaoImagem={"Café da manhã"}
      />

      <Container className="d-flex text-center align-items-center align-content-center flex-wrap">
        <Title className="mb-5 w-100 d-block">Tô Com Fome</Title>
        <Subtitle className="mb-5 w-100 d-block">Cadastrar</Subtitle>
        <Input
          className="w-100 d-block"
          tipo={"text"}
          icone={mdiAccount}
          label={"nome"}
        />
        <Input
          className="w-100 d-block"
          tipo={"mail"}
          icone={mdiEmail}
          label={"email"}
        />
        <Input
          className="w-100 d-block"
          tipo={"password"}
          icone={mdiLock}
          label={"senha"}
        />
        <div className="my-2 w-100 d-block text-left">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="ingredient5"
            />
            <label class="custom-control-label" for="ingredient5">
              Ao criar a sua conta, você concorda com os nossos{" "}
              <LinkContainer>
                <Link to="/">termos de privacidade</Link>
              </LinkContainer>
              .
            </label>
          </div>
        </div>

        <div className="w-100 d-block my-4">
          <Button type="button" class="btn btn-danger">
            Cadastrar
          </Button>
        </div>
      </Container>

      <FooterAccount
        google={"Cadastrar com o Google"}
        texto={["Já possui uma conta? ", <Link to={"/"}>Entre agora!</Link>]}
      />
    </div>
  );
}

export default Cadastrar;
