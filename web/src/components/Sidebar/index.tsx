import React from "react";
import { Container, Description, Title, Image } from "./styles";

interface SidebarProps {
  image: string;
  description: string;
}

const Sidebar: React.FC<SidebarProps> = ({ image, description, ...rest }) => {
  return (
    <div className="container-fluid m-0 p-0 h-100">
      <Container className="row py-2 m-0 d-flex align-content-center flex-wrap">
        <div className="col-md-12 my-4">
          <Image>
            <img className="w-75" src={image} alt="Sidebar do Tô Com Fome" />
          </Image>
        </div>
        <div className="col-md-12 mb-4">
          <Title className="text-center ">Tá com fome?</Title>
        </div>
        <div className="col-md-12 d-flex justify-content-center">
          <Description className="m- w-75">{description}</Description>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
