import React from "react";
import Sidebar from "./components/Sidebar";
import { Row, Col } from "reactstrap";
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md="3">
          <Sidebar
            descricao="Então o Tô Com Fome foi feito pra você! Escolha quais ingredientes você tem que a gente te indica quais receitas podem ser feitas com eles."
            imagem="https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
