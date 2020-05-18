import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Sidebar(props) {
  return (
    <Container fluid>
      <Row>
        <img src={props.imagem} />
      </Row>
      <Row>
        <h2>Tá com fome?</h2>
      </Row>
      <Row>
        <p>{props.descricao}</p>
      </Row>
    </Container>
  );
}
