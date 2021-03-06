import React, { useState } from "react";
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
  Select,
  Placeholder,
  InfoButton,
} from "./styles";
import Input from "../../components/Input";
import Icon from "@mdi/react";
import {
  mdiMagnify,
  mdiClose,
  mdiTrashCan,
  mdiInformationOutline,
} from "@mdi/js";
import "../../App.css";
import $ from "jquery";
import swal from "sweetalert";

function CriarReceita() {
  const [nomeArquivo, setNomeArquivo] = useState("Selecionar...");

  const [arquivo, setArquivo] = useState();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  $(".popover-dismiss").popover({
    trigger: "focus",
  });

  return (
    <div>
      <div
        className="modal fade"
        id="criarReceita1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
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
                  <TextArea maxlength="100" className="form-control"></TextArea>
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
                  <div className="pl-3 custom-control custom-checkbox d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="ingredient5"
                    />
                    <Label
                      className="custom-control-label ml-2"
                      for="ingredient5"
                    >
                      Manter receita privada
                    </Label>
                    <InfoButton
                      type="button"
                      className="btn p-0 ml-2 d-flex align-items-center"
                      data-toggle="popover"
                      data-trigger="focus"
                      title="Manter receita privada"
                      data-content="Ao selecionar esta opção, somente você poderá acessar essa receita no seu Perfil. Você pode escolher publicá-la mais tarde."
                    >
                      <Icon
                        path={mdiInformationOutline}
                        size={0.8}
                        color="#8d99ae"
                      />
                    </InfoButton>
                  </div>
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
                  data-target="#criarReceita2"
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
        id="criarReceita2"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
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
                  <div className="container-fluid d-block w-100 mt-3">
                    <div className="row border-bottom">
                      <div className="col-8 col-sm-8 col-md-3 col-lg-3 col-xl-3 order-1 order-sm-1 order-md-1 order-lg-1 order-xl-1 d-flex align-items-center justify-content-start mb-2">
                        <Ingredient className="mb-0 text-truncate">
                          Arroz
                        </Ingredient>
                      </div>
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 order-3 order-sm-3 order-md-2 order-lg-2 order-xl-2  d-flex align-items-center justify-content-center mb-2">
                        <InputText
                          type="number"
                          min="0.1"
                          step="0.1"
                          placeholder="Quantidade"
                          className="py-3 form-control d-inline-block"
                        />
                      </div>
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 order-4 order-sm-4 order-md-3 order-lg-3 order-xl-3  d-flex align-items-center justify-content-center mb-2">
                        <Select
                          className="selectpicker show-tick"
                          data-width="100%"
                          title="Unidade de medida"
                          data-size="5"
                        >
                          <option>Brasileira</option>
                          <option>Alemã</option>
                          <option>Italiana</option>
                        </Select>
                      </div>
                      <div className="col-4 col-sm-4 col-md-1 col-lg-1 col-xl-1 order-2 order-sm-2 order-md-4 order-lg-4 order-xl-4 d-flex align-items-center justify-content-end mb-2">
                        <TrashCan>
                          <Icon path={mdiTrashCan} size={0.8} color="#8D99AE" />
                        </TrashCan>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <Label className="w-100 mb-3 d-block">Modo de preparo</Label>
                  <TextArea maxlength="100" className="form-control"></TextArea>
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
              <StyledLinkSecondary className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#criarReceita1"
                  onClick={() => {
                    $("#criarReceita2").modal("hide");
                  }}
                >
                  <span>Anterior</span>
                </button>
              </StyledLinkSecondary>
              <StyledLink className="d-flex align-items-center">
                <button
                  type="button"
                  data-dismiss="modal"
                  className="btn btn-primary"
                  onClick={() => {
                    swal(
                      "Sua receita foi enviada!",
                      "Para ver sua receita, vá no Perfil em 'Receitas Enviadas'.",
                      "success",
                      {
                        closeOnEsc: true,
                        closeOnClickOutside: true,
                        button: "Fechar",
                      }
                    );
                  }}
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
