import React, { createContext, useEffect, useState } from "react";

interface DarkContext {
  dark: boolean;
}

export const darkCtx = createContext<
  [DarkContext, React.Dispatch<React.SetStateAction<DarkContext>>]
>(undefined!);

export function DarkThemeProvider({ children }: React.PropsWithChildren<{}>) {
  const [dark, setDark] = useState<DarkContext>({
    dark: false,
  });

  useEffect(() => {
    setDark({ dark: localStorage.getItem("dark") === "true" });
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", dark.dark ? "true" : "false");
  }, [dark]);

  return (
    <darkCtx.Provider value={[dark, setDark]}>{children}</darkCtx.Provider>
  );
}
