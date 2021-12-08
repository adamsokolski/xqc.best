import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

export default function DragDrop({ season }) {
  const [state, setState] = useState(season);

  const onDragEnd = (result) => {
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

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newCotestantIds = Array.from(start.contestantsIds);

      newCotestantIds.splice(source.index, 1);
      newCotestantIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        contestantsIds: newCotestantIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
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
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={(r) => onDragEnd(r)}>
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const contestants = column.contestantsIds.map(
          (id) => state.contestants[id]
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
