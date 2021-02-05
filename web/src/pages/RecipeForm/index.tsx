import React, { useState } from "react";

import {
  Button,
  IconGroup,
  InputText,
  InputNoIcon,
  Label,
  Modal,
  Placeholder,
  Select,
  TextArea,
  Title,
  TrashCan,
  WhiteButton,
} from "./styles";
import "../../App.css";

import Icon from "@mdi/react";
import { mdiClose, mdiMagnify, mdiTrashCan } from "@mdi/js";

import $ from "jquery";
import swal from "sweetalert";


export interface IngredientProps {
  id: number;
  image: string;
  name: string;
  category: string;
}

function RecipeForm() {
  const [nomeArquivo, setNomeArquivo] = useState("Selecionar...");
  const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
  const [categorys, setCategorys] = useState("");
  const [arquivo, setArquivo] = useState("");
  const [invalidInput, setInvalidInput] = useState(true);
  const [alertFlag, setAlertFlag] = useState(<> </>);

  function setarInput() {
    const inputTitleElement = document.getElementById(
      "titulo"
    ) as HTMLInputElement;
    const inputAmountElement = document.getElementById(
      "rendimento"
    ) as HTMLInputElement;
    const inputTimeElement = document.getElementById(
      "tempoPreparo"
    ) as HTMLInputElement;
    const inputDescriptionElement = document.getElementById(
      "descricao"
    ) as HTMLInputElement;
    const inputPrepareElement = document.getElementById(
      "modoPreparo"
    ) as HTMLInputElement;
    if (inputTitleElement.value.length > 0 && inputAmountElement.value.length > 0 &&
      inputTimeElement.value.length > 0 && inputDescriptionElement.value.length > 0 &&
      inputPrepareElement.value.length > 0 
      ){
        setAlertFlag(<> </>);
        setInvalidInput(false);
      } 
    else{
      setAlertFlag(
        <div className="alert alert-danger" role="alert">
         Por favor, preencha todos os campos!
        </div>
      );
     setInvalidInput(true);
    }
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  $(".popover-dismiss").popover({
    trigger: "focus",
  });

  $(".table-responsive").on("show.bs.dropdown", function () {
    $(".table-responsive").css("overflow", "inherit");
  });

  $(".table-responsive").on("hide.bs.dropdown", function () {
    $(".table-responsive").css("overflow", "auto");
  });

  return (
    <>
      <div
        className="modal fade"
        id="criarReceita1"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered 
            modal-lg modal-dialog-scrollable"
        >
          <Modal className="modal-content">
            {/* Header */}
            <div className="modal-header pb-0">
              <Title className="d-block w-100 modal-title text-left">
                <button type="button" className="close" data-dismiss="modal">
                  <Icon path={mdiClose} size="1rem" color="#8D99AE" />
                </button>
                Compartilhe suas habilidades!
              </Title>
            </div>

            <div className="modal-body">
              <div className="container-fluid p-0">
                <form className="w-100">
                  {/* Título */}
                  <div className="form-group">
                    <Label htmlFor="titulo">Título</Label>
                    <InputNoIcon
                      type="text"
                      id="titulo"
                      name="titulo"
                      className="form-control"
                    />
                  </div>

                  {/* Rendimento */}
                  <div className="form-group">
                    <Label htmlFor="rendimento">Rendimento (em porções)</Label>
                    <InputNoIcon
                      type="number"
                      min={1}
                      id="rendimento"
                      name="rendimento"
                      className="form-control"
                    />
                  </div>

                  {/* Tempo de preparo */}
                  <div className="form-group">
                    <Label htmlFor="tempoPreparo">Tempo de preparo</Label>
                    <InputNoIcon
                      type="number"
                      id="tempoPreparo"
                      name="tempoPreparo"
                      className="form-control"
                    />
                  </div>

                  {/* Descrição */}
                  <div className="form-group">
                    <Label htmlFor="descricao">Descrição</Label>
                    <TextArea
                      maxLength={100}
                      className="form-control"
                      id="descricao"
                      name="descricao"
                    ></TextArea>
                  </div>

                  {/* Categorias */}
                  <div className="form-group">
                    <Label htmlFor="categorias">Categorias</Label>
                    <div className="input-group">
                      <InputText
                        type="text"
                        id="categorias"
                        name="categorias"
                        placeholder="Buscar..."
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <IconGroup className="input-group-text">
                          <Icon path={mdiMagnify} size="1rem" color="#8D99AE" />
                        </IconGroup>
                      </div>
                    </div>
                    {/* <div className="mt-3">
                      <Category className="btn mb-2 mr-2">
                        <span>Massas</span>
                        <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                      </Category>
                    </div> */}
                  </div>

                  {/* Receita privada */}
                  <div className="form-group mb-0 d-flex align-items-center">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="receitaPrivada"
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="receitaPrivada"
                      >
                        Manter minha receita privada
                      </Label>
                    </div>

                    {/* <div className="pl-3 custom-control custom-checkbox d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isPrivate"
                        name="isPrivate"
                      />
                      <Label
                        className="custom-control-label ml-2"
                        htmlFor="receitaPrivada"
                      >
                        Manter receita privada
                      </Label>
                      <InfoButton
                        type="button"
                        className="btn p-0 ml-2 d-flex align-items-center"
                        data-toggle="popover"
                        data-trigger="focus"
                        data-content="Ao selecionar esta opção, somente você poderá acessar essa receita no seu perfil. Você pode escolher publicá-la mais tarde."
                      >
                        <Icon
                          path={mdiInformationOutline}
                          size={0.8}
                          color="#8d99ae"
                        />
                      </InfoButton>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <Button
                data-toggle="modal"
                data-dismiss="modal"
                data-target="#criarReceita2"
                type="button"
                className="btn"
              >
                Próximo
              </Button>
            </div>
          </Modal>
        </div>
      </div>

      {/* Segunda página */}
      <div
        className="modal fade"
        id="criarReceita2"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered
          modal-lg modal-dialog-scrollable"
        >
          <Modal className="modal-content">
            {/* Header */}
            <div className="modal-header pb-0">
              <Title className="d-block w-100 modal-title text-left">
                <button type="button" className="close" data-dismiss="modal">
                  <Icon path={mdiClose} size="1rem" color="#8D99AE" />
                </button>
                Compartilhe suas habilidades!
              </Title>
            </div>

            <div className="modal-body">
              <div className="container-fluid p-0">
                <form className="w-100">
                  {/* Ingredientes */}
                  <div className="form-group">
                    <Label htmlFor="ingredientes">Ingredientes</Label>
                    <div className="input-group">
                      <InputText
                        type="text"
                        id="ingredientes"
                        name="ingredientes"
                        placeholder="Buscar..."
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <IconGroup className="input-group-text">
                          <Icon path={mdiMagnify} size="1rem" color="#8D99AE" />
                        </IconGroup>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td scope="col">Arroz Arbóreo</td>
                        <td scope="col">
                          <InputNoIcon
                            type="number"
                            min="0.1"
                            step="0.1"
                            id="ingredientAmount"
                            name="ingredientAmount"
                            placeholder="Quantidade"
                            className="py-3 form-control d-inline-block"
                          />
                        </td>
                        <td scope="col">
                          <Select
                            className="selectpicker show-tick"
                            data-width="100%"
                            title="Unidade de medida"
                            data-size="5"
                            name="unity"
                            id="unity"
                          >
                            <option>Brasileira</option>
                            <option>Alemã</option>
                            <option>Italiana</option>
                          </Select>
                        </td>
                        <td scope="col" className="text-center align-middle">
                          <TrashCan className="m-0 align-middle">
                            <Icon
                              path={mdiTrashCan}
                              size="1rem"
                              className="m-0"
                              color="#8D99AE"
                            />
                          </TrashCan>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <form className="w-100">
                  {/* Modo de preparo */}
                  <div className="form-group">
                    <Label htmlFor="modoPreparo">Modo de preparo</Label>
                    <TextArea
                      maxLength={100}
                      id="modoPreparo"
                      name="modoPreparo"
                      className="form-control"
                    ></TextArea>
                  </div>

                  {/* Imagem */}
                  <div className="input-group">
                    <Label htmlFor="imagem" className="w-100">
                      Imagem
                    </Label>
                    <div className="custom-file d-flex align-items-center">
                      <input
                        accept="image/*"
                        type="file"
                        id="imagem"
                        name="imagem"
                        className="custom-file-input d-flex align-items-center"
                        onChange={(event) => {
                          setNomeArquivo(
                            event.target.files != null
                              ? event.target.files[0].name
                              : ""
                          );
                          setArquivo(
                            URL.createObjectURL(
                              event.target.files != null
                                ? event.target.files[0]
                                : {}
                            )
                          );
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
            </div>
            <div className="modal-footer">
              {alertFlag}
              <WhiteButton
                data-toggle="modal"
                data-target="#criarReceita1"
                onClick={() => {
                  $("#criarReceita2").modal("hide");
                }}
                type="button"
                className="btn"
              >
                Anterior
              </WhiteButton>
              <Button
                //data-dismiss="modal"
                data-toggle="modal"
                type="button"
                className="btn"
                onClick={() => {
                  // swal(
                  //   "Sua receita foi enviada!",
                  //   "Para ver sua receita, vá ao seu perfil e clique em 'Receitas Enviadas'.",
                  //   "success",
                  //   {
                  //     closeOnEsc: true,
                  //     closeOnClickOutside: true,
                  //     buttons: {
                  //       confirm: {
                  //         text: "Fechar",
                  //         value: null,
                  //         visible: true,
                  //         className: "",
                  //         closeModal: true,
                  //       },
                  //     },
                  //   }
                  // );
                  setarInput()
                }}
              >
                Enviar
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default RecipeForm;
