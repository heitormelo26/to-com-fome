import React from "react";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link } from "react-router-dom";

import { Title, Subtitle, Container, LinkContainer } from "./styles";
import "../../App.css";

import sidebarImage from "../../assets/images/ilustracao.png";

import { mdiLock, mdiEmail, mdiAccount } from "@mdi/js";

function SignUp() {
  return (
    <div className="container-fluid p-0 h-100">
      <div className="row m-0 h-100">
        <div className="col-md-4 p-0 h-100 sticky-top d-none d-sm-none d-md-block">
          <Sidebar
            description="Então o Tô Com Fome foi feito pra você! Escolha quais ingredientes você tem que a gente te indica quais receitas podem ser feitas com eles."
            image={sidebarImage}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0 h-100 align-self-end">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2">
            <Container className="p-5 d-flex text-center align-items-center align-content-center flex-wrap">
              <Title className="my-5 w-100 d-block">Tô Com Fome</Title>
              <Subtitle className="mb-5 w-100 d-block">Cadastrar</Subtitle>
              <Input
                className="w-100 d-block"
                type={"text"}
                iconName={mdiAccount}
                label={"Nome"}
                name={"nome"}
              />
              <Input
                className="w-100 d-block"
                type={"email"}
                iconName={mdiEmail}
                label={"Email"}
                name={"email"}
              />
              <Input
                className="w-100 d-block"
                type={"password"}
                iconName={mdiLock}
                label={"Senha"}
                name={"senha"}
              />
              <div className="my-2 w-100 d-block text-left">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="termos"
                    name="termos"
                  />
                  <label className="custom-control-label" htmlFor="termos">
                    Ao criar a sua conta, você concorda com os nossos{" "}
                    <LinkContainer>
                      <Link to="/">termos de privacidade</Link>
                    </LinkContainer>
                    .
                  </label>
                </div>
              </div>
              <div className="w-100 d-block my-3">
                <Button color="vermelho" text="Cadastrar" link="/" />
              </div>
            </Container>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
            <FooterAccount
              google={"Cadastrar com o Google"}
              text={[
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

export default SignUp;
