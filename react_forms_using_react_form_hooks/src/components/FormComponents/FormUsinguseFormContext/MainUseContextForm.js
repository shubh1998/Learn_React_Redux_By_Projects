import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import BasicForm from './BasicForm'
import ContactForm from './ContactForm'

const MainUseContextForm = () => {
    const methods = useForm();

    const onFormSubmit = (data)=>{
        console.log(data);
    }

    return (
        <FormProvider {...methods} >
            <div className="container mt-5 pb-5">
                <div className="p-4 w-75 mx-auto">
                    <h1 className="text-center text-danger">Form Using useContextForm Hook</h1><br/>
                    <form onSubmit={methods.handleSubmit(onFormSubmit)}>
                        <BasicForm />
                        <ContactForm />
                        <button className="mt-4 btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </FormProvider>
    )
}

export default MainUseContextForm
