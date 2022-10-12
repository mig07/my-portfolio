import { createGlobalStyle } from "styled-components";

export const dayTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const nightTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;