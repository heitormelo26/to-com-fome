import React /*, { useState } */ from "react";
//import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import ForgotPassword from "../ForgotPassword";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";

import { Link } from "react-router-dom";

import {
  Container,
  Form,
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

//import api from "../../services/api";
import Icon from "@mdi/react";

function SignIn() {
  /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidInput, setInvalidInput] = useState(true);
  const history = useHistory(); */

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //validate,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  /* function login() {
    setEmail(email);
    setPassword(password);
    api.get(`l?email=${email}&password=${password}`).then((response) => {
      if (response.status === 200) {
        history.push("/");
      }
    });
  }

  function setarInput() {
    const inputEmailElement = document.getElementById(
      "inputEmail"
    ) as HTMLInputElement;
    const inputPasswordElement = document.getElementById(
      "inputPassword"
    ) as HTMLInputElement;

    if (
      inputEmailElement.value.length > 0 &&
      inputPasswordElement.value.length > 0
    )
      setInvalidInput(false);
    else setInvalidInput(true);
  } */

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

          <Form className="" onSubmit={formik.handleSubmit}>
            <SubContainer className="input-group mb-3">
              <Label className="w-100 mb-3 d-block" htmlFor="email">
                Email
              </Label>
              <IconGroup className="input-group-prepend">
                <Icon path={mdiEmail} size="1rem" color="#8D99AE" />
              </IconGroup>
              <InputText
                //onChange={(e) => {setEmail(e.target.value);setarInput()}}
                //value={email}
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </SubContainer>

            <SubContainer className="input-group mb-3">
              <Label className="w-100 mb-3 d-block" htmlFor="senha">
                Senha
              </Label>
              <IconGroup className="input-group-prepend">
                <Icon path={mdiLock} size="1rem" color="#8D99AE" />
              </IconGroup>
              <InputText
                //value={password}
                //onChange={(e) => {setPassword(e.target.value);setarInput()}}
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
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

            <Button className="btn" type="submit">
              Entrar
            </Button>
          </Form>
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
