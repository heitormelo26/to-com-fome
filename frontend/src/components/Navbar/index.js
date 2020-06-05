import React from "react";
import Button from "../Botao";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function estaLogado() {
    if (props.estaLogado) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-5 py-3 ">
            <Link className="nav-link" to="/">
              Sair
            </Link>
          </li>
          <li className="nav-item mr-5 py-3">
            <Link className="nav-link" to="/perfil">
              Perfil
            </Link>
          </li>
          <li
            className="nav-item mr-5 py-3
          "
          >
            <Button cor="vermelho" texto="Enviar receita" link="/enviar" />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-5 py-3">
            <Link className="nav-link" to="/">
              Faça login
            </Link>
          </li>
          <li className="nav-item mr-5 py-3">
            <Button cor="vermelho" texto="Inscreva-se" link="/cadastrar" />
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Tô Com Fome
      </Link>
      <div className="collapse navbar-collapse">{estaLogado()}</div>
    </nav>
  );
}
