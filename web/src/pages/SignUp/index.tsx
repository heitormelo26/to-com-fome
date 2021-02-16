import React from "react";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import api from "../../services/api";

import { useFormik } from "formik";

import { Link, useHistory } from "react-router-dom";

import {
  Container,
  InputText,
  Form,
  IconGroup,
  Subtitle,
  Title,
  SubContainer,
  Label,
  Button,
  Error,
} from "./styles";

import eating from "../../assets/images/eating.svg";

import Icon from "@mdi/react";
import { mdiLock, mdiEmail, mdiAccount } from "@mdi/js";

function SignUp() {
  //const [invalidInput, setInvalidInput] = useState(true);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Por favor, preencha o campo acima.";
    } else if (values.name.length < 2) {
      errors.name = "Por favor, preencha seu nome.";
    } else if (!/^[a-zA-Z\s]*$/i.test(values.name)) {
      errors.name = "Por favor, utilize somente letras.";
    }

    if (!values.password) {
      errors.password = "Por favor, preencha o campo acima.";
    } else if (values.password.length < 6) {
      errors.password =
        "Para sua segurança, utilize uma senha com no mínimo 6 dígitos.";
    }

    if (!values.email) {
      errors.email = "Por favor, preencha o campo acima.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Por favor, informe um email válido.";
    }

    return errors;
  };
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate,
    onSubmit: (values: any) => {
      api
        .post(
          `/u?name=${values.name}&email=${values.email}&password=${values.password}`
        )
        .then((response) => {
          if (response.status === 200) {
            history.push("/");
          } else {
          }
        });
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  // function setarInput() {
  //   const inputEmailElement = document.getElementById(
  //     "inputEmail"
  //   ) as HTMLInputElement;
  //   const inputPasswordElement = document.getElementById(
  //     "inputPassword"
  //   ) as HTMLInputElement;
  //   const inputNameElement = document.getElementById(
  //     "inputName"
  //   ) as HTMLInputElement;

  //   if (inputEmailElement.value.length > 0 && inputPasswordElement.value.length > 0  && inputNameElement.value.length >0) setInvalidInput(false);
  //   else setInvalidInput(true)

  // }

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
          <Form className="" onSubmit={formik.handleSubmit}>
            <SubContainer className="input-group mb-3">
              <Label className="w-100 mb-3 d-block" htmlFor="email">
                Nome
              </Label>
              <IconGroup className="input-group-prepend">
                <Icon path={mdiAccount} size="1rem" color="#8D99AE" />
              </IconGroup>
              <InputText
                className="form-control"
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </SubContainer>
            <SubContainer>
              {formik.touched.name && formik.errors.name ? (
                <Error>{formik.errors.name}</Error>
              ) : null}
            </SubContainer>
            <SubContainer className="input-group mb-3">
              <Label className="w-100 mb-3 d-block" htmlFor="email">
                Email
              </Label>
              <IconGroup className="input-group-prepend">
                <Icon path={mdiEmail} size="1rem" color="#8D99AE" />
              </IconGroup>
              <InputText
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </SubContainer>
            <SubContainer>
              {formik.touched.email && formik.errors.email ? (
                <Error>{formik.errors.email}</Error>
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
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </SubContainer>
            <SubContainer>
              {formik.touched.password && formik.errors.password ? (
                <Error>{formik.errors.password}</Error>
              ) : null}
            </SubContainer>
            <Button className="btn" type="submit" disabled={!formik.dirty}>
              Cadastrar
            </Button>
          </Form>
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
