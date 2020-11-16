import Head from "next/head";
import { Box } from "@chakra-ui/core";
import Hero from "../components/hero";
import LocalSellers from "../components/local-sellers";
import TopSellers from "../components/top-sellers";
import Map from "../components/map";

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
    </Box>
  );
};

export default Home;
