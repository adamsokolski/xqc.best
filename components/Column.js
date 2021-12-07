import React, { Component } from "react";
import styled from "styled-components";
import Contestant from "./Contestant";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div``;
const Title = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 2em;
`;
const ContestantsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <ContestantsList
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.contestants.map((contestant, index) => (
                <Contestant
                  key={contestant.id}
                  contestant={contestant}
                  index={index}
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
