import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  height: 111px;
  width: 111px;
  overflow: hidden;
  transition: all 0.3s;

  img {
    border-radius: 50%;
    object-fit: cover;
    object-position: 0 0;
    transition: all 0.3s;
  }
`;
