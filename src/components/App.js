import React from "react";
import './../styles/App.css';
import { useDispatch } from "react-redux";
import Count from "./count"
const App = () => {
  const dispatch=useDispatch();
  return (
    <div>
      <h1>
      <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
      <div id="counter-value"><Count/></div>
       <button onClick={()=>dispatch({type:"Increment"})}>+</button>
      </h1>
    </div>
  )
};

export default App
