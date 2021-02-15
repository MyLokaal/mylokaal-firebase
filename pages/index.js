import Head from "next/head";
import { Box } from "@chakra-ui/core";
import { Hero, LocalSellers, TopSellers, About } from "../components/Home";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box h="100vh">
      <Head>
        <title>My Lokaal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <LocalSellers />
      <About />
      <TopSellers />
      <Footer />
    </Box>
  );
};

export default Home;
