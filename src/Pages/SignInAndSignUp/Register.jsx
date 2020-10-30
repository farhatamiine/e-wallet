import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { FormContainer, Header1, LoginWrapper } from "../../styles";
import { darkBlue } from "../../styles/colors";

function Register() {
  let history = useHistory();

  function handleLogin() {
    history.push("/login");
  }
  return (
    <LoginWrapper>
      <FormContainer shadow="sm">
        <Header1 style={{ marginBottom: "20px" }}>Sign Up</Header1>
        <InputGroup width="100%" style={{ marginBottom: "20px" }}>
          <InputLeftElement
            marginLeft="5px"
            children={<AiOutlineUser color="#B9D1FC" size={20} />}
          />
          <Input
            name="fullName"
            _hover={{ borderColor: darkBlue }}
            _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
            type="text"
            placeholder="Full name"
          />
        </InputGroup>
        <InputGroup width="100%" style={{ marginBottom: "20px" }}>
          <InputLeftElement
            marginLeft="5px"
            children={<AiOutlineMail color="#B9D1FC" size={20} />}
          />
          <Input
            _hover={{ borderColor: darkBlue }}
            _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
            type="email"
            name="email"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup width="100%" style={{ marginBottom: "20px" }}>
          <InputLeftElement
            marginLeft="5px"
            children={<AiOutlineLock color="#B9D1FC" size={20} />}
          />
          <Input
            _hover={{ borderColor: darkBlue }}
            _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
            type="password"
            name="password"
            placeholder="Password"
          />
        </InputGroup>
        <InputGroup width="100%">
          <InputLeftElement
            marginLeft="5px"
            children={<AiOutlineLock size={20} color="#B9D1FC" />}
          />
          <Input
            type="password"
            name="confirmPassword"
            _hover={{ borderColor: darkBlue }}
            _focus={{ borderColor: darkBlue, borderWidth: "2px" }}
            placeholder="Confirm password"
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
          SIGN Up
        </Button>

        <Text
          fontWeight="500"
          textAlign="center"
          color="#7688A3"
          marginTop="20px"
          onClick={handleLogin}
        >
          Already Have an Account ?
          <Text
            color={darkBlue}
            marginLeft="5px"
            as="a"
            style={{ cursor: "pointer" }}
          >
            Sign In
          </Text>
        </Text>
      </FormContainer>
    </LoginWrapper>
  );
}
export default Register;
