import React from "react";
import './../styles/App.css';
import { useDispatch } from "react-redux";
import Count from "./count"
const App = () => {
  const dispatch=useDispatch();
  return (
    <div>
       <h1 onClick={()=>dispatch({type:"Decrement"})}>-</h1>
       <h1><Count/></h1>
       <h1 onClick={()=>dispatch({type:"Increment"})}>+</h1>
    </div>
  )
};

export default App
