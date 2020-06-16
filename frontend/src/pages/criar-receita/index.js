import React from "react";
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
} from "./styles";
import Input from "../../components/Input";
import Icon from "@mdi/react";
import { mdiMagnify, mdiClose } from "@mdi/js";
import "../../App.css";

function CriarReceita() {
  return (
    <div class="container">
      <button
        type="button"
        className="m-5 btn btn-primary"
        data-toggle="modal"
        data-target="#modalPaginaUm"
      >
        Criar receita
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
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                Compartilhe suas habilidades!
              </Title>
              <Subtitle className="d-block w-100 modal-title">
                Criar uma nova receita
              </Subtitle>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <Input label="Título da receita" icone="noIcon" tipo="text" />
                </div>
                <div className="form-group">
                  <Input
                    label="Rendimento (em porções)"
                    icone="noIcon"
                    tipo="number"
                    minimo="1"
                  />
                </div>
                <div className="form-group">
                  <Input label="Tempo de preparo" icone="noIcon" tipo="text" />
                </div>
                <div className="form-group">
                  <Label className="w-100 mb-3 d-block">Descrição</Label>
                  <TextArea maxlength="100" class="form-control"></TextArea>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <Label className="w-100 mb-3 d-block">Categorias</Label>
                    <div className="input-group-prepend">
                      <IconGroup className="input-group-text">
                        <Icon path={mdiMagnify} size={0.8} color="#8D99AE" />
                      </IconGroup>
                    </div>
                    <InputText
                      type="text"
                      placeholder="Buscar..."
                      className="py-3 form-control"
                    />
                  </div>
                  <div className="mt-3">
                    <Category className="btn mb-2">
                      <span className="mr-2">Massas</span>
                      <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                    </Category>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <input type="checkbox" />
                  <Label className="ml-2">Manter receita privada</Label>
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
                <button type="button" className="btn btn-primary">
                  <span>Próximo</span>
                </button>
              </StyledLink>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CriarReceita;
