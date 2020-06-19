import React, { useState, useRef } from "react";
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
} from "./styles";
import Input from "../../components/Input";
import Icon from "@mdi/react";
import { mdiMagnify, mdiClose, mdiTrashCan } from "@mdi/js";
import "../../App.css";

function CriarReceita() {
  const [nomeArquivo, setNomeArquivo] = useState(
    "Nenhum arquivo selecionado..."
  );

  const [arquivo, setArquivo] = useState();

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
      <button
        type="button"
        className="m-5 btn btn-primary"
        data-toggle="modal"
        data-target="#modalPaginaDois"
      >
        Criar receita pag 2
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#modalPaginaDois"
                >
                  <span>Próximo</span>
                </button>
              </StyledLink>
            </div>
          </Modal>
        </div>
      </div>
      {/* SEGUNDA PÁGINA DO POP-UP */}
      <div
        className="modal fade"
        id="modalPaginaDois"
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
                Compartilhe suas habilidades!
              </Title>
              <Subtitle className="d-block w-100 modal-title">
                Escolha seus ingredientes e descreva o modo de preparo
              </Subtitle>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <Label className="w-100 mb-3 d-block">Ingredientes</Label>
                    <div className="input-group-prepend">
                      <IconGroup className="input-group-text">
                        <Icon path={mdiMagnify} size={0.8} color="#8D99AE" />
                      </IconGroup>
                    </div>
                    <InputText
                      type="text"
                      placeholder="Buscar..."
                      className="py-3 form-control d-inline-block"
                    />
                    <Plus className="d-inline-block ml-2 px-4 btn">
                      <span>+</span>
                    </Plus>
                  </div>
                  <div className="container">
                    <div className="mt-3 row d-flex align-items-center justify-content-center border-bottom">
                      <div className="col-md-2 d-flex align-items-center justify-content-start mb-2">
                        <Ingredient className="mb-0"> Arroz </Ingredient>
                      </div>
                      <div className="col-md-3 d-flex align-items-center justify-content-center mb-2">
                        <InputText
                          type="number"
                          min="1"
                          step="0.1"
                          placeholder="Quantidade"
                          className="py-3 form-control d-inline-block"
                        />
                      </div>
                      <div className="col-md-4 d-flex align-items-center justify-content-center mb-2">
                        <div class="dropdown">
                          <Button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                          >
                            <span>Unidade de medida</span>
                          </Button>
                          <Menu className="dropdown-menu">
                            <Link className="dropdown-item" to="/buscar/almoço">
                              Almoço
                            </Link>
                            <Link className="dropdown-item" to="/buscar/jantar">
                              Jantar
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/buscar/sobremesa"
                            >
                              Sobremesa
                            </Link>
                          </Menu>
                        </div>
                      </div>
                      <div className="col-md-3 d-flex align-items-center justify-content-end mb-2">
                        <TrashCan>
                          <Icon path={mdiTrashCan} size={0.8} color="#8D99AE" />
                        </TrashCan>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <Label className="w-100 mb-3 d-block">Modo de preparo</Label>
                  <TextArea maxlength="100" class="form-control"></TextArea>
                </div>
                <div className="input-group mb-3">
                  <Label className="w-100 mb-3 d-block">Imagem</Label>
                  <div className="custom-file d-flex align-items-center">
                    <input
                      accept="image/*"
                      type="file"
                      className="custom-file-input d-flex align-items-center"
                      onChange={(event) => {
                        setNomeArquivo(event.target.files[0].name);
                        setArquivo(URL.createObjectURL(event.target.files[0]));
                      }}
                    />
                    <Placeholder className="custom-file-label d-flex align-items-center">
                      {nomeArquivo}
                    </Placeholder>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <img
                    src={arquivo}
                    alt=""
                    className="img-fluid img-thumbnail"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <StyledLinkSecondary
                to="/criar"
                className="d-flex align-items-center"
              >
                <button type="button" className="btn btn-primary">
                  <span>Anterior</span>
                </button>
              </StyledLinkSecondary>
              <StyledLink to="/criar" className="d-flex align-items-center">
                <button
                  type="button"
                  data-dismiss="modal"
                  className="btn btn-primary"
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

export default CriarReceita;
