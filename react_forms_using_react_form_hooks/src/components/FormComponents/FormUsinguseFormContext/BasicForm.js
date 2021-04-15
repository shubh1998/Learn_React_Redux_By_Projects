import React, { Fragment } from 'react'
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

const BasicForm = () => {
    const { register, errors } = useFormContext();

    return (
          <Fragment>
            <div className="card border-0 shadow card-header">
                <h4>Basic Form</h4>
            </div>
            <div className="card border-0 shadow card-body">
                    <div className={classNames("form-group", {"is-invaild": errors.firstname})}>
                        <label className="text-primary" htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" name="firstname" ref={register({
                            required: "First Name is required !"
                        })}/>
                        {errors.firstname && <small className="form-text text-danger">{errors.firstname.message}</small>}
                    </div>
                    <div className={classNames("form-group", {"is-invaild": errors.lastname})}>
                        <label className="text-primary" htmlFor="lastname">Last Name</label>
                        <input type="lastname" className="form-control" id="lastname" name="lastname" ref={register({
                            required: "Last Name is required !"
                        })} />
                        {errors.lastname && <small className="form-text text-danger">{errors.lastname.message}</small>}
                    </div>

                    <div>
                        <label className="text-primary">Gender</label> <br/>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="male" value="male" name="gender" ref={register({
                                required: "Gender is required !"
                            })} />
                            <label className="form-check-label" htmlFor="male">male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="female" value="female" name="gender" ref={register({
                                required: "Gender is required !"
                            })} />
                            <label className="form-check-label" htmlFor="female">female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="other" value="other" name="gender" ref={register({
                                required: "Gender is required !"
                            })} />
                            <label className="form-check-label" htmlFor="other">other</label>
                        </div>
                        {errors.gender && <small className="form-text text-danger">{errors.gender.message}</small>}
                    </div>
            </div>
          </Fragment>
    )
}

export default BasicForm
