import React from "react";

import { Container, Description, Title, Image } from "./styles";

interface SidebarProps {
  image: string;
  description: string;
}

const Sidebar: React.FC<SidebarProps> = ({ image, description }) => {
  return (
    <Container className="col-4 d-none d-lg-flex">
      <Image className="img-fluid" src={image} alt="Tô Com Fome" />
      <Title>Tá com fome?</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Sidebar;
