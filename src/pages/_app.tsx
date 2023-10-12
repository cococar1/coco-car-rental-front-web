import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import { DM_Sans } from "@next/font/google";
import { useApollo } from "../services/client";

const DMSans = DM_Sans({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Car Plus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <style jsx global>
        {`
          html {
            font-family: ${DMSans.style.fontFamily};
          }
          * {
            margin: 0;
          }
        `}
      </style>
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </ApolloProvider>
  );
}
