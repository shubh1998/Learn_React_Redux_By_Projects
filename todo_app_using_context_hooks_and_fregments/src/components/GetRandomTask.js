import { useContext } from "react";
import TodoAppContext from "../context/TodoAppContext";
import useMousePosition from "../hooks/useMousePosition";

//GetRandomTask Component : it will alert the random task from task list - Arrow Functional Component
const GetRandomTask = () => {
    const { tasks } = useContext(TodoAppContext);
    const position = useMousePosition();

    //-------generate Random Task-----------
    const generateRandomTask = ()=>{
        const randomNum = Math.floor(Math.random() * tasks.length);
        const taskRandom = tasks[randomNum];
        alert(taskRandom);
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <button className="btn btn-warning" disabled={!tasks.length} onClick={generateRandomTask}>Get Random Task</button>
            </div>
            <div className="col-lg-12">
                <h3>Catch up mouse cursor values using custom hooks :</h3>
                <h5>X : {position.x}</h5>
                <h5>Y : {position.y}</h5>
            </div>
        </div>
    )
}

export default GetRandomTask;