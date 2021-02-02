import React from "react";

import { Container, Copyright, Title } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container className="container-fluid text-center">
      <div className="row">
        <div className="col-12 mb-3">
          <Title to="/">Tô Com Fome</Title>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Copyright>© 2020</Copyright>
          <Copyright>Termos de Privacidade</Copyright>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
