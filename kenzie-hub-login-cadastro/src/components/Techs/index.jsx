import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";

import { RequestsContext } from "../../contexts/RequestsContext";
import { AuthContext } from "../../contexts/AuthContext";
import TechsStyle from "./style";
import TechModal from "../Modal";

export default function Techs() {
  const { userInfo, userTechs } = useContext(AuthContext);
  const { deletingTech } = useContext(RequestsContext);

  return (
    <TechsStyle>
      <div>
        <div className="techTitle">
          <p className="titles">Tecnologias</p>
          <TechModal></TechModal>
        </div>
        <div className="techsBackground">
          {userTechs.map((tech) => {
            return (
              <div key={tech.id} className="card">
                <p className="titles">{tech.title}</p>
                <div>
                  <p>{tech.status}</p>
                  <button
                    className="trashButton"
                    onClick={() => deletingTech(tech.id)}
                  >
                    <BsFillTrashFill></BsFillTrashFill>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TechsStyle>
  );
}
