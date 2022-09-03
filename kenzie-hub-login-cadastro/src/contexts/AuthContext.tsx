import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export const AuthContext = createContext({} as IAuthContext);

interface IAuthProviderProps {
  children: ReactNode;
}

export interface ILoginProps {
  email: string;
  password: string;
}

interface IUserProps {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: ITechsProps[];
  works: string[];
  avatar_url: null;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirm: string;
  bio: string;
  contact: string;
  course_module?: string;
}
export interface ITechsProps {
  title: string;
  status: string;
  id?: string;
}

interface IAuthContext {
  userInfo: IUserProps | null;
  setUserInfo: Dispatch<SetStateAction<IUserProps | null>>;
  onSubmitLogin: (data: ILoginProps) => void;
  onSubmitRegister: (data: IRegisterProps) => void;
  loading: boolean;
  userTechs: ITechsProps[];
  loadUser: () => void;
}

interface IResponse {
  data: { user: IUserProps; token: string };
}

export default function AuthProvider({ children }: IAuthProviderProps) {
  const [userInfo, setUserInfo] = useState<IUserProps | null>({} as IUserProps);
  const [loading, setLoading] = useState(true);
  const [userTechs, setUserTechs] = useState<ITechsProps[]>([]);
  const navigate = useNavigate();

  async function loadUser() {
    console.log("loadUser");
    const token = window.localStorage.getItem("authToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data }: { data: IUserProps } = await api.get("/profile");
      setUserInfo(data);
      setUserTechs(data.techs);
    } else setUserInfo(null);
    setLoading(false);
  }
  useEffect(() => {
    loadUser();
  }, []);

  async function onSubmitLogin(data: ILoginProps) {
    await api
      .post("/sessions", { ...data })
      .then((response: IResponse) => {
        const { user, token } = response.data;
        api.defaults.headers.common.authorization = `Bearer ${token}`;
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

  async function onSubmitRegister(data: IRegisterProps) {
    await api
      .post("/users", data)
      .then((response: { data: IUserProps }) => {
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
