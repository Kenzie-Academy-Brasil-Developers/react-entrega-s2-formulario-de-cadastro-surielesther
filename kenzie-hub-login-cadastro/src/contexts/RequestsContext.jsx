import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

import api from "../services/api";

export const RequestsContext = createContext({});

export default function RequestsProvider({ children }) {
  const { loadUser } = useContext(AuthContext);

  function postingNewTech(data) {
    console.log(data);

    api
      .post("/users/techs", data)
      .then((_) => {
        loadUser();
        toast.success("Tecnologia adicionada!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Algo deu errado, tente novamente");
      });
  }

  function deletingTech(id) {
    console.log(id);
    api
      .delete(`/users/techs/${id}`)
      .then((_) => {
        loadUser();
        toast.success("Tecnologia deletada!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Algo deu errado, tente novamente");
      });
  }

  return (
    <RequestsContext.Provider value={{ postingNewTech, deletingTech }}>
      {children}
    </RequestsContext.Provider>
  );
}
