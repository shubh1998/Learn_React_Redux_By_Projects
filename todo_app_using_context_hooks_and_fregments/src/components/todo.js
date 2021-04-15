import React, { useEffect, useReducer } from "react";
import './css/style.css'
import Header from './Header';
import AddTasks from './AddTasks';
import GetRandomTask from './GetRandomTask';
import HowtoAddTask from './HowtoAddTask';
import TaskList from "./TaskList";
import TodoAppReducer from "../reducers/TodoAppReducer";
import TodoAppContext from "../context/TodoAppContext";

// Main Component contains all component and rendered by the root component
const Todo = ()=>{
    
    const [tasks, dispatchTasks] = useReducer(TodoAppReducer, [])

    //-------------useEffect hook is the replacement of lifecycle method in functional component -------------
    //This useEffect only run once at a time when a component mounts 
    // Behavious same as componentDidMount() function
    useEffect(()=>{
        const tasksData = JSON.parse(localStorage.getItem("tasks"));
        if(tasksData){
            // setTasks(tasksData);
            dispatchTasks({type: "POPULATE_TASKS", tasks: tasksData})
        }
    
    }, [])    

    //This useEffect method run only when tasks state changes
    // Behavious same as componentDidUpdate() function
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    
    return(
        <TodoAppContext.Provider value={{tasks, dispatchTasks}}>
            <div className="container">
                <Header />
                <HowtoAddTask />
                <GetRandomTask />
                <br />
                <AddTasks />
                <TaskList />
            </div>
        </TodoAppContext.Provider>
    )
}


export default Todo;