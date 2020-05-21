import React from "react";
import { Container, Text, Copyright, Google } from "./styles";
import Icon from "@mdi/react";
import { mdiGoogle } from "@mdi/js";

export default function FooterAccount(props) {
  return (
    <Container className="d-flex text-center align-items-center align-content-center flex-wrap">
      <div className="my-3 w-100 d-flex flex-row justify-content-center">
        <Google>
          <Icon path={mdiGoogle} title="Google" size={0.7} color="#ef233c" />
        </Google>
        <Text className="mb-0">{props.google}</Text>
      </div>
      <Text className="my-3 w-100 d-block">{props.texto}</Text>
      <Copyright className="my-3 w-100 d-block">© 2020 Tô Com Fome</Copyright>
    </Container>
  );
}
