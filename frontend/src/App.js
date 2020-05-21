import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Imagem from "./assets/images/ilustracao.png";
import FooterAccount from "./components/FooterAccount";
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
      <FooterAccount
        google={"Entrar com o Google"}
        texto={[
          "Novo por aqui? ",
          <a className="link-account" href="#">
            Crie a sua conta!
          </a>,
        ]}
      />
    </div>
  );
}

export default App;
