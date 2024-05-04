import classes from "./Counter.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/CounterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.show);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const inc5 = () => {
    dispatch(counterActions.inc5(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.togglecounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className="ak">
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={inc5}>Increase by 5 </button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;

