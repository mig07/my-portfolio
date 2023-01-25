import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
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
          <Nav.Link onClick={onThemeChange} className="mx-2">
            {theme === themes.light ? (
              <i class="bi bi-sun-fill"></i>
            ) : (
              <i class="bi bi-moon-stars-fill"></i>
            )}
          </Nav.Link>
        </NavBar>
        <Container
          fluid="lg"
          style={{ "margin-top": 125, "margin-bottom": 50 }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}
