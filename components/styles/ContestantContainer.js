import styled from "styled-components";

export const ContestantContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50% 50% 4px 4px;
  transition: 0.3s ease-in-out;

  p {
    margin: 5px;
    padding: 0;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
  }
`;
