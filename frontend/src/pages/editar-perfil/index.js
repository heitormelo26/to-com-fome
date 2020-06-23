import React, { useState } from "react";
import Input from "../../components/Input";
import {
  Label,
  IconGroup,
  Modal,
  StyledLink,
  StyledLinkSecondary,
  Title,
  Select,
  InputText,
  IconGroupRight,
} from "./styles";
import Icon from "@mdi/react";
import {
  mdiLock,
  mdiMapMarker,
  mdiEmail,
  mdiAccount,
  mdiAt,
  mdiEye,
  mdiEyeOff,
  mdiCalendar,
} from "@mdi/js";
import "../../App.css";

function EditarPerfil() {
  const [tipo, setTipo] = useState("password");
  const [icone, setIcone] = useState(mdiEye);

  function mostrarSenha(event) {
    if (tipo === "password") {
      setTipo("text");
      setIcone(mdiEyeOff);
    } else {
      setTipo("password");
      setIcone(mdiEye);
    }
  }

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
                  <Input label="Nome" icone={mdiAccount} tipo="text" />
                </div>
                <div className="form-group">
                  <Input label="Email" icone={mdiEmail} tipo="email" />
                </div>
                <div className="form-group">
                  <Input label="Usuário" icone={mdiAt} tipo="text" />
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
                    icone={mdiCalendar}
                    tipo="date"
                  />
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
                  <span>Confirmar</span>
                </button>
              </StyledLink>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;
