import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Circle, CircleSelected } from "./styles";

export default function Input(props) {
  const numerosPagina = [];

  let match = useRouteMatch();

  for (let i = 1; i <= 3; i++) {
    let j = props.paginaAtual;
    if (
      props.paginaAtual + 2 >
      Math.ceil(props.totalReceitas / props.receitasPorPagina)
    ) {
      numerosPagina.push(j - 1);
    }
    if (j + i - 1 <= Math.ceil(props.totalReceitas / props.receitasPorPagina)) {
      numerosPagina.push(j + i - 1);
    }
  }

  return (
    <nav>
      <ul className="pagination">
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
      </ul>
    </nav>
  );
}
