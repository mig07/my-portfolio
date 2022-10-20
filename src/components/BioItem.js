import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BioItem({ year, title, subtitle, description }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <p>{year}</p>
        </Col>
        <Col>
          <h6>{title}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col>
          <h6>{subtitle}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col>
          <h6>{description}</h6>
        </Col>
      </Row>
    </Container>
  );
}
