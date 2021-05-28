import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";

const Counter = (props) => {
  const dispatch = useDispatch();
  // const toggleSelector = state => state.showCounter;
  const show = useSelector((state) => state.showCounter);
  const count = useSelector((state) => state.counter);
  // const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>-- COUNTER VALUE: {count} --</div>
      )}
      <button onClick={() => dispatch(counterActions.toggleCounter())}>
        Toggle Counter
      </button>
      <button
        disabled={!show}
        onClick={() => dispatch(counterActions.increment())}
      >
        INC
      </button>
      <button
        disabled={!show}
        onClick={() => dispatch(counterActions.decrement())}
      >
        DEC
      </button>
      <button
        disabled={!show}
        onClick={() => dispatch(counterActions.increase(10))}
      >
        ADD 10
      </button>
    </main>
  );
};

// const mapStateToProps = (state) => {
//   console.log("[Counter] mapState runs some expensive works");
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   console.log("[Counter] mapDispatch RUNS");
//   return {
//     increaseCounter: () => dispatch({ type: "INCREMENT" }),
//     decreaseCounter: () => dispatch({ type: "DECREMENT" })
//   };
// };

export default Counter;
