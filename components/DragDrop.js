import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import confetti from "canvas-confetti";

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
  useEffect(() => {
    confetti.reset();
    if (state.columns["column-start"].contestantsIds.length === 0) {
      var duration = 3 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            zIndex: 1000,
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            zIndex: 1000,
          })
        );
      }, 250);
    }
  }, [state]);

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
