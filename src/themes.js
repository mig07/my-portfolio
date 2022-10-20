import { createGlobalStyle } from "styled-components";

export const dayTheme = {
  primary: "#FB7237",
  secondary: "#FB8E5F",
  dark: "#AF4F26",
  body: "#FFF",
  fontColor: "#000",
};

export const nightTheme = {
  body: "#000",
  fontColor: "#FFF",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
	}

  navbar {
    color: ${(props) => props.theme.fontColor};
  }
`;
