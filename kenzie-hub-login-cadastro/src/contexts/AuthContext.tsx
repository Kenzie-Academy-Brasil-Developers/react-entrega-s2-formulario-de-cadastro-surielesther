import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [userTechs, setUserTechs] = useState([]);
  const navigate = useNavigate();

  async function loadUser() {
    console.log("loadUser");
    const token = window.localStorage.getItem("authToken");
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      const { data } = await api.get("/profile");
      setUserInfo(data);
      setUserTechs(data.techs);
    } else setUserInfo(false);
    setLoading(false);
  }
  useEffect(() => {
    loadUser();
  }, []);

  async function onSubmitLogin(data) {
    await api
      .post("/sessions", { ...data })
      .then((response) => {
        const { user, token } = response.data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        window.localStorage.clear();
        window.localStorage.setItem("authToken", token);
        setUserInfo(user);
        toast.success("Login concluído com sucesso!");
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email e senha incorretos!");
      });
  }

  async function onSubmitRegister(data) {
    await api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Cadastro feito com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Esse email já foi cadastrado!");
      });
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        onSubmitLogin,
        onSubmitRegister,
        loading,
        userTechs,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
