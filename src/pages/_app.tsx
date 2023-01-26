import "styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import { ReactNode } from "react";
import { NextPage } from "next";
import { ScriptProps } from "next/script";
import {UserDataProvider} from "context/UserContext";
type Page<P = Record<string, never>> = NextPage<P> & {
  Layout: (page: ScriptProps) => JSX.Element;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const Layout =
    Component.Layout || ((page: { children: ReactNode }) => page.children);
  return (
    <UserDataProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserDataProvider>
  );
}
