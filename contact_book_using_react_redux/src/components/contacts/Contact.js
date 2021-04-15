import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from "../../actions/contactActions";

const Contact = ({ contact, selectAll }) => {
    const {id, name, email, phone} = contact
    const dispatch = useDispatch();
    // const deleteIndividualContact = (id)=>{
    //     dispatch(deleteContact(id))
    // }

    return (
        <tr>
            <td>
                {/* {id} */}
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" checked={selectAll} readOnly={true}/>
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td> 
                <Avatar name={name} size="45" round={true} className="mr-2"/> 
                { name }
            </td>
            <td>{ phone }</td>
            <td>{ email }</td>
            <td>
                <Link to={`/edit-contact/${id}`}>
                    <span className="material-icons mr-2">edit</span>
                </Link>

                <Link to="#" onClick={(e)=>{ dispatch(deleteContact(id)) }}>
                    <span className="material-icons">delete</span>
                </Link>
            </td>
        </tr>
    )
}

export default Contact;
