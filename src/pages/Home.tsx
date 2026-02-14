import { Box, Button, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import React, { useContext, useEffect, useState } from "react";
import { Login } from "../services/login";
import { AppContext } from "../components/ContextApi";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const MdEmailIcon = MdEmail as React.ElementType;
const TbLockPasswordIcon = TbLockPassword as React.ElementType;

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, message } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    const access = await Login(email, password);
    if (access) {
      message.toastSuccess("Login realizado com sucesso!");
      setIsLoggedIn(true);
      navigate("/conta");
      const storage = localStorage.setItem("access", JSON.stringify(access));
      console.log(storage);
    } else if (!access) {
      message.toastError("Email ou senha inválidos!");
      setIsLoggedIn(false);
    }
  };

  useEffect(()=>{
    const storage = localStorage.getItem("access");
    if(storage){
      setIsLoggedIn(true);
      navigate("/conta");
    }
  })

  return (
    <Card>
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
          marginTop={"10"}
          padding="25px"
          backgroundColor={"#A8949B"}
          minW={"90vw"}
          borderRadius={"2xl"}
        >
          <React.Fragment>
            {<MdEmailIcon size={25} color={"black"} />}
            <Input
              placeholder=" Digite seu email"
              size="md"
              type="email"
              border={"1px solid #141111"}
              _placeholder={{ color: "black" }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </React.Fragment>

          <React.Fragment>
            {<TbLockPasswordIcon size={25} color={"black"} />}
            <Input
              placeholder=" Digite sua senha"
              size="md"
              type="password"
              border={"1px solid #141111"}
              _placeholder={{ color: "black" }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </React.Fragment>
          <Button
            className="p-button p-button-success"
            onClick={() => handleLogin(email, password)}
            backgroundColor={"orange.600"}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
