import { createContext, ReactNode, useContext } from "react";
import { AuthContext, ITechsProps } from "./AuthContext";
import { toast } from "react-toastify";

import api from "../services/api";

export const RequestsContext = createContext({} as IRequestsContext);

interface IRequestsProviderProps {
  children: ReactNode;
}

interface IRequestsContext {
  postingNewTech: (data: ITechsProps) => void;
  deletingTech: (id: string | undefined) => void;
}

export default function RequestsProvider({ children }: IRequestsProviderProps) {
  const { loadUser } = useContext(AuthContext);

  function postingNewTech(data: ITechsProps) {
    api
      .post("/users/techs", data)
      .then(() => {
        loadUser();
        toast.success("Tecnologia adicionada!");
      })
      .catch(() => toast.error("Algo deu errado, tente novamente"));
  }

  function deletingTech(id: string | undefined) {
    api
      .delete(`/users/techs/${id}`)
      .then(() => {
        loadUser();
        toast.success("Tecnologia deletada!");
      })
      .catch(() => toast.error("Algo deu errado, tente novamente"));
  }

  return (
    <RequestsContext.Provider value={{ postingNewTech, deletingTech }}>
      {children}
    </RequestsContext.Provider>
  );
}
