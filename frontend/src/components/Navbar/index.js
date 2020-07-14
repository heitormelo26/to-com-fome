import React from "react";
import { NavbarLink, NavbarTitle, NavLinks, ButtonLink } from "./styles";
import CriarReceita from "../../pages/criar-receita";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function estaLogado() {
    if (props.estaLogado) {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-start align-items-sm-start align-items-md-center align-items-lg-center align-items-xl-center">
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
            <NavbarLink
              className="nav-link d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
              data-toggle="modal"
              data-target="#criarReceita1"
            >
              Enviar receita
            </NavbarLink>
            <ButtonLink
              className="btn d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
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
        <ul className="navbar-nav ml-auto d-flex align-items-start align-items-sm-start align-items-md-center align-items-lg-center align-items-xl-center">
          <li className="nav-item mr-5 ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
            <NavbarLink className="nav-link" to="/entrar">
              Faça login
            </NavbarLink>
          </li>
          <li className="nav-item d-flex align-items-center ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
            <NavbarLink
              className="nav-link d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
              to="/cadastrar"
            >
              Inscreva-se
            </NavbarLink>
            <ButtonLink
              className="btn d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
              type="button"
            >
              <Link to="/cadastrar">Inscreva-se</Link>
            </ButtonLink>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="mb-4 d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-white px-1 px-sm-1 px-md-5 px-lg-5 px-xl-5 py-3 d-flex align-items-center">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <NavbarTitle className="navbar-brand ml-auto" to="/">
        Tô Com Fome
      </NavbarTitle>
      <NavLinks id="navbar" className=" collapse navbar-collapse ">
        {estaLogado()}
      </NavLinks>
    </nav>
  );
}
