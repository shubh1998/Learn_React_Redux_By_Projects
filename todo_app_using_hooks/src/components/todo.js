import React, { useEffect, useReducer, useState } from "react";
import './css/style.css'
import Header from './Header';
import AddTasks from './AddTasks';
import GetRandomTask from './GetRandomTask';
import HowtoAddTask from './HowtoAddTask';
import TaskList from "./TaskList";
import TodoAppReducer from "./reducers/TodoAppReducer";

// //TodoAppReducer contains a logic when state mgmt become complex by using useState 
// //Behind the scene useState uses useReducer to manage state and its operations with actions 
// const TodoAppReducer = (state, action)=>{
//     switch(action.type){
//         case 'POPULATE_TASKS':
//             return action.tasks;

//         case 'ADD_TASK':
//             return [...state, action.task];

//         case 'DELETE_TASK':
//             return state.filter(result => result !== action.task);

//         case 'DELETE_ALL_TASK':
//             return []

//         default:
//             return state;
//     }
// }


// Main Component contains all component and rendered by the root component
const Todo = ()=>{
    // const tasksData = JSON.parse(localStorage.getItem("tasks"));
    // const [tasks, setTasks] = useState(tasksData || []);

    //useState hook is used to set state individually by which state mgmt becomes easy
    // const [tasks, setTasks] = useState([]); 

    const [tasks, dispatchTasks] = useReducer(TodoAppReducer, [])
    
    const subtitle = "Put your tasks in the hands of a computer !!";
    const title = "Let's create todo !";

    //-------create task----------------
    const createTodo = (task)=>{
        if(task === ''){
            return "Please enter the task !"
        } else if (tasks.indexOf(task) !== -1) {
            return "Task already exist !"
        }

        // setTasks([...tasks, task])
        dispatchTasks({type: "ADD_TASK", task: task})
    }

    //-------delete all tasks------------
    const deleteAllTasks = ()=>{
        // setTasks([])
        dispatchTasks({ type: "DELETE_ALL_TASK" });
    }

    //-------delete individual task-------
    const deleteTask = (deletedTask)=>{
        // setTasks(tasks.filter((result) => result !== deletedTask))
        dispatchTasks({ type: "DELETE_TASK", task: deletedTask });
    }

    //-------generate Random Task-----------
    const generateRandomTask = ()=>{
        const randomNum = Math.floor(Math.random() * tasks.length);
        const taskRandom = tasks[randomNum];
        alert(taskRandom);
    }


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
        <div className="container">
            <Header title={title} subtitle={subtitle} />
            <HowtoAddTask />
            <GetRandomTask generateRandomTask={generateRandomTask} tasks={tasks}/>
            <br />
            <AddTasks createTodo={createTodo}/>
            <TaskList todolist={tasks} deleteAllTasks={deleteAllTasks} deleteTask={deleteTask}/>
        </div>
    )
}


export default Todo;