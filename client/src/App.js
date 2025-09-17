
import './App.css';
import Landing from './pages/Landing/landing';
import Register from './pages/Authentication/register';
import Login from './pages/Authentication/login';
import TodoApp from './TodoApp';
import { Routes, Route } from 'react-router-dom'; 


function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
   
  );
}



export default App;


