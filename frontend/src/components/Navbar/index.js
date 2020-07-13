import React from "react";
import Button from "../Botao";
import { NavbarLink, NavbarTitle, NavLinks, ButtonLink } from "./styles";
import CriarReceita from "../../pages/criar-receita";

export default function Navbar(props) {
  function estaLogado() {
    if (props.estaLogado) {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-start">
          <li className="nav-item mr-5 ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
            <NavbarLink className="nav-link" to="/entrar">
              Sair
            </NavbarLink>
          </li>
          <li className="nav-item mr-5 ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
            <NavbarLink className="nav-link" to="/perfil">
              Perfil
            </NavbarLink>
          </li>
          <li className="nav-item d-flex align-items-center ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
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
    <nav className="mb-4 d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-white px-1 px-sm-1 px-md-5 px-lg-5 px-xl-5 py-3 d-flex align-items-center">
      <button
        className="navbar-toggler
        ml-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavbarTitle className="navbar-brand ml-auto" to="/">
        Tô Com Fome
      </NavbarTitle>
      <NavLinks
        id="navbarSupportedContent"
        className=" collapse navbar-collapse "
      >
        {estaLogado()}
      </NavLinks>
    </nav>
  );
}
