import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

import ForgotPassword from "../ForgotPassword";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Link } from "react-router-dom";

import { Container, LinkAccount, Subtitle, Title } from "./styles";
import "../../App.css";

import sidebarImage from "../../assets/images/ilustracao.png";

import { mdiEmail, mdiLock } from "@mdi/js";

import api from "../../services/api";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  function login() {
    setEmail(email);
    setPassword(password);
    api.get(`l?email=${email}&password=${password}`).then((response)=>{if(response.status === 200){
      history.push("/")
    }});
    
  };
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
              <Subtitle className="mb-5 w-100 d-block">Entrar</Subtitle>
              <Input
                onChange = {e=>setEmail(e.target.value)}
                value = {email}
                className="w-100 d-block"
                type="email"
                iconName={mdiEmail}
                label="Email"
                name="email"
              />
              <Input
                value = {password}
                onChange = {e=>setPassword(e.target.value)}
                className="w-100 d-block"
                type="password"
                iconName={mdiLock}
                label="Senha"
                name="senha"
              />
              <LinkAccount
                className="w-100 d-block text-right"
                href="/"
                data-toggle="modal"
                data-target="#esqueceuSenha"
              >
                Esqueceu a senha?
              </LinkAccount>
              <ForgotPassword />
              <div className="w-100 d-block my-4">
                <button type = "submit" onClick={login} > entrar</button>
              </div>
            </Container>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0">
            <FooterAccount
              google={"Entrar com o Google"}
              text={[
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

export default SignIn;
