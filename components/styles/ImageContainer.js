import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  height: 111px;
  width: 240px;
  overflow: hidden;

  img {
    border-radius: 50%;
    object-fit: cover;
    object-position: 0 0;
  }
`;
