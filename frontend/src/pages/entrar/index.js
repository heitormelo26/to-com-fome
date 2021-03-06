import React from "react";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import Input from "../../components/Input";
import Botao from "../../components/Botao";

import { Link } from "react-router-dom";

import { Title, Subtitle, Container, LinkAccount } from "./styles";
import "../../App.css";

import Imagem from "../../assets/images/ilustracao.png";
import EsqueceuSenha from "../esqueceu-senha";
import { mdiLock, mdiEmail } from "@mdi/js";

function Entrar() {
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
              <Subtitle className="mb-5 w-100 d-block">Entrar</Subtitle>
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
              <LinkAccount
                className="w-100 d-block text-right"
                href="/"
                data-toggle="modal"
                data-target="#esqueceuSenha"
              >
                Esqueceu a senha?
              </LinkAccount>
              <EsqueceuSenha />
              <div className="w-100 d-block my-4">
                <Botao cor="vermelho" texto="Entrar" link="/" />
              </div>
            </Container>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
            <FooterAccount
              className="h-100 mh-100"
              google={"Entrar com o Google"}
              texto={[
                "Novo por aqui? ",
                <Link to={"/cadastrar"}>Crie uma conta!</Link>,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entrar;
