import DashboardStyle from "./style";
import { useHistory } from "react-router-dom";

export default function Dashboard({ userInfo }) {
  const history = useHistory();

  return (
    <DashboardStyle>
      <div className="body">
        <div className="navBar">
          <h3>KenzieHub</h3>
          <button onClick={() => history.push("/")}>Sair</button>
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
  );
}
