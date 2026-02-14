import { Center, Spinner, Box, Button } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../components/ContextApi";
import api from "../services/api";

export interface userData {
  id: number;
  nome: string;
  email: string;
  balance: number;
}

export const Conta = () => {
  const [userdata, setUserdata] = useState<null | userData>(null);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    const getdata = async () => {
      const data: any | userData = await api();
      setUserdata(data);
    };
    getdata();
  }, []);

  const handleLogOut = () => {
    setUserdata(null);
    navigate("/");
    isLoggedIn && localStorage.setItem("isLoggedIn", "false");
      if (localStorage.getItem("access")) {
        localStorage.removeItem("access");
      }
  };

  return userdata == null || userdata === undefined ? (
    <Box
      backgroundColor={"blue.100"}
      minH={"100vh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Center >
        <Spinner color={"Black"} size={"xl"} />
      </Center>
    </Box>
  ) : (
    <Center>
        <CardInfo >
          <Box >
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              informações do usuario
            </p>
            {userdata && (
              <Box fontFamily={"ui-serif"} fontSize={"xl"} mt={5} w={'360px'} >
                <p>Nome: {userdata.nome}</p>
                <p>Email: {userdata.email}</p>
                <p>Balance: R${userdata.balance}</p>
              </Box>
            )}
          </Box>
          <Button
            onClick={handleLogOut}
            position={"absolute"}
            top={2}
            right={2}
          >
            Logout
          </Button>
        </CardInfo>
    </Center>
  );
};
