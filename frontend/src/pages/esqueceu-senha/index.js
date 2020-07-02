import React from "react";
import Input from "../../components/Input";
import {
  Modal,
  StyledLink,
  StyledLinkSecondary,
  Title,
  Paragraph,
} from "./styles";
import { mdiEmail } from "@mdi/js";
import "../../App.css";

function EsqueceuSenha() {
  return (
    <div className="container">
      <button
        type="button"
        className="m-5 btn btn-primary"
        data-toggle="modal"
        data-target="#modalPaginaUm"
      >
        Vapo
      </button>
      <div
        className="modal fade"
        id="modalPaginaUm"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal className="modal-content">
            <div className="modal-header d-flex flex-column">
              <Title className="d-block w-100 modal-title">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
                Esqueceu a senha?
              </Title>
            </div>
            <div className="modal-body">
              <Paragraph className="text-justify">
                Digite o email que você usou quando criou sua conta e nós te
                enviaremos as instruções para definir uma nova senha.
              </Paragraph>
              <form>
                <div className="form-group">
                  <Input label="" icone={mdiEmail} tipo="email" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <StyledLinkSecondary
                to="/criar"
                className="d-flex align-items-center"
              >
                <button
                  data-dismiss="modal"
                  type="button"
                  className="btn btn-primary"
                >
                  <span>Fechar</span>
                </button>
              </StyledLinkSecondary>
              <StyledLink to="/criar" className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#modalPaginaDois"
                >
                  <span>Enviar</span>
                </button>
              </StyledLink>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default EsqueceuSenha;
