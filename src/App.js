import React,{useState} from 'react';
import Showdata from './components/Showdata';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

 const handlechange=(e)=>{
  setTask(e.target.value)
 }
 //create empty array and enter value init
 const addtodo=(e)=>{
  e.preventDefault();
  const newdata=task;

  setData([...data,newdata]);
 setTask("");
 }

 const delTask=(id)=>{
  console.log("deleted");
  const finaldata= data.filter((curelem,index)=>{
    return index !== id;
  })
  setData(finaldata)
  }
  return (
    <>
    <div  className='main-div'>
    <div className='center-div'>
      <br/>
      <h2>Todo List</h2>
      <div className='todo-form'>
      <input className='input-task' type="text" placeholder='add todo... ' maxLength="30" minLength="3" onChange={handlechange}
      value={task}/> 
      <button className='todo-btn' onClick={addtodo}>+</button>
      </div>
      <ol>
       {
        data.map((values,index)=>{
         return <Showdata key={index} 
          id={index}
          task={values}
          onSelect={delTask}
          />
        })
       }
      </ol>

       </div>
    </div>
    </>
  );
}

export default App;
