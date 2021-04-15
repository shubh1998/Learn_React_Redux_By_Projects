import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactActions";
import { useHistory, useParams } from "react-router";

const EditContact = () => {
  const {id} = useParams();
  const getContactToUpdate = useSelector((state) => state.contactsStore.getContactToEdit);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatchEditContact = useDispatch();
  const historyRedirection = useHistory();

  const updateContactFormSubmit = (e) => {
    e.preventDefault();
    const formdata = {
      ...getContactToUpdate,
      name,
      phone,
      email,
    };
    dispatchEditContact(updateContact(formdata));
    historyRedirection.push("/");
  };

  //-------------Sets the data to component that we want to update----------
  useEffect(()=>{
      dispatchEditContact(getContact(id))
      if(getContactToUpdate !== null && getContactToUpdate !== undefined){
          setName(getContactToUpdate.name);
          setPhone(getContactToUpdate.phone)
          setEmail(getContactToUpdate.email);
        }
  }, [getContactToUpdate, dispatchEditContact, id])

  return (
    <div className="container py-3">
      <div className="card border-0 shadow">
        <div className="card-header bg-danger text-white">
          <h6>Update a contact</h6>
        </div>
        <div className="card-body">
          <form onSubmit={updateContactFormSubmit}>
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
              <label className="col-lg-2 col-form-label">Contact Number:</label>
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
              Update Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
