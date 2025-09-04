
import './App.css';
import { useState,useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { IconName } from "react-icons/io"



function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [completedTodos,setCompletedTodos] = useState([]);

  const handleAddTodo =() =>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
  };
  const handleDeleteTodo = index=>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }
   const handleComplete = index=>{
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy + hour + ':' + minutes + seconds;

    let filteredItem = {
      ...allTodos[index],
      completedOn:completedOn,
    };

    let updatedCompledrr = [...completedTodos];
    updatedCompledrr.push(filteredItem);
    setCompletedTodos(updatedCompledrr);
    handleDeleteTodo(index);
   }
  
  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'))
    if (savedTodo){
      setTodos(savedTodo);
    }

  }, []);
  return (
    <div className="App">
     <h1>My ToDos</h1>
     <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-item'>
            <label id='label'>Title  </label>
            <input type='text'value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='task title....'/>
          </div>
               <div className='todo-item'>
            <label id='label'>Description  </label>
            <input type='text' value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='Task Description...'/>
          </div>    
           <div className='todo-item'>
            <button type='button' onClick={handleAddTodo} className='primarybtn' >Add</button>
          </div>
          </div>  
          <div className='btn-area'>
              <button  className={`secondarybtn ${isCompleteScreen === false ? 'active' : ''}`}
               onClick={() => setIsCompleteScreen(false)}>ToDo</button>
              <button className={`secondarybtn ${isCompleteScreen === true ? 'active' : ''}`}
               onClick={() => setIsCompleteScreen(true)}>Completed</button>
          </div>
          <div className='todo-list'>
            {isCompleteScreen ===false && allTodos.map((item, index) => {
              return (
                <div className='todo-list-item' key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <AiOutlineDelete className='icon'  onClick={() => handleDeleteTodo(index)} title='delete?'/>
                    <BsCheckLg className='check-icon' onClick={()=>handleComplete(index)} title='complete' />
                  </div>
                </div>
              );
            })}
                   {isCompleteScreen === true && completedTodos.map((item, index) => {
              return (
                <div className='todo-list-item' key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p><small>Completed On: {item.completedOn}</small></p>
                  </div>
                  <div>
                  </div>
                </div>
              );
            })}

          </div>
     </div>
    </div>
  );
}

export default App;
