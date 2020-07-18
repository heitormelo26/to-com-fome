import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Entrar from "./pages/entrar";
import Cadastrar from "./pages/cadastrar";
import Receita from "./pages/receita";
import Buscar from "./pages/buscar";
import Perfil from "./pages/perfil";
import Inicio from "./pages/inicio";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/entrar" component={Entrar} />
      <Route exact path="/cadastrar" component={Cadastrar} />
      <Route exact path="/receita" component={Receita} />
      <Route exact path="/buscar" component={Buscar} />
      <Route exact path="/perfil" component={Perfil} />
      <Route exact path="/" component={Inicio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
