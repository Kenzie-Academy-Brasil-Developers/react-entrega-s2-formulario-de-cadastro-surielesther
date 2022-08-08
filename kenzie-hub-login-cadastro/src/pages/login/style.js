import styled from "styled-components";

const LoginStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

  div {
    background-color: #000000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: "Inter", sans-serif;
  }

  header {
    text-align: center;
    width: 100vw;
    margin-top: 20px;
  }

  h3 {
    color: #ff577f;
    margin-left: 10px;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;
  }

  .text {
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
    height: 60vh;
    border-radius: 4px;
  }

  label {
    margin: 10px;
    color: #f8f9fa;
    font-size: 12px;
    width: 90%;
  }

  input {
    width: 90%;
    background-color: #343b41;
    color: white;
    /* border: none; */
    border-color: #f8f9fa;
    height: 6.5vh;
    border-radius: 4px;
  }

  button {
    margin: 10px;
    width: 90%;
    height: 6.5vh;
    color: white;
    border: none;
    border-radius: 4px;
    background-color: #ff577f;
  }

  .cadastrar {
    background-color: #868e96;
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
    form {
      max-width: 400px;
    }
    .cadastrar,
    button {
      max-width: 90%;
    }
  }
`;

export default LoginStyle;
