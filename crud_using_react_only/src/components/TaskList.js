import IndividualTask from './IndividualTask'

// TaskList Component
function TaskList(props) {
    return (
        <div>
            <div className="row">
                <h3 className="todolist-heading col-lg-12">ToDo List</h3>
            </div>
            <div className="row">
                {props.tasks.length === 0 && <p className="col-lg-12">Please add tasks to get started !</p>}
                <h5 className="col-lg-6"> Task Count : {props.tasks.length}</h5>
                <span className="col-lg-6"><button className="btn btn-danger right" onClick={props.deleteAllTasks}>Remove All Tasks</button></span>
            </div>
            <br/>

            <div>
                {
                    props.tasks.map(todo => <IndividualTask key={todo} individualTask={todo} deleteTask={props.deleteIndividualtask}/>)
                }
            </div>
        </div>
    )
}

export default TaskList;