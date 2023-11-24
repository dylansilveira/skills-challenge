import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { theme } from "../styles/theme"
import ErrorBoundary from "../components/errorBoundary";

export default function App({ Component, pageProps }) {

  return (
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <Head>
          <title>BetterPopulis | Skills Challenge</title>

          <meta property="og:site_name" content="Dose Dupla" />
          <meta property="og:title" content="BetterPopulis | Skills Challenge" />
          <meta property="og:description" content="Resolução do Desafio #2 do Skills Challenge pela equipe Dose Dupla" />
          <meta property="og:type" content="website" />

        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ErrorBoundary>
  )
}
