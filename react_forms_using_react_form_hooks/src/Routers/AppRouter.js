import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdvanceImageValidation from '../components/FormComponents/AdvanceImageValidation/AdvanceImageValidation';
import AdvanceValidationForm from '../components/FormComponents/AdvanceValidationForm/AdvanceValidationForm';
import MainUseContextForm from '../components/FormComponents/FormUsinguseFormContext/MainUseContextForm';
import Dashboard from '../components/layouts/Dashboard';
import Header from '../components/layouts/Header';
import ResetFormValues from '../components/FormComponents/ResetFormValues/ResetFormValues';
import FormUsinguseArrayFieldHook from '../components/FormComponents/useFieldArray_Hook/FormUsinguseFieldArrayHook';
import FormUsingUseFormHook from '../components/FormComponents/useForm_Hook/FormUsingUseFormHook';
import ValidationForm from '../components/FormComponents/ValidationForm/ValidationForm';

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Header />
        <br />
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/useForm" component={FormUsingUseFormHook} />
          <Route path="/resetFormValues" component={ResetFormValues} />
          <Route path="/useFieldArray" component={FormUsinguseArrayFieldHook} />
          <Route path="/validationform" component={ValidationForm} />
          <Route path="/advanceValidationForm" component={AdvanceValidationForm} />
          <Route path="/useFormContext" component={MainUseContextForm} />
          <Route path="/imageValidationForm" component={AdvanceImageValidation} />
        </Switch>
      </BrowserRouter>
    );
}

export default AppRouter
