import { createContext, useEffect } from "react";
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";
import api from "../services/api";

export const RequestsContext = createContext({});

export default function RequestsProvider({ children }) {
  // const token = window.localStorage.getItem("authToken");
  //   const { token } = useContext(AuthContext);
  useEffect(() => {}, []);

  const token = localStorage.getItem("authToken");
  api.defaults.headers.authorization = `Bearer ${token}`;

  async function getUserInfo() {
    await api
      .get("/profile")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function postingNewTech(data) {
    await api.post("/users/techs", { ...data }).then((response) => {
      console.log(response);
    });

    // const token = localStorage.getItem("authToken");
    // api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return (
    <RequestsContext.Provider value={{ postingNewTech, getUserInfo }}>
      {children}
    </RequestsContext.Provider>
  );
}
