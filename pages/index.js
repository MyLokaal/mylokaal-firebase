import { Box } from "@chakra-ui/core";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { Hero, Footer, TopSellers, About, LocalSellers } from "../components";

const Home = ({ locale, locales }) => {
  const router = useRouter();
  const { defaultLocale } = router;

  return (
    <>
      <NextSeo
        title="Search for local goods nearby"
        description="My Lokaal homepge"
        canonical="https://mylokaal.com/"
      />
      <Box
        h="100vh"
        locale={locale}
        locales={locales}
        defaultLocale={defaultLocale}
      >
        <Hero />
        <LocalSellers />
        <About />
        <TopSellers />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
