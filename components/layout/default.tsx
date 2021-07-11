import { darkCtx } from "components/context/useDarkTheme";
import { Header } from "components/Header";
import { useContext } from "react";
import { NextSeo, NextSeoProps } from "next-seo";

export interface DefaultProps {
  children: React.ReactNode;
  seo: NextSeoProps;
}

export function Default({ children, seo }: DefaultProps) {
  const [{ dark }] = useContext(darkCtx);
  const seoProps: NextSeoProps = {
    ...seo,
    title: `${seo.title ?? "*"} | Ian`,
  };

  return (
    <>
      <NextSeo {...seoProps} />
      <main
        className={`flex flex-col min-h-screen overflow-x-hidden overscroll-y-auto transition-colors ${
          dark && "bg-gray-900 text-white"
        }`}
      >
        <Header />

        <main className="flex-grow pt-16">{children}</main>

        <footer
          className={`h-16 flex items-center p-3 justify-between border-t-2 border-black ${
            dark ? "text-black bg-gray-500" : "text-white bg-black"
          }`}
        >
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
    </>
  );
}
