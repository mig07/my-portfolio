import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">@mig07</Navbar.Brand>
            <h2>|</h2>
            <a href="https://www.linkedin.com/in/miguel-lu%C3%ADs-327b06152/">
                <img src="/images/Linkedin.svg" style={{"marginLeft": "5mm"}}></img>
            </a>
            <a href="https://github.com/mig07">
                <img src="/images/GitHub.svg" style={{"marginLeft": "5mm"}}></img>
            </a>
            <Nav className="ml-auto" fill="true">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/project">Projects</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
        </Navbar>
    )
}