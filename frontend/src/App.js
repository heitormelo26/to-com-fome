import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Imagem from "./assets/images/ilustracao.png";
import FooterAccount from "./components/FooterAccount";
import Input from "./components/Input";
import { Container } from "./components/Input/styles";
import { mdiLock, mdiEmail } from "@mdi/js";

function App() {
  return (
    <div className="App">
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
        <h1 className="w-100 d-block toComFomeLogin">To com Fome</h1>
        <h2 className="w-100 d-block tituloLogin"> Entrar </h2>
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
        <a className="linkEsqueceuSenha w-100 d-block text-right" href="#">
          Esqueceu a senha?
        </a>
        <div className="w-100 d-block my-3">
          <button type="button" class="btn btn-danger botaoEntrar">
            Entrar
          </button>
        </div>
      </Container>

      <FooterAccount
        google={"Entrar com o Google"}
        texto={[
          "Novo por aqui? ",
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="link-account" href="#">
            Crie a sua conta!
          </a>,
        ]}
      />
    </div>
  );
}

export default App;
