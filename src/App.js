
import './App.css';
import { useState } from 'react';



function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
     <h1>My ToDos</h1>
     <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-item'>
            <label id='label'>Title  </label>
            <input type='text' placeholder='task title....'/>
          </div>
               <div className='todo-item'>
            <label id='label'>Description  </label>
            <input type='text' placeholder='Task Description...'/>
          </div>    
           <div className='todo-item'>
            <button type='button' className='primarybtn' >Add</button>
          </div>
          </div>  
          <div className='btn-area'>
              <button  className={`secondarybtn ${isCompleteScreen === false ? 'active' : ''}`} onClick={() => setIsCompleteScreen(false)}>ToDo</button>
              <button className={`secondarybtn ${isCompleteScreen === true ? 'active' : ''}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
          </div>
          <div className='todo-list'>
            <div className='todo-list-item'>
              <h3>Task 1</h3>
              <p>Desription</p>
            </div>
          </div>
     </div>
    </div>
  );
}

export default App;
