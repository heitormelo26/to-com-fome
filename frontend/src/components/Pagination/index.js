import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Circle, CircleSelected } from "./styles";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";

export default function Input(props) {
  const numerosPagina = [];
  const totalPaginas = Math.ceil(props.totalReceitas / props.receitasPorPagina);
  let match = useRouteMatch();
  let atual = props.paginaAtual;

  function anterior() {
    if (props.paginaAtual !== 1) {
      return (
        <Circle className="page-item d-flex justify-content-center text-center">
          <Link
            to={`${match.url}/${props.paginaAtual - 1}`}
            className="page-link"
          >
            <Icon path={mdiArrowLeft} size={0.7} color="#8D99AE" />
          </Link>
        </Circle>
      );
    }
  }

  function proximo() {
    if (props.paginaAtual !== totalPaginas) {
      return (
        <Circle className="page-item d-flex justify-content-center text-center">
          <Link
            to={`${match.url}/${props.paginaAtual + 1}`}
            className="page-link"
          >
            <Icon path={mdiArrowRight} size={0.7} color="#8D99AE" />
          </Link>
        </Circle>
      );
    }
  }

  if (props.paginaAtual === totalPaginas) {
    numerosPagina.push(atual - 2);
    numerosPagina.push(atual - 1);
  }

  if (props.paginaAtual + 1 === totalPaginas) {
    numerosPagina.push(atual - 1);
  }

  for (let i = 1; i <= 3; i++) {
    if (atual + i - 1 <= totalPaginas) {
      numerosPagina.push(atual + i - 1);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        {anterior()}
        {numerosPagina.map(function (numero) {
          if (numero === props.paginaAtual) {
            return (
              <CircleSelected
                key={numero}
                className="page-item d-flex justify-content-center text-center"
              >
                <Link to={`${match.url}/${numero}`} className="page-link">
                  {numero}
                </Link>
              </CircleSelected>
            );
          } else {
            return (
              <Circle
                key={numero}
                className="page-item d-flex justify-content-center text-center"
              >
                <Link to={`${match.url}/${numero}`} className="page-link">
                  {numero}
                </Link>
              </Circle>
            );
          }
        })}
        {proximo()}
      </ul>
    </nav>
  );
}
