import Image from "next/image";
import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const ImageContainer = styled.div`
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

const ContestantContainer = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
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

export default class Contestant extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.contestant.id}
        index={this.props.index}
      >
        {(provided) => (
          <ContestantContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <ImageContainer>
              <Image src={this.props.contestant.img} layout="fill" />
            </ImageContainer>
            <p>{this.props.contestant.name}</p>
          </ContestantContainer>
        )}
      </Draggable>
    );
  }
}
