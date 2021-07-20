import { darkCtx } from "components/context/useDarkTheme";
import { Header } from "components/Header";
import { useContext } from "react";
import { NextSeo, NextSeoProps } from "next-seo";
import { SocialIcon } from "react-social-icons";

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
  const iconColor = !dark ? "white" : "black";

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
          <h1>
            <SocialIcon
              url="https://www.linkedin.com/in/ianeli1/"
              bgColor={iconColor}
              className="m-1"
            />
            <SocialIcon
              url="https://github.com/ianeli1"
              bgColor={iconColor}
              className="m-1"
            />
          </h1>
        </footer>
      </main>
    </>
  );
}
