import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
interface IbuttonProps {
  clickButton: () => string | void;
}

export const Button = ({ clickButton }: IbuttonProps) => {
  return (
    <ChakraProvider value={defaultSystem}>
    <React.Fragment>
      <button onClick={clickButton} style={{backgroundColor: '#F54927', padding: '10px', borderRadius: '8px', color: 'white', border: 'none'}}>Acessar</button>
    </React.Fragment>
    </ChakraProvider>
  );
};
