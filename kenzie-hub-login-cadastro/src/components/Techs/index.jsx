import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { RequestsContext } from "../../contexts/RequestsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import TechsStyle from "./style";

export default function Techs() {
  const { userInfo, userTechs } = useContext(AuthContext);

  return (
    <TechsStyle>
      <div>
        <div className="techTitle">
          <p className="titles">Tecnologias</p>
          <button
            className="addTechButton"
            onClick={() => console.log(userTechs)}
          >
            <AiOutlinePlus></AiOutlinePlus>
          </button>
        </div>
        <div className="techsBackground">
          {userTechs.map((tech) => {
            return (
              <div key={tech.id} className="card">
                <p className="titles">{tech.title}</p>
                <div>
                  <p>{tech.status}</p>
                  <button className="trashButton">
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
