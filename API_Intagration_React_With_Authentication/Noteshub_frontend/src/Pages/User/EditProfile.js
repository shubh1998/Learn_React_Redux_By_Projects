import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import TextField from '../../components/ui/TextField';
import CustomButton from '../../components/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../redux-saga/redux/User/userSlice';
import { useHistory, useParams } from 'react-router';

const schema = yup.object().shape({
    name: yup.string().required("*Required"),
    email: yup.string().required("*Required").matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , 
        "Enter a valid email !"
    ),
    age: yup.number().required("*Required")
})

const EditProfile = () => {
    const getProfile = useSelector(state => state.userReducer.userProfile)
    const {id} = useParams();

    const {register, handleSubmit, errors, reset} = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const dispatch = useDispatch();
    const history = useHistory();

    const updateProfileInfoFormSubmit = (data)=>{
        data._id = id
        console.log(data);
        dispatch(updateUserProfile(data))
        history.push(`/viewprofile/${id}`)
    }
    
    useEffect(()=>{
      if(getProfile){
        reset(getProfile)
      }
    }, [reset, getProfile])


    return (
      <div className="container py-3">
        <div className="card border-0 shadow w-75 mx-auto">
          <div className="card-header">
            <h5 className="text-center">SignUp Form</h5>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit(updateProfileInfoFormSubmit)}>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Name : </label>
                <TextField
                  name="name"
                  type="text"
                  className={classNames("form-control col-lg-10", {
                    "is-invalid col-lg-10": errors.name,
                  })}
                  placeholder="Enter Your Name"
                  inputRef={register}
                />
                {errors.name && (
                  <small className="ml-17 text-danger">
                    {errors.name.message}
                  </small>
                )}
              </div>

              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Email : </label>
                <TextField
                  name="email"
                  type="email"
                  className={classNames("form-control col-lg-10", {
                    "is-invalid col-lg-10": errors.email,
                  })}
                  placeholder="Enter Your Email"
                  inputRef={register}
                />
                {errors.email && (
                  <small className="ml-17 text-danger">
                    {errors.email.message}
                  </small>
                )}
              </div>

              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Age : </label>
                <TextField
                  name="age"
                  type="number"
                  className={classNames("form-control col-lg-10", {
                    "is-invalid col-lg-10": errors.age,
                  })}
                  placeholder="Enter Your Age"
                  inputRef={register}
                />
                {errors.age && (
                  <small className="ml-17 text-danger">
                    {errors.age.message}
                  </small>
                )}
              </div>

              <CustomButton
                className="btn btn-primary float-right"
                type="submit"
                label="Submit"
              />
            </form>
          </div>
        </div>
      </div>  
    );
}

export default EditProfile
