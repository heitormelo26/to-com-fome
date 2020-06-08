import React from "react";
import Navbar from "../../components/Navbar";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiClockOutline,
  mdiSilverware,
  mdiAccountOutline,
  mdiHeart,
  mdiBookmark,
  mdiShareVariant,
} from "@mdi/js";

function Receita(props) {
  let tags = ["massa", "brasileira", "vegano", "almoço", "jantar"];

  return (
    <div>
      <Navbar estaLogado={true} />
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <img
              src="https://cdn.panelinha.com.br/receita/1584371597251-macarr%C3%A3o%20roxo.jpg"
              alt="Macarrão Roxo de Beterraba Assada"
              className="w-100"
            />
          </div>
          <div className="col-md-6">
            <div className="row mb-4">
              <div className="col-md-12">
                {tags.map(function (tag) {
                  return (
                    <Link to={`/buscar/categoria/${tag}`} className="mr-4">
                      {tag}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-12">
                <h1>Macarrão Roxo de Beterraba Assada</h1>
              </div>
            </div>
            <div className="row mb-4 d-flex align-items-center">
              <div className="col-md-4 d-flex align-items-center">
                <Icon
                  path={mdiClockOutline}
                  title="Tempo de preparo"
                  size={0.9}
                  color="#8D99AE"
                  className="mr-2"
                />
                <span>1 hora</span>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <Icon
                  path={mdiSilverware}
                  title="Rendimento"
                  size={0.9}
                  color="#8D99AE"
                  className="mr-2"
                />
                <span>3 porções</span>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <Icon
                  path={mdiAccountOutline}
                  title="Usuário"
                  size={1}
                  color="#8D99AE"
                  className="mr-2"
                />
                <span>por Rita Lobo</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-justify">
                  Parece prato de restaurante, de tão bonito que fica. Mas não
                  poderia ser mais fácil de preparar. A beterraba, assada e
                  batida com um pouco da água do cozimento, vira o molho que
                  tinge a massa. A ricota e o endro completam o sabor do prato.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary mr-4 d-flex align-items-center"
          >
            <Icon
              path={mdiHeart}
              title="Curtir"
              size={0.8}
              color="#8D99AE"
              className="mr-2"
            />
            Curtir
          </button>
          <button
            type="button"
            className="btn btn-primary mr-4 d-flex align-items-center"
          >
            <Icon
              path={mdiBookmark}
              title="Salvar"
              size={0.8}
              color="#8D99AE"
              className="mr-2"
            />
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-primary mr-4 d-flex align-items-center"
          >
            <Icon
              path={mdiShareVariant}
              title="Compartilhar"
              size={0.8}
              color="#8D99AE"
              className="mr-2"
            />
            Compartilhar
          </button>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 mb-5">
            <div className="col-md-12">
              <h2 className="mb-4">Ingredientes</h2>
            </div>
            <div className="col-md-12">
              <ul>
                <li>2 beterrabas</li>
                <li>250 g de macarrão bavette</li>
                <li>1 dente de alho descascado</li>
                <li>azeite a gosto</li>
                <li>sal e pimenta-do-reino moída na hora a gosto</li>
                <li>ricota esfarelada a gosto para servir</li>
                <li>folhas de endro (dill) a gosto para servir</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="col-md-12">
              <h2 className="mb-4">Modo de preparo</h2>
            </div>
            <div className="col-md-12">
              <ol>
                <li>
                  Preaqueça o forno a 200°C. Descasque e corte a beterraba em
                  quartos.{" "}
                </li>
                <li>
                  Corte um pedaço grande de papel-alumínio de 35 cm x 40 cm,
                  coloque os pedaços de beterraba no centro, regue com um fio de
                  azeite e tempere com sal e pimenta a gosto. Una as pontas e
                  dobre, formando uma trouxinha. Transfira para um assadeira e
                  leve para assar por cerca de 30 minutos, ou até as beterrabas
                  ficarem macias.
                </li>
                <li>
                  Quando faltar 10 minutos para o tempo da beterraba, leve uma
                  panela média com cerca de 3 litros de água ao fogo alto. Assim
                  que ferver, adicione 1 colher (sopa) de sal, junte o macarrão
                  e misture. Deixe cozinhar pelo tempo indicado na embalagem ou
                  até ficar al dente, mexendo de vez em quando.
                </li>
                <li>
                  Retire a assadeira do forno e, com cuidado para não se queimar
                  com o vapor, abra a trouxinha de papel-alumínio. Transfira as
                  beterrabas (com o líquido que se formou na trouxinha) para o
                  liquidificador, junte o alho, 1 colher (sopa) de azeite e
                  tempere com ½ colher (chá) de sal. Adicione ½ xícara (chá) da
                  água do cozimento do macarrão e bata até ficar liso.
                </li>
                <li>
                  Assim que estiver cozido, escorra a água e transfira o
                  macarrão para uma tigela grande. Adicione o molho de beterraba
                  e misture delicadamente – ele vai absorver parte do molho e
                  ficar com a cor da beterraba. Sirva a seguir com ricota
                  esfarelada, folhas de endro, azeite e pimenta-do-reino moída
                  na hora a gosto.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Contato estaLogado={props.estaLogado} />
      <Footer cor="branco" />
    </div>
  );
}

export default Receita;
