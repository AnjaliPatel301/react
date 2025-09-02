import React, { createContext, useContext } from "react";

const Theme= createContext({
    themeMode:"Light",
    lightMode:()=>{},
    darkMode:()=>{},
})

export const ThemeProvider=Theme.Provider;

export function useTheme(){
    return useContext(Theme)
}