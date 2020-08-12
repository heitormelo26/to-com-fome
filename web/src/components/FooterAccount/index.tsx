import React from "react";

import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";

import { Container, Copyright, Google, Text } from "./styles";

export interface FooterAccountProps {
  google: string;
  text: any[];
}

const FooterAccount: React.FC<FooterAccountProps> = ({ google, text }) => {
  return (
    <div className="container-fluid m-0 p-0 h-100 mh-100">
      <Container className="p-3 h-100">
        <div className="row h-100 p-0 m-0 d-flex align-items-center">
          <div className="col-md-12">
            <div className="m-2 w-100 d-flex flex-row justify-content-center">
              <Google>
                <Icon
                  path={mdiGoogle}
                  title="Google"
                  size={0.7}
                  color="#8D99AE"
                />
              </Google>
              <Text className="mb-0">{google}</Text>
            </div>
          </div>
          <div className="col-md-12">
            <Text className="m-3">{text}</Text>
          </div>
          <div className="col-md-12">
            <Copyright className="m-2">© 2020 Tô Com Fome</Copyright>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterAccount;
