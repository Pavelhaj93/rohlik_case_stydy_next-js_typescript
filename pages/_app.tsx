import type { AppProps } from "next/app";

import "../styles/globals.scss";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {

  const test = () => {
    console.log("test")
  }
  return (
    <Layout>
      <Component test={test} {...pageProps} />
    </Layout>
  );
}

export default MyApp;

export const colors = {
  darkGreen: `rgb(121, 162, 49);`,
  lightGreen: `rgb(157 ,187 ,94)`,
};
