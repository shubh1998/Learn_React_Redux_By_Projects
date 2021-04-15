//GetRandomTask Component : it will alert the random task from task list - Arrow Functional Component
const GetRandomTask = (props) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <button className="btn btn-warning" disabled={!props.tasks.length} onClick={props.generateRandomTask}>Get Random Task</button>
            </div>
        </div>
    )
}

export default GetRandomTask;