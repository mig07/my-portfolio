import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Form } from "react-bootstrap";

export default function NavBar() {
  const ThemeSwitch = () => {
    return (
      <Form>
        <Form.Check type="switch" id="theme-switch" />
      </Form>
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">@mig07</Navbar.Brand>
        <Nav fill variant="pills">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/project">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav fill>
          <Nav.Item>
            <ThemeSwitch />
          </Nav.Item>
          <Nav.Item>
            <a href="https://www.linkedin.com/in/miguel-lu%C3%ADs-327b06152/">
              <img
                src="/images/Linkedin.svg"
                style={{ marginLeft: "5mm" }}
              ></img>
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="https://github.com/mig07">
              <img src="/images/GitHub.svg" style={{ marginLeft: "5mm" }}></img>
            </a>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
