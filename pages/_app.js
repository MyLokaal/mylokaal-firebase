import * as React from "react";
import { IntlProvider } from "react-intl";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
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

  const head = {
    titleTemplate: "%s | My Lokaal",
    additionalMetaTags: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://mylokaal.com/",
      site_name: "mylokaal",
    },
  };

  return (
    <IntlProvider
      parsedLocale
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <DefaultSeo {...head} />
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
