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
        descricao1={
          "Cadastrar com o Google"
        }
        descricao2={
          "Novo por aqui? Crie sua conta"
        }
        descricao3={
          "2020 TÔ COM FOME"
        }
      />
    </div>
  );
}

export default App;
