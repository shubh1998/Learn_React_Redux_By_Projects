import IndividualTask from './IndividualTask'
import TodoAppContext from "../context/TodoAppContext";
import { useContext } from 'react';

// TaskList Component
const TaskList = (props)=>{
    const {tasks, dispatchTasks} = useContext(TodoAppContext);

    //-------delete all tasks------------
    const deleteAllTasks = ()=>{
        dispatchTasks({ type: "DELETE_ALL_TASK" });
    }


    return (
        <div>
            <div className="row">
                <h3 className="todolist-heading col-lg-12">ToDo List</h3>
            </div>
            <div className="row">
                {tasks.length === 0 && <p className="col-lg-12">Please add tasks to get started !</p>}
                <h5 className="col-lg-6"> Task Count : {tasks.length}</h5>
                <span className="col-lg-6"><button className="btn btn-danger right" onClick={deleteAllTasks}>Remove All Tasks</button></span>
            </div>
            <br/>

            <div>
                {
                    tasks.map(todo => <IndividualTask key={todo} individualTask={todo} />)
                }
            </div>
        </div>
    )
}

export default TaskList;