import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/ContextApi";
import { BrowserRouter } from "react-router";
import { MainRoutes } from "../src/routes";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={defaultSystem}>
          <Layout>
            <MainRoutes />
            <ToastContainer />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
