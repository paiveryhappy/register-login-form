import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../App.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

function RegisterForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values, event) {
    event.preventDefault();
    return new Promise((resolve) => {
      setTimeout(() => {
        axios
          .post("http://localhost:4000/", values)
          .then((res) => console.log(res))
          .catch((errors) => console.log(console.log(errors)));
        reset();
        resolve();
      }, 3000);
    });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-white p-10 rounded-xl"
      >
        <h1 className="text-4xl mb-5">Register Your Account</h1>
        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            type="text"
            placeholder="username"
            {...register("username", { required: "กรุณากรอก username" })}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="email"
            {...register("email", { required: "กรุณากรอก email" })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="password"
            {...register("password", { required: "กรุณากรอก password" })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default RegisterForm;
