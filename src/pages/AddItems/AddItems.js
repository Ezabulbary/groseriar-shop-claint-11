import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };

    return (
        <div className=' container d-md-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border rounded text-center p-5 m-5'>
                <legend className='my-4'>Add Items</legend>
                <input className='mb-4' placeholder='Name' {...register("name", { required: true })} />
                <br />
                <input className='mb-4' placeholder='Supplier Name' {...register("supplierName", { required: true })} />
                <br />
                <input className='mb-4' placeholder='Price' {...register("price", { required: true })} />
                <br />
                <input className='mb-4' placeholder='Quantity' {...register("quantity", { required: true })} />
                <br />
                <textarea className='mb-4' placeholder='Description' {...register("about", { required: true })} />
                <br />
                <input className='mb-4' placeholder='Image' {...register("img", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="Submit" value="Add Services" />
            </form>
        </div>
    );
};

export default AddItems;