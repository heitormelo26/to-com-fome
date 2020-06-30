import React from "react";
import "../../App.css";
import Navbar from "../../components/Navbar";
import Receita from "../../components/Receita";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import Ingredientes from "../ingredientes";
import {
  Container,
  Title,
  Subtitle,
  Fridge,
  Category,
  CategorySelected,
  IconGroup,
  InputText,
  Flags,
  More,
} from "./styles";
import ilustracao from "../../assets/images/ilustracao.png";
import Icon from "@mdi/react";
import { mdiMagnify, mdiArrowRight } from "@mdi/js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Alemanha from "../../assets/images/alemanha.png";
import Brasil from "../../assets/images/brasil.png";
import China from "../../assets/images/china.png";
import EUA from "../../assets/images/estados-unidos.png";
import França from "../../assets/images/franca.png";
import Japao from "../../assets/images/japao.png";
import UK from "../../assets/images/reino-unido.png";
import $ from "jquery";

function Inicio() {
  return (
    <div>
      <Navbar estaLogado={true} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Container className="jumbotron mb-5">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                    <Title className="display-4">Tá com fome?</Title>
                    <Subtitle className="lead">
                      Então o <strong>Tô Com Fome</strong> foi feito pra você!
                      <br /> Escolha quais ingredientes você tem que a
                      <br /> gente te indica quais receitas podem ser
                      <br /> feitas com eles.
                    </Subtitle>
                    <Fridge
                      type="button"
                      class="btn"
                      data-toggle="modal"
                      data-target="#ingredientes"
                    >
                      O que tem na sua geladeira?
                    </Fridge>
                    <Ingredientes />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img className="w-75 p-3" src={ilustracao} alt="" />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12 mb-4 d-flex justify-content-center align-items-center">
            <CategorySelected className="mr-3 text-center text-truncate btn">
              <span>Todas</span>
            </CategorySelected>
            <Category className="mr-3 text-center text-truncate btn">
              <span>Café da manhã</span>
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              <span>Brunch</span>
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              <span>Almoço</span>
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              <span>Lanche</span>
            </Category>
            <Category className="mr-3 text-center text-truncate btn">
              <span>Jantar</span>
            </Category>
            <Category className="text-center text-truncate btn">
              <span>Sobremesa</span>
            </Category>
          </div>
          <div className="col-md-12 mb-4 d-flex justify-content-center align-items-center">
            <div className="input-group">
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
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-md-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol"
            />
          </div>
          <div className="col-md-12 mb-2 d-flex justify-content-center align-items-center">
            <More to="/buscar" className="text-decoration-none">
              Mais receitas{" "}
              <Icon
                path={mdiArrowRight}
                size={0.7}
                color="#ef233c"
                className="ml-2"
              />
            </More>
          </div>
        </div>
        {/* Slide */}
        <div className="row my-5">
          <div className="col-md-12 ">
            <Carousel
              beforeChange={function (nextSlide, current) {
                var total = current.totalItems;
                var next = nextSlide + 3;
                var prev = current.currentSlide + 3;
                var item = ".react-multi-carousel-item";
                var attr = "data-index";
                var flags = document.getElementsByClassName("flag");
                for (let i = 0; i < total; i++) {
                  if ($(item)[i].getAttribute(attr) === next.toString()) {
                    flags[next].className = "flag text-center bg-warning ";
                    var titles = document.getElementsByClassName("flag-title");
                    titles[next].className = "flag-title text-center d-block";
                  } else if (
                    $(item)[i].getAttribute(attr) === prev.toString()
                  ) {
                    flags[prev].className = "flag text-center bg-danger";
                    var titles2 = document.getElementsByClassName("flag-title");
                    titles2[prev].className = "flag-title text-center d-none";
                  }
                }
              }}
              infinite={false}
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className="text-center"
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={50}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 7,
                  partialVisibilityGutter: 60,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 3,
                  partialVisibilityGutter: 50,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={Alemanha}
                />
                <h3 className="d-none text-center flag-title">Alemanha</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={Brasil}
                />
                <h3 className="d-none text-center flag-title">Brasil</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={China}
                />
                <h3 className="d-none text-center flag-title">China</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={EUA}
                />
                <h3 className="text-center flag-title">Estados Unidos</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={França}
                />
                <h3 className="d-none text-center flag-title">França</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={Japao}
                />
                <h3 className="d-none text-center flag-title">Japão</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={UK}
                />
                <h3 className="d-none text-center flag-title">Reino Unido</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={Alemanha}
                />
                <h3 className="d-none text-center flag-title">Alemanha</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={Brasil}
                />
                <h3 className="d-none text-center flag-title">Brasil</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={China}
                />
                <h3 className="d-none text-center flag-title">China</h3>
              </Flags>
              <Flags className="flag text-center">
                <img
                  alt=""
                  width="100"
                  height="100"
                  className="mb-4"
                  src={EUA}
                />
                <h3 className="d-none text-center flag-title">
                  Estados Unidos
                </h3>
              </Flags>
            </Carousel>
          </div>
        </div>
        {/* Slide */}
      </div>
      <Contato estaLogado={false} />
      <Footer cor="branco" />
    </div>
  );
}

export default Inicio;
