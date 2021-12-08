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
  text-align: center;
  color: #fff;
  font-size: 2em;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 10px 0;
  margin: 0;
`;
const ContestantsList = styled.div`
  background-color: ${(props) => props.bgc || "transparent"};
  overflow: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  min-height: 150px;
`;

const backgrounds = {
  "column-good": "rgba(105, 255, 112, 0.5)",
  "column-good-content": "#333",
  "column-content": "rgba(245, 255, 105, 0.5)",
  "column-content-bad": "#333",
  "column-bad": "rgba(255, 105, 105, 0.5)",
};

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>
          {this.props.column.title}
          {this.props.column.img && (
            <Image src={this.props.column.img} height="30" width="30" />
          )}
        </Title>
        <Droppable droppableId={this.props.column.id} direction="horizontal">
          {(provided) => (
            <ContestantsList
              bgc={backgrounds[this.props.column.id]}
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
