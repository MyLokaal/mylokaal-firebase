import { Box, Heading, Flex, Image, Text } from "@chakra-ui/core";

const Cards = ({ title, description, cards, borderRadius, textColor, bg }) => (
  <Box maxW="full" py={16} px={[4, 4, 0, 0]} align="center" bg={bg}>
    <Heading size="2xl" color={textColor} mb={8}>
      {title}
    </Heading>
    <Text color={textColor} mb={12} maxW={["full", "280px", "560px"]}>
      {description}
    </Text>
    <Flex
      color={textColor}
      direction={["column", "column", "row", "row"]}
      px={[0, 2, 4, 10]}
    >
      {cards.map((card) => (
        <Box key={card.title} px={[0, 2, 4, 12]} pb={[16, 16, 0, 0]}>
          <Image
            boxSize={["285px", "200px", "200px", "285px"]}
            borderRadius={borderRadius}
            src={card.src}
            alt={card.src}
            objectFit="cover"
          />
          <Heading size="lg" pt={5} pb={3}>
            {card.title}
          </Heading>
          <Text px={[0, 0, 0, 10]}>{card.text}</Text>
        </Box>
      ))}
    </Flex>
  </Box>
);

export default Cards;
