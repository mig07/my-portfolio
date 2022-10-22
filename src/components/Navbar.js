import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function NavBar({ theme, children }) {
  const SocialButton = ({ href, icon }) => {
    return (
      <a href={href}>
        <div flex>{icon}</div>
      </a>
    );
  };

  return (
    <Navbar bg={theme} variant={theme}>
      <Container fluid>
        <Nav fill variant="pills" navbar={theme} defaultActiveKey={"home"}>
          <Navbar.Brand eventKey="home" as={Link} to="/">
            mig07
          </Navbar.Brand>
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
              href="https://www.linkedin.com/in/mig07"
              icon={<LinkedInIcon />}
            />
          </Nav.Item>
          <Nav.Item>
            <SocialButton
              href="https://github.com/mig07"
              icon={<GitHubIcon />}
            />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
