import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Imagem from "./assets/images/ilustracao.png";
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
    </div>
  );
}

export default App;
