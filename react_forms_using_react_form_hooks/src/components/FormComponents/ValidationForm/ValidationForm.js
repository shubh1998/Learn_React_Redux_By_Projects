import React from 'react'
import { useForm } from 'react-hook-form'
//To add classes dynamically install and use package - "classnames"
import classNames from 'classnames';

const ValidationForm = () => {
    // Validate on during submit time
    // const {register, handleSubmit, errors} = useForm();

    // Validate om during onChange time
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange"
    }); 
    // console.log(errors);
    
    const onFormSubmit = (data)=>{
        console.log(data);
    }

    return (
      <div className="container mt-5 pb-5">
        <h1 className="text-center text-danger">Form With Validation</h1>
        <br />
        <div className="card border-0 shadow p-4 w-75 mx-auto">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            
            <div className="form-group">
              <label className="text-primary" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.fullname,
                })}
                id="fullname"
                name="fullname"
                placeholder="Enter Your Full Name"
                ref={register({
                  required: "Full Name is required !",
                  minLength: {
                    value: 4,
                    message: "Minimum 4 characters are required !",
                  },
                  maxLength: {
                    value: 20,
                    message: "Full Name maximum limit exceed !",
                  },
                })}
              />
              {errors.fullname && (<div className="invalid-feedback">{errors.fullname.message}</div>)}
            </div>
           
            <div className="form-group">
              <label className="text-primary" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                className={classNames("form-control", {"is-invalid": errors.email})}
                id="email"
                name="email"
                placeholder="Enter Your Email"
                ref={register({
                  required: "Email is required !",
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter valid email !",
                  },
                })}
              />
              {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
            </div>
            
            <div className="form-group">
              <label className="text-primary" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                className={classNames("form-control", {"is-invalid": errors.phone})}
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                ref={register({
                  required: "Phone Number is required !",
                  pattern:{
                      value: /^\d{10}$/,
                      message: "Phone should contain 10 digits"
                  }
                })}
              />
              {errors.phone && (<div className="invalid-feedback">{errors.phone.message}</div>)}
            </div>
            
            <div className="form-group">
              <label className="text-primary" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className={classNames("form-control", {"is-invalid": errors.password})}
                id="password"
                name="password"
                placeholder="Enter Your Password"
                ref={register({
                  required: "Password is required !",
                  pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                  }
                })}
              />
              {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
            </div>

            <div className="form-group">
              <label className="text-primary" htmlFor="option">
                City
              </label>
              <select
                className={classNames("custom-select", {"is-invalid": errors.city})}
                name="city"
                ref={register({
                  required: "City is required !",
                })}
              >
                <option value="">Select your city</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
              {errors.city && (<div className="invalid-feedback">{errors.city.message}</div>)}
            </div>

            <div className="form-group">
              <label className="text-primary" htmlFor="option">
                Gender
              </label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  ref={register({
                    required: "Gender is required !",
                  })}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  ref={register({
                    required: "Gender is required !",
                  })}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  ref={register({
                    required: "Gender is required !",
                  })}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
              {errors.gender && (<small className="form-text text-danger">{errors.gender.message}</small>)}
            </div>

            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                name="terms_and_conditions"
                ref={register({
                  required: "Terms & Conditions is required !",
                })}
              />
              <label className="form-check-label" htmlFor="terms">
                I agree all terms and conditons
              </label>
              {errors.terms_and_conditions && (<small className="form-text text-danger">{errors.terms_and_conditions.message}</small>)}
            </div>

            <div className="mt-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default ValidationForm
