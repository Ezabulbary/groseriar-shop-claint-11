import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/myItems";
    
    const onSubmit = data => {
        axios.post('http://localhost:5000/items', data)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Item is Added!!!');
                    navigate(from, { replace: true });
                }
            })
            .catch( errors =>{
                console.log(errors);
            });
    };

    return (
        <div className=' container d-md-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border rounded text-center p-5 m-5'>
                <legend className='my-4'>Add Items</legend>
                <input className='w-100 mb-4' placeholder='Item Name' {...register("name", { required: true })} />
                <br />
                <input className='w-100 mb-4' placeholder='Supplier Email' defaultValue={user?.email} readOnly {...register("email", { required: true })} />
                <br />
                <input className='w-100 mb-4' placeholder='Image' {...register("image", { required: true })} />
                <br />
                <textarea className='w-100 mb-4' placeholder='Description' {...register("about", { required: true })} />
                <br />
                <input className='w-100 mb-4' placeholder='Price' {...register("price", { required: true })} />
                <br />
                <input className='w-100 mb-4' placeholder='Quantity' {...register("quantity", { required: true })} />
                <br />
                <input className='w-100 mb-4' placeholder='Supplier Name' {...register("supplier_name", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className='btn btn-success' type="Submit" value="Add Services" />
            </form>
        </div>
    );
};

export default AddItems;