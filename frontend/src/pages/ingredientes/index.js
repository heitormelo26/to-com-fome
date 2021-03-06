import React from "react";
import {
  IconGroup,
  InputText,
  Modal,
  Category,
  StyledLink,
  StyledLinkSecondary,
  Title,
  Subtitle,
  Plus,
  Card,
  Button,
  Label,
} from "./styles";
import Icon from "@mdi/react";
import { mdiMagnify, mdiClose } from "@mdi/js";
import "../../App.css";
import $ from "jquery";

export default function Ingredientes() {
  $(document).ready(function () {
    $(".selectpicker").selectpicker("refresh");
  });
  return (
    <div
      className="modal fade"
      id="ingredientes"
      tabindex="-1"
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
                        title="Categoria"
                        data-size="5"
                      >
                        <option>Entrada</option>
                        <option>Acompanhamento</option>
                        <option>Sobremesa</option>
                      </Plus>
                    </div>
                    <div className="container">
                      <div className="mt-3 d-flex justify-content-start row">
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                          <Category className="btn mb-2 mr-2 ">
                            <span className="mr-2 text-truncate">
                              Beterraba
                            </span>
                            <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                          </Category>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                          <Category className="btn mb-2 mr-2 ">
                            <span className="mr-2 text-truncate">Melancia</span>
                            <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                          </Category>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                          <Category className="btn mb-2 mr-2 ">
                            <span className="mr-2 text-truncate">
                              Beterraba
                            </span>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox1" />
                          <label className="m-0" for="checkbox1"></label>
                        </div>
                      </Button>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox2" />
                          <label className="m-0" for="checkbox2"></label>
                        </div>
                      </Button>
                      <h5 className="card-title">Lim??o</h5>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox3" />
                          <label className="m-0" for="checkbox3"></label>
                        </div>
                      </Button>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox4" />
                          <label className="m-0" for="checkbox4"></label>
                        </div>
                      </Button>
                      <h5 className="card-title">Piment??o Vermelho</h5>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox5" />
                          <label className="m-0" for="checkbox5"></label>
                        </div>
                      </Button>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox6" />
                          <label className="m-0" for="checkbox6"></label>
                        </div>
                      </Button>
                      <h5 className="card-title">Br??colis</h5>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox7" />
                          <label className="m-0" for="checkbox7"></label>
                        </div>
                      </Button>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox8" />
                          <label className="m-0" for="checkbox8"></label>
                        </div>
                      </Button>
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
                      <Button
                        type="button"
                        className="p-3 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <div className="round">
                          <input type="checkbox" id="checkbox9" />
                          <label className="m-0" for="checkbox9"></label>
                        </div>
                      </Button>
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
                    for="opcao"
                  >
                    Incluir receitas privadas
                  </Label>
                </div>
              </div>
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
                >
                  <span>T?? com fome!</span>
                </button>
              </StyledLink>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
