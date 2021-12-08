import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function DragDrop({ season }) {
  const [state, setState] = useState(season);
  const [cookies, setCookie] = useCookies([season.seasonName]);
  useEffect(() => {
    if (cookies[season.seasonName] === undefined) {
      setCookie(season.seasonName, season.columns, {
        maxAge: 157784630,
        secure: true,
        sameSite: "none",
      });
      setState(season);
    } else {
      /*     const newState = {
        ...season,
        columns: cookies[season.seasonName],
      }; */
      const newState = { ...season };
      newState.columns = cookies[season.seasonName];
      setState(newState);
    }
  }, []);

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
      const newColumns = {
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);

      // cookies
      setCookie(season.seasonName, newColumns.columns, {
        maxAge: 157784630,
        secure: true,
        sameSite: "none",
      });
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
    const newColumns = {
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);

    // cookies
    setCookie(season.seasonName, newColumns.columns, {
      maxAge: 157784630,
      secure: true,
      sameSite: "none",
    });
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
