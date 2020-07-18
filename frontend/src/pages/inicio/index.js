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
  More,
  IconCategory,
  IconCategorySelected,
  CategoryTitle,
} from "./styles";
import ilustracao from "../../assets/images/ilustracao.png";
import Icon from "@mdi/react";
import {
  mdiMagnify,
  mdiArrowRight,
  mdiArrowRightCircle,
  mdiArrowLeftCircle,
  mdiBaguette,
  mdiCupcake,
  mdiPasta,
  mdiFood,
  mdiSilverwareVariant,
  mdiPizza,
  mdiFoodCroissant,
} from "@mdi/js";
import Alemanha from "../../assets/images/alemanha.png";
import Brasil from "../../assets/images/brasil.png";
import China from "../../assets/images/china.png";
import EUA from "../../assets/images/estados-unidos.png";
import França from "../../assets/images/franca.png";
import Japao from "../../assets/images/japao.png";
import UK from "../../assets/images/reino-unido.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Inicio() {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <Icon
        path={mdiArrowRightCircle}
        className={className}
        color="#8d99ae"
        size={1}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <Icon
        path={mdiArrowLeftCircle}
        className={className}
        color="#8d99ae"
        size={1}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    autoplaySpeed: 5000,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 7,
          swipeToSlide: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div>
      <Navbar estaLogado={true} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Container className="jumbotron mb-5">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6 text-center text-sm-center text-md-left text-lg-left text-xl-left">
                    <Title>Tá com fome?</Title>
                    <Subtitle className="lead">
                      Então o <strong>Tô Com Fome</strong> foi feito pra você!
                      Escolha quais ingredientes você tem que a gente te indica
                      quais receitas podem ser feitas com eles.
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
                  <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <img
                      className="w-75 p-3 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
                      src={ilustracao}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12 mb-4 d-none d-sm-none d-md-flex d-l-flex d-xl-flex justify-content-center align-items-center">
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
          <div className="col-md-12 mb-4 d-flex d-sm-flex d-md-none d-l-none d-xl-none justify-content-center align-items-center">
            <IconCategorySelected className="mr-3 text-center btn">
              <Icon path={mdiSilverwareVariant} color="#ffffff" size={1} />
            </IconCategorySelected>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiBaguette} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiFoodCroissant} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiPasta} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiFood} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="mr-3 text-center btn">
              <Icon path={mdiPizza} color="#8d99ae" size={1} />
            </IconCategory>
            <IconCategory className="text-center btn">
              <Icon path={mdiCupcake} color="#8d99ae" size={1} />
            </IconCategory>
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
          <div className="col-md-12 mb-5 d-flex d-sm-flex d-md-none d-l-none d-xl-none justify-content-center align-items-center">
            <CategoryTitle className="m-0">Todas as receitas</CategoryTitle>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1589814396193-_JW_8824.jpg"
              titulo="Receita 1"
              usuario="TotozinDelas"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1588970548521-_JW_4008.jpg"
              titulo="Receita 2"
              usuario="Zezezinho"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586463883276-16_Panelinha_04_12_19_338.jpg"
              titulo="Receita 3"
              usuario="Fitipaldi"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-2 col-lg-3 col-xl-3 d-flex justify-content-center">
            <Receita
              imagem="https://cdn.panelinha.com.br/receita/1586460384106-frango%20erva-doce.jpg"
              titulo="Receita 4"
              usuario="Ana Carolina Carol"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-2 d-flex justify-content-center align-items-center">
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Slider {...settings} className="my-4">
              <div key={0} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link to="../buscar/alemanha">
                    <img alt="" width="75" height="75" src={Alemanha} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/alemanha">
                  <h3 className="d-none text-center flag-title">Alemanha</h3>
                </Link>
              </div>
              <div key={1} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/brasil">
                    <img alt="" width="75" height="75" src={Brasil} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/brasil">
                  <h3 className="d-none text-center flag-title">Brasil</h3>
                </Link>
              </div>
              <div key={2} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/china">
                    <img alt="" width="75" height="75" src={China} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/china">
                  <h3 className="d-none text-center flag-title">China</h3>
                </Link>
              </div>
              <div key={3} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/eua">
                    <img alt="" width="75" height="75" src={EUA} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/eua">
                  <h3 className="d-none text-center flag-title">EUA</h3>
                </Link>
              </div>
              <div key={4} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/franca">
                    <img alt="" width="75" height="75" src={França} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/franca">
                  <h3 className="d-none text-center flag-title">França</h3>
                </Link>
              </div>
              <div key={5} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/japao">
                    <img alt="" width="75" height="75" src={Japao} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/japao">
                  <h3 className="d-none text-center flag-title">Japão</h3>
                </Link>
              </div>
              <div key={6} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="text-decoration-none " to="../buscar/uk">
                    <img alt="" width="75" height="75" src={UK} />
                  </Link>
                </div>
                <Link className="text-decoration-none " to="../buscar/uk">
                  <h3 className="d-none text-center flag-title">UK</h3>
                </Link>
              </div>
              <div key={7} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={Alemanha} />
                </div>
                <h3 className="d-none text-center flag-title">Alemanha 2</h3>
              </div>
              <div key={8} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={Brasil} />
                </div>
                <h3 className="d-none text-center flag-title">Brasil 2</h3>
              </div>
              <div key={9} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={China} />
                </div>
                <h3 className="d-none text-center flag-title">China 2</h3>
              </div>
              <div key={10} className="flag text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <img alt="" width="75" height="75" src={EUA} />
                </div>
                <h3 className="d-none text-center flag-title">EUA 2</h3>
              </div>
            </Slider>
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
