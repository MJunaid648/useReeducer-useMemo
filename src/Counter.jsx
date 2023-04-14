import React, { useMemo, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedCount = useMemo(() => {
    return state.count % 2 === 0 ? "Even" : "Odd";
  }, [state.count]);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h3>Count is {memoizedCount}</h3>
      <button onClick={() => dispatch({ type: "increment" })}> + </button>
      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
    </div>
  );
}
