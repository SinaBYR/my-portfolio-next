import { createContext } from "react";
import { themeColor } from "./theme-reducer";

export const ThemeContext = createContext(undefined);

export const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={themeColor}>
            {props.children}
        </ThemeContext.Provider>
    )
}