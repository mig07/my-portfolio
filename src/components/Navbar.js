import React from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

export default function NavBar({ children }) {
  const theme = useTheme().name;

  return (
    <Navbar collapseOnSelect bg={theme} expand={"lg"} variant={theme}>
      <Container>
        <Navbar.Brand eventKey="home" as={Link} to="/">
          mig07
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav navbar={theme} defaultActiveKey={"home"} className="me-auto">
            <Nav.Item>
              <Nav.Link eventKey="home" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="blog" as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link
                eventKey="linkedin"
                href="https://www.linkedin.com/in/mig07"
              >
                <i class="bi bi-linkedin" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="github" href="https://github.com/mig07">
                <i class="bi bi-github" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="source"
                href="https://github.com/mig07/my-portfolio"
              >
                <i class="bi bi-braces" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>{children}</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
