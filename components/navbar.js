import {
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/core";
import { useTranslation as t } from "../utils/hooks";
import { useState } from "react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useAuth } from "../utils/auth";
import FooterLangControl from "./Footer/FooterLangControl";

const MenuItems = ({ mt, mr, size, path, areaLabel, children }) => (
  <Link href={path}>
    <a>
      <Heading size={size} aria-label={areaLabel} mt={mt} mr={mr}>
        {children}
      </Heading>
    </a>
  </Link>
);

const Navbar = () => {
  const { userId, signout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py={5}
      px={5}
      borderBottomWidth={["1px", "0px"]}
      borderColor="grey.900"
      maxW="1440px"
      m="auto"
    >
      <Box>
        <MenuItems size="md" path="/" ariaLabel="MyLokaal, Back to homepage">
          {t("home_title")}
        </MenuItems>
      </Box>
      <Box
        display={["block", "block", "none", "none"]}
        onClick={handleToggle}
        cursor="pointer"
      >
        <svg
          fill={colorMode === "light" ? "black" : "white"}
          width="16px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        display={[
          show ? "block" : "none",
          show ? "block" : "none",
          "flex",
          "flex",
        ]}
        width={["full", "full", "auto", "auto"]}
        alignItems="center"
        flexGrow={1}
        justifyContent={["flex-start", "flex-end"]}
      >
        {userId ? (
          <Button onClick={signout} variant="ghost">
            {"Sign Out"}
          </Button>
        ) : (
          <>
            <FooterLangControl />
            <MenuItems
              size="sm"
              path="/auth/login"
              ariaLabel="MyLokaal, login"
              mt={[5, 5, 0, 0]}
              mr={[0, 4]}
            >
              Log in
            </MenuItems>
            <MenuItems
              size="sm"
              path="/auth/signup"
              ariaLabel="MyLokaal, signup"
              mt={[5, 5, 0, 0]}
              mr={[0, 4]}
            >
              <Button size="md">Sign up</Button>
              <IconButton
                aria-label={`Switch to ${
                  colorMode === "light" ? "dark" : "light"
                } mode`}
                variant="ghost"
                color="current"
                ml="2"
                fontSize="20px"
                onClick={toggleColorMode}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              />
            </MenuItems>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
