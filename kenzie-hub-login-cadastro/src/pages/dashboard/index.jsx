import DashboardStyle from "./style";

export default function Dashboard({ setAutenticado, userInfo }) {
  return (
    <DashboardStyle>
      <div className="body">
        <div className="navBar">
          <h3>KenzieHub</h3>
          <button onClick={() => setAutenticado(false)}>Sair</button>
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
