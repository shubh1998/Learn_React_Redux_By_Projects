import { useContext, useEffect } from 'react';
import './css/style.css';
import TodoAppContext from "../context/TodoAppContext";

// IndividualTask Component
const IndividualTask = (props)=>{
    const { dispatchTasks } = useContext(TodoAppContext);
 
    //-------delete individual task-------
    const deleteTask = (deletedTask)=>{
        dispatchTasks({ type: "DELETE_TASK", task: deletedTask });
    }


    // passing [] because now it is mounted once at a time when a component mounted
    // When we return a function from useEffect that is called as Clearing Effect and 
    //"it Behavious Same as componentWillUnmount() function".
    useEffect(()=>{
        console.log("Setting up effect !");

        return(()=>{
            console.log("Clearing up effect !")
        })
    }, [])
   
    return (
        <div className="container">
            <ol className="list-group col-lg-12">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                {props.individualTask}
                <button type="button" className="btn btn-danger" onClick={(e) => {deleteTask(props.individualTask)}}>Delete</button>
                </li>
            </ol>
        </div>
    );
}

export default IndividualTask;