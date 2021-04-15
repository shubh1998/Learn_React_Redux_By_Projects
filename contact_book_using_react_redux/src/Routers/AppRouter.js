import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddContact from '../components/contacts/AddContact';
import ContactsList from '../components/contacts/ContactsList';
import EditContact from '../components/contacts/EditContact';
import NotFoundComponent from '../components/contacts/NotFoundComponent';
import Navbar from '../components/layouts/Navbar';
import store from "../store/store"

const AppRouter = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact={true} component={ContactsList} />
            <Route path="/add-contact" component={AddContact} />
            <Route path="/edit-contact/:id" component={EditContact} />
            <Route component={NotFoundComponent} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
}

export default AppRouter
