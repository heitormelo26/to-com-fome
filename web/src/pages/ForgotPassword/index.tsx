import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Modal, Paragraph, Title } from "./styles";
import "../../App.css";

import { mdiEmail } from "@mdi/js";
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
                <Input iconName={mdiEmail} type="email" name="email" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <Button data-dismiss="modal" color="branco" text="Fechar" />
            <Button
              color="vermelho"
              text="Enviar"
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
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ForgotPassword;
