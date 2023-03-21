import { Col, Container, Row } from "react-bootstrap";
import getYearsOfAge from "../util";

export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();
  const copyrightSymbol = String.fromCodePoint(0x00a9);

  const footerStyle = {
    marginTop: 25,
    left: 0,
    bottom: 0,
    width: "100%",
  };

  const copyrightStyle = {
    textAlign: "center",
    marginTop: "30px",
  };

  return (
    <footer style={{ marginTop: 50 }}>
      <hr />
      <div style={footerStyle}>
        <Container>
          <Row>
            <Col md={4}>
              <h3>Miguel Luís</h3>
              <small>
                <ul>
                  <li>
                    I am a {getYearsOfAge()}-year-old software engineer based in
                    Lisbon, Portugal.
                  </li>
                  <li>
                    Looking for job opportunities in full-stack software
                    engineering.
                  </li>
                  <li>If you are hiring, please do say hi!</li>
                  <br />
                  <li>
                    <a href="https://www.linkedin.com/in/mig07">
                      <i className="bi bi-linkedin" /> Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mig07">
                      <i className="bi bi-github" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mig07/my-portfolio">
                      <i className="bi bi-braces" /> Source code
                    </a>
                  </li>
                  <li>
                    <a href="mailto:miguelfpluis@outlook.com">
                      <i className="bi bi-envelope-at-fill" /> Email me!
                    </a>
                  </li>
                </ul>
              </small>
            </Col>
          </Row>
        </Container>
      </div>
      <small>
        <p style={copyrightStyle}>
          Miguel Luís {copyrightSymbol} {currentYear}
        </p>
      </small>
    </footer>
  );
}
