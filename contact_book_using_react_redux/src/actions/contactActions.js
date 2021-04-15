//actions are the functions which is responsible to take a type of action and call the reducer to perform this type of action.

//addContact Action
export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    contact,
  };
};

//deleteContact Action
export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    id,
  };
};

//getContact Action
export const getContact = (id) => {
  return {
    type: "GET_CONTACT",
    id,
  };
};

//updateContact Action
export const updateContact = (updates) => {
  return {
    type: "UPDATE_CONTACT",
    updates
  }
}

export const populateContactAction = (contacts) => {
  return {
    type: "POPULATE_CONTACTS",
    contacts,
  };
};


export const selectAllContacts = (contactIds) => {
  return {
    type: "SELECT_CONTACTS",
    contactIds,
  };
}


export const unSelectAllContacts = () => ({
  type: "UNSELECT_ALL_CONTACTS"
})


export const deleteAllContacts = () => ({
  type: "DELETE_ALL_CONTACTS"
})

