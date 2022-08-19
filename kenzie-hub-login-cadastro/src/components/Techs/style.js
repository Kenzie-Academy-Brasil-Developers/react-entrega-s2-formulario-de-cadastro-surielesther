import styled from "styled-components";

const TechsStyle = styled.div`
  .titles {
    font-weight: 600;
    font-size: 14px;
    color: white;
    margin-left: 5px;
  }

  .techs {
    font-weight: 600;
    font-size: 14px;
    color: white;
    padding: 0%;
  }

  .techTitle {
    display: flex;
    justify-content: space-between;
  }

  .addTechButton {
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0%;
  }

  .techsBackground {
    background-color: #212529;
    padding: 10px;
    border-radius: 4px;
  }

  .card {
    background-color: #121214;
    margin: 5px;
    display: flex;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
  }

  .card div {
    display: flex;
    align-items: center;
  }

  .trashButton {
    background: none;
  }
`;

export default TechsStyle;
