import Head from "next/head";
import { Button, useColorMode } from "@chakra-ui/core";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
}
