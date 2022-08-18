import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";

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
      })
      .catch((error) => console.log(error));
  }

  function deletingTech(id) {
    console.log(id);
    api
      .delete(`/users/techs/${id}`)
      .then((_) => {
        loadUser();
      })
      .catch((error) => console.log(error));
  }

  return (
    <RequestsContext.Provider value={{ postingNewTech, deletingTech }}>
      {children}
    </RequestsContext.Provider>
  );
}
