import React from 'react'
import { useSelector } from 'react-redux';
function count() {
    const counter=useSelector(state=>state);

  return (
    <div>
        {counter}
    </div>
  )
}

export default count