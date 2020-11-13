import Head from "next/head";
import { Box, Flex, Heading, Button, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";

import { withSignInRedirect } from "../components/auth";

export const Container = (props) => (
  <Box w="full" maxW="1280px" mx="auto" px={6} {...props} />
);

const Header = ({ onSignIn }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="header" w="full" h="4rem">
      <Box w="full" mx="auto" px={6} pr={[1, 6]} h="100%">
        <Flex
          size="100%"
          p={[0, 6]}
          pl={[0, 4]}
          align="center"
          justify="space-between"
        >
          <Box
            as="a"
            d="block"
            href="/"
            aria-label="MyLokaal, Back to homepage"
          >
            <Heading size="md">My Lokaal</Heading>
          </Box>
          <Flex align="center">
            <Button onClick={onSignIn} variant="ghost">
              {"Sign In"}
            </Button>
            <NextLink href="/" passHref>
              <Button as="a">{"Sign up"}</Button>
            </NextLink>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const Home = ({ onSignIn }) => {
  return (
    <Box h="100vh">
      <Header onSignIn={onSignIn} />
      <Head>
        <title>Create Next App</title>
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

export default withSignInRedirect(Home);
