import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import { ProvideAuth } from "../utils/auth";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta title="MyLokaal | Find local produce, meals, and other products in your area." />
      <link rel="icon" sizes="96x96" href="/favicons/favicon.ico" />
    </Head>
    <ProvideAuth>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ProvideAuth>
  </>
);

export default App;
