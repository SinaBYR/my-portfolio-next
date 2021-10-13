import { createContext } from "react";
import { theme } from "./theme-reducer";

const ThemeContext = createContext(theme);

export const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}