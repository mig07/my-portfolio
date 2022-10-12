import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import Blog from "./pages/Blog";
import styled, { ThemeProvider } from "styled-components";
import { dayTheme, nightTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function App() {
  const [theme, setTheme] = useState("dayTheme");
  const [page, setPage] = useState("/");

  const onPageChange = (page) => setPage(page);

  const onThemeChange = () => {
    theme === "dayTheme" ? setTheme("nightTheme") : setTheme("dayTheme");
  };

  return (
    <ThemeProvider theme={theme === "dayTheme" ? dayTheme : nightTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <div>
            <NavBar page={page} onPageChange={onPageChange} />
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
