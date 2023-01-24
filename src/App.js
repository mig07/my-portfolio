import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Project";
import { darkTheme, GlobalStyles, lightTheme } from "./themes.js";

export default function App() {
  const themes = {
    light: "light",
    dark: "dark",
  };

  const clientSystemTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? themes.dark
    : themes.light;

  const currentTheme = localStorage.getItem("theme") || clientSystemTheme;

  const [theme, setTheme] = useState(currentTheme);

  const onThemeChange = () => {
    return setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === themes.light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <NavBar>
          <Nav.Item onClick={onThemeChange}>
            <button class={`btn btn-${theme}`}>
              {theme === themes.light ? (
                <i class="bi bi-sun-fill"></i>
              ) : (
                <i class="bi bi-moon-stars-fill"></i>
              )}
            </button>
          </Nav.Item>
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
