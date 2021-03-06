import {
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  InputLeftAddon,
} from "@chakra-ui/core";
import { SearchIcon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      textAlign="cnter"
      px={[4, 0]}
      bgImage="url('/images/main.png')"
      bgSize="cover"
      bgPosition="50%"
      height={551}
      mb={5}
    >
      <Flex
        direction={["column", "row"]}
        w={["full", "600px"]}
        bg="white"
        mt={[226, 226, 202, 230]}
      >
        <InputGroup>
          <InputLeftAddon
            borderRadius="0"
            pointerEvents="none"
            children={<Heading size="sm">Find</Heading>}
          />
          <Input
            type="text"
            placeholder="Food, bakery, plumbers..."
            size="md"
            borderRadius="0"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon
            borderRadius="0"
            pointerEvents="none"
            children={<Heading size="sm">Near</Heading>}
          />
          <Input type="text" placeholder="Cole Bay, St Maarten" size="md" />
          <InputRightElement pointerEvents="none" children={<SearchIcon />} />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Hero;
