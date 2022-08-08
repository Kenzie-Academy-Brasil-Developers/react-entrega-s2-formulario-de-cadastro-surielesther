import styled from "styled-components";

const CadastroStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

  div {
    background-color: #000000;
    height: 140vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: "Inter", sans-serif;
  }

  header {
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  h3 {
    color: #ff577f;
    margin-left: 10px;
  }
  button {
    background-color: #212529;
    border-radius: 4px;
    color: white;
    border: none;
    margin-right: 10px;
    height: 5vh;
    width: 30vw;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;
  }

  .subtitle {
    color: #868e96;
    font-size: 12px;
    font-weight: 400;
  }

  form {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #212529;
    width: 90vw;
    height: 120vh;
    margin-top: 20px;
    border-radius: 4px;
  }

  label {
    margin: 10px;
    color: #f8f9fa;
    font-size: 12px;
    width: 90%;
  }

  input,
  select {
    width: 90%;
    background-color: #343b41;
    border: none;
    height: 6.5vh;
    border-radius: 4px;
    color: white;
  }

  option,
  select {
    color: #868e96;
  }

  .submit {
    margin: 10px;
    width: 90%;
    height: 6.5vh;
    border-radius: 4px;
    background-color: #59323f;
  }

  .error {
    margin: 10px;
    width: 90%;
    background-color: #212529;
    color: #e83f5b;
    height: auto;
  }

  @media (min-width: 400px) {
    header {
      max-width: 400px;
    }
    button {
      max-width: 120px;
    }
    form {
      max-width: 400px;
    }
    .submit {
      max-width: 90%;
    }
  }
`;
export default CadastroStyle;
