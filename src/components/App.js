import React from "react";
import './../styles/App.css';
import { useDispatch } from "react-redux";
import Count from "./count"
const App = () => {
  const dispatch=useDispatch();
  return (
    <div>
       <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
       <Count/>
       <button onClick={()=>dispatch({type:"Increment"})}>+</button>
    </div>
  )
};

export default App
