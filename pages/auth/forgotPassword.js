import {
  useToast,
  Heading,
  Button,
  Text,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Flex,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useAuth } from "../../utils/auth";

const forgotPassword = () => {
  const { handleSubmit, register, errors } = useForm();
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  const resetPassword = ({ email }) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        router.push("/auth/login");
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex align="center" justify="center" mt={12}>
      <Box w="400px">
        <Stack
          as="form"
          errors={errors}
          px={8}
          py={8}
          spacing={3}
          w="100%"
          onSubmit={handleSubmit(resetPassword)}
        >
          <Heading size="md">Forgot Password?</Heading>
          <Text pb={4}>
            Please enter your email address and we will send you an email about
            how to reset your password.
          </Text>
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
          <Button type="submit" mt={4} colorScheme="teal" variant="solid">
            Reset Password
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default forgotPassword;
