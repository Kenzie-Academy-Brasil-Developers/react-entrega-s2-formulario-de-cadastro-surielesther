import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Dashboard from "../pages/dashboard";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default MainRoutes;
