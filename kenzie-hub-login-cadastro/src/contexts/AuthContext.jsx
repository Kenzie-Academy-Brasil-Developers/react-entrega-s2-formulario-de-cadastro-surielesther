import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = window.localStorage.getItem("authToken");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");
          setUserInfo(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  function onSubmit(data) {
    const response = api
      .post("/sessions", { ...data })
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        setUserInfo(response.data.user);
        navigate("/dashboard");
        toast.success("Login concluído com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email e senha incorretos!");
      });

    const { token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, onSubmit, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
