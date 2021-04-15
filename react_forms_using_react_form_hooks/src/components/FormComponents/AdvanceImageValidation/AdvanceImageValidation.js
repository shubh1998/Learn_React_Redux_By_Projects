import classNames from 'classnames';
import React from 'react'
import { useForm } from 'react-hook-form';

const AdvanceImageValidation = () => {
    const { register, handleSubmit, errors } = useForm();

    const onFormSubmit = (data)=>{
        console.log(data);
    }

    return (
        <div className="container mt-5 pb-5">
            <h1 className="text-center text-danger">Image Validation Form</h1>
            <div className="card border-0 shadow p-4 w-75 mx-auto">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className={classNames("custom-file", {"is-invalid": errors.image})}>
                        <input type="file" className="custom-file-input" id="customFile" name="image" ref={register({
                            required: "Image is required !",
                            validate: async (value)=>{
                                // console.log(value)
                                //File type validation
                                const fileTypes = ["image/jpg", "image/jpeg", "image/png", "image/JPG", "image/JPEG", "image/PNG"];
                                if(!fileTypes.includes(value[0].type)){
                                    return `Please upload a valid file format (${fileTypes})`
                                }
                                // FIle size should be less than to 1 mb
                                if(value[0]?.size >= 1000000){
                                    return `File size must be less than 1 mb.`;
                                }
                            }
                        })} />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        {errors.image && <small className="text-danger form-text">{errors.image.message}</small>}
                    </div>
                    <button type="submit" className="mt-4 btn btn-primary">Submit</button>
                </form>
            </div>            
        </div>
    )
}

export default AdvanceImageValidation
