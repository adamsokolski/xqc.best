import React, { Component } from "react";
import styled from "styled-components";
import Contestant from "./Contestant";
import { Droppable } from "react-beautiful-dnd";
import Image from "next/image";

const Container = styled.div`
  &:first-child {
    width: 100%;
  }
  width: 20%;
`;
const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  text-align: center;
  color: #fff;
  font-size: 2em;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 10px 0;
  margin: 0;

  @media (max-width: 900px) {
    height: 30px;
    font-size: 1.5em;
    padding: 0;
  }
`;
const ContestantsList = styled.div`
  background-color: ${(props) => props.bgc || "transparent"};
  overflow: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  min-height: ${(props) => props.minHeight};
  padding: 5px;
  @media (max-width: 900px) {
    padding: 5px;
  }
`;
const ImageContainer = styled.div`
  margin: 0 5px;
  display: inline-block;
  @media (max-width: 900px) {
    display: none;
  }
`;

const backgrounds = {
  "column-good": "rgba(105, 255, 112, 0.5)",
  "column-good-content": "rgba(175, 255, 109, 0.5)",
  "column-content": "rgba(245, 255, 105, 0.5)",
  "column-content-bad": "rgb(250, 180, 105, 0.5)",
  "column-bad": "rgba(255, 105, 105, 0.5)",
};

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>
          {this.props.column.title}
          {this.props.column.img && (
            <ImageContainer>
              <Image src={this.props.column.img} height="30" width="30" />
            </ImageContainer>
          )}
          {this.props.column.imgArr &&
            this.props.column.imgArr.map((i, index) => (
              <ImageContainer key={index}>
                <Image src={i.img} height="30" width="30" />
              </ImageContainer>
            ))}
        </Title>
        <Droppable
          droppableId={this.props.column.id}
          direction={this.props.direction}
        >
          {(provided) => (
            <ContestantsList
              minHeight={this.props.minHeight}
              flexDirection={this.props.flexDirection}
              bgc={backgrounds[this.props.column.id]}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.contestants.map((contestant, index) => (
                <Contestant
                  flexDirection={this.props.flexDirection}
                  key={contestant.id}
                  contestant={contestant}
                  index={index}
                  droppableId={this.props.column.id}
                />
              ))}
              {provided.placeholder}
            </ContestantsList>
          )}
        </Droppable>
      </Container>
    );
  }
}
