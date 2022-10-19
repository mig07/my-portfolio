import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar({ children }) {
  const SocialButton = ({ href, src }) => {
    return (
      <a href={href}>
        <img src={src} style={{ marginLeft: "5mm" }} />
      </a>
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          mig07
        </Navbar.Brand>
        <Nav fill variant="pills" defaultActiveKey={"home"}>
          <Nav.Item>
            <Nav.Link eventKey="home" as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="projects" as={Link} to="/project">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="blog" as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav fill>
          <Nav.Item>{children}</Nav.Item>
          <Nav.Item>
            <SocialButton
              href="https://www.linkedin.com/in/miguel-lu%C3%ADs-327b06152/"
              src="/images/Linkedin.svg"
            />
          </Nav.Item>
          <Nav.Item>
            <SocialButton
              href="https://github.com/mig07"
              src="/images/GitHub.svg"
            />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
