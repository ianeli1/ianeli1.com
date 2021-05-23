import { darkCtx } from "components/context/useDarkTheme";
import { Header } from "components/Header";
import { useContext } from "react";

export interface DefaultProps {
  children: React.ReactNode;
}

export function Default({ children }: DefaultProps) {
  const [{ dark }] = useContext(darkCtx);
  return (
    <main
      className={`flex flex-col min-h-screen overflow-x-hidden overscroll-y-auto ${
        dark && "bg-gray-900 text-white"
      }`}
    >
      <Header />

      <main className="flex-grow pt-16">{children}</main>

      <footer className="h-16 flex items-center p-3 justify-between">
        ian elizondo - 2021
        <a
          href="https://github.com/ianeli1/ianeli1.com"
          target="_blank"
          className="ml-2"
        >
          github
        </a>
        <h1>fsajf</h1>
      </footer>
    </main>
  );
}
