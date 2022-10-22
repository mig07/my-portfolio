import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BioItem({ icon, year, title, subtitle, description }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={3}>{icon}</Col>
        <Col xs={9}>
          <h6 style={{ "font-weight": "bolder" }}>{title}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col xs={9}>
          <h6>{subtitle}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col xs={9}>
          <p>{year}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col xs={9}>
          <h6>{description}</h6>
        </Col>
      </Row>
    </Container>
  );
}
