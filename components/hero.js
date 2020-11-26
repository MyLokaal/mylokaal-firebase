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
      w="full"
      px={[4, 0]}
      bgImage="url('/images/main.png')"
      bgSize="cover"
      height={["full", 292, 292, 551]}
    >
      <Flex
        direction={["column", "row"]}
        w={["full", "600px"]}
        bg="white"
        mt={210}
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
