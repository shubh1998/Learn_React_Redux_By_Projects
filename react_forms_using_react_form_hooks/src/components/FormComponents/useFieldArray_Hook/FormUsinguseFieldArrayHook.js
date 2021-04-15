import React, { Fragment } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

const FormUsinguseArrayFieldHook = () => {
    const {register, handleSubmit, control} = useForm();
    const {fields, append, remove} = useFieldArray({
      control,
      name: "contacts"
    })

    const onFormSubmit = (data)=>{
      console.log(data);
    }

    return (
        <div className="container mt-5">
          <h1 className="text-center text-danger">Form Using useForm and useFiledArray Hook</h1><br/>
        <div className="card border-0 shadow p-4 w-50 mx-auto">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="form-group">
              <label className="text-primary" htmlFor="fullname">Full Name</label>
              <input type="text" className="form-control" id="fullname" name="fullname" ref={register}/>
            </div>

            {
              fields.map((item, index)=>(
                <Fragment>
                  <div className="row" key={item.id}>
                    <div className="col-lg-10">
                      <div className="form-group">
                        <label className="text-primary">Email address</label>
                        <input type="email" className="form-control" id="email" name={`contacts[${index}].email`} ref={register} defaultValue={item.email} />
                      </div>
                      <div className="form-group">
                        <label className="text-primary">Phone Number</label>
                        <input type="text" className="form-control" id="phone" name={`contacts[${index}].phone`} ref={register} defaultValue={item.phone} />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <button type="button" className="mt-4 btn btn-danger float-right" onClick={()=>{remove(index)}} >Remove</button>
                    </div>
                  </div>
                </Fragment>
              ))
            }
            <button type="button" className="btn btn-success" onClick={()=>{ append({email: "", phone: ""}) }} >Add email and phone</button>
            
            <div className="mt-3">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default FormUsinguseArrayFieldHook
