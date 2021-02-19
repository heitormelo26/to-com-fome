import React, { useState } from "react";

import {
  IconGroup,
  IconGroupRight,
  InputText,
  Label,
  Modal,
  Title,
  Button,
} from "./styles";

import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiClose,
  mdiEmail,
  mdiEye,
  mdiEyeOff,
  mdiLock,
} from "@mdi/js";

import $ from "jquery";

function ProfileForm() {
  $(document).ready(function () {
    $(".selectpicker").selectpicker("refresh");
  });

  const [tipo, setTipo] = useState("password");
  const [icone, setIcone] = useState(mdiEye);

  function mostrarSenha(event: any) {
    if (tipo === "password") {
      setTipo("text");
      setIcone(mdiEyeOff);
    } else {
      setTipo("password");
      setIcone(mdiEye);
    }
  }

  return (
    <div
      className="modal fade"
      id="editarPerfil"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <Modal className="modal-content">
          <div className="modal-header pb-0">
            <Title className="d-block w-100 modal-title text-left">
              <button type="button" className="close" data-dismiss="modal">
                <Icon path={mdiClose} size="1rem" color="#8D99AE" />
              </button>
              Editar perfil
            </Title>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <form className="w-100">
                <div className="input-group mb-3">
                  <Label className="w-100 mb-3 d-block" htmlFor="name">
                    Nome
                  </Label>
                  <IconGroup className="input-group-prepend">
                    <Icon path={mdiAccount} size="1rem" color="#8D99AE" />
                  </IconGroup>
                  <InputText
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="input-group mb-3">
                  <Label className="w-100 mb-3 d-block" htmlFor="email">
                    Email
                  </Label>
                  <IconGroup className="input-group-prepend">
                    <Icon path={mdiEmail} size="1rem" color="#8D99AE" />
                  </IconGroup>
                  <InputText
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="input-group mb-3">
                  <Label className="w-100 mb-3 d-block" htmlFor="password">
                    Senha
                  </Label>
                  <div className="input-group-prepend">
                    <IconGroup className="input-group-text">
                      <Icon path={mdiLock} size="1rem" color="#8D99AE" />
                    </IconGroup>
                  </div>
                  <InputText
                    type={tipo}
                    className="form-control password"
                    name="password"
                    id="password"
                  />
                  <div className="input-group-append" onClick={mostrarSenha}>
                    <IconGroupRight className="input-group-text">
                      <Icon path={icone} size="1rem" color="#8D99AE" />
                    </IconGroupRight>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <Label className="w-100 mb-3 d-block" htmlFor="newPassword">
                    Confirme sua senha
                  </Label>
                  <div className="input-group-prepend">
                    <IconGroup className="input-group-text">
                      <Icon path={mdiLock} size="1rem" color="#8D99AE" />
                    </IconGroup>
                  </div>
                  <InputText
                    type={tipo}
                    className="form-control password"
                    name="newPassword"
                    id="newPassword"
                  />
                  <div className="input-group-append" onClick={mostrarSenha}>
                    <IconGroupRight className="input-group-text">
                      <Icon path={icone} size="1rem" color="#8D99AE" />
                    </IconGroupRight>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <Button
              className="btn"
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
            >
              Confirmar
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ProfileForm;
