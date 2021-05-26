import { createMuiTheme, PaletteType } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { typography } from "./typography";
import { createContext, FC, useEffect, useState } from "react";

export type GlobalThemeContextType = {
  currentTheme: PaletteType;
  toggleTheme: () => void;
};

export const GlobalThemeContext = createContext<GlobalThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
});

export const GlobalThemeProvider: FC = ({ children }) => {
  const [themeType, setThemeType] = useState<PaletteType>("light");

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("globalThemeType");
    if (localStorageTheme === "light" || localStorageTheme === "dark") {
      setThemeType(localStorageTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme: PaletteType = themeType === "dark" ? "light" : "dark";
    if (typeof window !== "undefined") {
      localStorage.setItem("globalThemeType", nextTheme);
    }
    setThemeType(nextTheme);
  };

  const contextValue = {
    currentTheme: themeType,
    toggleTheme,
  };

  const theme = createMuiTheme({
    palette: { type: themeType },
    typography,
  });

  return (
    <GlobalThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalThemeContext.Provider>
  );
};
