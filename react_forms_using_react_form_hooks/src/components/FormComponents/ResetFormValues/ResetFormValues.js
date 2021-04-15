import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios";

const ResetFormValues = () => {
    const {register, reset} = useForm();

    const loadUserData = async ()=>{
        let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        console.log(response.data);
        reset(response.data)
    }

    useEffect(()=>{
        loadUserData();
    }, [])

    return (
        <div className="container mt-5 pb-5">
        <h1 className="text-center text-danger">Reset Form Values Hook When we fetch users data using useForm </h1><br/>
        <div className="card border-0 shadow p-4 w-75 mx-auto">
          <form>
              <div className="form-group">
              <label className="text-primary" htmlFor="id">Id</label>
              <input type="number" className="form-control" id="id" name="id" ref={register}/>
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" ref={register}/>
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="username">username</label>
              <input type="text" className="form-control" id="username" name="username" ref={register}/>
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" name="email" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="phone">Phone Number</label>
              <input type="text" className="form-control" id="phone" name="phone" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="address.street">Street</label>
              <input type="text" className="form-control" id="address.street" name="address.street" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="address.suite">Suite</label>
              <input type="text" className="form-control" id="address.suite" name="address.suite" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="address.city">City</label>
              <input type="text" className="form-control" id="address.city" name="address.city" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="address.zipcode">Zipcode</label>
              <input type="text" className="form-control" id="address.zipcode" name="address.zipcode" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="website">Website</label>
              <input type="text" className="form-control" id="website" name="website" ref={register} />
            </div>

            <div className="form-group">
              <label className="text-primary" htmlFor="company.name">Company name</label>
              <input type="text" className="form-control" id="company.name" name="company.name" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="company.catchPhrase">catchPhrase</label>
              <input type="text" className="form-control" id="company.catchPhrase" name="company.catchPhrase" ref={register} />
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="company.bs">bs</label>
              <input type="text" className="form-control" id="company.bs" name="company.bs" ref={register} />
            </div>
            

            <div className="mt-3">
                <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default ResetFormValues
