import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Task from './components/Task/Task';

function App() {
  const [tasks,setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    const initialValue = JSON.parse(saved)
    return initialValue || ''
  })
  
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Form tasks={ tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
