import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { FormContainer, Header1, LoginWrapper } from "../styles";
import { darkBlue } from "../styles/colors";

function Login() {
  let history = useHistory();

  function handleRegister() {
    history.push("/register");
  }
  return (
    <LoginWrapper>
      <FormContainer boxShadow="sm">
        <Header1 style={{ marginBottom: "20px" }}>Sign In</Header1>
        <InputGroup width="100%">
          <InputLeftElement
            marginLeft="5px"
            children={<AiOutlineMail color="#B9D1FC" size={20} />}
          />
          <Input
            _hover={{ borderColor: darkBlue }}
            _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
            type="email"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup width="100%" marginTop="20px">
          <InputLeftElement
            marginLeft="5px"
            children={<AiOutlineLock size={20} color="#B9D1FC" />}
          />
          <Input
            type="password"
            _hover={{ borderColor: darkBlue }}
            _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
            placeholder="Password"
          />
        </InputGroup>
        <Button
          bg={darkBlue}
          _focus={{ outline: 0 }}
          _hover={{ backgroundColor: "#0536FF" }}
          color="#ffff"
          w="100%"
          marginTop="20px"
          variant="solid"
        >
          SIGN In
        </Button>
        <Text
          fontWeight="500"
          textAlign="center"
          color="#7688A3"
          marginTop="20px"
        >
          Or sign in with
        </Text>
        <Button
          leftIcon={FcGoogle}
          marginTop="20px"
          bg="#E8EFFF"
          onClick={() =>history.push('')}
          _focus={{ outline: 0 }}
          color="#7688A3"
          w="100%"
          variant="solid"
        >
          Google
        </Button>
        <Text
          fontWeight="500"
          textAlign="center"
          color="#7688A3"
          marginTop="20px"
          onClick={handleRegister}
        >
          Don't Have an Account ?{" "}
          <Text color={darkBlue} as="a" style={{ cursor: "pointer" }}>
            Sign Up
          </Text>
        </Text>
      </FormContainer>
    </LoginWrapper>
  );
}
export default Login;
