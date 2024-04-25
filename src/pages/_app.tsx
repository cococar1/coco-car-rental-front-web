import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import { Nunito_Sans } from "@next/font/google";
import { useApollo } from "../services/client";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import Providers from "@/providers";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

const NunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <SessionProvider>
        <Head>
          <title>Coco Car </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="robots" content="index, follow" />

          <meta
            name="description"
            content="Coco Car Rental ofrece el mejor servicio de alquiler de autos en Argentina. Encuentra una amplia selección de vehículos y tarifas competitivas para tu próximo viaje."
          />
          <link rel="canonical" href="https://www.cococarental.com/" />

          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Providers>
          <style jsx global>
            {`
              html {
                font-family: ${NunitoSans.style.fontFamily};
              }
              * {
                font-family: ${NunitoSans.style.fontFamily};

                margin: 0;
              }
            `}
          </style>
          <Component {...pageProps} />
          <FloatingWhatsApp
            phoneNumber="51917204652"
            accountName="Coco car"
            chatMessage="Hola como podemos ayudarte"
          />
          <ToastContainer theme="colored" />
        </Providers>
      </SessionProvider>
    </ApolloProvider>
  );
}
