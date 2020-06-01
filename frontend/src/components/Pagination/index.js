import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function Input(props) {
  const numerosPagina = [];

  let match = useRouteMatch();

  for (
    let i = 1;
    i <= Math.ceil(props.totalReceitas / props.receitasPorPagina);
    i++
  ) {
    numerosPagina.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {numerosPagina.map(function (numero) {
          if (numero === props.paginaAtual) {
            return (
              <li key={numero} className="page-item selected">
                <Link to={`${match.url}/${numero}`} className="page-link">
                  {numero}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={numero} className="page-item">
                <Link to={`${match.url}/${numero}`} className="page-link">
                  {numero}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
