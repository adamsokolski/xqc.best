import styled from "styled-components";

export const Body = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #fff;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
