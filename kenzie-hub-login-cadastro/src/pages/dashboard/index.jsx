import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import DashboardStyle from "./style";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/Loading";
import Techs from "../../components/Techs";

export default function Dashboard() {
  const navigate = useNavigate();

  const { userInfo, setUserInfo, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  return userInfo ? (
    <DashboardStyle>
      <div className="body">
        <div className="navBar">
          <h3>KenzieHub</h3>
          <button
            onClick={() => {
              window.localStorage.clear();
              setUserInfo(false);
            }}
          >
            Sair
          </button>
        </div>
        <div className="line"></div>
        <header>
          <p className="title">Olá, {userInfo.name}</p>
          <p>{userInfo.course_module}</p>
        </header>
        <div className="line"></div>
        <main>
          <Techs></Techs>
          {/* <p className="title">Que pena! Estamos em desenvolvimento :(</p>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p> */}
        </main>
      </div>
    </DashboardStyle>
  ) : (
    <Navigate to="/" replace></Navigate>
  );
}
