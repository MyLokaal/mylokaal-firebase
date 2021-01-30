import {
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
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
      bgImage={[
        "url('https://images.unsplash.com/photo-1518562593247-cc26c241becd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3024&q=80')",
        "url('/images/main.png')",
      ]}
      bgSize="cover"
      bgPosition="50%"
      height={551}
      mb={[0, 5]}
    >
      <Flex
        direction={["column", "row"]}
        w={["full", "600px"]}
        bg="white"
        mt={[0, 226, 202, 230]}
        bg="transparent"
      >
        <InputGroup bg="white">
          <InputLeftAddon
            borderRadius="0"
            pointerEvents="none"
            children={<Heading size="sm">Find</Heading>}
            w={16}
            m="auto"
            px={3}
            justifyContent="center"
          />
          <Input
            type="text"
            placeholder="Food, bakery, plumbers..."
            size="md"
            borderRadius="0"
          />
        </InputGroup>
        <InputGroup bg="white" mt={[5, 0]}>
          <InputLeftAddon
            borderRadius="0"
            pointerEvents="none"
            children={<Heading size="sm">Near</Heading>}
            w={16}
            justifyContent="center"
          />
          <Input type="text" placeholder="Cole Bay, St Maarten" size="md" />
          <InputRightElement pointerEvents="none" children={<SearchIcon />} />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default Hero;
