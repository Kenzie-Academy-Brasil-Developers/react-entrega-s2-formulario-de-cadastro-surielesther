import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import DashboardStyle from "./style";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();

  const { userInfo, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return userInfo ? (
    <DashboardStyle>
      <div className="body">
        <div className="navBar">
          <h3>KenzieHub</h3>
          <button onClick={() => navigate("/")}>Sair</button>
        </div>
        <div className="line"></div>
        <header>
          <p className="title">Olá, {userInfo.name}</p>
          <p>{userInfo.course_module}</p>
        </header>
        <div className="line"></div>
        <main>
          <p className="title">Que pena! Estamos em desenvolvimento :(</p>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </main>
      </div>
    </DashboardStyle>
  ) : (
    <Navigate to="/" replace></Navigate>
  );
}
