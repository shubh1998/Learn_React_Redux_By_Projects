import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="container mt-5 pb-5">
            <div className="row">
                <h5 className="col-lg-10">1. React Form using useForm Hook (Methods - register, handleSubmit). Click on button to see example</h5>
                <Link to="/useForm" className="col-lg-2">
                    <button className="btn btn-danger">See Example</button>
                </Link>
            </div>

            <div className="row mt-5">
                <h5 className="col-lg-10">2. React Form using useForm Hook (Methods - register, handleSubmit). Click on button to see example</h5>
                <Link to="/resetFormValues" className="col-lg-2">
                    <button className="btn btn-primary">See Example</button>
                </Link>
            </div>

            <div className="row mt-5">
                <h5 className="col-lg-10">3. React Form using useFieldArray and useForm Hook (Methods - register, handleSubmit, append, remove, fields, control). Click on button to see example</h5>
                <Link to="/useFieldArray" className="col-lg-2">
                    <button className="btn btn-warning text-white">See Example</button>
                </Link>
            </div>

            <div className="row mt-5">
                <h5 className="col-lg-10">4. React Form with normal validation using useForm Hook (Methods - register, handleSubmit, errors and classnames module(used to update classes dynamically)). Click on button to see example</h5>
                <Link to="/validationform" className="col-lg-2">
                    <button className="btn btn-info text-white">See Example</button>
                </Link>
            </div>

            <div className="row mt-5">
                <h5 className="col-lg-10">5. React Form with advance validation using useForm Hook (Methods - register, handleSubmit, errors, getValues and classnames module(used to update classes dynamically)). Click on button to see example</h5>
                <Link to="/advanceValidationForm" className="col-lg-2">
                    <button className="btn btn-dark text-white">See Example</button>
                </Link>
            </div>

            <div className="row mt-5">
                <h5 className="col-lg-10">6. React Form using useForm and useFormContext Hook (Methods - register, handleSubmit, errors and classnames module(used to update classes dynamically)). Click on button to see example</h5>
                <Link to="/useFormContext" className="col-lg-2">
                    <button className="btn btn-secondary text-white">See Example</button>
                </Link>
            </div>

            <div className="row mt-5">
                <h5 className="col-lg-10">6. React Form with Image Validation using useForm Hook (Methods - register, handleSubmit, errors and classnames module(used to update classes dynamically)). Click on button to see example</h5>
                <Link to="/imageValidationForm" className="col-lg-2">
                    <button className="btn btn-success text-white">See Example</button>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard
