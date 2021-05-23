import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { DarkThemeProvider } from "components/context/useDarkTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkThemeProvider>
      <Component {...pageProps} />
    </DarkThemeProvider>
  );
}

export default MyApp;
