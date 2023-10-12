import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import { DM_Sans } from "@next/font/google";
import { useApollo } from "../services/client";
// import { Providers } from '../context/Providers'
const DMSnas = DM_Sans({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      {/* <Providers> */}
      {/* <CssBaseline /> */}
      <Head>
        <title>Car Plus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <style jsx global>
        {`
          html {
            font-family: ${DMSnas.style.fontFamily};
          }
          *{
            margin:0px;
          }
        `}
      </style>
      <Component {...pageProps} />
      <ToastContainer theme="colored" />

      {/* </Providers> */}
    </ApolloProvider>
  );
}
