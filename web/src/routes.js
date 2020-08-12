import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RecipePage from "./pages/RecipePage";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/entrar" component={SignIn} />
      <Route exact path="/cadastrar" component={SignUp} />
      <Route exact path="/receita" component={RecipePage} />
      <Route exact path="/buscar" component={Search} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
