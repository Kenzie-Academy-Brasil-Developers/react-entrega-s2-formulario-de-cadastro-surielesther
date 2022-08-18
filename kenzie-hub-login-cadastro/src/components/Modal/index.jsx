import Modal from "react-modal";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { RequestsContext } from "../../contexts/RequestsContext";
import "./style.css";

export default function TechModal() {
  const formSchema = yup.object().shape({
    title: yup.string().required("O nome da tecnologia é obrigatório"),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { postingNewTech } = useContext(RequestsContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button className="addTechButton" onClick={handleOpenModal}>
        <AiOutlinePlus></AiOutlinePlus>
      </button>

      <Modal
        className="modal"
        overlayClassName="Overlay"
        afterOpen="afterOpen"
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <div className="registerTitle">
          <p>Cadastrar Tecnologia</p>
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </div>
        <form
          onSubmit={() => {
            handleSubmit(postingNewTech);
            setModalIsOpen(false);
          }}
        >
          <label>Nome</label>
          <input type="text" {...register("title")}></input>
          <div className="error">{errors.title?.message}</div>
          <label>Selecionar status</label>
          <select {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <button className="submit" type="submit">
            Cadastrar tecnologia
          </button>
        </form>
      </Modal>
    </div>
  );
}
