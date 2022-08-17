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

  const token = window.localStorage.getItem("authToken");
  useEffect(() => {
    async function loadUser() {
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");
        setUserInfo(data);
        setUserTechs(data.techs);
      } else setUserInfo(false);
      setLoading(false);
    }
    loadUser();
  }, [userInfo]);

  async function onSubmit(data) {
    await api
      .post("/sessions", { ...data })
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        setUserInfo(response.data.user);
        navigate("/dashboard", { replace: true });
        toast.success("Login concluído com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email e senha incorretos!");
      });

    const token = localStorage.getItem("authToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, onSubmit, loading, token, userTechs }}
    >
      {children}
    </AuthContext.Provider>
  );
}
