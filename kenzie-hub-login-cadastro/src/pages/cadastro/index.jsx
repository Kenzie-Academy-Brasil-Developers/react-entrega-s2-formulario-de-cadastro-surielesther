import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CadastroStyle from "./style";

export default function Cadastro() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Sua senha deve possuir: 8 dígitos, 1 caractere especial, 1 letra maiuscula, 1 letra minuscula e 1 numero."
      ),
    confirm: yup
      .string()
      .required("Senha obrigatória")
      .oneOf([yup.ref("password")], "A senha não está igual"),
    bio: yup.string().required("Senha obrigatória"),
    contact: yup.string().required("Senha obrigatória"),
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
      .post("https://kenziehub.herokuapp.com/users", data)
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
    <CadastroStyle>
      <div>
        <header>
          <h3>KenzieHub</h3>
          <button onClick={() => history.push("/")}>Voltar ao login</button>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Crie sua conta</p>
          <p className="subtitle">Rápido e grátis, vamos nessa</p>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          ></input>
          <div className="error">{errors.name?.message}</div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          ></input>
          <div className="error">{errors.email?.message}</div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          ></input>
          <div className="error">{errors.password?.message}</div>
          <label>Confirmar senha</label>
          <input
            type="password"
            placeholder="confirme sua senha"
            {...register("confirm")}
          ></input>
          <div className="error">{errors.confirm?.message}</div>
          <label>Bio</label>
          <input
            type="text"
            placeholder="fale sobre você"
            {...register("bio")}
          ></input>
          <div className="error">{errors.bio?.message}</div>
          <label>contato</label>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          ></input>
          <div className="error">{errors.contact?.message}</div>
          <label>Selecionar módulo</label>
          <select {...register("course_module")}>
            <option>Primeiro módulo</option>
            <option>Segundo módulo</option>
            <option>Terceiro módulo</option>
            <option>Quarto módulo</option>
            <option>Quinto módulo</option>
          </select>
          <button className="submit" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </CadastroStyle>
  );
}
