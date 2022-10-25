import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import NavBar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import { dayTheme, GlobalStyles, nightTheme } from "./themes.js";

export default function App() {
  const themeOptions = ["Light", "Dark", "System"];

  const clientSystemTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  const currentTheme = localStorage.getItem("theme") || clientSystemTheme;

  const [theme, setTheme] = useState(currentTheme);

  const onThemeChange = (theme) => {
    if (theme === "system") {
      return setTheme(clientSystemTheme);
    }
    return setTheme(theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? dayTheme : nightTheme}>
      <GlobalStyles />
      <Router>
        <NavBar theme={theme}>
          <NavDropdown
            id={"theme-dropdown"}
            menuVariant={theme}
            title="Theme"
            onSelect={onThemeChange}
          >
            {themeOptions.map((theme) => (
              <Dropdown.Item eventKey={theme.toLowerCase()}>
                {theme}
              </Dropdown.Item>
            ))}
          </NavDropdown>
        </NavBar>
        <Container fluid="lg">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
