import React from "react";

import Button from "../../components/Button";

import RecipeForm from "../../pages/RecipeForm";

import { NavbarLink, NavbarTitle } from "./styles";
import "../../App.css";

interface NavbarProps {
  isLogged: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLogged }) => {
  function navbarLinks() {
    if (isLogged) {
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
          <li className="nav-item mr-5 ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
            <NavbarLink className="nav-link" to="/buscar">
              Buscar
            </NavbarLink>
          </li>
          <li className="nav-item d-flex align-items-center ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
            <NavbarLink
              to="/"
              className="nav-link d-flex d-sm-flex d-md-none d-lg-none d-xl-none"
              data-toggle="modal"
              data-target="#criarReceita1"
            >
              Enviar receita
            </NavbarLink>
            <Button
              className="btn d-none d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block"
              data-toggle="modal"
              data-target="#criarReceita1"
              text="Enviar receita"
              color="vermelho"
            />
            <RecipeForm />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-start align-items-sm-start align-items-md-center align-items-lg-center align-items-xl-center">
          <li className="nav-item mr-5 ml-3 ml-sm-3 ml-lg-auto ml-md-auto ml-xl-auto">
            <NavbarLink className="nav-link" to="/buscar">
              Buscar
            </NavbarLink>
          </li>
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
            <Button
              className="btn d-none d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block"
              type="button"
              text="Inscreva-se"
              color="vermelho"
              link="/cadastrar"
            />
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="mb-4 d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-white px-1 px-sm-1 px-md-5 px-lg-5 px-xl-5 py-3 d-flex align-items-center">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <NavbarTitle className="navbar-brand ml-auto" to="/">
        Tô Com Fome
      </NavbarTitle>
      <div id="navbar" className="collapse navbar-collapse ">
        {navbarLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
