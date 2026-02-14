import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";
import { Bounce, toast } from "react-toastify";

interface User {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  message: any;
}

export const AppContext = createContext({} as User);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  }, [storage]);

  class message {
    toastSuccess = (msg: string) => {
      toast.success(msg, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    };
    toastError = (msg: string) => {
      toast.error(msg, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    };
  }

  const messageInstance = new message();

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, message: messageInstance }}>
      {children}
    </AppContext.Provider>
  );
};
