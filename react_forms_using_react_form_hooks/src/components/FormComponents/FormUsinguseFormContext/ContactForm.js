import React, { Fragment } from 'react'
import { useFormContext } from 'react-hook-form';
import classNames from "classnames";

const ContactForm = () => {
    const { register, errors } = useFormContext();

    return (
          <Fragment>
            <div className="card border-0 shadow card-header">
                <h4>Contact Form</h4>
            </div>
            <div className="card border-0 shadow card-body">
                    <div className={classNames("form-group", {"is-invaild": errors.email})}>
                        <label className="text-primary" htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" ref={register({
                            required: "Email is fequired !",
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Please enter valid email !"
                            }
                        })}/>
                        {errors.email && <small className="form-text text-danger">{errors.email.message}</small>} 
                    </div>
                    <div className={classNames("form-group", {"is-invaild": errors.phone})}>
                        <label className="text-primary" htmlFor="phone">Phone Number</label>
                        <input type="text" className="form-control" id="phone" name="phone" ref={register({
                            required: "Phone is fequired !",
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Phone should contain 10 digits"
                            }
                        })}/>
                        {errors.phone && <small className="form-text text-danger">{errors.phone.message}</small>} 
                    </div>
            </div>
          </Fragment>
    )
}

export default ContactForm
