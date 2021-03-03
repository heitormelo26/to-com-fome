import React, { useState, useEffect } from "react";

import { Card, Image, Title, Subtitle } from "./styles";

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
    api.get(`u-i?id=${recipe.user_id}`).then((response) => {
      setName(response.data[0].name);
    });
  }, [recipe.user_id]);

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mb-3">
      <Card className="card">
        <Link to={`/recipe?id=${recipe.id}`}>
          <Image
            src={recipe.image}
            alt={recipe.title}
            className="card-img-top text-decoration-none"
          />
        </Link>
        <div className="card-body">
          <Title className="card-title text-decoration-none">
            <Link to={`/recipe?id=${recipe.id}`}>
              {recipe.title.toLowerCase()}
            </Link>
          </Title>
          <Subtitle className="card-subtitle">Enviada por {name}</Subtitle>
        </div>
      </Card>
    </div>
  );
};

export default Recipe;
