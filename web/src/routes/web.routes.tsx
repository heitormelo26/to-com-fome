import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RecipePage from "../pages/RecipePage";
import Search from "../pages/Search";
import Home from "../pages/Home";

const WebRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/recipe" component={RecipePage} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </BrowserRouter>
);

export default WebRoutes;
