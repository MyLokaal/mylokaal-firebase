import {
  Divider,
  Heading,
  Box,
  Flex,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const Footer = () => (
  <Flex py={16} px={4} justify="space-around" direction={["column", "row"]}>
    <Box>
      <Heading size="sm" pb={2}>
        My Lokaal
      </Heading>
      <Text pb={2}>
        We help communities grow and reduce enviromental impact by encouraging
        to buy local.
      </Text>
      <Text>Copyright © 2020 MyLokaal</Text>
    </Box>
    <Divider display={{ sm: "none" }} my={4} />

    <Flex direction={["column", "row"]}>
      <List spacing={2} px={[0, 6]}>
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
      <Divider display={{ sm: "none" }} my={4} />

      <List spacing={2} px={[0, 6]}>
        <Heading size="sm" pb={2}>
          Services
        </Heading>
        <ListItem>How to Order</ListItem>
        <ListItem>How to Start Selling</ListItem>
        <ListItem>Payment Method</ListItem>
      </List>
      <Divider display={{ sm: "none" }} my={4} />

      <List spacing={2} px={[0, 6]}>
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
