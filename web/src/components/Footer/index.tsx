import React from "react";

import { Container, Copyright, Line, Title } from "./styles";

export interface FooterProps {
  color: string;
}

const Footer: React.FC<FooterProps> = ({ color }) => {
  return (
    <Container
      color={color}
      className="container-fluid  text-center py-5 w-100 m-0"
    >
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <Title color={color} to="/">
            Tô Com Fome
          </Title>
        </div>
      </div>
      <Line color={color} />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-3">
          <Copyright color={color} className="mr-5">
            © 2020
          </Copyright>
          <Copyright color={color}>Termos de Privacidade</Copyright>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
