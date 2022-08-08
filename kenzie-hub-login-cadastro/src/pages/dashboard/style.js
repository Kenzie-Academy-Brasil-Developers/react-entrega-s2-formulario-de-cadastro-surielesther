import styled from "styled-components";

const DashboardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

  .body {
    background-color: #000000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: "Inter", sans-serif;
  }

  .line {
    height: 1px;
    background-color: #212529;
    width: 100vw;
  }

  .navBar {
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: #ff577f;
    margin-left: 10px;
  }

  .title {
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;
  }

  p {
    color: #868e96;
    font-weight: 40;
    font-size: 12px;
    padding-left: 20px;
  }

  button {
    margin: 10px;
    width: 50px;
    height: 5.5vh;
    color: white;
    border: none;
    border-radius: 4px;
    background-color: #212529;
  }

  header,
  .navBar,
  main {
    width: 100vw;
  }

  @media (min-width: 560px) {
    header {
      display: flex;
      justify-content: space-between;
    }

    header,
    .navBar,
    main {
      width: 60vw;
      padding-left: 20vw;
      padding-right: 20vw;
    }
  }
`;

export default DashboardStyle;
