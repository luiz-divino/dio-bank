import { Box } from "@chakra-ui/react";

export const CardInfo = ({children}: any) => {
  return (
    <Box
      marginTop={"50px"}
      backgroundColor={"orange"}
      padding={25}
      minH={"15vh"}
      borderRadius={10}
      boxShadow="md"
    >
      {children}
    </Box>
  )
}