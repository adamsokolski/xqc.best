import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
