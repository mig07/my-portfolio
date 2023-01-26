import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

export default function NavBar({ children }) {
  const theme = useTheme().name;

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand={"lg"}
      variant={theme}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container>
        <Navbar.Brand eventkey="home" as={Link} to="/">
          mig07
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav navbar={theme} defaultActiveKey={"home"}>
            <Nav.Link eventkey="home" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link eventkey="blog" as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav navbar={theme} className="flex-row ms-auto">
            <Nav.Link
              eventkey="linkedin"
              href="https://www.linkedin.com/in/mig07"
              className="mx-2"
            >
              <i className="bi bi-linkedin" />
            </Nav.Link>
            <Nav.Link
              eventkey="email"
              href="mailto:miguelfpluis@outlook.com"
              className="mx-2"
            >
              <i className="bi bi-envelope-at-fill"></i>
            </Nav.Link>
            <Nav.Link
              eventkey="github"
              href="https://github.com/mig07"
              className="mx-2"
            >
              <i className="bi bi-github" />
            </Nav.Link>
            <Nav.Link
              eventkey="source"
              href="https://github.com/mig07/my-portfolio"
              className="mx-2"
            >
              <i className="bi bi-braces" />
            </Nav.Link>
            <div className="vr mx-2"></div>
            {children}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
