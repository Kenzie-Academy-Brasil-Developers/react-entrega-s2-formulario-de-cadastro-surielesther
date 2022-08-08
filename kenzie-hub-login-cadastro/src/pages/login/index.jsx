import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Dashboard from "../dashboard";
import { toast } from "react-toastify";
import LoginStyle from "./style";

export default function Login({
  autenticado,
  setAutenticado,
  userInfo,
  setUserInfo,
}) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  function onSubmit(data) {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...data })
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        setAutenticado(true);
        setUserInfo(response.data.user);
        toast.success("Login concluído com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email e senha incorretos!");
      });
  }

  if (autenticado === false) {
    return (
      <LoginStyle>
        <div>
          <header>
            <h3>KenzieHub</h3>
          </header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Login</p>
            <label>Email</label>
            <input
              type="email"
              placeholder="insira seu email"
              {...register("email")}
            ></input>
            {errors.email?.message}
            <label>Senha</label>
            <input
              type="password"
              placeholder="insira sua senha"
              {...register("password")}
            ></input>
            {errors.password?.message}
            <button type="submit">Entrar</button>
            <p className="text">Ainda não possui uma conta?</p>
            <button
              className="cadastrar"
              onClick={() => history.push("/cadastro")}
            >
              Cadastre-se
            </button>
          </form>
        </div>
      </LoginStyle>
    );
  } else
    return (
      <Dashboard
        setAutenticado={setAutenticado}
        userInfo={userInfo}
      ></Dashboard>
    );
}
