import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button
          className="mr-2 border p-1"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="mr-2 border p-1"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="border p-1"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Amount
        </button>
        <button
          className="border p-1"
          onClick={() => dispatch(incrementAsync(10))}
        >
          Increment Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
