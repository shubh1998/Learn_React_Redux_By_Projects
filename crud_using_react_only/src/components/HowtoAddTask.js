import { Component } from "react";

//HowtoAddTask Component tell how to add tasks
class HowtoAddTask extends Component {
    helptoAddTask = ()=>{
        alert("Just fill the form and click on submit to add todo. and todo will reflect on the below list.")
    }   

    render() {
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <button className="btn btn-info" onClick={this.helptoAddTask}>
                  How to add a task?
                </button>
              </div>
            </div>
            <br/>
          </div>
        );
    }
}

export default HowtoAddTask;