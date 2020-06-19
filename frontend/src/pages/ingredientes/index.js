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
} from "./styles";
import Icon from "@mdi/react";
import { mdiMagnify, mdiClose } from "@mdi/js";
import "../../App.css";

export default function Ingredientes() {
  return (
    <div className="container">
      <button
        type="button"
        className="m-5 btn btn-primary"
        data-toggle="modal"
        data-target="#modalPaginaUm"
      >
        Ingredientes
      </button>
      <div
        className="modal fade"
        id="modalPaginaUm"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <Modal className="modal-content">
            <div className="modal-header d-flex flex-column">
              <Title className="d-block w-100 modal-title">
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
                O que tem na sua geladeira?
              </Title>
              <Subtitle className="d-block w-100 modal-title">
                Escolher ingredientes
              </Subtitle>
            </div>
            <div className="modal-body">
              <div className="container-fluid overflow-auto">
                <div className="row">
                  <div className="col-md-12 p-0 mb-3">
                    <form>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <IconGroup className="input-group-text">
                            <Icon
                              path={mdiMagnify}
                              size={0.8}
                              color="#8D99AE"
                            />
                          </IconGroup>
                        </div>
                        <InputText
                          type="text"
                          placeholder="Buscar..."
                          className="py-3 form-control d-inline-block"
                        />
                        <Plus className="d-inline-block ml-2 px-4 btn">
                          <span>Filtros</span>
                        </Plus>
                      </div>
                      <div className="mt-3">
                        <Category className="btn mb-2 mr-2">
                          <span className="mr-2">Massas</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                        <Category className="btn mb-2 mr-2">
                          <span className="mr-2">Massas</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                        <Category className="btn mb-2 mr-2">
                          <span className="mr-2">Massas</span>
                          <Icon path={mdiClose} size={0.6} color="#edf2f4" />
                        </Category>
                      </div>
                    </form>
                  </div>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Arroz Branco</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Limão</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Milho Verde</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Pimentão Vermelho</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Cenoura</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Brócolis</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Morango</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Uva</h5>
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
                    <div class="card-img-overlay">
                      <Button
                        type="button"
                        className="p-4 icongroup custom-control custom-checkbox btn btn-primary"
                      >
                        <input
                          class="form-check-input m-0"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                      </Button>
                      <h5 class="card-title">Mirtilo</h5>
                    </div>
                  </Card>
                </div>
              </div>
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
    </div>
  );
}
