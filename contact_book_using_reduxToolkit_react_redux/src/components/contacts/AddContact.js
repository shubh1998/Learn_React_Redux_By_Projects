import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from "../../features/Contact/contactSlice";
import {v4 as uuid} from "uuid";
import { useHistory } from 'react-router';

const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const dispatchAddContact = useDispatch();
    const historyRedirection = useHistory();

    const addContactFormSubmit = (e) => {
        e.preventDefault();
        const formdata ={
            id: uuid(),
            name,
            phone, 
            email
        }
        dispatchAddContact(createContact(formdata));
        historyRedirection.push("/");
    }


    return (
      <div className="container py-3">
        <div className="card border-0 shadow">
          <div className="card-header bg-danger text-white">
            <h6>Add a contact</h6>
          </div>
          <div className="card-body">
            <form onSubmit={addContactFormSubmit}>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Name:</label>
                <input
                  type="text"
                  className="form-control col-lg-10"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value.trim())}
                  required={true}
                />
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">
                  Contact Number:
                </label>
                <input
                  type="text"
                  className="form-control col-lg-10"
                  placeholder="Enter Your Contact Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.trim())}
                  required={true}
                />
              </div>
              <div className="form-group row">
                <label className="col-lg-2 col-form-label">Email :</label>
                <input
                  type="email"
                  className="form-control col-lg-10"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  required={true}
                />
              </div>
              <button className="btn btn-primary float-right" type="submit">
                Create Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default AddContact;
