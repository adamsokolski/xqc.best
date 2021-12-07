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

    const column = this.state.columns[source.droppableId];
    const newCotestantIds = Array.from(column.contestantsIds);
    newCotestantIds.splice(source.index, 1);
    newCotestantIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
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
            <Column key={column.id} column={column} contestants={contestants} />
          );
        })}
      </DragDropContext>
    );
  }
}
