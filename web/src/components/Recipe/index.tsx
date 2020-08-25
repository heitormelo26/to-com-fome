import React from "react";

import { Image, Title, Subtitle } from "./styles";

import { Link } from "react-router-dom";

export interface RecipeProps {
  id: number;
  image: string;
  title: string;
  user: string;
}
interface Props {
  recipe: RecipeProps;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  return (
    <div className="mb-3">
      <Link className="text-decoration-none" to="/receita">
        <Image
          src={recipe.image}
          alt={recipe.title}
          className="img-fluid mb-3"
        />
      </Link>
      <Title className="mb-1 text-truncate">
        <Link className="text-decoration-none" to="/receita">
          {recipe.title}
        </Link>
      </Title>
      <Subtitle className="text-truncate">por {recipe.user}</Subtitle>
    </div>
  );
};

export default Recipe;
