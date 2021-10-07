import { createContext, useReducer } from "react";

const darkMode = false;

const themeReducer = (state = darkMode, action) => {
    if (action.type === 'on') {
        return true
    }

    return false
}

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer)

    return <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
}