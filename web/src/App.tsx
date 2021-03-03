import React from "react";
import Routes from "./routes/index";

import "./assets/styles/global.css";

import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
