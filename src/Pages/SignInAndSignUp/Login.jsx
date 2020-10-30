import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/core";
import React, { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import { Form, FormContainer, Header1, LoginWrapper } from "../../styles";
import { darkBlue } from "../../styles/colors";
import { signInWithGoogle } from "../../utils/firebase";

function Login() {
  let history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleRegister() {
    history.push("/register");
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(email + " " + password);
  }

  return (
    <LoginWrapper>
      <FormContainer boxShadow="sm">
        <Form onSubmit={handleSubmit}>
          <Header1 style={{ marginBottom: "20px" }}>Sign In</Header1>
          <InputGroup width="100%">
            <InputLeftElement
              marginLeft="5px"
              children={<AiOutlineMail color="#B9D1FC" size={20} />}
            />
            <Input
              _hover={{ borderColor: darkBlue }}
              name="email"
              _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </InputGroup>
          <InputGroup width="100%" marginTop="20px">
            <InputLeftElement
              marginLeft="5px"
              children={<AiOutlineLock size={20} color="#B9D1FC" />}
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            type="submit"
            variant="solid"
            isDisabled={!validateForm()}
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
            onClick={signInWithGoogle}
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
        </Form>
      </FormContainer>
    </LoginWrapper>
  );
}
export default Login;
