import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import NavBar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import { dayTheme, GlobalStyles, nightTheme } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function App() {
  const chosenTheme = localStorage.getItem("theme") || "dayTheme";

  const [theme, setTheme] = useState(chosenTheme);

  const onThemeChange = () => {
    theme === "dayTheme" ? setTheme("nightTheme") : setTheme("dayTheme");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "dayTheme" ? dayTheme : nightTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <NavBar>
            <Form>
              <Form.Check
                type="switch"
                id="theme-switch"
                checked={theme === "nightTheme"}
                onChange={() => onThemeChange()}
              />
            </Form>
          </NavBar>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}
