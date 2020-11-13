import { useToast } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { AuthContent } from "../../components/auth";
import { useAuth } from "../../utils/auth";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  const signIn = ({ email, pass }) => {
    auth
      .signin(email, pass)
      .then(() => {
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
      onSubmit={handleSubmit(signIn)}
      px={8}
      py={12}
      register={register}
      spacing={3}
      heading="Log in to MyLokaal"
      type="Log in"
      question="Don't have an account?"
      link="/auth/signup"
      text="Sign up"
      w="100%"
    />
  );
};

export default Login;
