import styled from "styled-components";

export const FancyLinkStyled = styled.a`
  display: inline-block;
  width: auto;
  background-image: linear-gradient(90deg, #f06836 0%, #f06836 100%);
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: background-size 300ms ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-size: 100% 2px;
  }
`;
