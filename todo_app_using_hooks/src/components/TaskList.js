import IndividualTask from './IndividualTask'

// TaskList Component
const TaskList = (props)=>{
    return (
        <div>
            <div className="row">
                <h3 className="todolist-heading col-lg-12">ToDo List</h3>
            </div>
            <div className="row">
                {props.todolist.length === 0 && <p className="col-lg-12">Please add tasks to get started !</p>}
                <h5 className="col-lg-6"> Task Count : {props.todolist.length}</h5>
                <span className="col-lg-6"><button className="btn btn-danger right" onClick={props.deleteAllTasks}>Remove All Tasks</button></span>
            </div>
            <br/>

            <div>
                {
                    props.todolist.map(todo => <IndividualTask key={todo} individualTask={todo} deleteTask={props.deleteTask}/>)
                }
            </div>
        </div>
    )
}

export default TaskList;