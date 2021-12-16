import Image from "next/image";
import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const ImageContainer = styled.div`
  z-index: 11;
  position: relative;
  height: 140px;
  width: 140px;
  overflow: hidden;

  img {
    border-radius: ${(props) =>
      props.droppableId !== "column-start" ? "4px" : "50%"};
    object-fit: cover;
    object-position: 50% 0;
  }

  @media (max-width: 900px) {
    height: 65px;
    width: 65px;
  }
`;

const ContestantContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  position: relative;
  display: flex;
  align-items: ${(props) =>
    props.droppableId !== "column-start" ? "flex-start" : "center"};
  justify-content: center;
  flex-direction: ${(props) =>
    props.droppableId !== "column-start" ? "row" : "column"};
  margin: 2px;
  background-color: rgba(41, 41, 41, 0.7);

  border-radius: 4px;

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    background-color: rgba(41, 41, 41, 0.7);
  }

  p {
    width: ${(props) =>
      props.droppableId !== "column-start" ? "100px" : "140px"};
    height: ${(props) => (props.droppableId !== "column-start" ? "140px" : "")};
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
    z-index: 10;
    margin: 0;

    border-radius: 4px;
    padding: ${(props) =>
      props.droppableId !== "column-start" ? "5px 5px 5px 5px" : "5px 0"};

    @media (max-width: 900px) {
      height: auto;
      width: ${(props) =>
        props.droppableId !== "column-start" ? "100%" : "140px%"};
      font-size: 0.9em;
      position: static;
      background-color: transparent;
      text-align: center;
      padding: 0;
    }
  }
`;

export default class Challenge extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.contestant.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <ContestantContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            droppableId={this.props.droppableId}
          >
            <ImageContainer>
              <Image
                src={this.props.contestant.img}
                layout="fill"
                alt={`${this.props.contestant.name}`}
              />
            </ImageContainer>
            <p>{this.props.contestant.name}</p>
          </ContestantContainer>
        )}
      </Draggable>
    );
  }
}
