import React, {createContext, useState, useContext} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((prev) => (prev.mode === 'light' ? themes.dark : themes.light))
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

const themes = {
    light: {
        mode: 'light',
        background: 'rgba(255, 255, 255, 1)',
        text: 'rgba(0, 0, 0, 1)',
        icon: 'moon'
    },
    dark: {
        mode: 'dark',
        background: 'rgba(32, 32, 32, 1)',
        text: 'rgba(255, 255, 255, 1)',
        icon: 'sunny-outline'
    }
}
