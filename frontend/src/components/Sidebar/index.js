import React from "react";
import { Row, Col } from "reactstrap";
import { Container, Description, Title } from './styles';

export default function Sidebar(props) {
  return (
    <Container className="container align-self-center text-center">
      <Row>
        <Col md="12" fluid={true}>
          <img src={props.imagem} width="200" />
        </Col>
        <Col md="12">
          <Title class="display-4">
            Tá com fome?
          </Title>
        </Col>
        <Col md="12" className="text-center background">
          <Description className="d-inline-block">{props.descricao}</Description>
        </Col>
      </Row>
    </Container>
  );
}
