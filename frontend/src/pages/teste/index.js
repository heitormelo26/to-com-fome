import React from "react";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";

function Teste() {
  return (
    <div className="fixed-bottom">
      <Contato estaLogado={false} />
      <Footer cor="branco" />
    </div>
  );
}

export default Teste;
