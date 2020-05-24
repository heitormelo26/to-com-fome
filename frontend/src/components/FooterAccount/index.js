import React from "react";
import { Container, Text, Copyright, Google } from "./styles";
import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";

export default function FooterAccount(props) {
  return (
    <div className="container-fluid m-0 p-0 h-100">
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
              <Text className="mb-0">{props.google}</Text>
            </div>
          </div>
          <div className="col-md-12">
            <Text className="m-3">{props.texto}</Text>
          </div>
          <div className="col-md-12">
            <Copyright className="m-2">© 2020 Tô Com Fome</Copyright>
          </div>
        </div>
      </Container>
    </div>
  );
}
