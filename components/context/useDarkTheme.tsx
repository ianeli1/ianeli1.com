import React, { createContext, useState } from "react";

interface DarkContext{
    dark: boolean
    background: string
    foreground: string
    accent: string

}

export const darkCtx = createContext<[DarkContext, React.Dispatch<React.SetStateAction<DarkContext>>]>(undefined!)

export function DarkThemeProvider({children}: React.PropsWithChildren<{}>){
    const [dark, setDark] = useState<DarkContext>({
        dark: false,
        background: "#FFF",
        foreground: "#000",
        accent: "#333"
    })

    return (
        <darkCtx.Provider value={[dark, setDark]}>
            {children}
        </darkCtx.Provider>
    )
}