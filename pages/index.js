import Head from "next/head";
import { Box } from "@chakra-ui/core";
import { Hero, Footer, TopSellers, Map, LocalSellers } from "../components";

const Home = () => {
  return (
    <Box h="100vh">
      <Head>
        <title>My Lokaal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <LocalSellers />
      <Map />
      <TopSellers />
      <Footer />
    </Box>
  );
};

export default Home;
