import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Entrar from "./pages/entrar";
import Cadastrar from "./pages/cadastrar";
import Teste from "./pages/teste";
import Receita from "./pages/receita";
import Buscar from "./pages/buscar";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Entrar} />
      <Route exact path="/cadastrar" component={Cadastrar} />
      <Route exact path="/teste" component={Teste} />
      <Route exact path="/receita" component={Receita} />
      <Route exact path="/buscar" component={Buscar} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
