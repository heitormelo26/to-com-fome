import React from "react";

import {
  Modal,
  Paragraph,
  Title,
  InputText,
  IconGroup,
  Button,
} from "./styles";

import Icon from "@mdi/react";
import { mdiClose, mdiLock } from "@mdi/js";

function NewPassword() {
  return (
    <>
      <button
        type="button"
        className="m-5 btn btn-primary"
        data-toggle="modal"
        data-target="#novaSenha"
      >
        Vapo
      </button>
      <div
        className="modal fade"
        id="novaSenha"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal className="modal-content">
            <div className="modal-header pb-0">
              <Title className="d-block w-100 modal-title">
                <button type="button" className="close" data-dismiss="modal">
                  <Icon path={mdiClose} size={0.8} color="#8D99AE" />
                </button>
                Defina sua nova senha
              </Title>
            </div>
            <div className="modal-body">
              <Paragraph className="text-justify">
                Digite uma senha forte que contenha no mínimo 8 caracteres e
                seja combinação de letras (maiúsculas e minúsculas), números e
                símbolos.
              </Paragraph>
              <div className="input-group">
                <IconGroup className="input-group-prepend">
                  <Icon path={mdiLock} size="1rem" color="#8D99AE" />
                </IconGroup>
                <InputText className="form-control" type="email" name="email" />
              </div>
            </div>
            <div className="modal-footer">
              <Button type="button" data-dismiss="modal">
                Confirmar
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
