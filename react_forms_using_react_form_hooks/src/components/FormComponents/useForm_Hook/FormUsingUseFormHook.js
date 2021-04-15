import React from 'react'
import { useForm } from 'react-hook-form';

const FormUsingUseFormHook = () => {
    const { register, handleSubmit } = useForm();

    const onFormSubmit = (data)=>{
        console.log(data);
    }
    
    return (
      <div className="container mt-5 pb-5">
          <h1 className="text-center text-danger">Form Using useForm Hook</h1><br/>
        <div className="card border-0 shadow p-4 w-75 mx-auto">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="form-group">
              <label className="text-primary" htmlFor="fullname">Full Name</label>
              <input type="text" className="form-control" id="fullname" name="fullname" ref={register}/>
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
              <label className="text-primary" htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" ref={register} />
            </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="male" value="male" name="gender" ref={register} />
                <label className="form-check-label" htmlFor="male">male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="female" value="female" name="gender" ref={register} />
                <label className="form-check-label" htmlFor="female">female</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="other" value="other" name="gender" ref={register} />
                <label className="form-check-label" htmlFor="other">other</label>
            </div>

            {/* address object inside form data object stores like this */}
            <div className="form-group">
              <label className="text-primary" htmlFor="housenumber">House number</label>
              <input type="text" className="form-control" id="housenumber" name="address.housenumber" ref={register}/>
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="street">Street</label>
              <input type="text" className="form-control" id="street" name="address.street" ref={register}/>
            </div>

            {/* Lat Lng array inside form data object stores like this */}
            <div className="form-group">
              <label className="text-primary" htmlFor="lat">Location Latitude</label>
              <input type="number" className="form-control" id="lat" name="locationLatLng[0]" ref={register}/>
            </div>
            <div className="form-group">
              <label className="text-primary" htmlFor="lng">Location Longitude</label>
              <input type="number" className="form-control" id="lng" name="locationLatLng[1]" ref={register}/>
            </div>

            <select className="custom-select mt-2" name="city" ref={register}>
                <option value="">Select your city</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
            </select>

            <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" id="terms" name="terms_and_conditions" ref={register}/>
                <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
            </div>

            <div className="mt-3">
                <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default FormUsingUseFormHook;
