import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import RecipePage from "../pages/RecipePage";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const UserRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipe" component={RecipePage} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default UserRoutes;
