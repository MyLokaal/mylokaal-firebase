import {
  Box,
  Flex,
  Heading,
  IconButton,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { RiMoonFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import Link from "next/link";
import { useAuth } from "../../utils/auth";

const Navbar = () => {
  const { userId, signout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w="full" mx="auto" px={6} pr={[1, 6]} h="100%">
      <Flex
        size="100%"
        p={[4, 6]}
        pl={[0, 4]}
        align="center"
        justify="space-between"
      >
        <Box as="a" d="block" href="/" aria-label="MyLokaal, Back to homepage">
          <Heading size="md">My Lokaal</Heading>
        </Box>
        <Flex align="center">
          {userId ? (
            <Button onClick={signout} variant="ghost">
              {"Sign Out"}
            </Button>
          ) : (
            <>
              <Link href="/auth/login">
                <a>
                  <Heading size="sm" aria-label="MyLokaal, login" pr={4}>
                    Log in
                  </Heading>
                </a>
              </Link>

              <Link href="/auth/signup">
                <a>
                  <Button size="md" aria-label="MyLokaal, login">
                    Sign up
                  </Button>
                </a>
              </Link>
            </>
          )}

          <IconButton
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
            } mode`}
            variant="ghost"
            color="current"
            ml="2"
            fontSize="20px"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <RiMoonFill /> : <FiSun />}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
