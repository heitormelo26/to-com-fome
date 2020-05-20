import React from "react";
import { Container, Description } from "./styles";

export default function FooterAccount(props) {
    return (
        <Container className="d-flex align-items-center align-content-center flex-wrap">
            <Description className="m-0 w-100 d-block">{props.descricao1}</Description>
            <Description className="m-0 w-100 d-block">{props.descricao2}</Description>
            <Description className="m-0 w-100 d-block">{props.descricao3}</Description>
        </Container>
    );
}