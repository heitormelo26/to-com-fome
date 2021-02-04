import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ForgotPassword from "../ForgotPassword";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";

import { Link } from "react-router-dom";

import {
  Container,
  ForgotButton,
  InputText,
  IconGroup,
  Subtitle,
  Title,
  SubContainer,
  Label,
  Button,
} from "./styles";

import eating from "../../assets/images/hamburger.svg";

import { mdiEmail, mdiLock } from "@mdi/js";

import api from "../../services/api";
import Icon from "@mdi/react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function login() {
    setEmail(email);
    setPassword(password);
    api.get(`l?email=${email}&password=${password}`).then((response) => {
      if (response.status === 200) {
        history.push("/");
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar
          description="Então o Tô Com Fome foi feito pra você! Escolha quais ingredientes você tem que a gente te indica quais receitas podem ser feitas com eles."
          image={eating}
        />

        <Container className="col-12 col-lg-8">
          <Title>Tô Com Fome</Title>

          <Subtitle>Entrar</Subtitle>

          <SubContainer className="input-group mb-3">
            <Label className="w-100 mb-3 d-block" htmlFor="email">
              Email
            </Label>
            <IconGroup className="input-group-prepend">
              <Icon path={mdiEmail} size={0.8} color="#8D99AE" />
            </IconGroup>
            <InputText
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              type="email"
              name="email"
            />
          </SubContainer>

          <SubContainer className="input-group mb-3">
            <Label className="w-100 mb-3 d-block" htmlFor="senha">
              Senha
            </Label>
            <IconGroup className="input-group-prepend">
              <Icon path={mdiLock} size={0.8} color="#8D99AE" />
            </IconGroup>
            <InputText
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              type="password"
              name="senha"
            />
          </SubContainer>

          <SubContainer className="d-flex justify-content-end mb-4">
            <ForgotButton
              type="button"
              data-toggle="modal"
              data-target="#esqueceuSenha"
            >
              Esqueceu a senha?
            </ForgotButton>
            <ForgotPassword />
          </SubContainer>

          <Button className="btn" type="submit" onClick={login}>
            Entrar
          </Button>
          <SubContainer>
            <FooterAccount
              google={"Entrar com o Google"}
              text={[
                "Novo por aqui? ",
                <Link to={"/cadastrar"}>Crie uma conta!</Link>,
              ]}
            />
          </SubContainer>
        </Container>
      </div>
    </div>
  );
}

export default SignIn;
