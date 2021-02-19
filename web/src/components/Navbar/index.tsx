import React from "react";

import { Link } from "react-router-dom";

import RecipeForm from "../../pages/RecipeForm";

import {
  Nav,
  NavbarTitle,
  NavbarLink,
  NavbarRightLink,
  NavButton,
  NavbarToggle,
  IconBar,
} from "./styles";
import "./styles.css";
import "../../App.css";

interface NavbarProps {
  isLogged: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLogged }) => {
  function navLeftLinks() {
    /* Adiciona o link do Perfil */
    if (isLogged) {
      return (
        /* Ordem de aparição: Início - Buscar - Perfil */
        <li className="nav-item">
          <NavbarLink className="nav-link" to="/perfil">
            Perfil
          </NavbarLink>
          <NavbarLink
            className="nav-link d-flex d-lg-none"
            data-toggle="modal"
            data-target="#criarReceita1"
            type="button"
            to=""
          >
            Enviar Receita
          </NavbarLink>
          <NavbarLink className="d-flex d-lg-none nav-link" to="/entrar">
            Sair
          </NavbarLink>
        </li>
      );
    }
  }

  function navRightLinks() {
    /* Muda as opções do lado direito da Navbar */
    if (isLogged) {
      return (
        <>
          <NavbarRightLink className="nav-link" to="/entrar">
            Sair
          </NavbarRightLink>
          <NavButton
            className="btn btn-navbar"
            data-toggle="modal"
            data-target="#criarReceita1"
            type="button"
          >
            Enviar Receita
          </NavButton>
        </>
      );
    } else {
      return (
        <>
          <NavbarRightLink className="nav-link" to="/entrar">
            Entrar
          </NavbarRightLink>

          <NavButton className="btn btn-navbar">
            <Link to="/cadastrar">Cadastrar</Link>
          </NavButton>
        </>
      );
    }
  }

  return (
    <Nav className="navbar navbar-expand-lg navbar-light">
      <NavbarToggle
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
      >
        <IconBar className="icon-bar" />
        <IconBar className="icon-bar" />
        <IconBar className="icon-bar" />
      </NavbarToggle>

      <NavbarTitle className="navbar-brand" to="/">
        Tô Com Fome
      </NavbarTitle>

      <div id="navbar" className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavbarLink className="nav-link" to="/">
              Início
            </NavbarLink>
          </li>

          <li className="nav-item">
            <NavbarLink className="nav-link" to="/buscar">
              Buscar
            </NavbarLink>
          </li>

          {navLeftLinks()}
        </ul>
      </div>
      <div className="d-none d-lg-flex align-items-center">
        {navRightLinks()}
      </div>
      <RecipeForm />
    </Nav>
  );
};

export default Navbar;
