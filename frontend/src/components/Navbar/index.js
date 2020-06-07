import React from "react";
import Button from "../Botao";
import { NavbarLink, NavbarTitle, NavLinks } from "./styles";

export default function Navbar(props) {
  function estaLogado() {
    if (props.estaLogado) {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item mr-5">
            <NavbarLink className="nav-link" to="/">
              Sair
            </NavbarLink>
          </li>
          <li className="nav-item mr-5">
            <NavbarLink className="nav-link" to="/perfil">
              Perfil
            </NavbarLink>
          </li>
          <li className="nav-item d-flex align-items-center">
            <Button cor="vermelho" texto="Enviar receita" link="/enviar" />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item mr-5">
            <NavbarLink className="nav-link" to="/">
              Faça login
            </NavbarLink>
          </li>
          <li className="nav-item d-flex align-items-center">
            <Button cor="vermelho" texto="Inscreva-se" link="/cadastrar" />
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="mb-5 navbar navbar-expand-lg navbar-light bg-white px-5 py-3 d-flex align-items-center">
      <NavbarTitle className="navbar-brand" to="#">
        Tô Com Fome
      </NavbarTitle>
      <NavLinks className="d-none d-sm-none collapse navbar-collapse d-flex align-items-center">
        {estaLogado()}
      </NavLinks>
    </nav>
  );
}
