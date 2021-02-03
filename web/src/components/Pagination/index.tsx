import React from "react";

import { useRouteMatch, Link } from "react-router-dom";

import { Circle, CircleSelected } from "./styles";

import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";

interface PaginationProps {
  totalOfRecipes: number;
  recipesPerPage: number;
  activePage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalOfRecipes,
  recipesPerPage,
  activePage,
  ...rest
}) => {
  const pageNumbers = []; /* array que guarda os números mostrados na paginação */
  const totalOfPages = Math.ceil(totalOfRecipes / recipesPerPage);
  let match = useRouteMatch();
  let active = activePage; /* página atual */

  function prev() {
    if (activePage !== 1) {
      return (
        <Circle className="center-center">
          <Link to={`${match.url}/${activePage - 1}`} className="page-link">
            <Icon path={mdiArrowLeft} size={0.7} color="#8D99AE" />
          </Link>
        </Circle>
      );
    }
  }

  function next() {
    if (activePage !== totalOfPages) {
      return (
        <Circle className="center-center">
          <Link to={`${match.url}/${activePage + 1}`} className="page-link">
            <Icon path={mdiArrowRight} size={0.7} color="#8D99AE" />
          </Link>
        </Circle>
      );
    }
  }

  if (activePage === totalOfPages) {
    pageNumbers.push(active - 2);
    pageNumbers.push(active - 1);
  }

  if (activePage + 1 === totalOfPages) {
    pageNumbers.push(active - 1);
  }

  for (let i = 1; i <= 3; i++) {
    if (active + i - 1 <= totalOfPages) {
      pageNumbers.push(active + i - 1);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        {prev()}
        {pageNumbers.map(function (number) {
          if (number === activePage) {
            return (
              <CircleSelected key={number} className="center-center">
                <Link to={`${match.url}/${number}`} className="page-link">
                  {number}
                </Link>
              </CircleSelected>
            );
          } else {
            return (
              <Circle key={number} className="center-center">
                <Link to={`${match.url}/${number}`} className="page-link">
                  {number}
                </Link>
              </Circle>
            );
          }
        })}
        {next()}
      </ul>
    </nav>
  );
};

export default Pagination;
