import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Project";
import { lightTheme, GlobalStyles, darkTheme } from "./themes.js";

export default function App() {
  const themes = {
    light: "light",
    dark: "dark",
    system: "system",
  };

  const clientSystemTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? themes.dark
    : themes.light;

  const currentTheme = localStorage.getItem("theme") || clientSystemTheme;

  const [theme, setTheme] = useState(currentTheme);

  const onThemeChange = (theme) => {
    if (theme === themes.system) {
      return setTheme(clientSystemTheme);
    }
    return setTheme(theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === themes.light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <NavBar>
          <NavDropdown
            id={"theme-dropdown"}
            menuVariant={theme}
            title="Theme"
            onSelect={onThemeChange}
          >
            {Object.values(themes).map((theme) => (
              <Dropdown.Item eventKey={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </Dropdown.Item>
            ))}
          </NavDropdown>
        </NavBar>
        <Container fluid="lg" style={{ "margin-top": 75, "margin-bottom": 50 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}
