import React from "react";
//import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import ForgotPassword from "../ForgotPassword";

import Sidebar from "../../components/Sidebar";
import FooterAccount from "../../components/FooterAccount";
import api from "../../services/api";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

import {
  Container,
  Form,
  Error,
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

  const validate = (values: any) => {
    const errors: any = {};

    if (!values.password) {
      errors.password = "Por favor, preencha o campo acima.";
    }

    if (!values.email) {
      errors.email = "Por favor, preencha o campo acima.";
    }

    return errors;
  };
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values: any) => {
      console.log(values);
      api
        .get(`l?email=${values.email}&password=${values.password}`)
        .then((response) => {
          if (response.data[0]) {
            history.push("/");
          } else {
            swal({
              title: "Atenção!",
              text:
                "A senha ou usuário não correspondem. Por favor, verifique os dados e tente novamente!",
              icon: "warning",
              buttons: {
                cancel: false,
                confirm: {
                  text: "Tudo bem!",
                  value: true,
                  visible: true,
                  className: "",
                  closeModal: true,
                },
              },
            });
          }
        });
    },
    validateOnBlur: false,
    validateOnChange: false,
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
            </SubContainer>
            <SubContainer>
              {formik.touched.password && formik.errors.password ? (
                <Error>{formik.errors.password}</Error>
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

            <Button className="btn" type="submit" disabled={!formik.dirty}>
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
