import React from "react";

import Input from "../../components/Input";

import { Modal, Paragraph, Title } from "./styles";
import "../../App.css";

import Button from "../../components/Button";

import { mdiLock } from "@mdi/js";

function NewPassword() {
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
        tabIndex={-1}
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
                Defina sua nova senha!
              </Title>
            </div>
            <div className="modal-body">
              <Paragraph className="text-justify">
                Digite uma senha forte que contenha no mínimo 8 caracteres e
                seja combinação de letras (maiúsculas e minúsculas), números e
                símbolos.
              </Paragraph>
              <form>
                <div className="form-group">
                  <Input iconName={mdiLock} type="password" name="senha" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Button
                text="Fechar"
                color="branco"
                data-dismiss="modal"
                type="button"
              />
              <Button
                type="button"
                text="Confirmar"
                color="vermelho"
                data-toggle="modal"
                data-dismiss="modal"
                data-target="#modalPaginaDois"
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
