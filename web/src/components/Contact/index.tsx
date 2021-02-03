import React from "react";

import { Container, Title, Subtitle, ContactButton } from "./styles";

interface ContactProps {
  isLogged: boolean;
}

const Contact: React.FC<ContactProps> = ({ isLogged }) => {
  if (!isLogged) {
    return (
      <Container className="jumbotron">
        <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center mr-0 mr-md-5 mb-4 mb-md-0">
          <Title className="contact-title text-center text-md-left">
            Quer salvar suas receitas favoritas?
          </Title>
          <Subtitle className="text-center text-md-left m-0">
            Crie sua conta e tenha acesso a novas funções!
          </Subtitle>
        </div>
        <div className="d-flex flex-grow-1 align-items-center justify-content-center ml-0 ml-md-5 pl-0 pl-md-5">
          <ContactButton
            className="btn btn-contact btn-lg btn-block"
            to="/cadastrar"
          >
            Cadastre-se agora
          </ContactButton>
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default Contact;
