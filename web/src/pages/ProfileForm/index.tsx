import React, { useState } from "react";

import Input from "../../components/Input";

import {
  IconGroup,
  IconGroupRight,
  InputText,
  Label,
  Modal,
  Select,
  Title,
} from "./styles";
import "../../App.css";

import Button from "../../components/Button";

import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiAt,
  mdiCalendar,
  mdiEmail,
  mdiEye,
  mdiEyeOff,
  mdiLock,
  mdiMapMarker,
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
          <div className="modal-header d-flex flex-column">
            <Title className="d-block w-100 modal-title">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              Editar perfil
            </Title>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <Input
                  label="Nome"
                  iconName={mdiAccount}
                  type="text"
                  name="nome"
                />
              </div>
              <div className="form-group">
                <Input
                  label="Email"
                  iconName={mdiEmail}
                  type="email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <Input
                  label="Usuário"
                  iconName={mdiAt}
                  type="text"
                  name="usuario"
                />
              </div>
              <div className="form-group">
                <Label className="w-100 mb-3 d-block">País</Label>
                <div className="w-100 d-flex">
                  <div className="input-group-prepend">
                    <IconGroup className="input-group-text">
                      <Icon path={mdiMapMarker} size={0.7} color="#8D99AE" />
                    </IconGroup>
                  </div>
                  <Select
                    data-width="auto"
                    title="País"
                    data-size="5"
                    className="selectpicker show-tick w-100 form-control"
                  >
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                  </Select>
                </div>
              </div>
              <div className="form-group">
                <Label className="w-100 mb-3 d-block">Senha</Label>
                <div className="w-100 d-flex">
                  <div className="input-group-prepend">
                    <IconGroup className="input-group-text">
                      <Icon path={mdiLock} size={0.7} color="#8D99AE" />
                    </IconGroup>
                  </div>
                  <InputText type={tipo} className="py-3 form-control" />
                  <div className="input-group-append" onClick={mostrarSenha}>
                    <IconGroupRight className="input-group-text">
                      <Icon path={icone} size={0.7} color="#8D99AE" />
                    </IconGroupRight>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <Input
                  label="Data de nascimento"
                  iconName={mdiCalendar}
                  type="date"
                  name="dataNascimento"
                />
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
              text="Confirmar"
              color="vermelho"
              data-dismiss="modal"
              data-toggle="modal"
              type="button"
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ProfileForm;
