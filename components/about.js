import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/core";

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
          MyLokaal connects people with locally made products and services. Our
          community of local buyers and sellers empower their local economy and
          reduce local waste and pollution.
        </Text>
      </Box>
      <Box w={["full", "full", "full", 400]} textAlign="left">
        <Heading mb={4} size="md">
          What is a Seller?
        </Heading>
        <Text>
          What is a Seller? If you have a skill or expertise, you can earn money
          by sharing this trade with your local community. As a Seller, you have
          the tools to set your product, your price, and your schedule.
        </Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default About;
