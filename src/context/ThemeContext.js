import React, { useState } from "react";
import * as ThemeJson from "../Theme";
import { ThemeProvider } from "styled-components";
const ThemeContext = React.createContext();

const ThemeProviderContext = ({ children, ThemeSelected = "Black" }) => {
  const [Theme, setTheme] = useState(ThemeJson[ThemeSelected]);
  const updateTheme = (ThemeSelected) => {
    if (ThemeJson[ThemeSelected]) {
      setTheme(ThemeJson[ThemeSelected]);
    } else {
      throw new Error("this Theme doesn't exist");
    }
  };

  return (
    <ThemeContext.Provider value={{ ...Theme, updateTheme }}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderContext, ThemeContext as default };
