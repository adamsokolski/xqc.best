import { season3 } from "../../data/season3";
import Column from "../../components/Column";
import { DragDropContext } from "react-beautiful-dnd";

import React, { Component } from "react";

export default class DragDrop extends Component {
  state = season3;
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newCotestantIds = Array.from(start.contestantsIds);

      newCotestantIds.splice(source.index, 1);
      newCotestantIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        contestantsIds: newCotestantIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startContestantsIds = Array.from(start.contestantsIds);
    startContestantsIds.splice(source.index, 1);
    const newStart = {
      ...start,
      contestantsIds: startContestantsIds,
    };

    const finishContestantsIds = Array.from(finish.contestantsIds);
    finishContestantsIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      contestantsIds: finishContestantsIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const contestants = column.contestantsIds.map(
            (id) => this.state.contestants[id]
          );
          return (
            <Column
              key={column.id}
              column={column}
              contestants={contestants}
              direction={columnId != "column-start" ? "vertical" : "horizontal"}
              flexDirection={columnId != "column-start" ? "column" : "row"}
              minHeight={columnId != "column-start" ? "200px" : "0"}
            />
          );
        })}
      </DragDropContext>
    );
  }
}
