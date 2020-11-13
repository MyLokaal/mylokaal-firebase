import {
  Box,
  Flex,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/core";
import Link from "next/link";

export const AuthContent = ({
  register,
  errors,
  heading,
  type,
  question,
  link,
  text,
  fp,
  ...rest
}) => (
  <Flex align="center" justify="center" mt={12}>
    <Box w="400px">
      <Stack {...rest}>
        <Heading size="md" mb={4}>
          {heading}
        </Heading>
        <FormControl isInvalid={errors.email && errors.email.message}>
          <FormLabel>Email Address</FormLabel>
          <Input
            id="email"
            autoFocus
            aria-label="Email Address"
            name="email"
            ref={register({
              required: "Please enter your email.",
            })}
            placeholder="name@site.com"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.pass && errors.pass.message}>
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            aria-label="Password"
            name="pass"
            type="password"
            ref={register({
              required: "Please enter a password.",
            })}
          />
          <FormErrorMessage>
            {errors.pass && errors.pass.message}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" mt={4} colorScheme="teal" variant="solid">
          {type}
        </Button>
        <Link href="/auth/forgotPassword">
          <a>
            <Text>Forgot Password?</Text>
          </a>
        </Link>
      </Stack>
      <Box d="flex" px={8}>
        <Text pr={2}>{question}</Text>
        <Link href={link}>
          <a>
            <Heading size="sm">{text}</Heading>
          </a>
        </Link>
      </Box>
    </Box>
  </Flex>
);
