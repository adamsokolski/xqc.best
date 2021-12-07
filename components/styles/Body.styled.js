import styled from "styled-components";

export const Body = styled.div`
  margin: 0;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  background-color: #333;
  color: #fff;

  h2 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 2em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
