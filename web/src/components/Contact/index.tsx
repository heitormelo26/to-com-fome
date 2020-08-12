import React from "react";

import { Container, Subtitle, Title } from "./styles";

import Button from "../Button";

interface ContactProps {
  isLogged: boolean;
}

const Contact: React.FC<ContactProps> = ({ isLogged }) => {
  if (!isLogged) {
    return (
      <Container className="container-fluid text-center py-5 m-0">
        <div className="row">
          <div className="col-md-6 my-3">
            <Title className="mb-3">Quer salvar suas receitas favoritas?</Title>
            <Subtitle>Crie sua conta agora!</Subtitle>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center my-3">
            <Button color="branco" link="/cadastrar" text="Cadastrar" />
            <div className="mr-4"></div>
            <Button color="transparente" link="/entrar" text="Entrar" />
          </div>
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default Contact;
