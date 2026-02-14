import { useContext } from "react";
import { Routes, Route } from "react-router";
import { AppContext } from "./components/ContextApi";
import { Home } from "./pages/Home";
import { Conta } from "./pages/Conta";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta" element={<Conta />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
    </Routes>
  );
};
