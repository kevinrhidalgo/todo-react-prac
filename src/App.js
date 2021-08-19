import React, {useState} from 'react'
import './App.css';
import Header from "./components/Header"
import data from "./data.json"
import toDoList from "./components/ToDoList"

function App() {
  const [toDoList, setToDoList]=useState(data);
  return (
    <div className="App">
     <Header/>
     <toDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
