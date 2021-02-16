import React, { useState } from "react";

import {
  Button,
  Form,
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
import api from "../../services/api";
import Icon from "@mdi/react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { mdiClose, mdiMagnify, mdiTrashCan } from "@mdi/js";

import $ from "jquery";
//import swal from "sweetalert";

export interface IngredientProps {
  id: number;
  image: string;
  name: string;
  category: string;
}

export interface RecipeProps {
  id: number;
  title: string;
  description: string;
  categories: string;
  image: string;
  prepare_mode: string;
  amoe: string;
  likunt: string;
  times: string;
  user_id: number;
}

export interface IngredientsRecipeProps {
  id: number;
  unity: string;
  quantity: number;
  recipe_id: number;
  integer_id: number;
}

function RecipeForm() {
  const [nomeArquivo, setNomeArquivo] = useState("Selecionar...");
  //const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
  //const [categorys, setCategorys] = useState("");
  const [arquivo, setArquivo] = useState("");
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [invalidInput, setInvalidInput] = useState(true);
  //const [alertFlag, setAlertFlag] = useState(<> </>);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.title) {
      errors.title = "Por favor, preencha o título da receita.";
    } else if (values.title.length > 40) {
      errors.title = "O título deve ser menor que 40 caracteres.";
    } else if (!/^[a-zA-Z\s]*$/i.test(values.title)) {
      errors.title = "Por favor, utilize somente letras.";
    }

    if (!values.amount) {
      errors.amount = "Por favor, informe o rendimento.";
    }

    if (!values.time) {
      errors.time = "Por favor, informe o tempo de preparo.";
    }

    if (!values.description) {
      errors.description = "Por favor, preencha a descrição da receita.";
    } else if (values.description.length > 200) {
      errors.description = "A descrição deve ser menor que 200 caracteres.";
    }

    if (!values.categories) {
      errors.categories = "Por favor, informe ao menos uma categoria.";
    }

    if (!values.ingredients) {
      errors.ingredients = "Por favor, informe pelo menos um ingrediente.";
    }

    if (!values.prepareMode) {
      errors.prepareMode = "Por favor, informe o modo de preparo da receita.";
    }

    if (!arquivo) {
      errors.image = "Por favor, adicione uma imagem.";
    }

    return errors;
  };
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      amount: 0,
      time: 0,
      description: "",
      categories: "",
      private: false,
      ingredients: [],
      prepareMode: "",
      image: "",
    },
    validate,
    onSubmit: (values: any) => {
      const form1 = document.getElementById("form1") as HTMLFormElement;
      const form2 = document.getElementById("form2") as HTMLFormElement;
      const form3 = document.getElementById("form3") as HTMLFormElement;
      form1.submit();
      form2.submit();
      form3.submit();
      api.get(`/u-e?email=${values.email}`).then((response) => {
        if (response.status === 200) {
          //history.push("/");
          console.log("deu certo");
          console.log(response);
        } else {
          console.log("deu certo não");
        }
      });
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  // function setarInput() {
  //   const inputTitleElement = document.getElementById(
  //     "titulo"
  //   ) as HTMLInputElement;
  //   const inputAmountElement = document.getElementById(
  //     "rendimento"
  //   ) as HTMLInputElement;
  //   const inputTimeElement = document.getElementById(
  //     "tempoPreparo"
  //   ) as HTMLInputElement;
  //   const inputDescriptionElement = document.getElementById(
  //     "descricao"
  //   ) as HTMLInputElement;
  //   const inputPrepareElement = document.getElementById(
  //     "modoPreparo"
  //   ) as HTMLInputElement;
  //   if (
  //     inputTitleElement.value.length > 0 &&
  //     inputAmountElement.value.length > 0 &&
  //     inputTimeElement.value.length > 0 &&
  //     inputDescriptionElement.value.length > 0 &&
  //     inputPrepareElement.value.length > 0
  //   ) {
  //     setAlertFlag(<> </>);
  //     setInvalidInput(false);
  //   } else {
  //     setAlertFlag(
  //       <div className="alert alert-danger" role="alert">
  //         Por favor, preencha todos os campos!
  //       </div>
  //     );
  //     setInvalidInput(true);
  //   }
  // }

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

  $(document).ready(function () {
    $(".selectpicker").selectpicker("refresh");
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
                <Form id="form1" onSubmit={formik.handleSubmit}>
                  {/* Título */}
                  <div className="form-group">
                    <Label htmlFor="title">
                      Título
                      {formik.touched.title && formik.errors.title ? (
                        <span>{formik.errors.title}</span>
                      ) : null}
                    </Label>
                    <InputNoIcon
                      type="text"
                      id="title"
                      name="title"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {/* Rendimento */}
                  <div className="form-group">
                    <Label htmlFor="amount">
                      Rendimento (em porções)
                      {formik.touched.amount && formik.errors.amount ? (
                        <span>{formik.errors.amount}</span>
                      ) : null}
                    </Label>
                    <InputNoIcon
                      type="number"
                      min={1}
                      id="amount"
                      name="amount"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.amount}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {/* Tempo de preparo */}
                  <div className="form-group">
                    <Label htmlFor="time">
                      Tempo de preparo (em minutos)
                      {formik.touched.time && formik.errors.time ? (
                        <span>{formik.errors.time}</span>
                      ) : null}
                    </Label>
                    <InputNoIcon
                      type="number"
                      id="time"
                      min={1}
                      name="time"
                      onChange={formik.handleChange}
                      value={formik.values.time}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                  </div>

                  {/* Descrição */}
                  <div className="form-group">
                    <Label htmlFor="description">
                      Descrição
                      {formik.touched.description &&
                      formik.errors.description ? (
                        <span>{formik.errors.description}</span>
                      ) : null}
                    </Label>
                    <TextArea
                      maxLength={200}
                      className="form-control"
                      id="description"
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      onBlur={formik.handleBlur}
                    ></TextArea>
                  </div>

                  {/* Categorias */}
                  <div className="form-group">
                    <Label htmlFor="categories">
                      Categorias
                      {formik.touched.categories && formik.errors.categories ? (
                        <span>{formik.errors.categories}</span>
                      ) : null}
                    </Label>
                    <div className="input-group">
                      <InputText
                        type="text"
                        id="categories"
                        name="categories"
                        placeholder="Buscar..."
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.categories}
                        onBlur={formik.handleBlur}
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
                </Form>
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
                <Form id="form2" onSubmit={formik.handleSubmit}>
                  {/* Ingredientes */}
                  <div className="form-group">
                    <Label htmlFor="ingredients">
                      Ingredientes
                      {formik.touched.ingredients &&
                      formik.errors.ingredients ? (
                        <span>{formik.errors.ingredients}</span>
                      ) : null}
                    </Label>
                    <div className="input-group">
                      <InputText
                        type="text"
                        id="ingredients"
                        name="ingredients"
                        placeholder="Buscar..."
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.ingredients}
                        onBlur={formik.handleBlur}
                      />
                      <div className="input-group-append">
                        <IconGroup className="input-group-text">
                          <Icon path={mdiMagnify} size="1rem" color="#8D99AE" />
                        </IconGroup>
                      </div>
                    </div>
                  </div>
                </Form>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Arroz Arbóreo</td>
                        <td>
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
                        <td>
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
                        <td className="text-center align-middle">
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
                <Form id="form3" onSubmit={formik.handleSubmit}>
                  {/* Modo de preparo */}
                  <div className="form-group">
                    <Label htmlFor="prepareMode">
                      Modo de preparo
                      {formik.touched.prepareMode &&
                      formik.errors.prepareMode ? (
                        <span>{formik.errors.prepareMode}</span>
                      ) : null}
                    </Label>
                    <TextArea
                      id="prepareMode"
                      name="prepareMode"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.prepareMode}
                      onBlur={formik.handleBlur}
                    ></TextArea>
                  </div>

                  {/* Imagem */}
                  <div className="input-group">
                    <Label htmlFor="image" className="w-100">
                      Imagem
                      {formik.touched.image && formik.errors.image ? (
                        <span>{formik.errors.image}</span>
                      ) : null}
                    </Label>
                    <div className="custom-file d-flex align-items-center">
                      <input
                        accept="image/*"
                        type="file"
                        id="image"
                        name="image"
                        className="custom-file-input d-flex align-items-center"
                        value={formik.values.image}
                        onBlur={formik.handleBlur}
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
                  <div className="modal-footer">
                    {/* {alertFlag} */}
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
                      type="submit"
                      className="btn"
                    >
                      Enviar
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default RecipeForm;
