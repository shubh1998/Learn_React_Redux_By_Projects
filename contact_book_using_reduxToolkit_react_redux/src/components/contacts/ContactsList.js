import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectAllContacts, deleteAllContacts, unSelectAllContacts} from '../../features/Contact/contactSlice';
import Contact from './Contact';

const ContactsList = () => {
    const contactlist = useSelector((state) => state.contactsStore.contacts);
    console.log(contactlist)
    const selectedContacts = useSelector((state) => state.contactsStore.selectedContacts)

    const dispatch = useDispatch();

    const [selectAll, setSelectAll] = useState(false)

    useEffect(()=>{
      if(selectAll){
         dispatch(selectAllContacts(contactlist.map(contact => contact.id)));
      }else{
        dispatch(unSelectAllContacts());
      }
    }, [selectAll])


    const clearAllContacts = ()=>{
      if(selectedContacts !== null && selectedContacts !== undefined){
        dispatch(deleteAllContacts());
      }
    }


    return (
      <div className="container py-3">
        {selectAll && <button className="btn btn-danger text-white" onClick={clearAllContacts}>Delete All Contacts</button>}
        <table className="table shadow mt-2">
          <thead className="bg-danger text-white">
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="selectAll" value={selectAll} onClick={ ()=>setSelectAll(!selectAll) }/>
                  <label className="custom-control-label" htmlFor="selectAll"></label>
                </div>
              </th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactlist.map((contact) => (
              <Contact contact={contact} key={contact.id} selectAll={selectAll} />
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ContactsList;
