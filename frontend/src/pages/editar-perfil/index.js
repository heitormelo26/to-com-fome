import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import {
  TextArea,
  Label,
  IconGroup,
  InputText,
  Modal,
  Category,
  StyledLink,
  StyledLinkSecondary,
  Title,
  Subtitle,
  Plus,
  TrashCan,
  Ingredient,
  Button,
  Menu,
  Placeholder,
  Select,
} from "./styles";
import Icon from "@mdi/react";
import {
  mdiLock,
  mdiMapMarker,
  mdiEmail,
  mdiAccount,
  mdiAt,
  mdiEye,
  mdiCalendar,
} from "@mdi/js";

function EditarPerfil() {
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
                  <div class="input-group mb-3 d-flex flex-wrap justify-content-center align-items-center">
                    <div class="input-group-prepend">
                      <IconGroup className="input-group-text h-auto ">
                        <Icon path={mdiMapMarker} size={0.7} color="#8D99AE" />
                      </IconGroup>
                    </div>
                    <Select
                      className="custom-select custom-select-sm w-auto "
                      id="inputGroupSelect01"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Select>
                  </div>
                </div>
                <div className="form-group">
                  <Input label="Senha" icone={mdiLock} tipo="password" />
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
