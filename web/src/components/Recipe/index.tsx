import React, { useState, useEffect } from "react";

import { Image, Title, Subtitle } from "./styles";

import { Link } from "react-router-dom";

import api from "../../services/api";

export interface RecipeProps {
  id: number;
  image: string;
  title: string;
  user_id: string;
}
interface Props {
  recipe: RecipeProps;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    api.get(`u-getById?id=${recipe.user_id}`).then((response) => {
      setName(response.data[0].name);
    });
  }, [recipe.user_id]);
  return (
    <div className="mb-3">
      <Link className="text-decoration-none" to={`/receita?id=${recipe.id}`}>
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
      <Subtitle className="text-truncate">por {name}</Subtitle>
    </div>
  );
};

export default Recipe;
