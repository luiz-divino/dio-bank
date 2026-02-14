import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";

export const Layout = ({children}:any) => {
    return (
         <Box minH={"100vh"} backgroundColor={"#E5E5E5"}>
            <Header/>
            {children}
         </Box>
    )
} 