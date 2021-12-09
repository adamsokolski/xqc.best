import styled from "styled-components";
import Logo from "./Logo";

const Container = styled.header`
  background-color: #f06836;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
  color: white;
  span {
    vertical-align: middle;
    font-size: 100px;
    font-weight: 100;
    margin: 10px;
  }
`;

const Title = styled.h1`
  margin: 20px 0 0 0;
  padding: 0;
  text-align: center;
`;

const UnderTitle = styled.h2`
  text-align: center;
`;

export default function HomeHeader({ headerImg }) {
  return (
    <Container>
      <Logo headerImg={headerImg} />
      <Title>xqc.best</Title>
      <UnderTitle>MasterChef tier list for our reactor</UnderTitle>
    </Container>
  );
}
