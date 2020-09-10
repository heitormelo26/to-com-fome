import React from "react";

import {
  Check,
  Card,
  Category,
  IconGroup,
  InputText,
  Label,
  Modal,
  Plus,
  Subtitle,
  Title,
} from "./styles";
import "../../App.css";

import Button from "../../components/Button";

import Icon from "@mdi/react";
import { mdiClose, mdiMagnify } from "@mdi/js";

import $ from "jquery";

import { ingredients as categories } from "../../assets/settings/selects/data";

export default function IngredientForm() {
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
          <div className="modal-header d-flex flex-column">
            <Title className="d-block w-100 modal-title text-left">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
              </button>
              O que tem na sua geladeira?
            </Title>
            <Subtitle className="d-block w-100 modal-title text-left">
              Escolher ingredientes
            </Subtitle>
          </div>
          <div className="modal-body">
            <div className="container-fluid overflow-auto">
              <div className="row">
                <div className="col-md-12 p-0 mb-3 col-12 col-sm-12 col-lg-12 col-xl-12">
                  <form>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <IconGroup className="input-group-text">
                          <Icon path={mdiMagnify} size={0.8} color="#8D99AE" />
                        </IconGroup>
                      </div>
                      <InputText
                        type="text"
                        placeholder="Buscar..."
                        className="form-control d-inline-block"
                      />
                      <Plus
                        className="selectpicker show-tick ml-2 d-inline-block"
                        data-live-search="true"
                        data-width="25%"
                        title="Categorias"
                        data-size="5"
                      >
                        {categories.map((category: string) => {
                          return <option>{category}</option>;
                        })}
                      </Plus>
                    </div>
                    <div className="container">
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
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox1" />
                          <label className="m-0" htmlFor="checkbox1"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Arroz Branco</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.unsplash.com/photo-1585433206082-ca1f8da26ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox2" />
                          <label className="m-0" htmlFor="checkbox2"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Limão</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox3" />
                          <label className="m-0" htmlFor="checkbox3"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Milho Verde</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.pexels.com/photos/452773/pexels-photo-452773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox4" />
                          <label className="m-0" htmlFor="checkbox4"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Pimentão Vermelho</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox5" />
                          <label className="m-0" htmlFor="checkbox5"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Cenoura</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.unsplash.com/photo-1550409174-a8ea3586299c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox6" />
                          <label className="m-0" htmlFor="checkbox6"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Brócolis</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberries-1330459_960_720.jpg"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox7" />
                          <label className="m-0" htmlFor="checkbox7"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Morango</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox8" />
                          <label className="m-0" htmlFor="checkbox8"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Uva</h5>
                    </div>
                  </Card>
                </div>
                <div className="col-md-4 mb-4">
                  <Card className="card">
                    <img
                      src="https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-img-overlay">
                      <Check
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox9" />
                          <label className="m-0" htmlFor="checkbox9"></label>
                        </div>
                      </Check>
                      <h5 className="card-title">Mirtilo</h5>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex align-items-center">
              <div className="form-group mr-auto">
                <div className="pl-3 custom-control custom-checkbox d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="opcao"
                  />
                  <Label
                    className="custom-control-label ml-2 text-left"
                    htmlFor="opcao"
                  >
                    Incluir receitas privadas
                  </Label>
                </div>
              </div>
              <Button
                text="Fechar"
                color="branco"
                data-dismiss="modal"
                type="button"
              />
              <Button
                text="Tô com fome!"
                color="vermelho"
                data-dismiss="modal"
                data-toggle="modal"
                type="button"
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
