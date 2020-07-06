import React from "react";
import Button from "../Botao";
import { NavbarLink, NavbarTitle, NavLinks, ButtonLink } from "./styles";
import CriarReceita from "../../pages/criar-receita";

export default function Navbar(props) {
  function estaLogado() {
    if (props.estaLogado) {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item mr-5">
            <NavbarLink className="nav-link" to="/entrar">
              Sair
            </NavbarLink>
          </li>
          <li className="nav-item mr-5">
            <NavbarLink className="nav-link" to="/perfil">
              Perfil
            </NavbarLink>
          </li>
          <li className="nav-item d-flex align-items-center">
            <ButtonLink
              className="btn"
              type="button"
              data-toggle="modal"
              data-target="#criarReceita1"
            >
              Enviar receita
            </ButtonLink>
            <CriarReceita />
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
    <nav className="mb-4 d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-white px-5 py-3 d-flex align-items-center">
      <NavbarTitle className="navbar-brand m-0" to="/">
        Tô Com Fome
      </NavbarTitle>
      <NavLinks className="d-none d-sm-none collapse navbar-collapse d-flex align-items-center">
        {estaLogado()}
      </NavLinks>
    </nav>
  );
}
