import { useContext, useState } from "react";
import TodoAppContext from "../context/TodoAppContext";

// AddTask Component
const AddTasks = ()=>{
    const {tasks , dispatchTasks} = useContext(TodoAppContext);

    const [error, setError] = useState(undefined)

    const formSubmit = (e)=>{
        e.preventDefault();
        const formData = e.target.elements.todotask.value.trim();
        // alert(formData)
        if(formData === ''){
            return setError("Please enter the task !");
        } else if (tasks.indexOf(formData) !== -1) {
            return setError("Task already exist !");
        }
        dispatchTasks({type: "ADD_TASK", task: formData})
        setError(undefined);
        e.target.elements.todotask.value = "";
    }

    return (
        <div className="row">
            <form className="form-horizontal col-lg-12" onSubmit={formSubmit}>
              <div className="form-group row">
                <label className="control-label col-lg-1">TODO : </label>
                <div className="col-lg-11">
                  <input type="text" name="todotask" className="form-control" id="todotask" placeholder="Enter task"/>
                  {error && <p className="error-msg">{error}</p>}
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <button type="submit" className="btn btn-primary right">Submit</button>
                </div>
              </div>
            </form>
        </div>
    )
}

export default AddTasks;