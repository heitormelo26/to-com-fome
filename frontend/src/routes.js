import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Entrar from "./pages/entrar";
import Cadastrar from "./pages/cadastrar";
import Footer from "./components/Footer";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Entrar} />
      <Route exact path="/cadastrar" component={Cadastrar} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
