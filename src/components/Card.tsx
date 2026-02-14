import React from "react";
import { ChakraProvider, defaultSystem, Box } from "@chakra-ui/react";

export const Card = ({children}: any) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box> 
        {children}
      </Box>
    </ChakraProvider>
  );
};
