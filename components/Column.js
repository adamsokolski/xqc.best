import React, { Component } from "react";
import styled from "styled-components";
import Contestant from "./Contestant";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div``;
const Title = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 2em;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 10px 0;
  margin: 0;
`;
const ContestantsList = styled.div`
  overflow: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} direction="horizontal">
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
