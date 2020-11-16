import {
  Flex,
  Box,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Divider,
} from "@chakra-ui/core";
import { SearchIcon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <>
      <Flex
        align="center"
        direction="column"
        textAlign="cnter"
        w="full"
        py={16}
        my={16}
        px={[4, 0]}
      >
        <Box maxW="xl" mx="auto" textAlign="center" mt={6} mb={10}>
          <Heading as="h1" size="xl">
            Find local produce, meals, and other products in your area.
          </Heading>
        </Box>

        <InputGroup w={["full", "500px"]} mb={6}>
          <InputRightElement pointerEvents="none" children={<SearchIcon />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </Flex>
      <Divider />
    </>
  );
};

export default Hero;
