import React from "react";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import Input from "../../components/Input";
import Botao from "../../components/Botao";

import { Link } from "react-router-dom";

import { Title, Subtitle, Container, LinkContainer } from "./styles";
import "../../App.css";

import Imagem from "../../assets/images/ilustracao.png";
import { mdiLock, mdiEmail, mdiAccount } from "@mdi/js";

function Cadastrar() {
  return (
    <div className="container-fluid p-0 h-100">
      <div className="row m-0 h-100">
        <div className="col-md-4 p-0 h-100 sticky-top d-none d-sm-none d-md-block">
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
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0 h-100 align-self-end">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2">
            <Container className="p-5 d-flex text-center align-items-center align-content-center flex-wrap">
              <Title className="my-5 w-100 d-block">Tô Com Fome</Title>
              <Subtitle className="mb-5 w-100 d-block">Cadastrar</Subtitle>
              <Input
                className="w-100 d-block"
                tipo={"text"}
                icone={mdiAccount}
                label={"nome"}
              />
              <Input
                className="w-100 d-block"
                tipo={"email"}
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="ingredient5"
                  />
                  <label className="custom-control-label" for="ingredient5">
                    Ao criar a sua conta, você concorda com os nossos{" "}
                    <LinkContainer>
                      <Link to="/">termos de privacidade</Link>
                    </LinkContainer>
                    .
                  </label>
                </div>
              </div>
              <div className="w-100 d-block my-3">
                <Botao cor="vermelho" texto="Cadastrar" link="/" />
              </div>
            </Container>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
            <FooterAccount
              className="h-100 mh-100"
              google={"Cadastrar com o Google"}
              texto={[
                "Já possui uma conta? ",
                <Link to={"/entrar"}>Entre agora!</Link>,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastrar;
