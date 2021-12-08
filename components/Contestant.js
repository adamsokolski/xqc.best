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
    border-radius: 50%;
    object-fit: cover;
    object-position: 0 0;
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
  background-color: ${(props) =>
    props.droppableId !== "column-start" ? "" : "rgba(41, 41, 41, 0.7)"};

  border-radius: ${(props) =>
    props.droppableId !== "column-start"
      ? "50% 4px 50% 50%"
      : "50% 50% 4px 4px;"};
  box-shadow: ${(props) =>
    props.isDragging ? "0 3px 10px rgb(0 0 0 / 0.2)" : "0"};

  p {
    vertical-align: middle;
    right: -60px;
    z-index: 10;
    margin: 0;
    position: ${(props) =>
      props.droppableId !== "column-start" ? "absolute" : "static"};
    background-color: ${(props) =>
      props.droppableId !== "column-start" ? "rgba(41, 41, 41, 0.7)" : ""};
    border-radius: 4px;
    padding: ${(props) =>
      props.droppableId !== "column-start" ? "5px 5px 5px 5px" : ""};
    width: 100%;
    text-align: ${(props) =>
      props.droppableId !== "column-start" ? "right" : "center"};
  }
`;

export default class Contestant extends Component {
  render() {
    console.log(this.props.droppableId);
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
                alt={`${this.props.contestant.name} from MasterChef`}
              />
            </ImageContainer>
            <p>{this.props.contestant.name}</p>
          </ContestantContainer>
        )}
      </Draggable>
    );
  }
}
