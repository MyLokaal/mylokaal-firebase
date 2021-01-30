import { useRouter } from "next/router";
import {
  Avatar,
  Text,
  Box,
  Container,
  SimpleGrid,
  Flex,
  Divider,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";

const Profile = () => {
  const router = useRouter();
  const { userid } = router.query;

  return (
    <Container maxW="lg">
      <SimpleGrid mt={[6, 8]} columns={[1, 2]} spacing={10}>
        <Box textAlign="center">
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/code-beast"
            m="auto"
          />
          <Flex mt={4} justify="center" align="center">
            <Text>Chester Mckinney</Text>
            <CheckCircleIcon ml={2} color="teal.500" />
          </Flex>
        </Box>
        <Box>
          <Divider />
          <Box my={4}>
            <Heading size="sm">About</Heading>
            <Text>...</Text>
          </Box>
          <Divider />
          <Box my={4}>
            <Heading size="sm">Reviews</Heading>
            <Text>...</Text>
          </Box>
          <Divider />
          <Box my={4}>
            <Heading size="sm" mt={4}>
              Chester confirmed
            </Heading>
            <List spacing={2} mt={2}>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Identity
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Phone number
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                Email address
              </ListItem>
            </List>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Profile;
