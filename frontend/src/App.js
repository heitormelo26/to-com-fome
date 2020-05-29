import React from "react";
import Footer from "./components/Footer";

import "./App.css";
import Routes from "./routes.js";

function App() {
  return (
    <div className="App">
      <Routes />
      <Footer cor="azul" />
    </div>
  );
}

export default App;
