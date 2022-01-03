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
  background-color: ${(props) =>
    props.droppableId !== "column-start" ? "" : "rgba(41, 41, 41, 0.7)"};

  border-radius: ${(props) =>
    props.droppableId !== "column-start"
      ? "50% 4px 50% 50%"
      : "50% 50% 4px 4px;"};

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    background-color: rgba(41, 41, 41, 0.7);
    border-radius: 50% 50% 4px 4px;
  }

  p {
    vertical-align: middle;
    right: ${(props) => (props.name === "seasons" ? "-80px" : "-60px")};

    z-index: 10;
    margin: 0;
    position: ${(props) =>
      props.droppableId !== "column-start" ? "absolute" : "static"};
    background-color: ${(props) =>
      props.droppableId !== "column-start" ? "rgba(41, 41, 41, 0.7)" : ""};
    border-radius: 4px;
    padding: ${(props) =>
      props.droppableId !== "column-start" ? "5px 5px 5px 5px" : ""};
    width: ${(props) => (props.name === "seasons" ? "105%" : "100%")};
    text-align: ${(props) =>
      props.droppableId !== "column-start" ? "right" : "center"};

    @media (max-width: 900px) {
      font-size: 0.9em;
      position: static;
      background-color: transparent;
      text-align: center;
      padding: 0;
    }
  }
`;

export default class Contestant extends Component {
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
            name={this.props.name}
          >
            <ImageContainer>
              <Image
                src={this.props.contestant.img}
                height="140px"
                width="140px"
                alt={`${this.props.contestant.name}`}
                placeholder="blur"
                blurDataURL="/images/10px2.png"
              />
            </ImageContainer>
            <p>{this.props.contestant.name}</p>
          </ContestantContainer>
        )}
      </Draggable>
    );
  }
}
