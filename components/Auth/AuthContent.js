import React from "react";
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";

const AuthContent = ({
  register,
  errors,
  heading,
  newUser,
  type,
  question,
  link,
  text,
  fp,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex align="center" justify="center" mt={12}>
      <Box w="400px">
        <Stack {...rest}>
          <Heading size="md" mb={4}>
            {heading}
          </Heading>
          {newUser && (
            <>
              <FormControl
                isInvalid={errors.firstName && errors.firstName.message}
              >
                <FormLabel>First Name</FormLabel>
                <Input
                  id="firstName"
                  autoFocus
                  aria-label="First Name"
                  name="firstName"
                  ref={register({
                    required: "Please enter your first name.",
                  })}
                  placeholder="John"
                />
                <FormErrorMessage>
                  {errors.firstName && errors.firstName.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.lastName && errors.lastName.message}
              >
                <FormLabel>Last Name</FormLabel>
                <Input
                  id="lastName"
                  autoFocus
                  aria-label="Last Name"
                  name="lastName"
                  ref={register({
                    required: "Please enter your last name.",
                  })}
                  placeholder="Smith"
                />
                <FormErrorMessage>
                  {errors.lastName && errors.lastName.message}
                </FormErrorMessage>
              </FormControl>
            </>
          )}

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
            <InputGroup size="md">
              <Input
                id="password"
                aria-label="Password"
                name="pass"
                type="password"
                ref={register({
                  required: "Please enter a password.",
                })}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="xs"
                  onClick={handleClick}
                  color="black"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>
              {errors.pass && errors.pass.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" mt={4} colorScheme="teal" variant="solid">
            {type}
          </Button>
          {fp && (
            <Link href="/auth/forgotPassword">
              <a>
                <Text color="blue.500">Forgot Password?</Text>
              </a>
            </Link>
          )}
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
};

export default AuthContent;
