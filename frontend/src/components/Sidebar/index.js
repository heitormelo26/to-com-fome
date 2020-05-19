import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Description, Title } from './styles';

export default function Sidebar(props) {
  return (
    <Container className="align-self-center text-center">
      <Row>
        <Col md="12" fluid={true}>
          <img src={props.imagem} />
        </Col>
        <Col md="12">
          <Title class="display-4">
            Tá com fome?
          </Title>
        </Col>
        <Col md="12" className="text-center">
          <Description className="d-inline-block">{props.descricao}</Description>
        </Col>
      </Row>
    </Container>
  );
}
