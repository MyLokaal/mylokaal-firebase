import { Heading, Box, Flex, List, ListItem, Text } from "@chakra-ui/core";

const Footer = () => (
  <Flex
    py={16}
    px={[4, 4, 0, 0]}
    justify="space-around"
    direction={["column", "row"]}
  >
    <Box pb={[6, 0]}>
      <Heading size="sm" pb={2}>
        My Lokaal
      </Heading>
      <Text>We are a great company.</Text>
      <Text>Copyright © 2020 MyLokaal</Text>
    </Box>
    <Flex>
      <List px={[0, 6]}>
        <ListItem>
          <Heading size="sm" pb={2}>
            About
          </Heading>
        </ListItem>
        <ListItem>Our Story</ListItem>
        <ListItem>Our Team</ListItem>
        <ListItem>{`Tearms & Conditions`}</ListItem>
        <ListItem>Privacy Policy</ListItem>
      </List>
      <List px={[0, 6]}>
        <Heading size="sm" pb={2}>
          Services
        </Heading>
        <ListItem>How to Order</ListItem>
        <ListItem>How to Start Selling</ListItem>
        <ListItem>Payment Method</ListItem>
      </List>
      <List px={[0, 6]}>
        <Heading size="sm" pb={2}>
          Other
        </Heading>
        <ListItem>Contact Us</ListItem>
        <ListItem>Countries</ListItem>
      </List>
    </Flex>
  </Flex>
);

export default Footer;
