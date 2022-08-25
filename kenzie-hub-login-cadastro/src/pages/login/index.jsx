import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import LoginStyle from "./style";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
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

  const navigate = useNavigate();

  const { onSubmitLogin, userInfo } = useContext(AuthContext);

  return userInfo ? (
    <Navigate to="/dashboard" replace></Navigate>
  ) : (
    <LoginStyle>
      <div>
        <header>
          <h3>KenzieHub</h3>
        </header>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
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
          <button className="cadastrar" onClick={() => navigate("/cadastro")}>
            Cadastre-se
          </button>
        </form>
      </div>
    </LoginStyle>
  );
}
