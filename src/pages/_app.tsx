import { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '../services/client'
// import { Providers } from '../context/Providers'


export default function MyApp ({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={client}>
      {/* <Providers> */}
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
        <ToastContainer theme='colored' />
      {/* </Providers> */}
    </ApolloProvider>
  )
}
