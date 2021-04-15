import { Component } from "react";
import './css/style.css'

// IndividualTask Component
class IndividualTask extends Component {
    render(){
         return (
            <div className="container">
                <ol className="list-group col-lg-12">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    {this.props.individualTask}
                    <button type="button" className="btn btn-danger" onClick={(e) => {this.props.deleteTask(this.props.individualTask)}}>Delete</button>
                    </li>
                </ol>
            </div>
        );
    }
}

export default IndividualTask;