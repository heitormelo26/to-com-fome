import React, { useState, useEffect } from "react";

import {
  Label,
  Check,
  Card,
  IconGroup,
  InputText,
  Modal,
  CategoryButton,
  CategoryMenu,
  Title,
  SearchButton,
} from "./styles";

import Icon from "@mdi/react";
import { mdiMagnify, mdiClose } from "@mdi/js";

import $ from "jquery";

import { ingredients as categories } from "../../assets/settings/selects/data";

import api from "../../services/api";

export interface IngredientProps {
  id: number;
  image: string;
  name: string;
  category: string;
}

export default function IngredientForm() {
  const [ingredients, setIngredients] = useState<IngredientProps[]>([]);
  const [selected, setSelected] = useState("Categorias");
  const [invalidInput, setInvalidInput] = useState(true);

  useEffect(() => {
    api.get("i-c").then((response) => {
      setIngredients(response.data);
    });
  }, []);

  const handleKeypress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      selectName();
    }
  };

  function selectCategory(category: any) {
    if (category === "Todas") {
      api.get(`i-c`).then((response) => {
        setIngredients(response.data);
        setSelected("Categorias");
      });
    } else {
      api.get(`i-c?category=${category}`).then((response) => {
        setIngredients(response.data);
        setSelected(category);
      });
    }
  }

  function setarInput() {
    const inputElement = document.getElementById(
      "inputIngredient"
    ) as HTMLInputElement;

    if (inputElement.value.length > 0) setInvalidInput(false);
    else setInvalidInput(true);
  }

  function selectName() {
    const inputElement = document.getElementById(
      "inputIngredient"
    ) as HTMLInputElement;
    api.get(`i-n?name=${inputElement.value}`).then((response) => {
      setIngredients(response.data);
    });
  }

  $(document).ready(function () {
    $(".selectpicker").selectpicker("refresh");
  });

  return (
    <div
      className="modal fade"
      id="selecionarIngredientes"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <Modal className="modal-content">
          <div className="modal-header pb-0">
            <Title className="d-block w-100 modal-title text-left">
              <button type="button" className="close" data-dismiss="modal">
                <Icon path={mdiClose} size="1rem" color="#8D99AE" />
              </button>
              O que tem na sua geladeira?
            </Title>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              {/* Input */}
              <div className="row mb-3">
                <div className="col-12 p-0 center-center">
                  <div className="input-group">
                    <InputText
                      type="text"
                      className="form-control"
                      placeholder="Buscar..."
                      aria-label="Buscar..."
                      id="inputIngredient"
                      onChange={() => setarInput()}
                      onKeyPress={handleKeypress}
                    />
                    <div className="input-group-append">
                      <IconGroup className="input-group-text">
                        <Icon path={mdiMagnify} size="1rem" color="#8D99AE" />
                      </IconGroup>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-8 p-0 mb-3 d-flex align-items-center justify-content-start">
                  <div className="dropdown mr-3">
                    <CategoryButton
                      className="btn dropdown-toggle"
                      type="button"
                      id="categoryButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {selected}
                    </CategoryButton>
                    <CategoryMenu
                      className="dropdown-menu"
                      aria-labelledby="categoryButton"
                    >
                      {categories.map((category: string) => {
                        return (
                          <button
                            onClick={() => selectCategory(category)}
                            key={category}
                            className="dropdown-item"
                            type="button"
                          >
                            {category}
                          </button>
                        );
                      })}
                    </CategoryMenu>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="private"
                    />
                    <Label className="custom-control-label" htmlFor="private">
                      Incluir minhas receitas privadas
                    </Label>
                  </div>
                </div>
                <div className="col-12 col-lg-4 p-0 mb-3 d-flex align-items-center justify-content-end">
                  <SearchButton
                    className="btn"
                    type="button"
                    onClick={() => selectName()}
                    disabled={invalidInput}
                    onKeyPress={handleKeypress}
                  >
                    Buscar
                  </SearchButton>
                </div>
              </div>
              {/* <div className="container">
                    <div className="mt-3 row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                        <Category className="btn mb-2 mr-2">
                          <span>Beterraba</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                        <Category className="btn mb-2 mr-2">
                          <span>Açúcar</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                        <Category className="btn mb-2 mr-2">
                          <span>Orégano</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                        <Category className="btn mb-2 mr-2">
                          <span>Morango</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                        <Category className="btn mb-2 mr-2">
                          <span>Sal grosso</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                        <Category className="btn mb-2 mr-2">
                          <span>Maracujá</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                      </div>
                    </div>
                  </div>*/}
              <div className="row">
                {ingredients.map((ingredient: IngredientProps) => {
                  return (
                    <div
                      key={ingredient.id}
                      className="nth-padding col-md-4 mb-3"
                    >
                      <Card className="card">
                        <img
                          src={ingredient.image}
                          className="card-img-top"
                          alt={ingredient.name}
                        />
                        <div className="card-img-overlay">
                          <Check
                            type="button"
                            className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                          >
                            <div className="round">
                              <input type="checkbox" id={ingredient.name} />
                              <label
                                className="m-0"
                                htmlFor={ingredient.name}
                              ></label>
                            </div>
                          </Check>
                          <h5 className="card-title">{ingredient.name}</h5>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer p-0 d-flex align-items-center">
              <SearchButton className="btn" type="button">
                Tô com fome!
              </SearchButton>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
