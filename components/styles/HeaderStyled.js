import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;

  border-bottom: 1px solid #eaeaea;

  span {
    margin: 0 20px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 100;
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
  }

  img {
    transition: 0.3s ease-in-out;
  }
`;