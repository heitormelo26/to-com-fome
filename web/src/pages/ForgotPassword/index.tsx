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
import { mdiClose, mdiEmail } from "@mdi/js";

import swal from "sweetalert";

function ForgotPassword() {
  return (
    <div
      className="modal fade"
      id="esqueceuSenha"
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
              Esqueceu a senha?
            </Title>
          </div>
          <div className="modal-body">
            <Paragraph className="text-justify">
              Digite o email que você usou quando criou sua conta e nós te
              enviaremos as instruções para definir uma nova senha.
            </Paragraph>
            <div className="input-group">
              <IconGroup className="input-group-prepend">
                <Icon path={mdiEmail} size="1rem" color="#8D99AE" />
              </IconGroup>
              <InputText className="form-control" type="email" name="email" />
            </div>
          </div>
          <div className="modal-footer">
            <Button
              type="button"
              data-dismiss="modal"
              onClick={() => {
                swal(
                  "Um link foi enviado!",
                  "Para recuperar sua senha, siga as instruções presentes no seu email.",
                  "info",
                  {
                    closeOnEsc: true,
                    closeOnClickOutside: true,
                    buttons: {
                      confirm: {
                        text: "Fechar",
                        value: null,
                        visible: true,
                        className: "",
                        closeModal: true,
                      },
                    },
                  }
                );
              }}
            >
              Enviar
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ForgotPassword;
