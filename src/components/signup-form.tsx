import Axios from "axios";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import * as yup from "yup";

const SignUpForm = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  // Form
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  // Toast
  const toast = useToast();
  const url =
    "https://pm.us10.list-manage.com/subscribe/post-json?u=850e82b23542128cf6ac273d5&amp;id=c1a05ceace&amp;f_id=00a3cce5f0";

  const onSubmit = async({email}: { email: string }) => {
    const response = await Axios.post(`${url}&EMAIL=${email}`, { param: "c" });
    toast({
      title: "You have been signed up!",
      description: `${response}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsRequestLoading(false);
  };

  const onErrorEmail = () => {
    toast({
      title: "Invalid format",
      description:
        "Your email may have an invalid format or it's just incomplete, please check it.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (errors?.email) {
      console.log(errors.email);
      onErrorEmail();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack gap={4}>
        <FormControl maxWidth="xs" isInvalid={!!errors?.email}>
          <FormLabel>Your email goes here 👇</FormLabel>
          <Input
            color="white"
            placeholder="Type your email"
            {...register("email")}
          />
          <FormHelperText textAlign="center">
            Your email is as sacred as our secrets manager, we won't share it.
          </FormHelperText>
        </FormControl>
        <Button type="submit" variant="outline" color="#e6edf3" size="md">
          {isRequestLoading ? <CircularProgress isIndeterminate /> : "Send"}
        </Button>
      </VStack>
    </form>
  );
};

export default SignUpForm;
