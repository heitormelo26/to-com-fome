import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Entrar from "./pages/entrar";
import Cadastrar from "./pages/cadastrar";
import Teste from "./pages/teste";
import Receita from "./pages/receita";
import Buscar from "./pages/buscar";
import Perfil from "./pages/perfil";
import CriarReceita from "./pages/criar-receita";
import Ingredientes from "./pages/ingredientes";
import EditarPerfil from "./pages/editar-perfil";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Entrar} />
      <Route exact path="/cadastrar" component={Cadastrar} />
      <Route exact path="/teste" component={Teste} />
      <Route exact path="/receita" component={Receita} />
      <Route exact path="/buscar" component={Buscar} />
      <Route exact path="/perfil" component={Perfil} />
      <Route exact path="/criar" component={CriarReceita} />
      <Route exact path="/ingredientes" component={Ingredientes} />
      <Route exact path="/editar-perfil" component={EditarPerfil} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
