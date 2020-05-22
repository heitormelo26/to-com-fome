import React from "react";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import Input from "../../components/Input";

import { Link } from "react-router-dom";

import { Title, Subtitle, Container, Button, LinkAccount } from "./styles";

import Imagem from "../../assets/images/ilustracao.png";
import { mdiLock, mdiEmail } from "@mdi/js";

function Entrar() {
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
        <Subtitle className="mb-5 w-100 d-block">Entrar</Subtitle>
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
        <LinkAccount className="w-100 d-block text-right" href="/">
          Esqueceu a senha?
        </LinkAccount>
        <div className="w-100 d-block my-4">
          <Button type="button" class="btn btn-danger">
            Entrar
          </Button>
        </div>
      </Container>

      <FooterAccount
        google={"Entrar com o Google"}
        texto={[
          "Novo por aqui? ",
          <Link to={"/cadastrar"}>Crie a sua conta!</Link>,
        ]}
      />
    </div>
  );
}

export default Entrar;
