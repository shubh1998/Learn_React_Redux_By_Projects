import React from 'react';
import { useForm } from "react-hook-form";
//To add classes dynamically install and use package - "classnames"
import classNames from "classnames";

const AdvanceValidationForm = () => {
    // Validate om during onChange time
    const { register, handleSubmit, errors, getValues } = useForm({
        mode: "onChange"
    }); 
    // console.log(errors);
    
    const onFormSubmit = (data)=>{
        console.log(data);
    }

    return (
      <div className="container mt-5 pb-5">
        <h1 className="text-center text-danger">
          Form With Advance Validation
        </h1>
        <br />
        <div className=" p-4 w-75 mx-auto">
          <div className="card border-0 shadow card-header">
            <h4 className="text-center">Reset Password Form</h4>
          </div>
          <div className="card border-0 shadow card-body">
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className="form-group">
                <label className="text-primary">New Password</label>
                <input
                  type="password"
                  className={classNames("form-control", {
                    "is-invalid": errors.new_password,
                  })}
                  id="new_password"
                  name="new_password"
                  placeholder="Enter Your New Password"
                  ref={register({
                    required: "New Password is required !",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
                    },
                  })}
                />
                {errors.new_password && (
                  <div className="invalid-feedback">
                    {errors.new_password.message}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="text-primary">Confirm Password</label>
                <input
                  type="password"
                  className={classNames("form-control", {
                    "is-invalid": errors.confirm_password,
                  })}
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Enter Your Confirm Password"
                  ref={register({
                    required: "Confirm Password is required !",
                    validate: (value) =>
                        value === getValues("new_password") ||
                        "Confirm password doesn't match with New Password !",
                  })}
                />
                {errors.confirm_password && (
                  <div className="invalid-feedback">
                    {errors.confirm_password.message}
                  </div>
                )}
              </div>

              <div className="mt-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default AdvanceValidationForm
