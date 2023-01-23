import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  name: "light",
  body: "#FFF",
  fontColor: "#000",
};

export const darkTheme = {
  name: "dark",
  body: "#202124",
  fontColor: "#FFF",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
	}

  navbar {
    color: ${(props) => props.theme.fontColor};
    border: ${(props) => props.theme.fontColor};
  }
`;
