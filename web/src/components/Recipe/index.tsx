import React from "react";

import { Image, Title, Subtitle } from "./styles";

import { Link } from "react-router-dom";

interface RecipeProps {
  image: string;
  title: string;
  user: string;
}

const Recipe: React.FC<RecipeProps> = ({ image, title, user, ...rest }) => {
  return (
    <div className="mb-3">
      <Link className="text-decoration-none" to="/receita">
        <Image src={image} alt={title} className="img-fluid mb-3" />
      </Link>
      <Title className="mb-1 text-truncate">
        <Link className="text-decoration-none" to="/receita">
          {title}
        </Link>
      </Title>
      <Subtitle className="text-truncate">por {user}</Subtitle>
    </div>
  );
};

export default Recipe;
