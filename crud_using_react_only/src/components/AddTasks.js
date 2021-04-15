import { Component } from "react";

// AddTask Component
class AddTasks extends Component {
    state = {
        error: undefined
    }

    // constructor(props){
    //     super(props)
    //     this.formSubmit = this.formSubmit.bind(this);
    //     this.state = {
    //         error: undefined
    //     }
    // }

    formSubmit = (e)=>{
        e.preventDefault();
        const formData = e.target.elements.todotask.value.trim();
        // alert(formData)
        const errorMessage = this.props.createTaskFunction(formData);
        if(errorMessage){
            this.setState(() => { return { error: errorMessage } })
        }else{
           this.setState(() => { return { error: undefined } }) 
           e.target.elements.todotask.value = "";
        }
    }

    render(){
        return (
            <div className="row">
                <form className="form-horizontal col-lg-12" onSubmit={this.formSubmit}>
                  <div className="form-group row">
                    <label className="control-label col-lg-1">TODO : </label>
                    <div className="col-lg-11">
                      <input type="text" name="todotask" className="form-control" id="todotask" placeholder="Enter task"/>
                      {this.state.error && <p className="error-msg">{this.state.error}</p>}
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
}

export default AddTasks;