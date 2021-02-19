import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box maxW="full" px={4} py={16} my={10} align="center">
    <Box maxW="xl" mx="auto" textAlign="center" mb={10}>
      <Heading size="xl">About MyLokaal</Heading>
    </Box>

    <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} maxW={1000}>
      <Box w={["full", "full", "full", 400]} textAlign="left">
        <Heading mb={4} size="md">
          What is MyLokaal?
        </Heading>
        <Text>
          MyLokaal connects people with locally made products and services. When
          you buy local, money stays local, and it strengthens the local economy
          while reducing waste and pollution.
        </Text>
      </Box>
      <Box w={["full", "full", "full", 400]} textAlign="left">
        <Heading mb={4} size="md">
          What is a Seller?
        </Heading>
        <Text>
          Anyone can sell on MyLokaal. If you have a skill or expertise, you can
          earn money by sharing your trade online. As a seller, you have the
          tools to list your products, set your prices and communicate with
          customers.
        </Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default About;
