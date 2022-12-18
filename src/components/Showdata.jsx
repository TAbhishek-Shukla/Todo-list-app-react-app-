import React from 'react'
import '../App.css';
function Showdata(props) {
  return (
   <> <div className='todolist'>
        <button onClick={()=>{
            props.onSelect(props.id);
         }}>X</button>
        <li>{props.task}</li>
        </div>
        </>)
}

export default Showdata