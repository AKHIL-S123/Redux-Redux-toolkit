import classes from "./Counter.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show);

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

// class  Counter extends Component{

//  toggleCounterHandler(){

//  }
//  incrementHandler(){
//   this.props.increment()
//  }
//  decrementHandler(){
//   this.props.decrement()
//  }

//  render(){
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//       <button onClick={this.incrementHandler.bind(this)}>increment</button>
//       <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//       </div>

//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// const mapStateToProps = state =>{
//   return {
//     counter: state.counter
//   }

// }
// const mapDispatchToProps = dispatch =>{
// return  {
//   increment : () => dispatch({type:'increment'})
//   decrement : () => dispatch({type:'decrement'})
// }
// }
// export default connect(mapStateToProps,)(mapDispatchToPropsCounter)
