import React from "react";
import {createGlobalStyle } from "styled-components";
import { LangProvider } from "./LangContext";
import { ThemeProviderContext } from "./ThemeContext";
const ContextContainer = ({ children, ...props }) => {
  return (
    <ThemeProviderContext>
      <GlobalStyle/>
      <LangProvider>{children}</LangProvider>
    </ThemeProviderContext>
  );
};
const GlobalStyle = createGlobalStyle`
body,html {
  background-color:${(props) => props.theme.colors.background };
  color:${(props) => props.theme.colors.text };
  transition:color 0.1s,background-color 0.1s,border-color 0.1s;
}
`;
export default ContextContainer;
