import * as React from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/core";

import Navbar from "../components/navbar";
import { ProvideAuth } from "../utils/auth";
import * as locales from "../locale";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const parsedLocale = locale ? locale.split("-")[0] : "en-US".split("-")[0];

  const localeCopy = locales[parsedLocale];
  const messages = localeCopy[pathname];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
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
    </IntlProvider>
  );
};

export default App;
