import React from "react";
import { ChakraProvider, defaultSystem, Box, Input } from "@chakra-ui/react";
import { Header } from "./Header";
import { Button } from "./Button";
import { login } from "../services/login";

export const Card = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box
        backgroundColor={"white"}
        minH={"100vh"}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="4"
          marginTop={'10'}
          padding="25px"
          backgroundColor={"#A8949B"}
          minW={"90vw"}
          borderRadius={'2xl'}
        >
          <Header/>
          <Input placeholder=" Digite seu email" size="md" type="email" border={'1px solid #141111'} _placeholder={{ color: 'black' }}/>
          <Input placeholder=" Digite sua senha" size="md" type="password" border={'1px solid #141111'} _placeholder={{ color: 'black' }} />
          <Button clickButton={login} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
