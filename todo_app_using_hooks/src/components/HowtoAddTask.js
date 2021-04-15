//HowtoAddTask Component tell how to add tasks
const HowtoAddTask = ()=>{
    const helptoAddTask = ()=>{
        alert("Just fill the form and click on submit to add todo. and todo will reflect on the below list.")
    }   

    
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <button className="btn btn-info" onClick={helptoAddTask}>
              How to add a task?
            </button>
          </div>
        </div>
        <br/>
      </div>
    );
}

export default HowtoAddTask;