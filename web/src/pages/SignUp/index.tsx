import React from "react";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";

import { Link } from "react-router-dom";

import {
  Container,
  InputText,
  IconGroup,
  Subtitle,
  Title,
  SubContainer,
  Label,
  Button,
} from "./styles";

import eating from "../../assets/images/eating.svg";

import Icon from "@mdi/react";
import { mdiLock, mdiEmail, mdiAccount } from "@mdi/js";

function SignUp() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar
          description="Então o Tô Com Fome foi feito pra você! Escolha quais ingredientes você tem que a gente te indica quais receitas podem ser feitas com eles."
          image={eating}
        />

        <Container className="col-12 col-lg-8">
          <Title>Tô Com Fome</Title>

          <Subtitle>Cadastrar</Subtitle>

          <SubContainer className="input-group mb-3">
            <Label className="w-100 mb-3 d-block" htmlFor="email">
              Nome
            </Label>
            <IconGroup className="input-group-prepend">
              <Icon path={mdiAccount} size={0.8} color="#8D99AE" />
            </IconGroup>
            <InputText className="form-control" type="text" name="nome" />
          </SubContainer>

          <SubContainer className="input-group mb-3">
            <Label className="w-100 mb-3 d-block" htmlFor="email">
              Email
            </Label>
            <IconGroup className="input-group-prepend">
              <Icon path={mdiEmail} size={0.8} color="#8D99AE" />
            </IconGroup>
            <InputText className="form-control" type="email" name="email" />
          </SubContainer>

          <SubContainer className="input-group mb-3">
            <Label className="w-100 mb-3 d-block" htmlFor="senha">
              Senha
            </Label>
            <IconGroup className="input-group-prepend">
              <Icon path={mdiLock} size={0.8} color="#8D99AE" />
            </IconGroup>
            <InputText className="form-control" type="password" name="senha" />
          </SubContainer>

          <Button className="btn" type="submit">
            Cadastrar
          </Button>
          <SubContainer>
            <FooterAccount
              google={"Cadastrar com o Google"}
              text={[
                "Já possui uma conta? ",
                <Link to={"/entrar"}>Entre agora!</Link>,
              ]}
            />
          </SubContainer>
        </Container>
      </div>
    </div>
  );
}

export default SignUp;
