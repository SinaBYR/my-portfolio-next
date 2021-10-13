import { createContext, useReducer } from "react";
import { initialState, themeReducer } from "./theme-reducer";

export const ThemeContext = createContext()
export const DispatchContext = createContext()

export const ThemeProvider = (props) => {
    const [dark, dispatch] = useReducer(themeReducer, initialState)

    return (
        <DispatchContext.Provider value={dispatch}>
            <ThemeContext.Provider value={dark}>
                {props.children}
            </ThemeContext.Provider>
        </DispatchContext.Provider>
    )
}