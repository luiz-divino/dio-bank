import { ChakraProvider, defaultSystem, Box, Center } from "@chakra-ui/react";

export const Header = () => {
  return <ChakraProvider value={defaultSystem}>
    <Box >
        <Center backgroundColor={'#F54927'} fontSize={'2xl'} top={'0'} padding={'10px'} borderRadius={'md'} color={'white'}>
            DIO BANK
        </Center>
    </Box>
  </ChakraProvider>;
};
