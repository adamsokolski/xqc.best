import Image from "next/image";
import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const ImageContainer = styled.div`
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
  height: fit-content;
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50% 50% 4px 4px;

  p {
    margin: 0;
    margin-bottom: 2px;
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
