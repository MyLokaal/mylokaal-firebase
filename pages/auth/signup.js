import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import AuthContent from "../../components/Auth";
import { useAuth } from "../../utils/auth";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  const signUp = ({ email, pass }) => {
    auth
      .signup(email, pass)
      .then(() => {
        toast({
          title: "Success!",
          description: "Your account has been created.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/");
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
    <AuthContent
      as="form"
      errors={errors}
      onSubmit={handleSubmit(signUp)}
      px={8}
      py={12}
      register={register}
      spacing={3}
      type="Sign up"
      question="Already have an account?"
      link="/auth/login"
      heading="Welcome to MyLokaal"
      text="Log in"
      w="100%"
      newUser={true}
    />
  );
};

export default Login;
