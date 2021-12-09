import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background-color: #282828;

  @media (max-width: 900px) {
    padding: 2px;
    flex-direction: column;
  }

  div a {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  span {
    margin: 0 20px;

    font-weight: 200;
    font-size: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    font-family: "Montserrat", sans-serif;
  }

  img {
  }
`;
