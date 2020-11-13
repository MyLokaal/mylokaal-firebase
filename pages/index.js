import Head from "next/head";
import { Box, Heading } from "@chakra-ui/core";

export const Container = (props) => (
  <Box w="full" maxW="1280px" mx="auto" px={6} {...props} />
);

const Home = () => {
  return (
    <Box h="100vh">
      <Head>
        <title>My Lokaal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="section" pt={40} pb={24}>
        <Container>
          <Box maxW="xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" fontWeight="black">
              Find local produce, meals, and other products in your area.
            </Heading>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
