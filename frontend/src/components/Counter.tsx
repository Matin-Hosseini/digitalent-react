import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase": {
      return state + 1
    }
    case "decrease": {
      return state - 1;
    }
    default: {
      throw new Error();
    }
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="bg-red-500 text-white">
      <h2>{count}</h2>
      <button
        className="text-3xl mx-4"
        onClick={() => dispatch({ type: "increase" })}
      >
        +
      </button>
      <button
        className="text-3xl mx-4"
        onClick={() => dispatch({ type: "decrease" })}
      >
        -
      </button>
    </div>
  );
}
